import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="jumbotron text-center">
      <h1 class="display-4">Welcome to Spectra Art Gallery</h1>
      <p class="lead">Discover a world of vibrant colors and captivating artworks.</p>
      <hr class="my-4">
      <p>At Spectra Art Gallery, we strive to provide a platform for artists across the globe to showcase their creativity and imagination. Our gallery exhibits a rich collection of art forms that range from traditional to contemporary.</p>
      <p>Whether you're an art enthusiast or simply curious, there's something for everyone at Spectra. Join us on this artistic journey and experience the beauty of visual expression.</p>
      <a class="btn btn-primary btn-lg" routerLink="/gallery" role="button">View Gallery</a>
    </div>

    <!-- Highlighted Sections -->
    <div class="row mt-5 text-center">
      <div class="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXq3TseWSJQIPJ-GHA8cpUxdcEMUhWqk9Pw&s" alt="Featured Artists" class="img-fluid rounded mb-3">
        <h3>Featured Artists</h3>
        <p>Discover works from both established masters and emerging talents in the art world. Our gallery highlights diversity in styles, techniques, and cultural backgrounds.</p>
        <p>We are proud to represent artists who push the boundaries of creativity and challenge conventional norms.</p>
        <p>Their individual stories and experiences influence their art, creating a connection with viewers that goes beyond the canvas.</p>
      </div>
      <div class="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNHYRLK0q__Mh5ifaZD16FMQ2sHLFF8rSpoyWRPmt2p5sNeGzzpQN0UoD0Hi0O-LwC6c&usqp=CAU" alt="Virtual Tours" class="img-fluid rounded mb-3">
        <h3>Virtual Tours</h3>
        <p>Experience our gallery from the comfort of your home with our immersive virtual tours. Explore our exhibitions as if you were walking through the gallery in person.</p>
        <p>Our virtual tours provide a unique opportunity to view each artwork in high resolution, offering insights and stories behind the creations. Navigate freely and enjoy the beauty of each piece at your own pace.</p>
      </div>
      <div class="col-md-4">
        <img src="https://d3rf6j5nx5r04a.cloudfront.net/y-lcw93pvrXGSYGCuZH-68E81CY=/560x0/product/e/8/f0a2731cc9944a3c9426153dff122ac5_opt.jpg" alt="Art Classes" class="img-fluid rounded mb-3">
        <h3>Art Classes</h3>
        <p>Join our workshops and classes to unleash your inner artist. We offer courses for all skill levels, from beginners to advanced artists looking to refine their craft.</p>
        <p>Our experienced instructors guide you through various techniques, such as painting, sculpture, and digital art. Learn from the best and find your unique artistic voice.</p>
      </div>
    </div>
  `,
  styles: [
    `
      .jumbotron {
        background-color: #f5f5f5;
        padding: 3rem 2rem;
        background-image: url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3BmLXM2MS1qaXIwMDg4LWNoaW0tMDEtY3JvcC5qcGc.jpg'); /* Add your background image URL here */
        background-size: cover; /* Cover the entire jumbotron */
        background-position: center; /* Center the image */
        color: black; /* Change text color to white for better contrast, if needed */
      }
      .img-fluid {
        max-width: 100%;
        height: auto;
      }
      .call-to-action {
        background-color: #eaf4f9;
        border-radius: 10px;
      }
    `
  ]
})
export class HomeComponent {}
