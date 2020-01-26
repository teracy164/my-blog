import { NgModule } from '@angular/core';
import { TopComponent } from './top.component';
import { TopNewsComponent } from './news/news.component';
import { TopTwitterComponent } from './twitter/twitter.component';
import { QiitaModule } from 'src/services/qiita/qiita.module';
import { TopQiitaComponent } from './qiita/qiita.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TopComponent,
    TopNewsComponent,
    TopTwitterComponent,
    TopQiitaComponent,
  ],
  imports: [
    CommonModule,
    QiitaModule,
  ],
})
export class TopModule { }
