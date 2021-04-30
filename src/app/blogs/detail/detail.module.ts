import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsDetailComponent } from './detail.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [BlogsDetailComponent],
    imports: [CommonModule, MarkdownModule.forRoot(), MatIconModule],
    exports: [BlogsDetailComponent],
})
export class BlogsDetailModule {}
