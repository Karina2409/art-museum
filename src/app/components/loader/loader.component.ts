import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  template: `
    <div class="d-flex justify-content-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,
  standalone: true,
  styles: [],
})
export class LoaderComponent {}
