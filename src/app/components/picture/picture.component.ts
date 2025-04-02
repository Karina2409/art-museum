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

  constructor(private router: Router) {}

  public navigateToArtworkInfo(id: number): void {
    this.router.navigate([`/artwork/${id}`]);
  }
}
