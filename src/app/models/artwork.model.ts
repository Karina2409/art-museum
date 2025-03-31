import { Thumbnail } from '@models/thumbnail.model';

export type Artwork = {
  id: number;
  title: string;
  artist_display: string;
  thumbnail: Thumbnail;
  is_public_domain: boolean;
};
