import { Component, Input } from '@angular/core';

import { ResumeExperience } from '../resume-data';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent {
  @Input() entries: readonly ResumeExperience[] = [];
}
