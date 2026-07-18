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
      id: 'vendor-brand-planning-tool',
      number: '02',
      title: 'Vendor Brand Planning Tool',
      category: 'Quality engineering · Developer experience',
      summary:
        'How I expanded the team’s unit-testing foundation by leading its first end-to-end testing effort for a business-critical planning application.',
      confidentialityNote:
        'This was an internal business application, so company-specific screens, data, and implementation details are omitted. This overview focuses on the testing strategy, team practices, and delivery process.',
      facts: [
        { label: 'Role', value: 'Developer / testing lead' },
        { label: 'Timeline', value: 'March 2025 – Present' },
        { label: 'Audience', value: 'Merchandising Planners' },
        {
          label: 'Team',
          value: '5–10 developers over time, collaborating across 3 core teams, an external requirements partner, and 2 early executive stakeholders',
        },
      ],
      challenge:
        'The application helps business users plan which brands to buy and where to source them for current and future seasons. My team built the front end and a backend wrapper API, the business reporting team owned the product, and a data team supplied source data through its API. Early requirements came from two executive stakeholders and artifacts prepared by an external requirements partner. When those executives transitioned off the project, differences emerged between the original direction and the current product owner’s needs. At the same time, the team was extending its unit-testing foundation with its first automated end-to-end workflows, creating a need for requirements that were both traceable and testable.',
      contribution: [
        'Built and led the effort to establish the team’s first end-to-end test suite with Cypress and TypeScript.',
        'Wrote backend unit and integration tests, began the front-end Cypress setup, and collaborated with teammates to complete coverage of important user workflows.',
        'Participated in a rotating schedule for weekly production deployments and supported teammates with post-release validation.',
        'Documented the team’s approach to unit, integration, and end-to-end testing so the reasoning behind the suite could be understood and reused.',
      ],
      decisions: [
        {
          title: 'Translate requirements into testable behavior',
          description:
            'Converted direction distributed across stakeholder conversations, presentations, and spreadsheets into refined user stories and acceptance criteria. Connecting tests to those criteria gave the team a shared interpretation of expected behavior and made discrepancies easier to identify.',
        },
        {
          title: 'Reconsider what belongs in an E2E test',
          description:
            'Early versions of the Cypress suite used E2E tests to validate many numeric values in tables and the relationships between them. Those tests were difficult to stabilize and initially very flaky. The experience showed that deterministic calculations and numeric relationships are often better protected by focused unit tests, while E2E coverage is more valuable for critical user workflows.',
        },
        {
          title: 'Make testing part of delivery',
          description:
            'Combined automated checks in lower environments with a rotating deployment schedule and shared post-release validation so quality was evaluated throughout the release process.',
        },
      ],
      flowSectionLabel: 'Delivery view',
      flowTitle: 'From requirements to release confidence',
      flowIntro:
        'The testing practice connected expected behavior to automated coverage and carried that confidence through deployment and production validation.',
      flow: [
        {
          label: 'Refined requirements',
          detail: 'User stories and acceptance criteria define the behavior an update must preserve',
        },
        {
          label: 'Layered coverage',
          detail: 'Unit, integration, and Cypress tests cover logic, system connections, and user workflows',
        },
        {
          label: 'Lower-environment checks',
          detail: 'Updates are exercised before they can be promoted toward production',
        },
        {
          label: 'Release validation',
          detail: 'The team rotates weekly deployments and works together to validate selected updates after release',
        },
      ],
      outcomes: [
        {
          text: 'Introduced the team’s first project-level end-to-end test suite, expanding on the unit-testing foundation established during RMT.',
        },
        {
          text: 'Established automated protection for backend behavior and important front-end user workflows.',
        },
        {
          text: 'Helped the team share ownership of end-to-end coverage instead of leaving the suite with a single contributor.',
        },
        {
          text: 'Contributed to weekly production releases by taking turns deploying and helping validate selected updates after teammates deployed.',
        },
        {
          text: 'Built a 604-test automated suite: 80 Cypress E2E tests, 244 front-end unit tests, and 280 backend tests comprising 262 unit and 18 integration tests.',
        },
      ],
      reflection:
        'The E2E suite became valuable, but getting it into a reliable state required more effort than it should have. We initially used Cypress to validate many individual table values and relationships between numbers. Testing those rules through the full interface made the suite difficult to maintain and especially flaky early in development. If I approached the project again, I would move more deterministic calculations and data relationships into faster, focused unit tests and reserve E2E coverage for the critical workflows users complete through the interface. The broader lesson was that test value does not come from exercising behavior at the highest possible level; it comes from choosing the lowest level that provides meaningful confidence. Clear acceptance criteria, direct access to stakeholders, durable product ownership, and a shared source of truth would also make that coverage easier to design correctly.',
      tools: ['Cypress', 'TypeScript', 'Unit testing', 'Integration testing', 'CI/CD'],
    },
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
          value: '5-person application team within a 4-team collaboration',
        },
      ],
      challenge:
        'Merchandising teams needed to alter and share product-release schedules across a business-critical workflow. Delivery spanned four teams: a five-person application team built the front end and parts of the backend, the business team owned the product, a data team supplied source data through an API, and another integration team exposed business logic that connected to additional systems. Because teammates could be looking at related information at the same time, the experience also needed a way to communicate that the underlying data had changed.',
      contribution: [
        'Built the front-end workflow for viewing, changing, and sharing merchandise release schedules.',
        'Created a Socket.IO alert service that notified active users when teammates updated the data they were viewing.',
        'Connected interface behavior and near-real-time messaging across an Angular and TypeScript application hosted on company infrastructure.',
        'Led the front-end testing effort and helped establish unit tests as a meaningful requirement where the team previously had no consistent expectation for them. Most backend development was owned by another team.',
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
        {
          text: 'Built a suite of 1,007 front-end unit tests covering the majority of the front-end codebase, supported by beginning automated testing early in development.',
        },
      ],
      reflection:
        'The pilot reinforced the value of phased rollouts, short feedback loops, cross-functional communication, and training that gives users more than one way to learn. It also exposed the cost of beginning with high-level requirements spread across tickets, spreadsheets, and presentations. Future projects would benefit from a centralized source of truth, clearer requirement traceability, and timelines developed jointly with technical and business stakeholders.',
      tools: ['Angular', 'TypeScript', 'Socket.IO', 'Unit testing', 'Internal infrastructure'],
    },
    {
      id: 'order-approval-tool',
      number: '03',
      title: 'Order Approval Tool',
      category: 'Full-stack engineering · Business workflow',
      summary:
        'An internal application that gives merchants a formal way to request team-leader approval for vendor orders tied to store product.',
      confidentialityNote:
        'This was an internal business application, so company-specific screens, order data, and implementation details are omitted. This overview focuses on the approval workflow, supporting API, and my full-stack contribution.',
      facts: [
        { label: 'Role', value: 'Developer' },
        { label: 'Timeline', value: 'July 2022 – February 2024' },
        { label: 'Audience', value: 'Merchants and team leaders' },
        {
          label: 'Team',
          value: '4-person application team within a 4-team collaboration',
        },
      ],
      challenge:
        'Merchants needed a formal, traceable workflow for requesting approval before vendor orders could move forward. A standard order could travel from the Buyer level through as many as four levels of the merchant hierarchy, while approval from a higher level removed the need for outstanding approvals below it. Pack & Hold orders—which remain in a distribution center for an extended period—followed a separate route through a P&H Manager and team outside the regular hierarchy. The application also needed background automation for opted-in approvals, user-cache maintenance, and organizational changes affecting the merchant hierarchy. Together, these systems supported a process handling millions of dollars in orders each week.',
      contribution: [
        'Built the front-end approval workflow with Angular and TypeScript in an application supported by Python services.',
        'Created a supporting user-data API with Node.js, Express, and TypeScript.',
        'Created three Python scripts and configured them as automated jobs on company servers: one processed opted-in automatic approvals, one maintained the team’s user cache, and one emailed a business team about merchant-hierarchy changes.',
        'Connected the approval experience to user information needed by business users throughout the workflow.',
        'Implemented approval behavior for the standard merchant hierarchy and the separate Pack & Hold process.',
        'Used Jasmine and Karma while developing and validating the front-end application.',
      ],
      decisions: [
        {
          title: 'Give user data a focused API boundary',
          description:
            'Created a dedicated Node.js and Express API to supply the user information needed by the approval workflow instead of coupling that responsibility directly to the interface.',
        },
        {
          title: 'Move recurring operations into scheduled jobs',
          description:
            'Separated recurring work from the interactive application by creating Python jobs for opted-in automatic approvals, user-cache updates, and email notifications when changes in the merchant hierarchy required business attention.',
        },
        {
          title: 'Model hierarchical approvals without redundant steps',
          description:
            'Supported as many as four approval levels beginning with the Buyer. When someone higher in the hierarchy approved an order first, lower outstanding approvals were no longer required.',
        },
        {
          title: 'Keep specialized approval paths separate',
          description:
            'Handled Pack & Hold orders through a distinct approval path owned by a P&H Manager and team rather than forcing those orders through the regular merchant hierarchy.',
        },
        {
          title: 'Design for changing business rules',
          description:
            'Structured the implementation modularly so hierarchy rules and approval behavior could change without requiring unrelated parts of the workflow to be rewritten.',
        },
      ],
      flowSectionLabel: 'Workflow view',
      flowTitle: 'A simplified approval-routing model',
      flowIntro:
        'The workflow selected an approval route based on the order type, resolved the appropriate hierarchy, and avoided requesting approvals that a higher-level decision had already satisfied.',
      flow: [
        {
          label: 'Classify the order',
          detail: 'The workflow identifies whether the vendor order follows the standard or Pack & Hold process',
        },
        {
          label: 'Resolve approvers',
          detail: 'Standard orders use up to four merchant levels; Pack & Hold orders use their separate management path',
        },
        {
          label: 'Collect decisions',
          detail: 'Approvers review the request using the user and order context supplied to the application',
        },
        {
          label: 'Update the workflow',
          detail: 'A higher-level approval satisfies lower outstanding steps and moves the order forward',
        },
      ],
      outcomes: [
        {
          text: 'Supported an application that processes millions of dollars in vendor orders each week.',
        },
        {
          text: 'Built a user-data API that serves hundreds of requests for internal business users.',
        },
        {
          text: 'Automated three recurring operational workflows with Python jobs running on company servers.',
        },
        {
          text: 'Delivered a full-stack workflow spanning the Angular interface, Python application services, and a Node.js and Express API.',
        },
        {
          text: 'Supported both a four-level merchant approval hierarchy and a separate Pack & Hold approval path within the same application.',
        },
      ],
      reflection:
        'This project taught me how much understanding the business domain matters when translating requirements into software. I learned how merchant hierarchies operate, how merchants think about vendor orders, and why specialized cases such as Pack & Hold need to remain visible in the design. Technically, it taught me to organize code modularly so changing one business rule does not require rewriting or risking unrelated behavior. Seeing how tightly coupled logic made future changes harder also led directly to my testing work on RMT: when a system evolves, automated tests help ensure that improving one part does not quietly break another.',
      tools: ['Angular', 'TypeScript', 'Python', 'Node.js', 'Express', 'Jasmine', 'Karma'],
    },
  ];

  readonly tableOfContentsItems: ArticleTocItem[] = this.projects.map((project) => ({
    id: project.id,
    title: project.title,
  }));
}
