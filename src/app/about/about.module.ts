import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CareersModule } from './careers/careers.module';
import { SkillsModule } from './skills/skills.module';
import { QualificationsModule } from './qualifications/qualifications.module';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, MatTabsModule, CareersModule, SkillsModule, QualificationsModule],
})
export class AboutModule {}
