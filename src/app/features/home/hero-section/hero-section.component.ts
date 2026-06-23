import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
