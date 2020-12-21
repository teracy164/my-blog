import { Component, Input } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/types/blog.interface';

@Component({
    selector: 'app-blogs-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class BlogsDetailComponent {
    @Input() blog: Blog;

    get contents() {
        return this.blog?.contents.replace(/(\\n|\<br>)/g, '\n') || '';
    }
}
