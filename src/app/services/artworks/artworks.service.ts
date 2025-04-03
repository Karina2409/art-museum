import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Artwork } from '@models/artwork.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  public totalPages = signal<number>(100);

  private http = inject(HttpClient);
  private apiUrl = 'https://api.artic.edu/api/v1/artworks';

  public getArtworks(page: number = 1, limit: number = 3): Observable<Artwork[]> {
    const params = new HttpParams()
      .set('fields', 'id,title,artist_title,image_id,is_on_view')
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

  public getArtworkById(id: number): Observable<Artwork> {
    const params = new HttpParams().set(
      'fields',
      'id,title,date_display,image_id,is_on_view,dimensions,credit_line,department_title,artist_title',
    );

    return this.http
      .get<{ data: Artwork; config: { iiif_url: string } }>(`${this.apiUrl}/${id}`, { params })
      .pipe(
        map((response) => ({
          ...response.data,
          image_url: `${response.config.iiif_url}/${response.data.image_id}/full/843,/0/default.jpg`,
        })),
      );
  }

  public getTotalPages(): Observable<number> {
    const params = new HttpParams().set('limit', '0');

    return this.http.get<{ pagination: { total_pages: string } }>(this.apiUrl, { params }).pipe(
      map((response) => {
        const total = +response.pagination.total_pages;
        this.totalPages.set(total);
        return total;
      }),
    );
  }

  public searchArtworks(
    query: string,
    page: number = 1,
    limit: number = 3,
  ): Observable<{ artworks: Artwork[]; total_page: number }> {
    const params = new HttpParams()
      .set('fields', 'id,title,artist_title,image_id,is_on_view')
      .set('q', query)
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http
      .get<{
        data: Artwork[];
        config: { iiif_url: string };
        pagination: { total_pages: string };
      }>(`${this.apiUrl}/search`, { params })
      .pipe(
        map((response) => {
          const artworks = response.data.map((artwork) => ({
            ...artwork,
            image_url: `${response.config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`,
          }));

          const total_page = +response.pagination.total_pages;
          this.totalPages.set(total_page);

          return { artworks, total_page };
        }),
      );
  }
}
