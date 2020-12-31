import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('./top/top.module').then((m) => m.TopModule) },
    { path: 'about', component: AboutComponent },
    { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then((m) => m.BlogsModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
