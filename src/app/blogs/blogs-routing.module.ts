import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsListComponent } from './list/list.component';
import { BlogsDetailComponent } from './detail/detail.component';

const routes: Routes = [
    { path: '', component: BlogsListComponent },
    { path: ':id', component: BlogsDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogsRoutingModule {}
