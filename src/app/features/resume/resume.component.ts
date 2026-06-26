import { Component } from '@angular/core';

import { ExperienceEntry } from './experience-card/experience-card.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  readonly experienceEntries: ExperienceEntry[] = [
    {
      company: 'Burlington Stores, Inc.',
      role: 'Full-Stack Software Engineer II',
      dateRange: 'Jul 2022 - Present',
      location: 'Edgewater Park, New Jersey, United States',
      highlights: [
        'Build and support internal Angular, Python, and Microsoft Azure applications that help merchandising teams process millions of dollars of clothing orders daily.',
        'Created an Angular, Socket.IO, and Microsoft Azure workflow for managing store shipment timing and sending near real-time updates to teammates.',
        'Built Node.js, Express, JavaScript, SQL, Swagger, and Oracle-backed APIs that support near real-time user and application data for roughly 2,000 internal users.',
        'Designed sales and inventory API contracts with Confluence, TypeScript, and JSON objects, helping the team validate and consume production data within a three-month staged rollout.',
        'Implemented CI/CD testing practices with Karma, Jasmine, Nose2, Cypress, and GitHub Actions, contributing to an 80% reduction in pilot bugs compared with the prior project without automated testing.',
        'Support production deployments and release validation for internal tools, helping the team ship updates with more confidence and fewer regressions.',
      ],
    },
    {
      company: 'Price Manager',
      role: 'Data Manager',
      dateRange: 'Feb 2022 - Jun 2022',
      location: 'Teaneck, New Jersey, United States',
      highlights: [
        'Managed about a dozen client accounts by scraping competitor pricing with internal tools, keeping thousands of product SKUs current with pricing and related product data.',
        'Maintained client competitor portfolios by updating Excel-based pricing data and creating scraper templates that improved how internal tools captured comparable product information from competitor websites.',
      ],
    },
    {
      company: 'Statespace',
      role: 'Contract Unity Engineer',
      dateRange: 'Aug 2021 - Oct 2021',
      location: 'New York, United States',
      highlights: [
        'Resolved bugs by running unit tests and debugging the codebase, fixing several issues within the first two weeks.',
        'Made builds for QA testers by deploying branch fixes and hosting builds on Jenkins, improving tester verification and bug-fix turnaround.',
        'Built a collaborative event portal with the 1047 Games team by creating a prefab with camera logic, VFX, camera masks, and scripted teleport behavior.',
      ],
    },
    {
      company: 'Triple C Technologies, LLC',
      role: 'Contract Software Engineer',
      dateRange: 'Feb 2021 - Apr 2021',
      location: 'United States',
      highlights: [
        'Built a virtual C# demonstration exported to WebGL, earning over 100 views from prospective clients within the first three hours.',
        'Led and collaborated with a remote engineering team through frequent video calls and messaging to deliver, approve, and publish the project within a 45-day timeline.',
      ],
    },
    {
      company: 'Digital Continue',
      role: 'Software Engineer',
      dateRange: 'Sep 2017 - Oct 2020',
      location: 'Long Island City, Queens, NY',
      highlights: [
        'Implemented procedural minigame systems for SuperMash using a Prototype pattern and open-source Entity-Component architecture with roughly 200 runtime component properties.',
        'Created metadata tooling with C# and Unity libraries so designers could update data through spreadsheets instead of code.',
        'Authored modular MVC-style C# systems that made the codebase easier for multiple engineers to work in at once.',
        'Reviewed other engineers C# code through Jira and Git, helping catch issues before merge and saving engineers debugging time each week.',
        'Resolved more than 25 high-priority bugs per month by debugging and tracing through C# gameplay systems.',
      ],
    },
  ];
}
