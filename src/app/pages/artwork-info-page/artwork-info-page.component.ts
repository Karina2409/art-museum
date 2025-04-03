import { Component } from '@angular/core';
import { Artwork } from '@models/artwork.model';
import { ArtworksService } from '@services/artworks/artworks.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-artwork-info-page',
  imports: [NgIf],
  templateUrl: './artwork-info-page.component.html',
  standalone: true,
  styleUrl: './artwork-info-page.component.scss',
})
export class ArtworkInfoPageComponent {
  public artwork!: Artwork;
  protected isDefaultImage = false;
  private artworkId: number = 0;
  private subscription: Subscription | undefined;

  constructor(
    private artworksService: ArtworksService,
    private activateRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe((params) => {
      this.artworkId = params['artworkId'];
      this.getArtworkDetails();
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected onImageError(event: Event): void {
    if (!(event.target instanceof HTMLImageElement)) return;
    const target: HTMLImageElement = event.target;
    target.src = 'default-image.png';
    this.isDefaultImage = true;
  }

  private getArtworkDetails(): void {
    this.artworksService.getArtworkById(this.artworkId).subscribe({
      next: (artwork) => {
        this.artwork = artwork;
      },
    });
  }
}
