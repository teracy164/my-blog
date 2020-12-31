import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminBlogRoutingModule } from './blog-routing.module';
import { AdminBlogComponent } from './blog.component';
import { AdminBlogListModule } from './list/list.module';
import { AdminBlogSharedModule } from './shared/blog.module';
import { AdminBlogEditModule } from './edit/edit.module';

@NgModule({
    declarations: [AdminBlogComponent],
    imports: [CommonModule, AdminBlogRoutingModule, AdminBlogSharedModule, AdminBlogListModule, AdminBlogEditModule],
})
export class AdminBlogModule {}
