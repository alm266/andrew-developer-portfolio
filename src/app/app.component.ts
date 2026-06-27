import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'andrew-developer-portfolio';

  private readonly updateVisualViewportOffset = () => {
    const offsetTop = window.visualViewport?.offsetTop ?? 0;

    this.document.documentElement.style.setProperty('--visual-viewport-top', `${offsetTop}px`);
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.updateVisualViewportOffset();
    window.visualViewport?.addEventListener('resize', this.updateVisualViewportOffset);
    window.visualViewport?.addEventListener('scroll', this.updateVisualViewportOffset);
  }

  ngOnDestroy(): void {
    window.visualViewport?.removeEventListener('resize', this.updateVisualViewportOffset);
    window.visualViewport?.removeEventListener('scroll', this.updateVisualViewportOffset);
    this.document.documentElement.style.removeProperty('--visual-viewport-top');
  }
}
