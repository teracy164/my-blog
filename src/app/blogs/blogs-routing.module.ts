import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blog.component';

const routes: Routes = [
    { path: ':id', component: BlogsComponent },
    { path: '', component: BlogsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogsRoutingModule {}
