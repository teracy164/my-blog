import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AdminBlogService } from '../shared/blog.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/types';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
    selector: 'app-admin-blog-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class AdminBlogEditComponent implements OnInit {
    id: string;
    form: FormGroup;
    tags: string[] = [];
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    @ViewChild('textarea') textarea: ElementRef;
    @ViewChild('mdArea') mdArea: ElementRef;

    constructor(private blogService: AdminBlogService, private router: Router, private activatedRoute: ActivatedRoute) {}
    get selectedTags() {
        return this.form.get('tags') as FormArray;
    }
    get contents(): string {
        return this.form.get('contents').value || '';
    }

    get areaStyle() {
        if (this.mdArea) {
            const el = this.mdArea.nativeElement as HTMLInputElement;
            const height = window.innerHeight - el.getBoundingClientRect().top;
            return `height: ${height}px`;
        }
        return '';
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.init(param.id);
        });

        this.tags = this.blogService.getTags();
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
        this.addTag(input, input.value);
    }

    onSelectTag(input: HTMLInputElement, tag: MatAutocompleteSelectedEvent) {
        this.addTag(input, tag.option.value);
    }

    private addTag(elInput: HTMLInputElement, tag: string) {
        if (tag?.trim()) {
            this.selectedTags.push(new FormControl(tag));
            elInput.value = null;
        }
    }

    onClickRemoveTag(index: number) {
        this.selectedTags.removeAt(index);
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

    onKeydown(event: KeyboardEvent) {
        if (event.key.toLowerCase() === 'enter') {
            const el = this.textarea.nativeElement as HTMLTextAreaElement;

            // 改行が反映された後に値を更新する
            setTimeout(() => {
                // 半角スペース２つを挿入（挿入位置は改行前）
                const position = el.selectionStart - 1;
                const newContents = this.contents.slice(0, position) + '  ' + this.contents.slice(position);
                this.form.get('contents').setValue(newContents);

                // 半角スペース＋改行分だけカーソル位置をずらす
                el.selectionStart = position + 3;
                el.selectionEnd = position + 3;
            });
        }
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
