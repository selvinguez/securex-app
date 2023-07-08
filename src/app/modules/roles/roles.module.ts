import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: RolesComponent }
      // Otras rutas específicas del módulo "roles" si es necesario
    ])
  ]
})
export class RolesModule { }
