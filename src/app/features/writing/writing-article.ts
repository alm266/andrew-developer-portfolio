export interface WritingArticleMedia {
  src: string;
  alt: string;
  caption?: string;
  kind?: 'image' | 'video';
  mimeType?: string;
  poster?: string;
}

export interface WritingArticleTextPart {
  text: string;
  color?: string;
}

export interface WritingArticleListItem {
  text?: string;
  parts?: WritingArticleTextPart[];
}

export interface WritingArticleBlock {
  type: 'paragraph' | 'media' | 'heading' | 'code' | 'list';
  text?: string;
  parts?: WritingArticleTextPart[];
  items?: WritingArticleListItem[];
  ordered?: boolean;
  caption?: string;
  language?: string;
  media?: WritingArticleMedia;
}

export interface WritingArticle {
  id?: string;
  title: string;
  summary?: string;
  content?: WritingArticleBlock[];
  eyebrow?: string;
  date?: string;
  href?: string;
  linkLabel?: string;
  tags?: string[];
}

export interface WritingArticleTocItem {
  id: string;
  title: string;
}
