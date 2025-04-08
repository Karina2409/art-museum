import { Artwork } from '@models/artwork';

export type Response = {
  data: Artwork[];
  config: { iiif_url: string };
  pagination: { total_pages: string };
};
