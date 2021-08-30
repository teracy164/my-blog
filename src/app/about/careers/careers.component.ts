import { Component } from '@angular/core';

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss', '../shared/styles.scss'],
})
export class CareersComponent {
    public readonly careers = [
        {
            period: '2021年08月〜',
            projects: [
                {
                    name: 'スーパー向けPOP画像共有システム',
                    language: 'Nuxt.js+ElementUI+NestJS+OpenAPI',
                    db: 'MySQL５.6',
                    notes: ['開発環境には「WSL2 + Docker for Windows」を採用'],
                },
            ],
        },
        {
            period: '2021年05月〜',
            projects: [
                {
                    name: '非破壊検査システム脆弱性試験',
                    notes: ['AppScanを使用した脆弱性試験を実施', 'AWS API GatewayやCloud Flontにて対策を実装'],
                },
            ],
        },
        {
            period: '2021年02月〜',
            projects: [
                {
                    name: '業界特化型Web勤怠システム',
                    language: 'Vue.js+Vuetify+Laravel8',
                    db: 'MySQL５.7',
                },
            ],
        },
        {
            period: '2019年09月〜',
            projects: [
                {
                    name: '非破壊検査システム開発',
                    language: 'Vue.js+ElementUI+python',
                    db: 'DynamoDB',
                    infra: 'AWS API Gateway/Lambda/S3/Cognito',
                },
            ],
        },
        {
            period: '2018年11月〜',
            projects: [
                {
                    name: '自社勤怠システム構築',
                    language: 'Angular+PrimeNG＋NestJS+OpenAPI',
                    db: 'Postgres11',
                    infra: 'Heroku => AWS ElasticBeansTalk',
                },
                {
                    name: '自社勤怠システム構築（プロトタイプ）',
                    language: 'Angular+Bootstrap＋Express.js＋OpenAPI',
                    db: 'Postgres11',
                    infra: 'Heroku',
                },
                {
                    name: '社内DevOps環境構築及び運用',
                    notes: ['ドキュメント：Confluence', 'タスク／コード管理：GitLab', '※EC2上に構築'],
                },
            ],
        },
        {
            period: '2018年07月〜',
            projects: [
                {
                    name: '自社ECサイト構築',
                    language: 'Angular＋Bootstrap＋Express.js',
                    db: 'Postgres11',
                    infra: 'Heroku',
                },
                {
                    name: 'モバイルアプリ開発１',
                    language: 'Monaca（Angular＋OnsenUI）',
                },
                {
                    name: 'モバイルアプリ開発２',
                    language: 'CocosCreator（Typescript）',
                },
            ],
        },
        {
            period: '2017年04月〜',
            projects: [
                {
                    name: 'ゲームプラットフォーム多言語化対応',
                    language: 'Laravel、ZendFW、CakePHP',
                    db: 'MySQL',
                },
            ],
        },
        {
            period: '2016年04月〜',
            projects: [
                {
                    name: '生保系Webシステム開発',
                    language: 'JavaEE',
                    db: 'Oracle',
                },
            ],
        },
        {
            period: '2013年04月〜',
            projects: [
                {
                    name: '企業向けナビ開発',
                    language: 'C／C++',
                },
            ],
        },
        {
            period: '2012年04月〜',
            projects: [
                {
                    name: '車載メーター開発',
                    language: 'C',
                },
            ],
        },
        {
            period: '2011年10月〜',
            projects: [
                {
                    name: '車載機器とBT連携するAndroidアプリの開発',
                    language: 'Android2.3/3.0（Java）',
                },
            ],
        },
        {
            period: '2011年09月',
            projects: [
                {
                    name: '帳票出力システムの帳票追加対応',
                    language: 'Java＋ApachPOI',
                },
            ],
        },
        { period: '2011年04月〜08月', projects: [{ name: 'Java/Android研修' }] },
        { period: '2011年04月', projects: [{ name: '社会人デビュー' }] },
        { period: '2011年03月', projects: [{ name: '芝浦工業大学情報工学科卒' }] },
    ];
}
