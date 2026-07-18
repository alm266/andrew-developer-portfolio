import { Component, Input } from '@angular/core';

import { ResumeExperience } from '../resume-data';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  @Input() entry!: ResumeExperience;
}
