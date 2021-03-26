import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CareersComponent } from './careers.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [CareersComponent],
    imports: [CommonModule, FlexLayoutModule],
    exports: [CareersComponent],
})
export class CareersModule {}
