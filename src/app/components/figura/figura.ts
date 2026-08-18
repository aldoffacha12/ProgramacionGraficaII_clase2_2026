import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-figura',
  imports: [CommonModule],
  templateUrl: './figura.html',
  styleUrl: './figura.scss',
})
export class Figura {
  posicionX: number = 100;
  posicionY: number = 100;
  tamano: number = 80;
  color: string = '#ffff06';
  visible: boolean = true;

  moverDerecha(): void {
    this.posicionX += 20;
  }

  moverIzquierda(): void {
    this.posicionX -= 20;
  }

  moverArriba(): void {
    this.posicionY -= 20;
  }

  moverAbajo(): void {
    this.posicionY += 20;
  }

  agrandar(): void {
    this.tamano += 10;
  }

  achicar(): void {
    if (this.tamano > 20) {
      this.tamano -= 10;
    }
  }

  cambiarColor(nuevoColor: string): void {
    this.color = nuevoColor;
  }

  alternarVisibilidad(): void {
    this.visible = !this.visible;
  }
}
