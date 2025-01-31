import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  members = [
    {
      image: 'ruta_de_imagen1.jpg',
      name: 'Bryan Anderson Castro Cañizares',
      age: 22,
      languages: 'Java, C++',
      databases: 'Oracle, MySQL',
      webDesign: 'HTML',
      projects: 'He colaborado en proyectos realizando inventario de productos de ferretería y programas que simulen el sistema de ventas para farmacias.'
    },
    {
      image: 'ruta_de_imagen2.jpg',
      name: 'Danny Ismael Solano Moncada',
      age: 25,
      languages: 'Java, Python, C++',
      databases: 'Oracle, MySQL, PostgreSQL',
      webDesign: 'HTML',
      projects: 'He trabajado con Java web y My SQL para realizar un sistema de carrito de compras, prototipos de app móviles para educación y transporte.'
    },
    {
      image: 'ruta_de_imagen3.jpg',
      name: 'Dennys Samuel Valencia Mosquera',
      age: 24,
      languages: 'Java, C#, TypeScript, JavaScript, C',
      databases: 'MySQL Workbench',
      webDesign: 'HTML, CSS, JavaScript',
      projects: 'Elaboré un backend donde se registran todas las modificaciones que se realizan en los diferentes sistemas de una empresa, trabajandocon NestJS, Elaboración de Frontend de una página web para una farmacia, utilizando React, Material UI, TypeScript.'
    },
    {
      image: 'ruta_de_imagen4.jpg',
      name: 'Brayan Ariel Endara Tigrero',
      age: 26,
      languages: 'Java, C#',
      databases: 'MySQL Workbench',
      webDesign: 'HTML, CSS, JavaScript',
      projects: 'He colaborado en proyectos con lenguaje Java en la implementación de un sistema de facturación para una empresa pastelera. Del mismo modo colaboré en la implementación de un sistema de votación para cierta entidad universitaria, enlazada con una base de datos.'
    },
    {
      image: 'ruta_de_imagen5.jpg',
      name: 'Jorge Andrés Sornoza',
      age: 26,
      languages: 'Java, C++',
      databases: 'Oracle, MySQL',
      webDesign: 'HTML',
      projects: 'He colaborado con proyectos de diseño de un sistema para venta de productos Tecnológicos y que se enlace a una base de datos.'
    }
  ];
}
