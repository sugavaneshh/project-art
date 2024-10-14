import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div style="background-image: url('https://img.freepik.com/premium-photo/blue-background_1314622-553.jpg?ga=GA1.1.1305909298.1728366431&semt=ais_hybrid');
                background-size: cover; 
                background-position: center; 
                background-repeat: no-repeat; 
                height: 100vh; 
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;">
      <div class="col-md-6">
        <div class="card" style="background-color: rgba(255, 255, 255, 0.9); 
                                border-radius: 10px; 
                                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);">
          <div class="card-body">
            <h2 class="text-center mb-4" style="color: #333;">Login</h2>
            <form (ngSubmit)="onSubmit()">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" [(ngModel)]="username" required
                       style="border: 2px solid #007bff; border-radius: 5px; padding: 10px; background-color: #fff; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" [(ngModel)]="password" required
                       style="border: 2px solid #007bff; border-radius: 5px; padding: 10px; background-color: #fff; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/gallery']);
    } else {
      alert('Invalid credentials');
    }
  }
}
