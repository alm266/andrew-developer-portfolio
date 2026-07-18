import { Component } from '@angular/core';

import { RESUME_DATA } from './resume-data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  readonly resumeData = RESUME_DATA;
}
