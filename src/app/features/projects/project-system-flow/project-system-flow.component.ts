import { Component, Input } from '@angular/core';

import { ProjectFlowStep } from '../../../shared';

@Component({
  selector: 'app-project-system-flow',
  templateUrl: './project-system-flow.component.html',
  styleUrls: ['./project-system-flow.component.scss'],
})
export class ProjectSystemFlowComponent {
  @Input() steps: ProjectFlowStep[] = [];
}
