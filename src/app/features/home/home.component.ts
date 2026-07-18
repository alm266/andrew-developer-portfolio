import { Component } from '@angular/core';

interface FeaturedProject {
  title: string;
  category: string;
  summary: string;
  evidence: string;
  tools: string[];
  fragment: string;
  image?: string;
  imageAlt?: string;
  proofValue?: string;
  proofLabel?: string;
}

interface FeaturedWriting {
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  fragment: string;
}

interface Capability {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly featuredProjects: FeaturedProject[] = [
    {
      title: 'Order Approval Tool',
      category: 'Full-stack engineering · Business workflow',
      summary:
        'A hierarchical approval application supported by an API and server-side automation for recurring business operations.',
      evidence:
        'Built three Python jobs for automatic approvals, cache maintenance, and merchant-hierarchy notifications.',
      tools: ['Angular', 'Python', 'Node.js', 'Express'],
      fragment: 'order-approval-tool',
      proofValue: '3',
      proofLabel: 'automated Python jobs',
    },
    {
      title: 'Reserve Management Tool',
      category: 'Product engineering · Internal platform',
      summary:
        'A merchandise scheduling workflow that kept local work safe while alerting users to newly published changes.',
      evidence:
        'Led front-end testing from early development and created a Socket.IO alert service for active collaborators.',
      tools: ['Angular', 'TypeScript', 'Socket.IO', 'Unit testing'],
      fragment: 'reserve-management-tool',
      proofValue: '1,007',
      proofLabel: 'front-end unit tests',
    },
    {
      title: 'Therapy with Ruth Website',
      category: 'Web design · Front-end development',
      summary:
        'A responsive therapy-practice website designed to establish trust, explain services clearly, and make reaching out approachable.',
      evidence:
        'Designed the content, visual direction, responsive experience, accessibility approach, and search-focused structure.',
      tools: ['Responsive design', 'Accessibility', 'SEO', 'Content strategy'],
      fragment: 'therapy-with-ruth',
      image: 'assets/therapy-with-ruth/new/desktop/homepage-hero-desktop.png',
      imageAlt:
        'Desktop homepage hero for Therapy with Ruth featuring orange flowers, practice information, and a contact button.',
    },
  ];

  readonly featuredWriting: FeaturedWriting[] = [
    {
      eyebrow: 'Testing approach',
      title: 'Choosing Tests That Provide Meaningful Confidence',
      summary:
        'A practical overview of unit, integration, and end-to-end tests—and how to choose the right level for the behavior being protected.',
      tags: ['Testing', 'Developer education', 'Documentation'],
      fragment: 'testing-approach-1',
    },
    {
      eyebrow: 'Runbook sample',
      title: 'Batch Job Runbook',
      summary:
        'A sanitized documentation sample for configuring, troubleshooting, scheduling, and promoting recurring batch jobs.',
      tags: ['Runbook', 'Internal tools', 'Technical writing'],
      fragment: 'batch-job-runbook-2',
    },
  ];

  readonly capabilities: Capability[] = [
    {
      number: '01',
      title: 'Full-stack product engineering',
      description:
        'Interfaces, APIs, business workflows, and scheduled automation shaped around how people actually use the system.',
    },
    {
      number: '02',
      title: 'Testing and reliability',
      description:
        'Unit, integration, and end-to-end strategies that protect important behavior without making delivery harder.',
    },
    {
      number: '03',
      title: 'Technical communication',
      description:
        'Requirements, documentation, and developer education that make complex systems easier to understand and maintain.',
    },
  ];
}
