import { Component } from '@angular/core';
import { Artwork } from '@models/artwork.model';
import { ArtworksService } from '@services/artworks/artworks.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artwork-info-page',
  imports: [],
  templateUrl: './artwork-info-page.component.html',
  standalone: true,
  styleUrl: './artwork-info-page.component.scss',
})
export class ArtworkInfoPageComponent {
  public artwork: Artwork | undefined;
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

  private getArtworkDetails(): void {
    this.artworksService.getArtworkById(this.artworkId).subscribe({
      next: (artwork) => {
        this.artwork = artwork;
      },
    });
  }
}
