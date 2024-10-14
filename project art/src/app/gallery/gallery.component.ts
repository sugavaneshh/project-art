import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Painting {
  id: number;
  title: string;
  artist: string;
  year: number;
  imageUrl: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  template: `
    <h2 class="text-center mb-4">Spectra Art Collection</h2>
    <div class="row">
      <div class="col-md-4 mb-4" *ngFor="let painting of paintings">
        <div class="card h-100">
          <img [src]="painting.imageUrl" class="card-img-top" [alt]="painting.title">
          <div class="card-body">
            <h5 class="card-title">{{ painting.title }}</h5>
            <p class="card-text">Artist: {{ painting.artist }}</p>
            <p class="card-text">Year: {{ painting.year }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class GalleryComponent {
  paintings: Painting[] = [
    {
      id: 1,
      title: 'Starry Night',
      artist: 'Vincent van Gogh',
      year: 1889,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    },
    {
      id: 2,
      title: 'The Persistence of Memory',
      artist: 'Salvador Dalí',
      year: 1931,
      imageUrl: 'https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg',
    },
    {
      id: 3,
      title: 'Girl with a Pearl Earring',
      artist: 'Johannes Vermeer',
      year: 1665,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg',
    },
    {
      id: 4,
      title: 'The Scream',
      artist: 'Edvard Munch',
      year: 1893,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
    },
    {
      id: 5,
      title: 'The Birth of Venus',
      artist: 'Sandro Botticelli',
      year: 1486,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
    },
    {
      id: 6,
      title: 'The Night Watch',
      artist: 'Rembrandt van Rijn',
      year: 1642,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1280px-The_Night_Watch_-_HD.jpg',
    },
    {
      id: 7,
      title: 'The Kiss',
      artist: 'Gustav Klimt',
      year: 1908,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
    },
    {
      id: 8,
      title: 'Guernica',
      artist: 'Pablo Picasso',
      year: 1937,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
    },
    {
      id: 9,
      title: 'The Son of Man',
      artist: 'René Magritte',
      year: 1964,
      imageUrl: 'https://uploads5.wikiart.org/images/rene-magritte/son-of-man-1964(1).jpg',
    },
    {
      id: 10,
      title: 'The Great Wave off Kanagawa',
      artist: 'Hokusai',
      year: 1831,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/1280px-Great_Wave_off_Kanagawa2.jpg',
    },
    {
      id: 11,
      title: 'Water Lilies',
      artist: 'Claude Monet',
      year: 1919,
      imageUrl: 'https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/843,/0/default.jpg',
    },
    {
      id: 12,
      title: 'The Mona Lisa',
      artist: 'Leonardo da Vinci',
      year: 1503,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    },
  ];
}