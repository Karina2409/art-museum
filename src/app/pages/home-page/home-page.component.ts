import { Component, effect, inject, signal } from '@angular/core';
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
  public artworksPagination = signal<Artwork[]>([]);
  public artworksList = signal<Artwork[]>([]);
  public currentPage = signal(1);
  public totalPages = signal(100);
  public visiblePageCount: number = 4;
  public searchQuery = signal('');

  private artworksService = inject(ArtworksService);

  constructor() {
    effect(() => {
      this.artworksService.getTotalPages().subscribe({
        next: (total_pages) => this.totalPages.set(total_pages),
      });
    });

    effect(() => {
      this.loadArtworksPagination();
    });

    effect(() => {
      this.loadArtworksList();
    });
  }

  public onSearch(query: string): void {
    this.searchQuery.set(query);
    this.currentPage.set(1);
  }

  public nextPages(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + this.visiblePageCount);
    }
  }

  public prevPages(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - this.visiblePageCount);
    }
  }

  public getVisiblePages(): number[] {
    const start =
      Math.floor((this.currentPage() - 1) / this.visiblePageCount) * this.visiblePageCount + 1;
    const end = Math.min(start + this.visiblePageCount - 1, this.totalPages());
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  public goToPage(page: number): void {
    if (page !== this.currentPage()) {
      this.currentPage.set(page);
    }
  }

  private loadArtworksPagination(): void {
    this.artworksService.searchArtworks(this.searchQuery(), this.currentPage()).subscribe({
      next: ({ artworks, total_page }) => {
        this.artworksPagination.set(artworks);
        this.totalPages.set(total_page);
      },
    });
  }

  private loadArtworksList(): void {
    this.artworksService.getArtworks(1, 9).subscribe({
      next: (artworks) => this.artworksList.set(artworks),
    });
  }
}
