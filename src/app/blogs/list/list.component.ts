import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Blog } from 'src/types/blog.interface';
import { ActivatedRoute } from '@angular/router';
import { BlogsDetailComponent } from '../detail/detail.component';

@Component({
    selector: 'app-blogs-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class BlogsListComponent implements OnInit {
    selectedBlog: Blog;
    @ViewChild(BlogsDetailComponent) detailComponent: BlogsDetailComponent;

    get blogs() {
        return this.blogsService.blogs;
    }

    constructor(private blogsService: BlogsService, private activatedRoute: ActivatedRoute) {}

    async ngOnInit() {
        await this.blogsService.init();

        this.activatedRoute.queryParams.subscribe((param) => {
            this.selectedBlog = this.blogsService.findBlog(param.id || this.blogs[0]);
        });
    }

    onClickBlog(index: number) {
        this.selectedBlog = this.blogs[index];
    }
}
