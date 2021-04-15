import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QualificationsComponent } from './qualifications.component';

@NgModule({
    declarations: [QualificationsComponent],
    imports: [CommonModule, FlexLayoutModule],
    exports: [QualificationsComponent],
})
export class QualificationsModule {}
