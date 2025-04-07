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
  public isLoadingArtworksList = signal(true);

  private favoritesService = inject(FavoritesService);
  private artworksService = inject(ArtworksService);

  private loadedIds = new Set<number>();

  constructor() {
    effect(() => {
      const currentIds = this.favoritesService.getFavorites()();
      const existing = this.favoriteArtworks();

      const existingIds = existing.map((a) => a.id);
      const added = currentIds.filter((id) => !this.loadedIds.has(id));
      const removed = existingIds.filter((id) => !currentIds.includes(id));

      if (removed.length > 0) {
        this.favoriteArtworks.set(existing.filter((a) => !removed.includes(a.id)));
        removed.forEach((id) => this.loadedIds.delete(id));
      }

      if (this.loadedIds.size === 0 && currentIds.length > 0) {
        this.isLoadingArtworksList.set(true);
      }

      if (added.length > 0) {
        this.loadArtworks(added);
      } else {
        this.isLoadingArtworksList.set(false);
      }

      if (currentIds.length === 0) {
        this.favoriteArtworks.set([]);
        this.loadedIds.clear();
        this.isLoadingArtworksList.set(false);
      }
    });
  }

  private async loadArtworks(ids: number[]): Promise<void> {
    try {
      const artworks = await Promise.all(
        ids.map((id) => firstValueFrom(this.artworksService.getArtworkById(id))),
      );

      this.favoriteArtworks.update((current) => [
        ...current,
        ...artworks.filter((a): a is Artwork => {
          if (!a) return false;
          this.loadedIds.add(a.id);
          return true;
        }),
      ]);
    } finally {
      this.isLoadingArtworksList.set(false);
    }
  }
}
