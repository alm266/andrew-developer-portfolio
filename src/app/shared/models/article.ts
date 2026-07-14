export interface ArticleMedia {
  src: string;
  alt: string;
  caption?: string;
  kind?: 'image' | 'video';
  mimeType?: string;
  poster?: string;
}

export interface ArticleTextPart {
  text: string;
  color?: string;
}

export interface ArticleListItem {
  text?: string;
  parts?: ArticleTextPart[];
}

export interface ArticleBlock {
  type: 'paragraph' | 'media' | 'heading' | 'subheading' | 'code' | 'list';
  text?: string;
  parts?: ArticleTextPart[];
  items?: ArticleListItem[];
  ordered?: boolean;
  caption?: string;
  language?: string;
  media?: ArticleMedia;
}

export interface Article {
  id?: string;
  title: string;
  summary?: string;
  content?: ArticleBlock[];
  eyebrow?: string;
  date?: string;
  href?: string;
  linkLabel?: string;
  tags?: string[];
}

export interface ArticleTocItem {
  id: string;
  title: string;
  children?: ArticleTocItem[];
}
