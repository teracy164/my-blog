import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CareerApiClientService } from './career.service';
import { SkillApiClientService } from './skill.service';

@NgModule({
    imports: [AngularFirestoreModule],
    providers: [CareerApiClientService, SkillApiClientService],
})
export class ApiClientModule {}
