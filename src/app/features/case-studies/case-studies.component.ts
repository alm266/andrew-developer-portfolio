import { Component } from '@angular/core';

import { Article, ArticleTocItem } from '../../shared';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
})
export class CaseStudiesComponent {
  readonly caseStudies: Article[] = [
    {
      eyebrow: 'Case study',
      title: 'Add your first case study here',
      summary:
        'Use the shared article blocks for product context, design decisions, implementation notes, media, code, and outcomes.',
      tags: ['Product thinking', 'Interface design'],
      content: [
        {
          type: 'heading',
          text: 'Overview',
        },
        {
          type: 'paragraph',
          text: 'Replace this starter case study with a real project breakdown when you are ready.',
        },
      ],
    },
  ];

  readonly tableOfContentsItems: ArticleTocItem[] = this.caseStudies.map((caseStudy, index) => ({
    id: this.getCaseStudyId(caseStudy, index),
    title: caseStudy.title,
  }));

  getCaseStudyId(caseStudy: Article, index: number): string {
    return caseStudy.id || `${this.slugify(caseStudy.title)}-${index + 1}`;
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
