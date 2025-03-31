import { Component } from '@angular/core';
import { PictureComponent } from '@components/picture/picture.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [PictureComponent],
})
export class HomePageComponent {}
