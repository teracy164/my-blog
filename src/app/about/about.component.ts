import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

const enum IDX {
    CAREERS = 0,
    SKILLS,
    QUALIFICATIONS,
}

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
    selectedIndex = 0;
    readonly tabs = [
        { label: '経歴', name: 'careers' },
        { label: 'スキル', name: 'skills' },
        { label: '資格', name: 'qualifications' },
    ];
    @ViewChild('twitter') twitter: ElementRef;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    get IDX_CAREERS() {
        return IDX.CAREERS;
    }

    get IDX_SKILLS() {
        return IDX.SKILLS;
    }

    get IDX_QUALIFICATIONS() {
        return IDX.QUALIFICATIONS;
    }

    ngOnInit() {
        const tab = this.activatedRoute.snapshot.queryParams?.tab;
        if (tab) {
            const index = this.tabs.findIndex((t) => t.name === tab);
            if (index >= 0) {
                this.selectedIndex = index;
                return;
            }
        }
    }

    ngAfterViewInit() {
        // Twitterボタンを有効にするため、ウィジェットをロード
        (window as any).twttr.widgets.load();
    }

    onTabChange(event: MatTabChangeEvent) {
        this.selectedIndex = event.index;
        const tab = this.tabs[event.index].name;
        this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { tab } });
    }
}
