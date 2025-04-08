import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Artwork } from '@models/artwork';
import { Response } from '@models/response';
import { NotificationsService } from '@services/notifications';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  public totalPages = signal<number>(100);

  private http = inject(HttpClient);
  private notification = inject(NotificationsService);
  private apiUrl = 'https://api.artic.edu/api/v1/artworks';

  private static getArtworkImageUrl(artwork: Artwork, iiif_url: string): string {
    let image_url;
    if (artwork.image_id !== null) {
      image_url = `${iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`;
    } else {
      image_url = 'default-image.png';
    }

    return image_url;
  }

  public getArtworks(page: number = 1, limit: number = 3): Observable<Artwork[]> {
    const params = new HttpParams()
      .set('fields', 'id,title,artist_title,image_id,is_on_view')
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<Response>(this.apiUrl, { params }).pipe(
      map((response) =>
        response.data.map((artwork) => {
          return {
            ...artwork,
            image_url: ArtworksService.getArtworkImageUrl(artwork, response.config.iiif_url),
          };
        }),
      ),
      catchError((error) => {
        this.notification.show('Ошибка при загрузке картин. Попробуйте позже', 'danger');
        return throwError(() => error);
      }),
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
          image_url: ArtworksService.getArtworkImageUrl(response.data, response.config.iiif_url),
        })),
        catchError((error) => {
          this.notification.show('Ошибка при загрузке картины по id. Попробуйте позже', 'danger');
          return throwError(() => error);
        }),
      );
  }

  public getTotalPages(): Observable<number> {
    const params = new HttpParams().set('limit', '0');

    return this.http.get<Response>(this.apiUrl, { params }).pipe(
      map((response) => {
        const total = +response.pagination.total_pages;
        this.totalPages.set(total);
        return total;
      }),
      catchError((error) => {
        this.notification.show(
          'Ошибка при получении количества страниц. Попробуйте позже',
          'danger',
        );
        return throwError(() => error);
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

    return this.http.get<Response>(`${this.apiUrl}/search`, { params }).pipe(
      map((response) => {
        const artworks = response.data.map((artwork) => ({
          ...artwork,
          image_url: ArtworksService.getArtworkImageUrl(artwork, response.config.iiif_url),
        }));

        const total_page = +response.pagination.total_pages;
        this.totalPages.set(total_page);

        return { artworks, total_page };
      }),
      catchError((error) => {
        this.notification.show('Ошибка при загрузке картин. Попробуйте позже', 'danger');
        console.log('error');
        return throwError(() => error);
      }),
    );
  }
}
