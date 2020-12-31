import { Component, Input } from '@angular/core';
import { Blog } from 'src/types';

@Component({
    selector: 'app-blogs-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class BlogsDetailComponent {
    @Input() blog: Blog;

    get contents() {
        return this.blog?.contents || '';
    }
}
