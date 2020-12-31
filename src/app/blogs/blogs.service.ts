import { Injectable } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot, DocumentData } from '@angular/fire/firestore';
import { Blog } from 'src/types';

@Injectable()
export class BlogsService {
    blogs: Blog[];

    constructor(private firestore: AngularFirestore) {}

    async init() {
        this.blogs = await this.getBlogs();

        return true;
    }

    findBlog(blogId: string) {
        return this.blogs?.find((b) => b.id === blogId);
    }

    async getBlogs(limit: number = 20): Promise<Blog[]> {
        const data = await this.firestore
            .collection<Blog>('blogs', (ref) => ref.orderBy('created_at', 'desc').limit(limit))
            .get()
            .toPromise();
        return data.docs.map<Blog>((doc) => this.toBlog(doc));
    }

    async getBlog(docId: string): Promise<Blog> {
        if (docId) {
            const doc = await this.firestore.collection<Blog>('blogs').doc(docId).get().toPromise();
            return this.toBlog(doc);
        } else {
            return null;
        }
    }

    private toBlog(doc: QueryDocumentSnapshot<DocumentData>) {
        // ドキュメントフィールドにIDがないため、ドキュメントIDを付与したデータに変換して返却
        return Object.assign({ id: doc.id }, doc.data()) as Blog;
    }
}
