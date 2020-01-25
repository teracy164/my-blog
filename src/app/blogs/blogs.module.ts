import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsService } from './blogs.service';
import { BlogsListComponent } from './list/list.component';
import { BlogsDetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    BlogsListComponent,
    BlogsDetailComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
  ],
  providers: [
    BlogsService,
  ]
})
export class BlogsModule { }
