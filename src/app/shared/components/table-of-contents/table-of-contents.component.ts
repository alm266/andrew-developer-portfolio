import { Component, Input } from '@angular/core';

import { ArticleTocItem } from '../../models/article';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent {
  @Input() items: ArticleTocItem[] = [];
  @Input() ariaLabel = 'Page contents';

  scrollToArticle(event: Event, item: ArticleTocItem): void {
    event.preventDefault();

    document.getElementById(item.id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    history.replaceState(null, '', `#${item.id}`);
  }
}
