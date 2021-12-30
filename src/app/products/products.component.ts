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
                '<a target="_blank" href="https://qiita.com/teracy164/items/bc35bb21f98d3d493f9f">https://qiita.com/teracy164/items/bc35bb21f98d3d493f9f</a>',
        },
        {
            name: 'パスワードマネージャー',
            url: 'https://pass-mg.teracy164.com/',
            description:
                '※開発中<br>Google Drive上でパスワード情報を管理するシンプルなパスワードマネージャーです。<br>' + 'Angular ＋ GoogleAPIで作成。',
        },
        {
            name: 'Image Downloader',
            url: 'https://teracy-img-downloader.herokuapp.com/',
            description:
                '指定のWebページ内の画像を一括ダウンロードするためWebツールです。<br>' +
                'Nuxt.js + ElementUIで作成しています<br>' +
                '※HEROKUの無料プランで動かしているため、サーバースリープ時は表示に1分ほど時間がかかることがあります',
        },
        {
            name: 'Image Downloader（コマンドラインツール）',
            url: 'https://github.com/teracy164/img-downloader',
            description: '指定のWebページ内の画像を一括ダウンロードするためのコマンドラインツールです',
        },
        {
            name: 'KAIASTooo - システム開発サポートツール',
            url: 'https://kaisatooo.herokuapp.com/',
            description:
                '※開発中<BR>' +
                'システム開発全般（見積もり／設計／テスト／手順書等ドキュメント）の管理を行うためのシステムです。<br>' +
                'Nuxt.js + ElementUIで作成しています<br>' +
                '※HEROKUの無料プランで動かしているため、サーバースリープ時は表示に1分ほど時間がかかることがあります',
        },
    ];
}
