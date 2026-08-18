import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Figura } from '../figura/figura';

@Component({
  selector: 'app-circulo',
  imports: [CommonModule],
  templateUrl: './circulo.html',
  styleUrl: './circulo.scss',
})
export class Circulo extends Figura {
  irDerecha: boolean = true;
  irAbajo: boolean = true;

  moverDiagonalArribaDerecha(): void {
    if (this.irDerecha) {
      this.posicionX += 15;
    } else {
      this.posicionX -= 15;
    }
    if (this.irAbajo) {
      this.posicionY -= 15;
    } else {
      this.posicionY += 15;
    }
  }

  moverDiagonalAbajoDerecha(): void {
    if (this.irDerecha) {
      this.posicionX += 15;
    } else {
      this.posicionX -= 15;
    }
    if (this.irAbajo) {
      this.posicionY += 15;
    } else {
      this.posicionY -= 15;
    }
  }

  moverDiagonalArribaIzquierda(): void {
    if (this.irDerecha) {
      this.posicionX -= 15;
    } else {
      this.posicionX += 15;
    }
    if (this.irAbajo) {
      this.posicionY -= 15;
    } else {
      this.posicionY += 15;
    }
  }

  moverDiagonalAbajoIzquierda(): void {
    if (this.irDerecha) {
      this.posicionX -= 15;
    } else {
      this.posicionX += 15;
    }
    if (this.irAbajo) {
      this.posicionY += 15;
    } else {
      this.posicionY -= 15;
    }
  }

  cambiarDireccionX(): void {
    this.irDerecha = !this.irDerecha;
  }

  cambiarDireccionY(): void {
    this.irAbajo = !this.irAbajo;
  }
}
