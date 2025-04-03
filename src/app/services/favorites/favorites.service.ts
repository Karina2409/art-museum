import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private storageKey = 'favoriteArtworks';

  constructor() {}

  public getAllFavorites(): number[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  public toggleFavorite(artworkId: number): void {
    if (this.isFavorite(artworkId)) {
      this.removeFromStorage(artworkId);
      return;
    }
    this.addToStorage(artworkId);
  }

  public isFavorite(artworkId: number): boolean {
    return this.getAllFavorites().includes(artworkId);
  }

  private addToStorage(artworkId: number): void {
    const favorites = this.getAllFavorites();
    favorites.push(artworkId);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  private removeFromStorage(artworkId: number): void {
    const favorites = this.getAllFavorites().filter((id) => id !== artworkId);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
}
