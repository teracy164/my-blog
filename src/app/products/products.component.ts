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
            name: 'Genshin Tools',
            url: 'https://genshin.teracy164.com/',
            description: '原神向けのツールです<br>' + 'Nuxt3で作成しています',
        },
        {
            name: 'パスワードマネージャー',
            url: 'https://pass-mg.teracy164.com/',
            description:
                '※開発中<br>Google Drive上でパスワード情報を管理するシンプルなパスワードマネージャーです。<br>' + 'Angular ＋ GoogleAPIで作成。',
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
        {
            name: 'ShaFuku - 社内副業システム',
            url: 'https://shafuku.herokuapp.com/',
            description:
                '※開発中<BR>' +
                '社内の雑事を社内副業として依頼／管理するシステムです。<br>' +
                '社内副業とすることで、社員は小遣い稼ぎができ、会社としては積極的な姿勢を見ることができます。<br>' +
                'Nuxt3で作成しています<br>' +
                '※HEROKUの無料プランで動かしているため、サーバースリープ時は表示に1分ほど時間がかかることがあります',
        },
        {
            name: 'ナンプレ（新人研修用課題）',
            url: 'https://number-place-js.herokuapp.com/',
            description:
                '新人研修担当時に、課題のサンプルとして作成したナンプレ<br>' +
                'express.jsで作成しています<br>' +
                '※HEROKUの無料プランで動かしているため、サーバースリープ時は表示に1分ほど時間がかかることがあります',
        },
        {
            name: 'ナンプレ自動解答（新人研修用課題）',
            url: 'https://number-place-auto-resolver.herokuapp.com/',
            description:
                '新人研修担当時に、課題のサンプルとして作成したナンプレの自動解答プログラム<br>' +
                'express.jsで作成しています<br>' +
                '※HEROKUの無料プランで動かしているため、サーバースリープ時は表示に1分ほど時間がかかることがあります',
        },
    ];
}
