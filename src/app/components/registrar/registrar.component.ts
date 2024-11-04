import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Persona } from '../../models/Persona';
import { Genero } from '../../models/Genero';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

  mensaje!: string
  listPersona: Persona[] = [];
  mostrarError = false;
  listaGenero: Genero[] = [
    { id: 1, valor: 'Masculino' },
    { id: 2, valor: 'Femenino' },
  ]

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
    })

  }

  agregarPersona() {

    if (this.existePersona(this.form.value.cedula) ) {
     
      this.mensaje = "El elemento ya existe";
      this.error();

    } else {
      //tomo los datos del formulario
      const persona: Persona = {
        cedula: this.form.value.cedula,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        fechaNacimiento: this.form.value.fechaNacimiento,
        genero: this.form.value.genero,
        estado: true,
      }

      //agregar a la lista
      this.listPersona.push(persona);
      
      //limpiar el formulario
      this.form.reset();
    }

  }

  existePersona(cedula: string): boolean {
    //console.log(this.listPersona.some(persona => persona.cedula === cedula));
    return this.listPersona.some(persona => persona.cedula === cedula);
  }

  error() {
    this.mostrarError = true;
   
    setTimeout(() => {
      this.mostrarError = false;
    }, 3000);
  }

  eliminarPersona(cedula: string) {

    this.listPersona = this.listPersona.filter(elemento => elemento.cedula !== cedula);
    //console.log(this.listPersona);

    /*
    let indice = this.listPersona.findIndex(elemento => elemento.cedula === cedula);
    if (indice !== -1) {
      this.listPersona.splice(indice, 1);
    }
    */
  }



}
