import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './menu/menu.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', component: AdminMenuComponent },
            { path: 'blog', loadChildren: () => import('./blog/blog.module').then((m) => m.AdminBlogModule) },
            { path: 'career', loadChildren: () => import('./career/career.module').then((m) => m.AdminCareerModule) },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
