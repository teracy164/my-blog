import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminBlogListComponent } from './list.component';
import { AdminBlogService } from '../shared/blog.service';
import { FormsModule } from '@angular/forms';
import { AdminBlogSharedModule } from '../shared/blog.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BlogsDetailModule } from 'src/app/blogs/detail/detail.module';

@NgModule({
    declarations: [AdminBlogListComponent],
    imports: [CommonModule, FormsModule, AdminBlogSharedModule, BlogsDetailModule, RouterModule, MatButtonModule],
    providers: [AdminBlogService],
    exports: [AdminBlogListComponent],
})
export class AdminBlogListModule {}
