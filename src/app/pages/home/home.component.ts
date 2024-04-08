import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string = "Hola soy Home"
  edad:number = 30
  datos:any = {
    nombre: "Dany",
    apellido: "Diaz"
  }
  curso:any = "Curso de Angular"

}
