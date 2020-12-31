import { AdminBlogService } from './shared/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-blog',
    template: '<router-outlet *ngIf="!isLoading"></router-outlet>',
})
export class AdminBlogComponent implements OnInit {
    isLoading = true;
    constructor(private blogService: AdminBlogService) {}

    async ngOnInit() {
        await this.blogService.init();
        this.isLoading = false;
    }
}
