import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/types';

@Component({
    selector: 'app-blogs',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogsComponent implements OnInit {
    selectedBlog: Blog;
    isShowMobileList = false;

    get blogs() {
        return this.blogsService.blogs;
    }

    constructor(private blogsService: BlogsService, private activatedRoute: ActivatedRoute) {}

    async ngOnInit() {
        await this.blogsService.init();

        this.activatedRoute.queryParams.subscribe((param) => {
            this.selectedBlog = this.blogsService.findBlog(param.id) || this.blogs[0];
        });
    }

    onClickList(event: Event) {
        // 親要素へのイベント伝搬を止める（モバイルメニュー用）
        event.stopImmediatePropagation();
        return false;
    }

    onClickBlog(index: number) {
        this.selectedBlog = this.blogs[index];
        this.isShowMobileList = false;
    }
}
