import { Component } from '@angular/core';

import { Article, ArticleTocItem } from '../../shared';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss'],
})
export class WritingComponent {
  readonly articles: Article[] = [
    {
      eyebrow: 'E2E Testing Basics',
      title: 'E2E Testing Basics',
      date: 'Jul 3, 2026',
      summary:
        'Here is my simple approach to E2E testing and what I learned during the process of adding them to my project.',
      linkLabel: 'E2E Basics',
      tags: ['Documentation', 'Developer Education', 'Testing', 'E2E'],
      content: [
        {
          type: 'heading',
          text: 'Overview',
        },
        {
          type: 'paragraph',
          text: 'End-to-End tests focus on testing and validating things at a feature level. This is typically accomplished by creating automated scripts that interact with the front-end application the same way a user would.'
        },
        {
          type: 'paragraph',
          text: 'Although it is possible to mock certain dependencies, our team’s approach is typically not to do so and instead to do all tests in the lower environments (DEV) to avoid changing anything that could impact our business users. As long as we follow our trunk-based development pattern, only things that pass all tests in DEV will be promoted up to Production.'
        },
        {
          type: 'paragraph',
          text: 'We do not have a test user for our Cypress tests currently (we were blocked within IT from creating one).'
        },
        {
          type: 'paragraph',
          text: 'The strength of E2E tests is that they can test applications at a high level and are less focused on the specifics of how the logic gets there and should be less fragile than unit tests. They are great for testing button clicks, page changes and other complex UI interactions.'
        },
        {
          type: 'paragraph',
          text: 'On the flip side, they are not usually great for validating numbers and complex calculations. The reason for this is because E2E tests are slow to run especially compared to unit tests which are much better suited to . You have to interact with the UI and then wait for it to finish reacting. They can also be flaky when there is rounding or truncating of decimals in the front-end code at any point in the logic.'
        },
        {
          type: 'heading',
          text: 'Example',
        },
        {
          type: 'paragraph',
          text: 'I will use the sidebar in one of our applications as an example of something we might test. Below is a screenshot from the application. You can see on the left hand side there is a black sidebar that contains various buttons and UI pieces. We are going to focus on the X button on the right side.',
        },
        {
          type: 'media',
          media: {
            src: 'assets/docs-media/sidebar-button.png',
            alt: 'x button for closing side bar menu.'
          }
        },
        {
          type: 'paragraph',
          text: 'When the button is clicked, the sidebar is expected to be hidden from view and more of the main page becomes visible.',
        },
        {
          type: 'media',
          media: {
            kind:'video',
            src: 'assets/docs-media/sidebar-closing.mov',
            alt: 'gif of side bar menu closing.',
            mimeType: 'video/quicktime'
          }
        },
        {
          type: 'paragraph',
          text: 'Most test cases function by using what is referred to as Selectors to grab an HTML element in our app and then check its state based on the CSS classes attached to it. The following is what the code for testing this interaction might look like in Cypress:'
        },
        {
          type: 'code',
          language: 'TypeScript',
          caption: 'Cypress sidebar end to end test cases',
          text: `describe('Sidebar Display Button', () => {
  beforeEach(() => {
	cy.visit('/'); // Travel to root URL of our app
  });
 
  it('should be able to collapse/expand the sidebar drawer', () => {
 
	// We define our selectors for the button and the sidebar drawer
	const sidebarDisplayButton = '[data-cy="sidebar-btn"]';
	const sidebarDrawer = '[data-cy=sidebar-drawer]';
 
	// Sidebar drawer should be intially open
	cy.get(sidebarDrawer).should('have.class', 'mat-drawer-opened');
 
	// Sidebar drawer should collapse when button is clicked
	cy.get(sidebarDisplayButton).click();
	cy.get(sidebarDrawer).should('not.have.class', 'mat-drawer-opened');
 
	// Sidebar drawer should expand again from collapse state on button click
	cy.get(sidebarDisplayButton).click();
	cy.get(sidebarDrawer).should('have.class', 'mat-drawer-opened');
  })
})
`
        },
        {
          type: 'paragraph',
          parts: [
            { text: 'You can see lines 13 - 21 follow a similar pattern. They use ' },
            { text: 'cy.get(someSelector) ', color: '#2f9860' },
            { text: 'to grab the HTML element and then we chain a ' },
            { text: '.should(\'some.assertion\', \'some-class-to-find\') ', color: '#2f9860'  },
            { text: 'in order to assert against a CSS class.' }
          ],
        },
        {
          type: 'paragraph',
          text: 'From a high level'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            { text: 'We validate our starting state is setup a certain way' },
            { text: 'We run our tests' },
            { text: 'We return the UI to its starting state' },
          ],
        },
        {
          type: 'paragraph',
          text: 'The app ideally should be returned to a state that will allow whatever following test cases can run unencumbered.'
        }
      ],
    },
  ];

  readonly tableOfContentsItems: ArticleTocItem[] = this.articles.map((article, index) => ({
    id: this.getArticleId(article, index),
    title: article.title,
  }));

  getArticleId(article: Article, index: number): string {
    return article.id || `${this.slugify(article.title)}-${index + 1}`;
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
