import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
    public readonly careers = [
        {
            period: '2021年02月〜',
            projects: [
                {
                    name: 'Web勤怠システム',
                    language: 'Vue.js+Vuetify+Laravel8',
                    db: 'MySQL５.7',
                },
            ],
        },
        {
            period: '2019年09月〜',
            projects: [
                {
                    name: '計測結果参照Webシステム開発',
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
    public skills = [
        { category: 'language', name: 'typescript', level: '◎' },
        { category: 'language', name: 'javascript', level: '◎' },
        { category: 'language', name: 'Java', level: '○' },
        { category: 'language', name: 'PHP', level: '◎' },
        { category: 'language', name: 'C', level: '○' },
        { category: 'language', name: 'C++', level: '○' },
        { category: 'framework', name: 'Angular', level: '◎' },
        { category: 'framework', name: 'NestJS', level: '◎' },
        { category: 'framework', name: 'Nuxt.js', level: '☆' },
        { category: 'framework', name: 'Laravel', level: '◎' },
        { category: 'framework', name: 'ZendFW', level: '△' },
        { category: 'framework', name: 'Flutter', level: '☆' },
        { category: 'framework', name: 'Monaca', level: '○' },
        { category: 'framework', name: 'CocosCreator', level: '○' },
        { category: 'library', name: 'Bootstrap', level: '○' },
        { category: 'library', name: 'PrimeNG', level: '◎' },
        { category: 'library', name: 'ElementUI', level: '◎' },
        { category: 'library', name: 'Vuetify', level: '◎' },
        { category: 'library', name: 'Angular Material', level: '☆' },
        { category: 'library', name: 'Vue.js', level: '◎' },
        {
            category: 'architecture',
            name: 'AWS',
            level: '○',
            note: 'EC2,Route53,ElasticBreansTalk,RDB(PostgreSQL)、DynamoDB、S3、API Gateway、Lambda',
        },
        { category: 'architecture', name: 'Firebase', level: '☆', note: 'Hosting,Firestore' },
        { category: 'architecture', name: 'Heroku', level: '○' },
        { category: 'architecture', name: 'docker', level: '○' },
        { category: 'architecture', name: 'docker-compose', level: '○' },
        { category: 'develop', name: 'GitHub', level: '○' },
        { category: 'develop', name: 'GitLab', level: '○', note: 'オンプレ構築および運用' },
        { category: 'develop', name: 'Git', level: '○' },
        { category: 'develop', name: 'VS Code', level: '○' },
        { category: 'develop', name: 'Lerna', level: '○' },
        { category: 'develop', name: 'vagrant', level: '○' },
        { category: 'API', name: 'OpenAPI', level: '○' },
        { category: 'API', name: 'MS GraphAPI', level: '☆' },
    ];

    @ViewChild('twitter') twitter: ElementRef;

    ngAfterViewInit() {
        // Twitterボタンを有効にするため、ウィジェットをロード
        (window as any).twttr.widgets.load();
    }
}
