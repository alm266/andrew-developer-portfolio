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
      name: 'Vendor Brand Planning Tool',
      role: 'Developer',
      dateRange: 'March 2025 - Present',
      description:
        'Internal business application for planning which brands to buy and where to source them from for current and future seasons.',
      highlights: [
        'Built and led the effort to create an end-to-end testing suite with Cypress and TypeScript to prevent regressions after codebase updates.',
        'Expanded regression coverage to more than 110 test cases that run through the CI/CD pipeline.',
        'Ran weekly production deployments and post-release validation for selected updates, helping confirm releases were working as expected.',
      ],
      tools: ['Cypress', 'TypeScript', 'CI/CD'],
    },
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
      dateRange: 'Dec 2023 - Feb 2025',
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
