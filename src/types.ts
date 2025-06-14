export interface MetaData {
  title?: string;
  description?: string;
  image?: string | ImageMetadata | null;
  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;
  ogTitle?: string;
  ogType?: string;
  ogImage?: string | ImageMetadata | null;
  twitterTitle?: string;
  twitterImage?: string | ImageMetadata | null;
  twitterCard?: string;
  publishDate?: Date;
  updateDate?: Date;
  author?: string;
  category?: string;
  tags?: string[];
}