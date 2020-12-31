import { AdminBlogService } from '../shared/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/types';

@Component({
    selector: 'app-admin-blog-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class AdminBlogListComponent implements OnInit {
    selected: Blog;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private blogService: AdminBlogService) {}

    get blogs() {
        return this.blogService.blogs;
    }

    get contents() {
        return this.selected?.contents || '';
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((param) => {
            if (param.id) {
                this.selected = this.blogs.find((blog) => blog.id === param.id);
            }

            if (!this.selected && this.blogs?.length) {
                this.router.navigate(['/admin/blog/list'], { queryParams: { id: this.blogs[0].id } });
            }
        });
    }

    onClickAdd() {
        this.router.navigate(['/admin/blog/add']);
    }

    onClickEdit() {
        this.router.navigate(['/admin/blog/edit/' + this.selected.id]);
    }
    onClickBlog(index: number) {
        this.selected = this.blogs[index];
    }
}
