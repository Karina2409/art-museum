import { Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { FavouritePageComponent } from '@pages/favourite-page/favourite-page.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'favourite',
    title: 'Favourite',
    component: FavouritePageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
