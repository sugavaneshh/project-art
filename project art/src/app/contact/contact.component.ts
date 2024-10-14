import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="d-flex justify-content-center align-items-center min-vh-100">
      <div class="form-container">
        <h2 class="text-center mb-4">Contact Us</h2>
        <form (ngSubmit)="onSubmit()" class="p-4 rounded pastel-blue-form">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control form-control-lg pastel-blue-input" id="name" name="name" [(ngModel)]="name" required placeholder="Enter your name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control form-control-lg pastel-blue-input" id="email" name="email" [(ngModel)]="email" required placeholder="Enter your email">
          </div>
          <div class="mb-4">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control form-control-lg pastel-blue-input" id="message" name="message" rows="3" [(ngModel)]="message" required placeholder="Your message..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg w-100 pastel-blue-button">Send Message</button>
        </form>
      </div>
    </div>
    
  `,
  styles: [
    `
      .form-container {
        width: 400px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .min-vh-100 {
        min-height: 100vh;
        background-image: url('https://image.slidesdocs.com/responsive-images/background/nature-plant-winter-leaf-pastel-blue-powerpoint-background_0be3ee9e53__960_540.jpg'); /* Update the path */
        background-size: cover; /* Cover the entire area */
        background-position: center; /* Center the background image */
        background-repeat: no-repeat; /* Prevent repeating of the background image */
      }
      .pastel-blue-form {
        background-color: rgba(168, 208, 230, 0.9); /* Slightly transparent pastel blue background */
        border: 1px solid #81a4cd;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .pastel-blue-input {
        background-color: #eaf4f9; /* Light blue for input fields */
        border: 1px solid #81a4cd;
        color: #333;
      }
      .pastel-blue-input:focus {
        border-color: #5a92bc; /* Slightly darker on focus */
        box-shadow: 0 0 0 0.2rem rgba(90, 146, 188, 0.25);
      }
      .pastel-blue-button {
        background-color: #81a4cd;
        border-color: #81a4cd;
      }
      .pastel-blue-button:hover {
        background-color: #5a92bc; /* Darker blue on hover */
        border-color: #5a92bc;
      }
      footer {
        width: 100%;
      }
    `
  ]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit() {
    // Typically, send form data to a server
    console.log('Form submitted', { name: this.name, email: this.email, message: this.message });
    
    // Reset form fields
    this.name = '';
    this.email = '';
    this.message = '';
    alert('Thank you for your message. We will get back to you soon!');
  }
}
