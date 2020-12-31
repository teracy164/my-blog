import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';
import { BlogsService } from 'src/app/blogs/blogs.service';
import { Blog } from 'src/types';

@Injectable()
export class AdminBlogService {
    constructor(private firestore: AngularFirestore, private fireStorage: AngularFireStorage, private blogService: BlogsService) {}

    get blogs() {
        return this.blogService.blogs;
    }

    async init() {
        await this.blogService.init();
    }

    findBlog(id: string) {
        return this.blogs?.find((blog) => blog.id === id);
    }

    addBlog(data: Blog) {
        return this.firestore.collection('blogs').add(data);
    }

    async updateBlog(id: string, data: Blog) {
        await this.firestore.collection('blogs').doc(id).update(data);

        return true;
    }

    addImage(file: File) {
        const fileName = uuidv4();
        return this.fireStorage.upload('images/blogs/' + fileName, file);
    }
}
