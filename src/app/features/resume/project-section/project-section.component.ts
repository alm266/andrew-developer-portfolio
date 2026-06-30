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
  // TODO: Add button to export resume to PDF by pulling data from page into formatted template
  readonly projects: ResumeProject[] = [
    {
      // TODO: Include link to live site
      name: 'Therapy with Ruth Website',
      role: 'Designer / Developer',
      dateRange: 'April 2025 - Present',
      description:
        'Independent website project for a therapy practice, focused on building trust with potential clients, conveying essential information about the practice and making a call to action to reach out.',
      highlights: [
        'Designed and built a responsive website experience with attention to tone, readability, accessibility, and trust-building for prospective therapy clients.',
        'Structured page content and navigation around common visitor needs, including learning about the practice, understanding services, and making contact.',
        'Designed the site with SEO and Google Search discovery in mind so potential new clients can more easily find the practice online.',
        'Planning a deeper case study covering design decisions, content strategy, visual direction, and implementation.',
      ],
      tools: ['Responsive design', 'SEO', 'Content strategy', 'Accessibility'],
    },
    {
      name: 'Vendor Brand Planning Tool',
      role: 'Developer',
      dateRange: 'March 2025 - Present',
      description:
        'Internal business application for planning which brands to buy and where to source them from for current and future seasons.',
      highlights: [
        'Built and led the effort to create an end-to-end testing suite with Cypress and TypeScript to prevent regressions after codebase updates.',
        'Led the project testing effort by writing backend unit and integration tests, beginning the front-end Cypress setup, and collaborating with teammates to complete the E2E coverage.',
        'Ran weekly production deployments and post-release validation for selected updates, helping confirm releases were working as expected.',
      ],
      tools: ['Cypress', 'TypeScript', 'CI/CD'],
    },
    {
      name: 'Reserve Management Tool',
      role: 'Developer',
      dateRange: 'Dec 2023 - Feb 2025',
      description:
        'Internal business application for managing when merchandise ships from distribution centers to stores.',
      highlights: [
        'Built a front-end workflow for merchants to alter and share merchandise release schedules with Angular, TypeScript, and npm libraries.',
        'Created a Socket.IO alert service hosted on company on-prem servers to notify users when teammates updated the same data they were viewing.',
        'Enabled business users to manage millions of dollars in merchandise through near real-time schedule updates.',
      ],
      tools: ['Angular', 'TypeScript', 'Socket.IO', 'On-prem servers', 'npm'],
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
  ];
}
