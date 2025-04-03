import { Component, effect, inject, Input, signal, WritableSignal } from '@angular/core';
import { Artwork } from '@models/artwork.model';
import { Router } from '@angular/router';
import { FavoritesService } from '@services/favorites/favorites.service';

@Component({
  selector: 'app-picture',
  imports: [],
  templateUrl: './picture.component.html',
  standalone: true,
  styleUrl: './picture.component.scss',
})
export class PictureComponent {
  @Input() public artwork!: Artwork;
  @Input() public isSmallVersion!: boolean;

  public isFavorite: WritableSignal<boolean> = signal(false);

  protected isDefaultImage = false;

  private router = inject(Router);
  private favoritesService = inject(FavoritesService);

  constructor() {
    effect(() => {
      if (this.artwork) {
        this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id));
      }
    });
  }

  public toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.favoritesService.toggleFavorite(this.artwork.id);
    this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id));
  }

  public navigateToArtworkInfo(id: number): void {
    this.router.navigate([`/artwork/${id}`]);
  }

  public onImageError(event: Event): void {
    if (!(event.target instanceof HTMLImageElement)) return;
    const target: HTMLImageElement = event.target;
    target.src = 'default-image.png';
    this.isDefaultImage = true;
  }
}
