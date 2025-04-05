import { Component, computed, effect, inject, signal, Signal } from '@angular/core';
import { Artwork } from '@models/artwork.model';
import { ArtworksService } from '@services/artworks/artworks.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-artwork-info-page',
  imports: [NgIf],
  templateUrl: './artwork-info-page.component.html',
  standalone: true,
  styleUrl: './artwork-info-page.component.scss',
})
export class ArtworkInfoPageComponent {
  public artwork = signal<Artwork | null>(null);

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
          next: (artwork) => this.artwork.set(artwork),
        });
      }
    });
  }

  protected get isDefaultImage(): boolean {
    return this.artwork()?.image_url.includes('default-image.png') ?? true;
  }
}
