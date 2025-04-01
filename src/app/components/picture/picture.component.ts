import { Component, Input } from '@angular/core';
import { Artwork } from '@models/artwork.model';

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

  public ngOnInit(): void {
    this.artwork.title = this.truncateText(23);
  }

  public truncateText(maxLength: number): string {
    let element = this.artwork.title;
    if (element.length > maxLength) {
      element = element.slice(0, maxLength) + '...';
    }
    return element;
  }
}
