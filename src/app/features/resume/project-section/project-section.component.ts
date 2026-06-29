import { Component } from '@angular/core';

interface ResumeProject {
  name: string;
  role: string;
  dateRange: string;
  description: string;
  highlights: string[];
  tools: string[];
}

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent {
  readonly projects: ResumeProject[] = [
    {
      name: 'Order Approval Tool',
      role: 'Developer',
      dateRange: 'July 2022 - Feb 2024',
      description:
        'Internal business application for merchants to request formal team-leader approval for vendor orders tied to store product.',
      highlights: [
        'Created a supporting user-data API with Node.js, Express, and TypeScript that serves hundreds of requests for business users.',
        'Built the front-end approval workflow with Angular, TypeScript, Python, Jasmine, and Karma, supporting an application that processes millions of dollars in orders each week.',
      ],
      tools: ['Angular', 'TypeScript', 'Python', 'Node.js', 'Express', 'Jasmine', 'Karma'],
    },
    {
      name: 'Reserve Management Tool',
      role: 'Developer',
      dateRange: 'Dec 2023 - Feb 2024',
      description:
        'Internal business application for managing when merchandise ships from distribution centers to stores.',
      highlights: [
        'Built a front-end workflow for merchants to alter and share merchandise release schedules with Angular, TypeScript, and npm libraries.',
        'Enabled business users to manage millions of dollars in merchandise through near real-time schedule updates.',
      ],
      tools: ['Angular', 'TypeScript', 'npm'],
    },
  ];
}
