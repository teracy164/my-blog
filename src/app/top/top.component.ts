import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
    /** 初期化中 */
    isInitializing = true;
    /** 画像読み込み中 */
    isLoading = true;
    imgUrl: string;

    constructor(private storage: AngularFireStorage) {}

    async ngOnInit() {
        await this.loadImage();

        this.isInitializing = false;

        // 一定時間経っても画像読み込みが終わらない場合は表示する
        setTimeout(() => (this.isLoading = false), 3000);
    }

    private async loadImage() {
        this.imgUrl = await this.storage.ref('images/top.jpg').getDownloadURL().toPromise();
    }

    onLoadedImage() {
        this.isLoading = false;
    }
}
