import { Component } from '@angular/core';
import { PictureComponent } from '@components/picture/picture.component';
import { Artwork } from '@models/artwork.model';
import { ArtworksService } from '@services/artworks/artworks.service';
import { SearchBarComponent } from '@components/search-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [PictureComponent, SearchBarComponent],
})
export class HomePageComponent {
  public artworksPagination: Artwork[] = [];
  public artworksList: Artwork[] = [];
  public currentPage: number = 1;
  public totalPages: number = 10;

  constructor(private artworksService: ArtworksService) {}

  public ngOnInit(): void {
    this.loadArtworksPagination();
    this.loadArtworksList();
  }

  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadArtworksPagination();
    }
  }

  public prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadArtworksPagination();
    }
  }

  public loadArtworksPagination(page = this.currentPage, cardsCount = 3): void {
    this.artworksService.getArtworks(page, cardsCount).subscribe({
      next: (artworks) => {
        this.artworksPagination = artworks;
      },
    });
  }

  protected loadArtworksList(page = this.currentPage, cardsCount = 9): void {
    this.artworksService.getArtworks(page, cardsCount).subscribe({
      next: (artworks) => {
        this.artworksList = artworks;
      },
    });
  }
}
