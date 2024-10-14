import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" routerLink="/">Spectra Art Gallery</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/gallery" routerLinkActive="active">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/about" routerLinkActive="active">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}