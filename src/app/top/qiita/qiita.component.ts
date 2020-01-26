import { Component, OnInit } from '@angular/core';
import { QiitaService } from '../../../services/qiita/qiita.service';
import { QiitaItem } from 'src/types/qiita.interface';

@Component({
  selector: 'app-top-qiita',
  templateUrl: './qiita.component.html',
  styleUrls: ['./qiita.component.scss'],
})
export class TopQiitaComponent implements OnInit {
  news: QiitaItem[];

  constructor(private qiitaService: QiitaService) {}

  async ngOnInit() {
    this.news = await this.qiitaService.getMyItems();
  }
}
