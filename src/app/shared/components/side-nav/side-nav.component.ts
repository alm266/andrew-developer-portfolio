import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnDestroy {
  isNavOpen = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnDestroy(): void {
    this.renderer.removeStyle(this.document.body, 'background-color');
  }

  openNav(): void {
    this.isNavOpen = true;
    this.renderer.setStyle(this.document.body, 'background-color', 'rgba(0, 0, 0, 0.32)');
  }

  closeNav(): void {
    this.isNavOpen = false;
    this.renderer.removeStyle(this.document.body, 'background-color');
  }
}
