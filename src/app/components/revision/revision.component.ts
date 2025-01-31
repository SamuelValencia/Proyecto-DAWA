import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-revision',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'tesis', 'proceso'];
  propuestas = [
    { nombre: 'Jose', apellido: 'Pérez', tesis: 'Desarrollo web', proceso: 'Ingresado' },
    { nombre: 'Ana', apellido: 'Gómez', tesis: 'APP Mobil', proceso: 'En Proceso' },
    { nombre: 'Carlos', apellido: 'Ruiz', tesis: 'APP Mobil', proceso: 'Cancelado' },
    { nombre: 'María', apellido: 'Hernández', tesis: 'Desarrollo web', proceso: 'Ingresado' },
    { nombre: 'Pedro', apellido: 'Martínez', tesis: 'APP Mobil', proceso: 'Cancelado' },
    { nombre: 'Sofía', apellido: 'López', tesis: 'Desarrollo web', proceso: 'En Proceso' },
    { nombre: 'Javier', apellido: 'Mora', tesis: 'APP Mobil', proceso: 'Cancelado' },
    { nombre: 'Laura', apellido: 'Vargas', tesis: 'Desarrollo web', proceso: 'Ingresado' },
    { nombre: 'Esteban', apellido: 'Ramírez', tesis: 'APP Mobil', proceso: 'En Proceso' },
    { nombre: 'Camila', apellido: 'Jiménez', tesis: 'Desarrollo web', proceso: 'En Proceso' }
  ];
}
