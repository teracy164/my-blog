import { Component } from '@angular/core';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    readonly products = [
        {
            name: '本サイト',
            description: `本サイトはAngularにてスクラッチ開発しています。バックエンドにはFirebaseを使用しています`,
        },
        {
            name: 'パスワードマネージャー',
            url: 'https://teracy55.github.io/password-manager/',
            description: 'Google Drive上でパスワード情報を管理するシンプルなパスワードマネージャーです。' + 'Angular ＋ GoogleAPIで作成。',
        },
        {
            name: 'Image Downloader',
            url: 'https://github.com/teracy55/img-downloader',
            description: '指定のWebページ内の画像を一括ダウンロードするためのコマンドラインツールです',
        },
    ];
}
