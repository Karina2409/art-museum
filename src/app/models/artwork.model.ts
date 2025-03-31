import { Thumbnail } from '@models/thumbnail.model';

export type Artwork = {
  id: number;
  title: string;
  artist_title: string;
  thumbnail: Thumbnail;
  is_public_domain: boolean;
};
