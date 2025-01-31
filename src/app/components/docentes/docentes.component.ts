import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'cedula'];
  docentes = [
    { nombre: 'Javier', apellido: 'Gómez', cedula: '2345678901' },
    { nombre: 'Carlos', apellido: 'Ruiz', cedula: '3456789012' },
    { nombre: 'María', apellido: 'Jiménez', cedula: '0123456789' },
    { nombre: 'Ana', apellido: 'Mora', cedula: '7890123456' },
    { nombre: 'María', apellido: 'Hernández', cedula: '4567890123' },
    { nombre: 'Pedro', apellido: 'Martínez', cedula: '5678901234' },
    { nombre: 'Sofía', apellido: 'López', cedula: '6789012345' },
    { nombre: 'Laura', apellido: 'Vargas', cedula: '8901234567' },
    { nombre: 'Juan', apellido: 'Pérez', cedula: '1234567890' },
    { nombre: 'Esteban', apellido: 'Ramírez', cedula: '9012345678' }
  ];
}
