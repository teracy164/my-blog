import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
