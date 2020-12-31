import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBlogComponent } from './blog.component';
import { AdminBlogEditComponent } from './edit.component';

const routes: Routes = [
    { path: '', component: AdminBlogComponent },
    { path: 'add', component: AdminBlogEditComponent },
    { path: 'edit/:id', component: AdminBlogEditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminBlogRoutingModule {}
