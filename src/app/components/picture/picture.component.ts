import { Component, Input } from '@angular/core';
import { Artwork } from '@models/artwork.model';
import { Router } from '@angular/router';
import { FavoritesService } from '@services/favorites/favorites.service';
import { Subscription } from 'rxjs';

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

  public isFavorite = false;
  protected isDefaultImage = false;
  private favoritesSubscription!: Subscription;

  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
  ) {}

  public ngOnInit(): void {
    this.updateFavoriteStatus();
    this.favoritesSubscription = this.favoritesService.getFavoritesObservable().subscribe(() => {
      this.updateFavoriteStatus();
    });
  }

  public toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.favoritesService.toggleFavorite(this.artwork.id);
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

  private updateFavoriteStatus(): void {
    this.isFavorite = this.favoritesService.isFavorite(this.artwork.id);
  }
}
