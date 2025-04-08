import { Component, effect, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoaderComponent } from '@components/loader';
import { FavoritesService } from '@services/favorites';
import { Artwork } from '@models/artwork';
import { NotificationsService } from '@services/notifications';

@Component({
  selector: 'app-picture',
  imports: [LoaderComponent, NgIf],
  templateUrl: './picture.component.html',
  standalone: true,
  styleUrl: './picture.component.scss',
})
export class PictureComponent {
  @Input() public artwork!: Artwork;
  @Input() public isSmallVersion!: boolean;

  public isFavorite = signal(false);
  public isLoadingCard = signal(true);

  private router = inject(Router);
  private favoritesService = inject(FavoritesService);
  private notification = inject(NotificationsService);

  constructor() {
    effect(() => {
      if (this.artwork) {
        this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id));
      }
    });
  }

  protected get isDefaultImage(): boolean {
    return this.artwork?.image_url.includes('default-image.png') ?? true;
  }

  public toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.favoritesService.toggleFavorite(this.artwork.id);
    this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id));
  }

  public navigateToArtworkInfo(id: number): void {
    this.router.navigate([`/artwork/${id}`]);
  }

  public onImageLoad(): void {
    this.isLoadingCard.set(false);
  }

  protected onImageError(): void {
    this.artwork.image_url = 'default-image.png';
    this.isLoadingCard.set(false);
    this.notification.show('Ошибка загрузки изображения', 'warning');
  }
}
