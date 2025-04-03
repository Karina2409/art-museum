import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { FavoritesService } from '@services/favorites/favorites.service';
import { ArtworksService } from '@services/artworks/artworks.service';
import { Artwork } from '@models/artwork.model';
import { PictureComponent } from '@components/picture';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  imports: [PictureComponent],
  templateUrl: './favorite-page.component.html',
  standalone: true,
  styleUrl: './favorite-page.component.scss',
})
export class FavouritePageComponent {
  public favoriteArtworks: WritableSignal<Artwork[]> = signal<Artwork[]>([]);

  private favoritesService = inject(FavoritesService);
  private artworksService = inject(ArtworksService);

  constructor() {
    effect(() => {
      const favoriteIds = this.favoritesService.getFavorites()();
      if (favoriteIds.length === 0) {
        this.favoriteArtworks.set([]);
        return;
      }

      Promise.all(
        favoriteIds.map(
          async (id) => await firstValueFrom(this.artworksService.getArtworkById(id)),
        ),
      ).then((artworks) => this.favoriteArtworks.set(artworks.filter((a) => a !== undefined)));
    });
  }
}
