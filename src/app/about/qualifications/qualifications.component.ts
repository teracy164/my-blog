import { Component } from '@angular/core';

@Component({
    selector: 'app-qualifications',
    templateUrl: './qualifications.component.html',
    styleUrls: ['./qualifications.component.scss', '../shared/styles.scss'],
})
export class QualificationsComponent {
    readonly qualifications = [
        {
            date: '2024/07/06',
            name: 'WS Certified Solutions Architect - Associate(SAA)',
        },
        {
            date: '2018/06/20',
            name: '応用情報技術者試験',
        },
        {
            date: '2015/02',
            name: 'サーティファイC言語プログラミング能力認定試験1級',
        },
        {
            date: '2011/08/31',
            name: 'Androidアプリケーション技術者認定試験ベーシック',
        },
        {
            date: '2011/08/05',
            name: '基本情報技術者試験',
        },
    ];
}
