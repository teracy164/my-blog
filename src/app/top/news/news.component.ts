import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs/blogs.service';
import { Blog } from 'src/types/blog.interface';

@Component({
  selector: 'app-top-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [BlogsService],
})
export class TopNewsComponent implements OnInit {
  news: Blog[];

  constructor(private blogsService: BlogsService) {}

  async ngOnInit() {
    this.news = await this.blogsService.getBlogs(10);
  }
}
