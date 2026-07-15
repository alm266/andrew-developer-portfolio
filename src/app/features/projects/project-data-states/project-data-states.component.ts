import { Component, Input } from '@angular/core';

import { ProjectDataState } from '../../../shared';

@Component({
  selector: 'app-project-data-states',
  templateUrl: './project-data-states.component.html',
  styleUrls: ['./project-data-states.component.scss'],
})
export class ProjectDataStatesComponent {
  @Input() intro = '';
  @Input() states: ProjectDataState[] = [];
}
