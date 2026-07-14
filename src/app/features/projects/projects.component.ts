import { Component } from '@angular/core';

import { ArticleTocItem, Project } from '../../shared';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      id: 'reserve-management-tool',
      number: '01',
      title: 'Reserve Management Tool',
      category: 'Product engineering · Internal platform',
      summary:
        'A scheduling workflow that helps merchandising teams manage when products move from distribution centers to stores—and recognize when teammates update the same information.',
      confidentialityNote:
        'This was an internal business application, so company-specific screens, data, and implementation details are omitted. This overview focuses on my responsibilities and the general shape of the problem.',
      facts: [
        { label: 'Role', value: 'Developer' },
        { label: 'Timeline', value: 'December 2023 – February 2025' },
        { label: 'Audience', value: 'Internal merchandising teams' },
        {
          label: 'Team',
          value: '[Placeholder: add team size and your collaborators]',
          isPlaceholder: true,
        },
      ],
      challenge:
        'Merchandising teams needed to alter and share product-release schedules across a business-critical workflow. Because teammates could be looking at related information at the same time, the experience also needed a way to communicate that the underlying data had changed.',
      contribution: [
        'Built the front-end workflow for viewing, changing, and sharing merchandise release schedules.',
        'Created a Socket.IO alert service that notified active users when teammates updated the data they were viewing.',
        'Connected interface behavior and near-real-time messaging across an Angular and TypeScript application hosted on company infrastructure.',
      ],
      decisions: [
        {
          title: 'Surface concurrent changes',
          description:
            'Used near-real-time alerts to make changes from other active users visible instead of allowing someone to continue working from silently outdated information.',
        },
        {
          title: 'Keep messaging focused',
          description:
            'Implemented the alert behavior as a Socket.IO service so real-time communication had a clear responsibility within the wider application workflow.',
        },
        {
          title: 'Make the response understandable',
          description:
            '[Placeholder: describe what the user saw after an alert, the action they could take, and why that interaction was chosen.]',
          isPlaceholder: true,
        },
      ],
      flow: [
        { label: 'Schedule workflow', detail: 'A user views or updates release timing' },
        { label: 'Angular interface', detail: 'The application handles the scheduling interaction' },
        { label: 'Application services', detail: 'The change moves through the existing system' },
        { label: 'Socket.IO alerts', detail: 'Active teammates receive an update notification' },
      ],
      outcomes: [
        {
          text: 'Supported business users managing millions of dollars in merchandise through near-real-time schedule updates.',
        },
        {
          text: 'Added visibility when teammates changed the same information another user was viewing.',
        },
        {
          text: '[Placeholder: add a measurable result, user response, adoption figure, or production-quality indicator.]',
          isPlaceholder: true,
        },
      ],
      reflection:
        '[Placeholder: explain what this project taught you about collaborative interfaces, communicating data freshness, or designing for high-stakes internal workflows.]',
      reflectionIsPlaceholder: true,
      tools: ['Angular', 'TypeScript', 'Socket.IO', 'Internal infrastructure'],
    },
  ];

  readonly tableOfContentsItems: ArticleTocItem[] = this.projects.map((project) => ({
    id: project.id,
    title: project.title,
  }));
}
