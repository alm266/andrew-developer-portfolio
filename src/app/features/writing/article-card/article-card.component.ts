import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

import { WritingArticle } from '../writing-article';

@Component({
  selector: 'app-writing-article',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent {
  @Input() articleId = '';

  @Input() article: WritingArticle = {
    title: '',
    summary: '',
  };

  private readonly highlightedCode = new Map<string, SafeHtml>();

  constructor(private readonly sanitizer: DomSanitizer) {}

  isVideo(media: { kind?: string; src: string }): boolean {
    return media.kind === 'video' || /\.(mov|mp4|webm|ogg)$/i.test(media.src);
  }

  highlightCode(code: string, language = ''): SafeHtml {
    const prismLanguage = this.normalizeLanguage(language);
    const cacheKey = `${prismLanguage}:${code}`;
    const cachedCode = this.highlightedCode.get(cacheKey);

    if (cachedCode) {
      return cachedCode;
    }

    const grammar = Prism.languages[prismLanguage];
    const highlightedCode = grammar
      ? Prism.highlight(code.trim(), grammar, prismLanguage)
      : this.escapeHtml(code.trim());
    const safeCode = this.sanitizer.bypassSecurityTrustHtml(highlightedCode);

    this.highlightedCode.set(cacheKey, safeCode);
    return safeCode;
  }

  getCodeLanguageClass(language = ''): string {
    return `language-${this.normalizeLanguage(language)}`;
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

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
