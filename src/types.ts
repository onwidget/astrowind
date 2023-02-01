export interface Post {
  id: string;
  slug: string;
  permalink: string;

  publishDate: Date;
  updateDate?: Date;

  title: string;
  excerpt?: string;
  image?: string;

  category?: string;
  tags?: Array<string>;
  author?: string;

  draft?: boolean;

  Content?: unknown;
  content?: string;

  readingTime?: number;

  metadata?: MetaData;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}
