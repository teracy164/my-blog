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
            url: 'https://img-downloader.onrender.com/',
            description:
                '指定のWebページ内の画像を一括ダウンロードするためWebツールです。<br>' +
                'Nuxt.js + ElementUIで作成しています<br>' +
                '※Renderの無料プランで動かしているため、サーバースリープ時は表示に1分ほど時間がかかることがあります',
        },
        {
            name: 'Image Downloader（コマンドラインツール）',
            url: 'https://github.com/teracy164/img-downloader',
            description: '指定のWebページ内の画像を一括ダウンロードするためのコマンドラインツールです',
        },
        {
            name: 'ZZZ Tools',
            url: 'https://zzz.teracy.link/',
            description:
                'ゼンレスゾーンゼロ（ZZZ）のビルドカード作成ツールです<br>' +
                'また、育成計算機やレベルごとの素材リストもあります<br>' +
                'Nuxt3で作成しています',
        },
        {
            name: 'ZZZ Score Calculator',
            url: 'https://chromewebstore.google.com/detail/zzz-score-calculator/ibbbkbnhocldehlkbemmlgkmdlbckjmn?authuser=0&hl=ja',
            description: 'ゼンレスゾーンゼロ（ZZZ）の公式戦績ツールにドライバ詳細とスコアを埋め込むChrome拡張です',
        },
        {
            name: 'Genshin Tools',
            url: 'https://genshin.teracy.link/',
            description: '原神向けのツールです<br>' + 'Nuxt3で作成しています',
        },
        // {
        //     name: 'パスワードマネージャー',
        //     url: 'https://pass-mg.teracy.link/',
        //     description:
        //         '※開発中<br>Google Drive上でパスワード情報を管理するシンプルなパスワードマネージャーです。<br>' + 'Angular ＋ GoogleAPIで作成。',
        // },

        {
            name: 'Sysool - システム開発サポートツール',
            url: 'https://sysool.fly.dev/',
            description:
                '※開発中<BR>' +
                'システム開発全般（見積もり／設計／テスト／手順書等ドキュメント）の管理を行うためのシステムです。<br>' +
                'Nuxt.js(ver2) + ElementUIで作成しています',
        },
        {
            name: 'Shafuku - 社内副業システム',
            url: 'https://shafuku.onrender.com/',
            description:
                '※開発中<BR>' +
                '社内の雑事を社内副業として依頼／管理するシステムです。<br>' +
                '社内副業とすることで、社員は小遣い稼ぎができ、会社としては積極的な姿勢を見ることができます。<br>' +
                'Nuxt3で作成しています<br>' +
                '※現在停止中です',
        },
    ];
}
