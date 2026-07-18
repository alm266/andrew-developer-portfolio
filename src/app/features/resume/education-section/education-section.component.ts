import { Component, Input } from '@angular/core';

import { ResumeEducation } from '../resume-data';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  @Input() education!: ResumeEducation;
}
