export interface WritingArticleMedia {
  src: string;
  alt: string;
  caption?: string;
  kind?: 'image' | 'video';
  mimeType?: string;
  poster?: string;
}

export interface WritingArticleBlock {
  type: 'paragraph' | 'media' | 'heading' | 'code';
  text?: string;
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
