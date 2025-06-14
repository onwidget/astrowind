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

export interface Post {
  id: string;
  slug: string;
  permalink: string;

  publishDate: Date;
  updateDate?: Date;

  title: string;
  excerpt?: string;
  image?: string;

  category?: TaxonomyType;
  tags?: Array<TaxonomyType>;
  author?: string;

  draft?: boolean;

  metadata?: MetaData;

  Content?: any;
  content?: string;
  
  headings?: Array<{ depth: number; slug: string; text: string }>;

  readingTime?: number;
}
