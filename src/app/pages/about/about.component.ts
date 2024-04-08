import { Component } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
