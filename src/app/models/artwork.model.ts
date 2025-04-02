export type Artwork = {
  id: number;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  image_id: string;
  image_url: string;
  date_display?: string;
  dimensions?: string;
  credit_line?: string;
  department_title?: string;
};
