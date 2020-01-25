import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Blog } from 'src/types/blog.interface';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class BlogsListComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogsService: BlogsService) { }

  async ngOnInit() {
    this.blogs = await this.blogsService.getBlogs();
  }
}
