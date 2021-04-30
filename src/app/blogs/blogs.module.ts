import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsService } from './blogs.service';
import { BlogsComponent } from './blog.component';
import { BlogsDetailModule } from './detail/detail.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [BlogsComponent],
    imports: [CommonModule, BlogsRoutingModule, BlogsDetailModule, FlexLayoutModule, MatIconModule, MatButtonModule],
    providers: [BlogsService],
})
export class BlogsModule {}
