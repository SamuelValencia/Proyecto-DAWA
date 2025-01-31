import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-propuestas',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './propuestas.component.html',
  styleUrls: ['./propuestas.component.css']
})
export class PropuestasComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'curso', 'propuestas'];
  propuestas = [
    { nombre: 'Jose', apellido: 'Pérez', curso: 3, propuestas: 'Desarrollo web' },
    { nombre: 'Ana', apellido: 'Gómez', curso: 5, propuestas: 'APP Mobil' },
    { nombre: 'Carlos', apellido: 'Ruiz', curso: 7, propuestas: 'Desarrollo web' },
    { nombre: 'María', apellido: 'Hernández', curso: 4, propuestas: 'Desarrollo web' },
    { nombre: 'Pedro', apellido: 'Martínez', curso: 2, propuestas: 'APP Mobil' },
    { nombre: 'Sofía', apellido: 'López', curso: 8, propuestas: 'Desarrollo web' },
    { nombre: 'Javier', apellido: 'Mora', curso: 6, propuestas: 'APP Mobil' },
    { nombre: 'Laura', apellido: 'Vargas', curso: 1, propuestas: 'Desarrollo web' },
    { nombre: 'Esteban', apellido: 'Ramírez', curso: 9, propuestas: 'APP Mobil' },
    { nombre: 'Camila', apellido: 'Jiménez', curso: 10, propuestas: 'APP Mobil' }
  ];
}
