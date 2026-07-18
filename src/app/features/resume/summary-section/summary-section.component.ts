import { Component, Input } from '@angular/core';

import { ResumeSummary } from '../resume-data';

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrls: ['./summary-section.component.scss'],
})
export class SummarySectionComponent {
  @Input() summary!: ResumeSummary;
}
