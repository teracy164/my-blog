import { Component } from '@angular/core';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    test = '<strong>test</strong>';
    readonly products = [
        {
            name: '本サイト',
            description:
                '本サイトはAngularにてスクラッチ開発しています。<br>' +
                'バックエンドにはFirebaseを使用しています<br>' +
                '<br>' +
                'なお、本サイトの構築についてはQiitaで解説しています<br>' +
                '<a target="_blank" href="https://qiita.com/teracy55/items/bc35bb21f98d3d493f9f">https://qiita.com/teracy55/items/bc35bb21f98d3d493f9f</a>',
        },
        {
            name: 'パスワードマネージャー',
            url: 'https://teracy55.github.io/password-manager/',
            description: 'Google Drive上でパスワード情報を管理するシンプルなパスワードマネージャーです。<br>' + 'Angular ＋ GoogleAPIで作成。',
        },
        {
            name: 'Image Downloader',
            url: 'https://teracy-img-downloader.herokuapp.com/',
            description: '指定のWebページ内の画像を一括ダウンロードするためWebツールです。',
        },
        {
            name: 'Image Downloader（コマンドラインツール）',
            url: 'https://github.com/teracy55/img-downloader',
            description: '指定のWebページ内の画像を一括ダウンロードするためのコマンドラインツールです',
        },
    ];
}
