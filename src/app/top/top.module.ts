import { NgModule } from '@angular/core';
import { TopComponent } from './top.component';
import { TopNewsComponent } from './news/news.component';
import { TopTwitterComponent } from './twitter/twitter.component';

@NgModule({
  declarations: [
    TopComponent,
    TopNewsComponent,
    TopTwitterComponent,
  ],
})
export class TopModule { }
