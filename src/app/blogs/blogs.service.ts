import { Injectable } from '@angular/core';
import { Blog } from 'src/types/blog.interface';

@Injectable()
export class BlogsService {
  readonly testData: Blog[] = [
    { id: 1, title: 'ブログ１', contents: 'ブログ１のコンテンツ', tags: ['タグ1'], created_at: '2020/01/01 00:00:00' },
    { id: 2, title: 'ブログ２', contents: 'ブログ２のコンテンツ', tags: ['タグ2', 'タグ3'], created_at: '2020/01/02 00:00:00' },
  ];

  constructor() { }

  async getBlogs() {
    return this.testData;
  }

  async getBlog(id: number) {
    return this.testData.find(data => data.id === id);
  }
}
