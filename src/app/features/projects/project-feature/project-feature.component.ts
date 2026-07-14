import { Component, Input } from '@angular/core';

import { Project } from '../../../shared';

@Component({
  selector: 'app-project-feature',
  templateUrl: './project-feature.component.html',
  styleUrls: ['./project-feature.component.scss'],
})
export class ProjectFeatureComponent {
  @Input() project!: Project;

  sectionId(section: string): string {
    return `${this.project.id}-${section}`;
  }
}
