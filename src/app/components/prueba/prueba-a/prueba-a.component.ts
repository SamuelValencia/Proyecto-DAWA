import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prueba-a',
  standalone: true,
  imports: [],
  templateUrl: './prueba-a.component.html',
  styleUrl: './prueba-a.component.css'
})
export class PruebaAComponent {
  opcion: string | null;

  constructor(private aRoute: ActivatedRoute) {

    this.opcion = this.aRoute.snapshot.paramMap.get('valor');

  }
}
