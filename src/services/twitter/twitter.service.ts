import { Injectable } from '@angular/core';

@Injectable()
export class TwitterService {
    private get twitter() { return window['twttr']; }
    private get isReady() { return this.twitter ? true : false; }

    widgetsLoad() {
        if (this.isReady) {
            this.twitter.widgets.load();
        }
    }
}