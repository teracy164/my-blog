import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, MatTabsModule, FlexLayoutModule],
})
export class AboutModule {}
