import { Component, effect, inject, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { LoaderComponent } from '@components/loader';
import { PictureComponent } from '@components/picture';
import { SearchBarComponent } from '@components/search-bar';
import { Artwork } from '@models/artwork';
import { ArtworksService } from '@services/artworks';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [PictureComponent, SearchBarComponent, NgIf, NgForOf, LoaderComponent],
})
export class HomePageComponent {
  public artworksPagination = signal<Artwork[]>([]);
  public artworksList = signal<Artwork[]>([]);
  public currentPage = signal(1);
  public totalPages = signal(100);
  public itemsPerPage = signal(3);
  public visiblePageCount: number = 4;
  public searchQuery = signal('');
  public isLoadingArtworksList = signal(true);

  private artworksService = inject(ArtworksService);

  constructor() {
    this.updateItemsPerPage();

    window.addEventListener('resize', () => {
      this.updateItemsPerPage();
    });

    effect(() => {
      this.artworksService.getTotalPages().subscribe({
        next: (total_pages) => this.totalPages.set(total_pages),
      });
    });

    effect(() => {
      const page = this.currentPage();
      const query = this.searchQuery();
      const perPage = this.itemsPerPage();
      this.loadArtworksPagination(query, page, perPage);
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

  private loadArtworksPagination(query: string, page: number, perPage: number): void {
    this.artworksService.searchArtworks(query, page, perPage).subscribe({
      next: ({ artworks, total_page }) => {
        this.artworksPagination.set(artworks);
        this.totalPages.set(total_page);
      },
    });
  }

  private loadArtworksList(): void {
    this.isLoadingArtworksList.set(true);
    this.artworksService.getArtworks(1, 9).subscribe({
      next: (artworks) => {
        this.artworksList.set(artworks);
        this.isLoadingArtworksList.set(false);
      },
      error: () => {
        this.isLoadingArtworksList.set(false);
      },
    });
  }

  private updateItemsPerPage(): void {
    const width = window.innerWidth;
    if (width < 825) {
      this.itemsPerPage.set(1);
      return;
    } else if (width < 1245) {
      this.itemsPerPage.set(2);
      return;
    } else {
      this.itemsPerPage.set(3);
    }
  }
}
