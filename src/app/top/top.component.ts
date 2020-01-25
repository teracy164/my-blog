import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  imgUrl: string;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
   this.storage.ref('images/top.jpg').getDownloadURL().subscribe(image => {
      this.imgUrl = image;
    });
  }
}
