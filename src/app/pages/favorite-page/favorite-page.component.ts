import { Component, effect, inject, signal } from '@angular/core';
import { PictureComponent } from '@components/picture';
import { firstValueFrom } from 'rxjs';
import { NgIf } from '@angular/common';
import { LoaderComponent } from '@components/loader';
import { Artwork } from '@models/artwork';
import { FavoritesService } from '@services/favorites';
import { ArtworksService } from '@services/artworks';

@Component({
  selector: 'app-favorite-page',
  imports: [PictureComponent, NgIf, LoaderComponent],
  templateUrl: './favorite-page.component.html',
  standalone: true,
  styleUrl: './favorite-page.component.scss',
})
export class FavouritePageComponent {
  public favoriteArtworks = signal<Artwork[]>([]);
  public isLoadingInitialList = signal(true);
  public isLoadingNextChunk = signal(false);

  private favoritesService = inject(FavoritesService);
  private artworksService = inject(ArtworksService);

  private pageSize = 6;
  private favoriteIds: number[] = [];
  private currentIndex = 0;

  constructor() {
    effect(() => {
      this.favoriteIds = this.favoritesService.getFavorites()();
      this.favoriteArtworks.set([]);
      this.currentIndex = 0;

      if (this.favoriteIds.length === 0) {
        this.isLoadingInitialList.set(false);
        return;
      }

      this.loadNextChunk(true);
    });
  }

  private async loadNextChunk(isInitial = false): Promise<void> {
    if (this.currentIndex >= this.favoriteIds.length) {
      this.isLoadingInitialList.set(false);
      this.isLoadingNextChunk.set(false);
      return;
    }

    if (isInitial) this.isLoadingInitialList.set(true);
    else this.isLoadingNextChunk.set(true);

    const nextIds = this.favoriteIds.slice(this.currentIndex, this.currentIndex + this.pageSize);
    this.currentIndex += this.pageSize;

    try {
      const artworks = await Promise.all(
        nextIds.map((id) => firstValueFrom(this.artworksService.getArtworkById(id))),
      );

      this.favoriteArtworks.update((prev) => [
        ...prev,
        ...artworks.filter((a): a is Artwork => a !== undefined),
      ]);
    } finally {
      if (isInitial) this.isLoadingInitialList.set(false);
      else this.isLoadingNextChunk.set(false);

      if (this.currentIndex < this.favoriteIds.length) {
        this.loadNextChunk();
      }
    }
  }
}
