import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnChanges } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import { Article } from '../../models/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements AfterViewChecked, AfterViewInit, OnChanges {
  @Input() articleId = '';

  @Input() article: Article = {
    title: '',
    summary: '',
  };

  private needsHighlight = true;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.highlightCodeBlocks();
  }

  ngAfterViewChecked(): void {
    if (this.needsHighlight) {
      this.highlightCodeBlocks();
    }
  }

  ngOnChanges(): void {
    this.needsHighlight = true;
  }

  isVideo(media: { kind?: string; src: string }): boolean {
    return media.kind === 'video' || /\.(mov|mp4|webm|ogg)$/i.test(media.src);
  }

  getCodeLanguageClass(language = ''): string {
    return `language-${this.normalizeLanguage(language)}`;
  }

  getCodeText(code: string): string {
    return code.trim();
  }

  private normalizeLanguage(language: string): string {
    const normalizedLanguage = language.toLowerCase().trim();
    const languageAliases: Record<string, string> = {
      html: 'markup',
      js: 'javascript',
      shell: 'bash',
      sh: 'bash',
      ts: 'typescript',
    };

    return languageAliases[normalizedLanguage] || normalizedLanguage || 'plaintext';
  }

  private highlightCodeBlocks(): void {
    Prism.highlightAllUnder(this.elementRef.nativeElement);
    this.needsHighlight = false;
  }
}
