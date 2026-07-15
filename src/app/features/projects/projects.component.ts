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
          title: 'Make incoming changes visible without overwriting local work',
          description:
            'Added a notification button anchored in the top-right corner of the interface. Its badge count increased as updates arrived, and opening it showed who published each change and when it happened. Users could then request the newest published data without overwriting changes they had made locally.',
        },
      ],
      dataStateIntro:
        'The schedule brought together three layers of information. Keeping those layers distinct allowed users to retrieve newer shared data without losing work they had not published yet.',
      dataStates: [
        {
          label: 'Local adjustments',
          scope: 'Individual user',
          description:
            'Unpublished schedule changes being made on an individual user’s computer.',
        },
        {
          label: 'Published adjustments',
          scope: 'Shared through the API',
          description:
            'Changes a user published so teammates working with the same product could receive them.',
        },
        {
          label: 'Live adjustments',
          scope: 'Approved and operational',
          description:
            'Approved schedule changes already being acted upon and retrieved through the API.',
        },
      ],
      flow: [
        {
          label: 'Product subscription',
          detail: 'Opening a product hierarchy subscribes the client using its unique product ID',
        },
        {
          label: 'Published change',
          detail: 'A teammate publishes an update to that product’s release schedule',
        },
        {
          label: 'Server relay',
          detail: 'The alert server sends the message to every client subscribed to that product',
        },
        {
          label: 'Notification and refresh',
          detail: 'The UI records the update and lets users retrieve published data while preserving local adjustments',
        },
      ],
      outcomes: [
        {
          text: 'Supported business users managing millions of dollars in merchandise through near-real-time schedule updates.',
        },
        {
          text: 'Added visibility when teammates changed the same information another user was viewing.',
        },
        {
          text: 'Tracked 53 pilot items, including 18 issues, 27 enhancement requests, and 8 training, feedback, or question items.',
        },
        {
          text: 'Closed all 18 issues recorded in the pilot log: 15 were marked resolved and 3 were marked complete.',
        },
        {
          text: 'Completed or resolved 14 of 27 enhancement requests (52%), while moving 11 requests (41%) into Phase 2 so the rollout could prioritize the most important work.',
        },
      ],
      reflection:
        'The pilot reinforced the value of phased rollouts, short feedback loops, cross-functional communication, and training that gives users more than one way to learn. It also exposed the cost of beginning with high-level requirements spread across tickets, spreadsheets, and presentations. Future projects would benefit from a centralized source of truth, clearer requirement traceability, and timelines developed jointly with technical and business stakeholders.',
      tools: ['Angular', 'TypeScript', 'Socket.IO', 'Internal infrastructure'],
    },
  ];

  readonly tableOfContentsItems: ArticleTocItem[] = this.projects.map((project) => ({
    id: project.id,
    title: project.title,
  }));
}
