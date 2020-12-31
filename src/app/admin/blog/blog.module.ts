import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AdminBlogRoutingModule } from './blog-routing.module';
import { AdminBlogComponent } from './blog.component';
import { AdminBlogEditComponent } from './edit.component';
import { AdminBlogService } from './blog.service';
import { BlogsModule } from 'src/app/blogs/blogs.module';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@NgModule({
    declarations: [AdminBlogComponent, AdminBlogEditComponent],
    imports: [
        AdminBlogRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot(),
        AngularFireStorageModule,
        BlogsModule,

        MatButtonModule,
        MatChipsModule,
        MatInputModule,
        MatIconModule,
    ],
    providers: [
        AdminBlogService,
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: [ENTER, COMMA],
            },
        },
    ],
})
export class AdminBlogModule {}
