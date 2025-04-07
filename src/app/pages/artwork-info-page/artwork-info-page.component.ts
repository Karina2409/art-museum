import { Component, computed, effect, inject, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { Artwork } from '@models/artwork';
import { ArtworksService } from '@services/artworks';

@Component({
  selector: 'app-artwork-info-page',
  imports: [NgIf],
  templateUrl: './artwork-info-page.component.html',
  standalone: true,
  styleUrl: './artwork-info-page.component.scss',
})
export class ArtworkInfoPageComponent {
  public artwork: Artwork | null = null;

  private artworkId: Signal<number> = computed(() =>
    Number(this.activateRoute.snapshot.paramMap.get('artworkId')),
  );

  private artworksService = inject(ArtworksService);
  private activateRoute = inject(ActivatedRoute);

  constructor() {
    effect(() => {
      const id = this.artworkId();
      if (id) {
        this.artworksService.getArtworkById(id).subscribe({
          next: (artwork) => (this.artwork = artwork),
        });
      }
    });
  }

  protected get isDefaultImage(): boolean {
    return this.artwork?.image_url.includes('default-image.png') ?? true;
  }

  protected onImageError(): void {
    if (this.artwork) {
      this.artwork.image_url = 'default-image.png';
    }
  }
}
