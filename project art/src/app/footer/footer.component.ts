import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-light py-4 mt-4">
      <div class="container text-center">
        <p>&copy; 2023 Spectra Art Gallery. All rights reserved.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}