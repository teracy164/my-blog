import { Component } from '@angular/core';

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss', '../shared/styles.scss'],
})
export class CareersComponent {
    public readonly careers = [
        {
            name: 'G社（新規事業企画開発グループ）',
            projects: [
                {
                    name: '統合システム開発（自社開発）',
                    description: 'HRシステムと勤怠システム統合後の保守・機能拡充',
                    period: {
                        start: '2023/10/01',
                        end: '',
                    },
                    processes: ['調査', 'アーキテクチャ設計', '開発', '保守'],
                    position: 'リーダー',
                    language: 'フロント：Nuxt3+ElementPlus+Tailwind、バックエンド：NestJS',
                    db: 'MySQL8',
                    notes: ['・機能拡充'],
                },
                {
                    name: 'HRシステム・勤怠システム統合（自社開発）',
                    description: '',
                    period: {
                        start: '2023/06/01',
                        end: '2023/09/31',
                    },
                    processes: ['調査', 'アーキテクチャ設計', '開発'],
                    position: 'リーダー',
                    language: 'フロント：Nuxt3+ElementPlus+Tailwind、バックエンド：NestJS',
                    db: 'MySQL8',
                    notes: [
                        '・EC2で稼働してた勤怠システムをHRシステムに統合',
                        '・バックエンドのソースコードを統合。勤怠システム側の認証をHRシステムに統合',
                        '・人事情報がHRシステムと勤怠システムで2重管理になっていたのを一元化',
                        '・勤怠システムのデータ（Postgres）をHRシステムのDB（MySQL）に移行',
                        '・勤怠システムのフロント(Angular)をEC2での配信からCloudFrontに移行',
                    ],
                },
                {
                    name: 'HRシステム（自社開発）',
                    description: '',
                    period: {
                        start: '2022/10/01',
                        end: '2023/05/31',
                    },
                    processes: ['要件定義', 'アーキテクチャ設計', '基本設計', '開発'],
                    position: 'リーダー',
                    language: 'フロント：Nuxt3+ElementPlus+Tailwind、バックエンド：NestJS',
                    db: 'MySQL8',
                    notes: [
                        '・AWSアーキテクチャ構築（ECS + Fargate + RDS）',
                        '・ローカル環境はdocker-composeで構築',
                        '・フロント⇔バックエンド間はOpenAPIに準じたRestAPI。openapi-generatorでAPIクライアント自動生成',
                    ],
                },
                {
                    name: '非破壊検査システム機能改修',
                    description: '',
                    period: {
                        start: '2021/10/01',
                        end: '2022/09/31',
                    },
                    processes: ['保守開発', '性能改善検討'],
                    position: 'メンバー',
                    language: 'フロント：Vue.js＋ElementUI、バックエンド：AWS API Gateway + Lambda(python)',
                    db: 'DynamoDB',
                    notes: [
                        '・不具合改修',
                        '・Lambdaの性能改善検討（multiprosessingによる並列化、メモリごとの性能評価 等）',
                        '・DynamoDB + AWS Backup + CloudWatch + Lambdaでの定期的なデータコピー方式',
                    ],
                },
                {
                    name: 'スーパー向けPOP画像共有システム',
                    description: 'あるスーパーの各店舗でPOP画像を容易に共有するためのWebシステム',
                    period: {
                        start: '2021/08/01',
                        end: '2021/10/31',
                    },
                    processes: ['設計', '開発', '単体テスト', '結合テスト'],
                    position: 'リーダー',
                    language: 'Nuxt.js+ElementUI+NestJS+OpenAPI',
                    db: 'MySQL５.6',
                    notes: ['開発環境には「WSL2 + Docker for Windows」を採用'],
                },
                {
                    name: '非破壊検査システム脆弱性試験',
                    description: '',
                    period: {
                        start: '2021/05/06',
                        end: '2021/07/31',
                    },
                    processes: ['脆弱性試験'],
                    position: 'メンバー',
                    notes: ['AppScanを使用した脆弱性試験を実施', 'AWS API GatewayやCloud Flontにて対策を実装'],
                },
                {
                    name: '業界特化型Web勤怠システム',
                    description: 'ある業界向けの勤怠システム。Accessで運用していたものをWebシステムへ移行',
                    period: {
                        start: '2021/02/01',
                        end: '2021/04/30',
                    },
                    processes: ['開発', '単体テスト', '結合テスト'],
                    position: 'リーダー',
                    language: 'Vue.js+Vuetify+Laravel8',
                    db: 'MySQL５.7',
                },
                {
                    name: '非破壊検査システム開発',
                    description: '非破壊検査システムの結果確認用のWebシステムの開発プロジェクト',
                    period: {
                        start: '2020/09/01',
                        end: '2021/12/31',
                    },
                    processes: ['コードレビュー', '結合テストレビュー'],
                    position: 'リーダー',
                    language: 'Vue.js+ElementUI+python',
                    db: 'DynamoDB',
                    infra: 'AWS API Gateway/Lambda/S3/Cognito',
                },
                {
                    name: '自社勤怠システム構築',
                    description: '自社勤怠システムの開発。外部への販売も開始',
                    period: {
                        start: '2019/07/01',
                        end: '2022/09/31',
                    },
                    processes: ['要件定義', '設計', '開発', '本番環境構築'],
                    position: 'リーダー',
                    language: 'Angular+PrimeNG＋NestJS+OpenAPI',
                    db: 'Postgres11',
                    infra: '途中でHeroku => AWS ElasticBeansTalkへ以降',
                },
                {
                    name: '自社勤怠システム構築（プロトタイプ）',
                    description: '自社勤怠システムの開発。ある程度開発したところで問題点が多々見つかったため、フルリファクタすることに。',
                    period: {
                        start: '2018/11/01',
                        end: '2019/06/30',
                    },
                    processes: ['設計', '開発'],
                    position: 'リーダー',
                    language: 'Angular+Bootstrap＋Express.js＋OpenAPI',
                    db: 'Postgres11',
                    infra: 'Heroku',
                },
                {
                    name: '社内DevOps環境構築及び運用',
                    description: 'モダンな開発環境を整えるため、自分でDevOps環境を整備。',
                    period: {
                        start: '2018/07/01',
                        end: '',
                    },
                    notes: ['ドキュメント：Confluence', 'タスク／コード管理：GitLab', '※EC2上に構築'],
                },
                {
                    name: '自社ECサイト構築',
                    description: '自社で販売している商品のECサイト作成。諸事情により途中で中断。',
                    period: {
                        start: '2018/07/01',
                        end: '2018/10/31',
                    },
                    processes: ['設計', '開発'],
                    position: 'リーダー',
                    language: 'Angular＋Bootstrap＋Express.js',
                    db: 'Postgres11',
                    infra: 'Heroku',
                },
                {
                    name: 'モバイルアプリ開発１',
                    description: 'Monacaを使ったモバイル開発テスト。',
                    period: {
                        start: '2018/10/01',
                        end: '2018/10/15',
                    },
                    language: 'Monaca（Angular＋OnsenUI）',
                },
                {
                    name: 'モバイルアプリ開発２',
                    description: 'CocosCreatorを使ったゲーム開発。',
                    period: {
                        start: '2018/10/15',
                        end: '2018/10/31',
                    },
                    language: 'CocosCreator（Typescript）',
                },
            ],
        },
        {
            name: 'G社（Web系グループ）',
            projects: [
                {
                    name: 'ゲームプラットフォーム多言語化対応／DB文字コード変更',
                    description: 'プラットフォームをwovnを使って多言語化。それに伴い全DBの文字コードをUTF8に変更。',
                    period: {
                        start: '2017/04/01',
                        end: '2018/06/30',
                    },
                    processes: ['設計', '開発', '単体テスト', '結合テスト'],
                    position: 'リーダー',
                    language: 'Laravel、ZendFW、CakePHP',
                    db: 'MySQL',
                },
                {
                    name: '生保系Webシステム開発',
                    description: '生保系企業のグループウェアをデスクトップツールからWebシステムへ移行',
                    period: {
                        start: '2016/04/01',
                        end: '2017/03/31',
                    },
                    processes: ['設計', '開発', '単体テスト', '結合テスト'],
                    position: 'サブリーダー',
                    language: 'JavaEE',
                    db: 'Oracle',
                },
            ],
        },
        {
            name: 'G社（組み込みグループ）',
            projects: [
                {
                    name: '企業向けナビ開発',
                    description: '市販のカーナビをカスタマイズし、企業固有の機能を追加するプロジェクト',
                    period: {
                        start: '2013/04/01',
                        end: '2016/03/31',
                    },
                    processes: ['設計', '開発', '単体テスト', '結合テスト'],
                    position: 'メンバー',
                    language: 'C／C++',
                },
                {
                    name: '車載メーター開発',
                    description: '前面TFT液晶ディスプレイを使ったメーターのデモ機開発プロジェクト',
                    period: {
                        start: '2012/04/01',
                        end: '2013/03/31',
                    },
                    processes: ['設計', '開発', '単体テスト'],
                    position: 'メンバー',
                    language: 'C',
                },
                {
                    name: '車載機器とBT連携するAndroidアプリの開発',
                    description: '新規開発の車載メーターとBlueToothで連携するデモ用のスマホアプリ開発',
                    period: {
                        start: '2011/10/01',
                        end: '2012/03/31',
                    },
                    processes: ['設計', '開発'],
                    position: 'メンバー',
                    language: 'Android2.3/3.0（Java）',
                },
                {
                    name: '帳票出力システムの帳票追加対応',
                    description: '',
                    period: {
                        start: '2011/09/01',
                        end: '2011/09/31',
                    },
                    language: 'Java＋ApachPOI',
                },
            ],
        },
        {
            name: 'G社新卒入社',
            projects: [
                {
                    name: 'Android研修',
                    period: {
                        start: '2011/07/01',
                        end: '2011/08/31',
                    },
                },
                {
                    name: 'Java研修',
                    period: {
                        start: '2011/04/01',
                        end: '2011/06/31',
                    },
                },
            ],
        },
        {
            name: '芝浦工業大学',
            projects: [
                {
                    name: '工学部情報工学科在籍',
                    period: {
                        start: '2007/04/01',
                        end: '2011/03/31',
                    },
                },
            ],
        },
    ];
}
