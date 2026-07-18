import { Component } from '@angular/core';

import { RESUME_DATA } from './resume-data';
import { ResumePdfService } from './resume-pdf.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  readonly resumeData = RESUME_DATA;
  isDownloading = false;
  downloadError = '';

  constructor(private resumePdfService: ResumePdfService) {}

  async downloadResume(): Promise<void> {
    if (this.isDownloading) {
      return;
    }

    this.isDownloading = true;
    this.downloadError = '';

    try {
      await this.resumePdfService.download(this.resumeData);
    } catch {
      this.downloadError = 'The PDF could not be created. Please try again.';
    } finally {
      this.isDownloading = false;
    }
  }
}
