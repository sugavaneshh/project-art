import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="background-box">
      <h2>About Spectra Art Gallery</h2>
      <p>Spectra Art Gallery is a vibrant space dedicated to the celebration of artistic talent and innovation. Established in 2023, we aim to connect art enthusiasts with a diverse array of contemporary artworks. Our gallery features both established and emerging artists, fostering a dynamic environment for creative expression.</p>
      <p>At Spectra, we believe in the transformative power of art and its ability to inspire dialogue. Our exhibitions are carefully curated to showcase a wide range of styles and mediums, encouraging visitors to explore new perspectives. We host regular artist talks and workshops, providing opportunities for the community to engage directly with artists and their processes.</p>
      <p>Our commitment to diversity ensures that all voices in the art world are represented and celebrated. We strive to support artists from all backgrounds, creating a welcoming space for everyone. Through collaborations with local organizations, we also promote cultural exchange and understanding within our community.</p>
      <p>Join us in exploring the boundaries of creativity and immerse yourself in a rich tapestry of artistic experiences. Whether you’re an avid collector or a curious newcomer, Spectra Art Gallery invites you to discover the beauty and power of art.</p>
    </div>
  `,
  styles: [`
    .background-box {
      display: flex;
      flex-direction: column; 
      align-items: center; /* Center items horizontally */
      justify-content: flex-start; 
      height: 100vh;
      width: 100%;
      padding: 40px; 
      border-radius: 8px;
      background-image: url('https://img.freepik.com/premium-photo/blue-sky-is-very-light-blue-color_1030736-35472.jpg?ga=GA1.1.1135043015.1728884064&semt=ais_hybrid');
      background-position: center;
      color: black;
      font-family: 'Calibri';
      background-size: cover; 
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7); 
    }

    h2 {
      text-align: center; 
      width: 100%; 
      font-size: 3em; 
      margin-bottom: 20px; 
      text-transform: uppercase; /* Make heading uppercase */
    }

    p {
      text-align: center; /* Center align paragraphs */
      width: 100%;
      margin: 10px 0; 
      font-size: 2em; 
    }
  `]
})
export class AboutComponent {}
