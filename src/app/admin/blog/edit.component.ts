import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AdminBlogService } from './blog.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/types';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
    selector: 'app-admin-blog-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class AdminBlogEditComponent implements OnInit, AfterViewInit {
    id: string;
    form: FormGroup;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    @ViewChild('textarea') textarea: ElementRef;
    @ViewChild('mdArea') mdArea: ElementRef;

    constructor(private blogService: AdminBlogService, private router: Router, private activatedRoute: ActivatedRoute) {}
    get tags() {
        return this.form.get('tags') as FormArray;
    }
    get contents(): string {
        return this.form.get('contents').value || '';
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.init(param.id);
        });
    }

    ngAfterViewInit() {
        let cnt = 0;
        const setHeight = () => {
            const el = this.mdArea.nativeElement as HTMLDivElement;
            el.style.height = window.innerHeight - el.offsetTop + 'px';
        };
        const check = () => {
            if (this.mdArea) {
                setHeight();
                window.onresize = (event) => setHeight();
            } else {
                if (++cnt < 20) {
                    setTimeout(() => check(), 50);
                }
            }
        };
        //        check();
    }

    init(id?: string) {
        this.id = id;
        this.form = new FormGroup({
            title: new FormControl(),
            contents: new FormControl(),
            tags: new FormArray([]),
        });
        if (id) {
            const blog = this.blogService.findBlog(id);
            if (!blog) {
                this.back2List();
                return;
            }
            this.form.get('title').setValue(blog.title);
            this.form.get('contents').setValue(blog.contents);
            blog.tags.forEach((t) => (this.form.get('tags') as FormArray).push(new FormControl(t)));
        }
    }

    onClickAddTag(input: HTMLInputElement) {
        this.tags.push(new FormControl(input.value));

        input.value = null;
    }

    onClickRemoveTag(index: number) {
        this.tags.removeAt(index);
    }

    async onSelectImage(event: Event) {
        const file = (event.target as any).files[0];
        const path = await this.blogService.addImage(file);
        const url = await path.ref.getDownloadURL();
        const mdUrl = `![${path.metadata.name}](${url})`;

        const position = (this.textarea.nativeElement as HTMLTextAreaElement).selectionStart;
        const a = this.contents.substr(0, position);
        const b = this.contents.substr(position);

        const newContents = a + mdUrl + b;
        this.form.get('contents').setValue(newContents);
    }

    onClickCancel() {
        this.back2List();
    }
    private back2List() {
        this.router.navigate(['/admin/blog']);
    }
    async onClickSave() {
        const data = this.form.value as Blog;
        data.tags = data.tags.filter((t) => t.trim());
        data.created_at = new Date().toISOString();
        const result = this.id ? await this.blogService.updateBlog(this.id, data) : await this.blogService.addBlog(data);
        if (result) {
            this.back2List();
        } else {
            alert('failure');
        }
    }
}
