import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AdminCareerRoutingModule } from './career-routing.module';
import { AdminCareerComponent } from './career.component';
import { CareerService } from './career.service';
import { CareerApiClientService } from '../../shared/services/api-client/career.service';
import { ApiClientModule } from '../../shared/services/api-client/api-client.module';

@NgModule({
    declarations: [AdminCareerComponent],
    imports: [
        AdminCareerRoutingModule,
        CommonModule,
        ApiClientModule,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot(),
        AngularFireStorageModule,
    ],
    providers: [CareerService, CareerApiClientService],
})
export class AdminCareerModule {}
