import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('@pages/home-page/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'favourite',
    title: 'Favourite',
    loadComponent: () =>
      import('@pages/favorite-page/favorite-page.component').then((m) => m.FavouritePageComponent),
  },
  {
    path: 'artwork/:artworkId',
    title: 'Artwork',
    loadComponent: () =>
      import('@pages/artwork-info-page/artwork-info-page.component').then(
        (m) => m.ArtworkInfoPageComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
