import { Artwork } from '@models/artwork.model';

export type Response = {
  data: Artwork[];
  config: { iiif_url: string };
  pagination: { total_pages: string };
};
