import { Component, computed, effect, inject, signal, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { Artwork } from '@models/artwork';
import { ArtworksService } from '@services/artworks';
import { LoaderComponent } from '@components/loader';
import { FavoritesService } from '@services/favorites';
import { NotificationsService } from '@services/notifications';

@Component({
  selector: 'app-artwork-info-page',
  imports: [NgIf, LoaderComponent],
  templateUrl: './artwork-info-page.component.html',
  standalone: true,
  styleUrl: './artwork-info-page.component.scss',
})
export class ArtworkInfoPageComponent {
  public artwork: Artwork | null = null;

  public isLoadingImage = signal(true);
  public isLoadingInfo = signal(true);
  public isFavorite = signal(false);

  private artworkId: Signal<number> = computed(() =>
    Number(this.activateRoute.snapshot.paramMap.get('artworkId')),
  );

  private artworksService = inject(ArtworksService);
  private activateRoute = inject(ActivatedRoute);
  private favoritesService = inject(FavoritesService);
  private notification = inject(NotificationsService);

  constructor() {
    effect(() => {
      const id = this.artworkId();
      if (id) {
        this.artworksService.getArtworkById(id).subscribe({
          next: (artwork) => {
            this.artwork = artwork;
            this.isFavorite.set(this.favoritesService.isFavorite(artwork.id));
            this.isLoadingInfo.set(false);
          },
        });
      }
    });
  }

  protected get isDefaultImage(): boolean {
    return this.artwork?.image_url.includes('default-image.png') ?? true;
  }

  public toggleFavorite(event: Event): void {
    event.stopPropagation();
    if (this.artwork === null) return;
    this.favoritesService.toggleFavorite(this.artwork.id);
    this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id));
  }

  public onImageLoad(): void {
    this.isLoadingImage.set(false);
  }

  protected onImageError(): void {
    if (this.artwork) {
      this.artwork.image_url = 'default-image.png';
      this.isLoadingImage.set(false);
      this.notification.show('Ошибка загрузки изображения', 'warning');
    }
  }
}
