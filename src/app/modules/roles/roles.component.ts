import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  roles: string[] = [];
  nuevoRol: string = '';

  crearRol() {
    if (this.nuevoRol.trim() !== '') {
      this.roles.push(this.nuevoRol);
      this.nuevoRol = '';
    }
  }
}
