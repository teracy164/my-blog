import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { AdminMenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [AdminComponent, AdminMenuComponent],
    imports: [CommonModule, AdminRoutingModule, AngularFireAuthModule],
    providers: [AdminService],
})
export class AdminModule {}
