import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
import { ActivatedRoute, Router } from '@angular/router';
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

    getBlogPageUrl(blog: Blog) {
        return `/blogs/${blog.id}`;
    }

    constructor(private blogsService: BlogsService, private activatedRoute: ActivatedRoute, private router: Router) {}

    async ngOnInit() {
        await this.blogsService.init();

        this.activatedRoute.params.subscribe((param) => {
            const blog = this.blogsService.findBlog(param.id) || this.blogs[0];
            if (param.id) {
                this.selectedBlog = blog;
            } else {
                // ルートアクセス時は最新のブログを表示
                this.router.navigate([this.getBlogPageUrl(blog)]);
            }
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
