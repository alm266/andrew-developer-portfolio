import { Component, Input } from '@angular/core';

import { WritingArticleTocItem } from '../writing-article';

@Component({
  selector: 'app-writing-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent {
  @Input() items: WritingArticleTocItem[] = [];

  scrollToArticle(event: Event, item: WritingArticleTocItem): void {
    event.preventDefault();

    document.getElementById(item.id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    history.replaceState(null, '', `#${item.id}`);
  }
}
