import { Component } from '@angular/core';
import { PictureComponent } from '@components/picture/picture.component';
import { Artwork } from '@models/artwork.model';
import { ArtworksService } from '@services/artworks.service';
import { SearchBarComponent } from '@components/search-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [PictureComponent, SearchBarComponent],
})
export class HomePageComponent {
  public artworksList: Artwork[] = [];
  public currentPage: number = 1;
  public totalPages: number = 10;

  constructor(private artworksService: ArtworksService) {}

  public ngOnInit(): void {
    this.loadArtworks();
  }

  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadArtworks();
    }
  }

  public prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadArtworks();
    }
  }

  private loadArtworks(): void {
    this.artworksService.getArtworks(this.currentPage).subscribe({
      next: (artworks) => {
        this.artworksList = artworks;
      },
    });
  }
}
