import { AdminBlogService } from './blog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/types';

@Component({
    selector: 'app-admin-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class AdminBlogComponent implements OnInit {
    selected: Blog;
    constructor(private router: Router, private blogService: AdminBlogService) {}

    get blogs() {
        return this.blogService.blogs;
    }

    get contents() {
        return this.selected?.contents || '';
    }

    ngOnInit() {
        this.blogService.init();
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
