import { NgModule } from '@angular/core';
import { TopComponent } from './top.component';
import { TopNewsComponent } from './news/news.component';
import { TopTwitterComponent } from './twitter/twitter.component';
import { QiitaModule } from 'src/services/qiita/qiita.module';
import { TopQiitaComponent } from './qiita/qiita.component';
import { CommonModule } from '@angular/common';
import { TwitterModule } from 'src/services/twitter/twitter.module';
import { TopRoutingModule } from './top-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [TopComponent, TopNewsComponent, TopTwitterComponent, TopQiitaComponent],
    imports: [CommonModule, TopRoutingModule, QiitaModule, TwitterModule, FlexLayoutModule],
})
export class TopModule {}
