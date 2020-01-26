import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/types/blog.interface';

@Component({
  selector: 'app-blogs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class BlogsDetailComponent implements OnInit {
  detail: Blog;

  constructor(private blogsService: BlogsService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.detail = await this.blogsService.getBlog(id);
    }
  }

  get contents() {
    return this.detail.contents.replace(/(\\n|\<br>)/g, '\n');
  }
}
