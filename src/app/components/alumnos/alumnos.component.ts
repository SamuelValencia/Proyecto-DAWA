import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'carrera', 'curso', 'cedula'];
  students = [
    { id: 1, nombre: 'Jose', apellido: 'Pérez', carrera: 'Ingeniería en Sistemas Computacionales', curso: 3, cedula: '1234567890' },
    { id: 2, nombre: 'Ana', apellido: 'Gómez', carrera: 'Ingeniería en Software', curso: 5, cedula: '2345678901' },
    { id: 3, nombre: 'Carlos', apellido: 'Ruiz', carrera: 'Ingeniería en Networking y Telecomunicaciones', curso: 7, cedula: '3456789012' },
    { id: 4, nombre: 'María', apellido: 'Hernández', carrera: 'Ingeniería en Software', curso: 4, cedula: '4567890123' },
    { id: 5, nombre: 'Pedro', apellido: 'Martínez', carrera: 'Ingeniería en Sistemas Computacionales', curso: 2, cedula: '5678901234' },
    { id: 6, nombre: 'Sofía', apellido: 'López', carrera: 'Ingeniería en Networking y Telecomunicaciones', curso: 8, cedula: '6789012345' },
    { id: 7, nombre: 'Javier', apellido: 'Mora', carrera: 'Ingeniería en Software', curso: 6, cedula: '7890123456' },
    { id: 8, nombre: 'Laura', apellido: 'Vargas', carrera: 'Ingeniería en Sistemas Computacionales', curso: 1, cedula: '8901234567' },
    { id: 9, nombre: 'Esteban', apellido: 'Ramírez', carrera: 'Ingeniería en Networking y Telecomunicaciones', curso: 9, cedula: '9012345678' },
    { id: 10, nombre: 'Camila', apellido: 'Jiménez', carrera: 'Ingeniería en Software', curso: 10, cedula: '0123456789' },
    { id: 11, nombre: 'Luis', apellido: 'Navarro', carrera: 'Ingeniería en Software', curso: 1, cedula: '1234509876' },
    { id: 12, nombre: 'Andrea', apellido: 'Ramón', carrera: 'Ingeniería en Sistemas Computacionales', curso: 2, cedula: '2345609876' },
    { id: 13, nombre: 'Fernando', apellido: 'García', carrera: 'Ingeniería en Networking y Telecomunicaciones', curso: 3, cedula: '3456709876' },
    { id: 14, nombre: 'Beatriz', apellido: 'Romero', carrera: 'Ingeniería en Software', curso: 4, cedula: '4567809876' },
    { id: 15, nombre: 'David', apellido: 'Castro', carrera: 'Ingeniería en Sistemas Computacionales', curso: 5, cedula: '5678909876' },
    { id: 16, nombre: 'Elena', apellido: 'Flores', carrera: 'Ingeniería en Networking y Telecomunicaciones', curso: 6, cedula: '6789009876' },
    { id: 17, nombre: 'Miguel', apellido: 'Paredes', carrera: 'Ingeniería en Software', curso: 7, cedula: '7890109876' },
    { id: 18, nombre: 'Juliana', apellido: 'Espinoza', carrera: 'Ingeniería en Sistemas Computacionales', curso: 8, cedula: '8901209876' },
    { id: 19, nombre: 'Carlos', apellido: 'Ramos', carrera: 'Ingeniería en Networking y Telecomunicaciones', curso: 9, cedula: '9012309876' },
    { id: 20, nombre: 'Marcela', apellido: 'Guzmán', carrera: 'Ingeniería en Software', curso: 10, cedula: '0123409876' }
  ];
}
