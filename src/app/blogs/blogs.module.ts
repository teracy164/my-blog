import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsService } from './blogs.service';
import { BlogsComponent } from './blog.component';
import { BlogsDetailComponent } from './detail/detail.component';

import { MarkdownModule } from 'ngx-markdown';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
    declarations: [BlogsComponent, BlogsDetailComponent],
    imports: [CommonModule, BlogsRoutingModule, MarkdownModule.forRoot(), FlexLayoutModule, MatIconModule, MatButtonModule],
    providers: [BlogsService],
})
export class BlogsModule {}
