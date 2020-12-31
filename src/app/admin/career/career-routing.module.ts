import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCareerComponent } from './career.component';

const routes: Routes = [{ path: '', component: AdminCareerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminCareerRoutingModule {}
