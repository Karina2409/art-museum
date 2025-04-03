import { Component, Input } from '@angular/core';
import { Artwork } from '@models/artwork.model';
import { Router } from '@angular/router';

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

  protected isDefaultImage = false;

  constructor(private router: Router) {}

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
