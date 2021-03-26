import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills.component';

@NgModule({
    declarations: [SkillsComponent],
    imports: [CommonModule],
    exports: [SkillsComponent],
})
export class SkillsModule {}
