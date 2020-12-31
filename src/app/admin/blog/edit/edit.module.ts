import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AdminBlogEditComponent } from './edit.component';

import { MatInputModule } from '@angular/material/input';
import { MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { AdminBlogSharedModule } from '../shared/blog.module';

@NgModule({
    declarations: [AdminBlogEditComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminBlogSharedModule,
        MarkdownModule.forRoot(),
        MatButtonModule,
        MatChipsModule,
        MatInputModule,
        MatIconModule,
        MatAutocompleteModule,
    ],
    providers: [
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: [ENTER, COMMA],
            },
        },
    ],
    exports: [AdminBlogEditComponent],
})
export class AdminBlogEditModule {}
