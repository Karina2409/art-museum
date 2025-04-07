import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  template: `
    <div class="d-flex justify-content-center align-items-center w-100 h-100">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,
  standalone: true,
  styles: [],
})
export class LoaderComponent {}
