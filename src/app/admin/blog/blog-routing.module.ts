import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBlogComponent } from './blog.component';
import { AdminBlogListComponent } from './list/list.component';
import { AdminBlogEditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: '',
        component: AdminBlogComponent,
        children: [
            { path: 'list', component: AdminBlogListComponent },
            { path: 'add', component: AdminBlogEditComponent },
            { path: 'edit/:id', component: AdminBlogEditComponent },
            { path: '**', redirectTo: 'list' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminBlogRoutingModule {}
