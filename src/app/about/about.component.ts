import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
    @ViewChild('twitter') twitter: ElementRef;

    ngAfterViewInit() {
        // Twitterボタンを有効にするため、ウィジェットをロード
        (window as any).twttr.widgets.load();
    }
}
