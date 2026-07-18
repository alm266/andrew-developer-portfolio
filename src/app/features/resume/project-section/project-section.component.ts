import { Component, Input } from '@angular/core';

import { ResumeProject } from '../resume-data';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent {
  @Input() projects: readonly ResumeProject[] = [];
}
