import { Component, effect, inject, signal } from '@angular/core';
import { FavoritesService } from '@services/favorites/favorites.service';
import { ArtworksService } from '@services/artworks/artworks.service';
import { Artwork } from '@models/artwork.model';
import { PictureComponent } from '@components/picture';
import { firstValueFrom } from 'rxjs';
import { NgIf } from '@angular/common';
import { LoaderComponent } from '@components/loader/loader.component';

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

  constructor() {
    effect(() => {
      const favoriteIds = this.favoritesService.getFavorites()();
      if (favoriteIds.length === 0) {
        this.favoriteArtworks.set([]);
        this.isLoadingArtworksList.set(false);
        return;
      }

      this.isLoadingArtworksList.set(true);

      Promise.all(
        favoriteIds.map(
          async (id) => await firstValueFrom(this.artworksService.getArtworkById(id)),
        ),
      )
        .then((artworks) => {
          this.favoriteArtworks.set(artworks.filter((a) => a !== undefined));
          this.isLoadingArtworksList.set(false);
        })
        .catch(() => {
          this.isLoadingArtworksList.set(false);
        });
    });
  }
}
