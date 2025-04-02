import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Artwork } from '@models/artwork.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  private apiUrl = 'https://api.artic.edu/api/v1/artworks';

  constructor(private http: HttpClient) {}

  public getArtworks(page: number = 1, limit: number = 3): Observable<Artwork[]> {
    const params = new HttpParams()
      .set('fields', 'id,title,artist_title,image_id,is_public_domain')
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http
      .get<{ data: Artwork[]; config: { iiif_url: string } }>(this.apiUrl, { params })
      .pipe(
        map((response) =>
          response.data.map((artwork) => ({
            ...artwork,
            image_url: `${response.config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`,
          })),
        ),
      );
  }
}
