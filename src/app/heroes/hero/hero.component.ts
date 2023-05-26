import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public name: string = 'Brayan Torres';
  public age: number = 23;

  get capitalizado(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  cambiarNombre() {
    this.name = 'Alma Garzon';
  }

  cambiarEdad() {
    this.age = 22;
  }

  resetForm(): void {
    this.name = 'Brayan Torres';
    this.age = 23;
  }
}
