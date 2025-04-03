import { Component } from '@angular/core';
import { PictureComponent } from '@components/picture/picture.component';
import { Artwork } from '@models/artwork.model';
import { ArtworksService } from '@services/artworks/artworks.service';
import { SearchBarComponent } from '@components/search-bar';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [PictureComponent, SearchBarComponent, NgIf, NgForOf],
})
export class HomePageComponent {
  public artworksPagination: Artwork[] = [];
  public artworksList: Artwork[] = [];
  public currentPage: number = 1;
  public totalPages: number = 100;
  public visiblePageCount: number = 4;
  public searchQuery: string = '';

  constructor(private artworksService: ArtworksService) {}

  public ngOnInit(): void {
    this.loadArtworksPagination();
    this.loadArtworksList();
    this.artworksService.getTotalPages().subscribe({
      next: (total) => {
        this.totalPages = total;
      },
    });
  }

  public onSearch(query: string): void {
    this.searchQuery = query;
    this.currentPage = 1;
    this.loadArtworksPagination();
  }

  public nextPages(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage += this.visiblePageCount;
      this.loadArtworksPagination();
    }
  }

  public prevPages(): void {
    if (this.currentPage > 1) {
      this.currentPage -= this.visiblePageCount;
      this.loadArtworksPagination();
    }
  }

  public loadArtworksPagination(page = this.currentPage): void {
    this.artworksService.searchArtworks(this.searchQuery, page).subscribe({
      next: ({ artworks, total_page }) => {
        this.artworksPagination = artworks;
        this.totalPages = total_page;
      },
    });
  }

  public getVisiblePages(): number[] {
    const start =
      Math.floor((this.currentPage - 1) / this.visiblePageCount) * this.visiblePageCount + 1;
    const end = Math.min(start + this.visiblePageCount - 1, this.totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  public goToPage(page: number): void {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.loadArtworksPagination();
    }
  }

  protected loadArtworksList(page = this.currentPage, cardsCount = 9): void {
    this.artworksService.getArtworks(page, cardsCount).subscribe({
      next: (artworks) => {
        this.artworksList = artworks;
      },
    });
  }
}
