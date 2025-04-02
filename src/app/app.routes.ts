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
      import('@pages/favourite-page/favourite-page.component').then(
        (m) => m.FavouritePageComponent,
      ),
  },
  {
    path: 'artwork/:artworkId',
    title: 'Artwork',
    loadComponent: () =>
      import('@pages/favourite-page/favourite-page.component').then(
        (m) => m.FavouritePageComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
