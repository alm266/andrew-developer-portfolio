import { Component, Input } from '@angular/core';

export interface ExperienceEntry {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  @Input() entry!: ExperienceEntry;
}
