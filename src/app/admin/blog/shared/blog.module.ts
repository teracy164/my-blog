import { NgModule } from '@angular/core';
import { AdminBlogService } from './blog.service';
import { BlogsModule } from 'src/app/blogs/blogs.module';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
    imports: [BlogsModule, AngularFireStorageModule],
    providers: [AdminBlogService],
})
export class AdminBlogSharedModule {}
