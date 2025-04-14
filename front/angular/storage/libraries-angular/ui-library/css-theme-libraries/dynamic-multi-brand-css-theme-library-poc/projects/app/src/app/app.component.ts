import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandSwitcherComponent } from './brand-switcher/brand-switcher.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BrandSwitcherComponent],
  template: `
    <div class="container">
      <h1>Multi-brand UI Demo</h1>
      <app-brand-switcher></app-brand-switcher>
    </div>
  `
})
export class AppComponent {}
