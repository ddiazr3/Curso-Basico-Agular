import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  datos:any = {
    nombre: "",
    apellido: ""
  }

  guardar(){
    alert(`Datos almacenados son: ${this.datos.nombre} ${this.datos.apellido}`)
  }
}
