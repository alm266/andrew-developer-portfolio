import { Component, Input } from '@angular/core';

import { ProjectPreview } from '../../../shared';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent {
  @Input() preview!: ProjectPreview;
}
