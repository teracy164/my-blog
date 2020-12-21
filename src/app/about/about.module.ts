import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, MatTabsModule],
})
export class AboutModule {}
