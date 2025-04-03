import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private storageKey = 'favoriteArtworks';
  private favorites = signal<number[]>(this.getAllFavorites());

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

  public getFavorites(): WritableSignal<number[]> {
    return this.favorites;
  }

  private addToStorage(artworkId: number): void {
    const updatedFavorites = [...this.favorites(), artworkId];
    localStorage.setItem(this.storageKey, JSON.stringify(updatedFavorites));
    this.favorites.set(updatedFavorites);
  }

  private removeFromStorage(artworkId: number): void {
    const updatedFavorites = this.favorites().filter((id) => id !== artworkId);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedFavorites));
    this.favorites.set(updatedFavorites);
  }
}
