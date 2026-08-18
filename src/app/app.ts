import { Component } from '@angular/core';
import { Figura } from './components/figura/figura';
import { Circulo } from './components/circulo/circulo';

@Component({
  selector: 'app-root',
  imports: [Figura, Circulo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
