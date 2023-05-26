import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="incrementar(1)">+1</button>
    <button (click)="resetear()">Reset</button>
    <button (click)="incrementar(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;
  public reset: number = 10;

  incrementar(value: number): void {
    this.counter += value;
  }

  resetear(): void {
    this.counter = 10;
  }
}
