import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-aprobados',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './aprobados.component.html',
  styleUrls: ['./aprobados.component.css']
})
export class AprobadosComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'propuestas', 'estado'];
  students = [
    { nombre: 'Jose', apellido: 'Pérez', propuestas: 'Aplicación Web', estado: 'Aprobado' },
    { nombre: 'Ana', apellido: 'Gómez', propuestas: 'Aplicación Móvil', estado: 'Denegado' },
    { nombre: 'Carlos', apellido: 'Ruiz', propuestas: 'Aplicación Móvil', estado: 'Aprobado' },
    { nombre: 'María', apellido: 'Hernández', propuestas: 'Aplicación Web', estado: 'Aprobado' },
    { nombre: 'Pedro', apellido: 'Martínez', propuestas: 'Aplicación Web', estado: 'Denegado' },
    { nombre: 'Sofía', apellido: 'López', propuestas: 'Aplicación Móvil', estado: 'Denegado' },
    { nombre: 'Javier', apellido: 'Mora', propuestas: 'Aplicación Web', estado: 'Aprobado' },
    { nombre: 'Laura', apellido: 'Vargas', propuestas: 'Aplicación Web', estado: 'Denegado' },
    { nombre: 'Esteban', apellido: 'Ramírez', propuestas: 'Aplicación Móvil', estado: 'Denegado' },
    { nombre: 'Camila', apellido: 'Jiménez', propuestas: 'Aplicación Web', estado: 'Aprobado' }
  ];
}
