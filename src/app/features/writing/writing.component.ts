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
      eyebrow: 'Testing Approach',
      title: 'Testing Approach',
      date: 'Jun 16, 2026',
      summary:
        'A high-level overview of why test suites matter, the kinds of tests our team uses, and how tests protect expected application behavior over time.',
      linkLabel: 'Testing Approach',
      tags: ['Documentation', 'Developer Education', 'Testing', 'E2E', 'Unit Testing'],
      content: [
        {
          type: 'heading',
          text: 'Overview',
        },
        {
          type: 'paragraph',
          text: 'The goal of our test suite is to ensure that the behavior of our applications and APIs stays consistent and intentional as they evolve. Tests provide a layer of protection so updates to our code do not alter other logic as an unintended side effect.',
        },
        {
          type: 'paragraph',
          text: 'It is unrealistic for any developer to remember every decision, flow of logic, or edge case in an app. You can think of test cases as a checklist of expected outcomes for an application.',
        },
        {
          type: 'heading',
          text: 'Types Of Tests',
        },
        {
          type: 'paragraph',
          text: 'Our team uses a few different types of test cases.',
        },
        {
          type: 'list',
          items: [
            { text: 'Unit tests' },
            { text: 'End-to-end tests' },
            { text: 'Integration tests' },
          ],
        },
        {
          type: 'heading',
          text: 'How We Approach Testing',
        },
        {
          type: 'paragraph',
          text: 'As of writing this doc, we do not enforce TDD, or test-driven development. We follow something closer to BDD, or behavior-driven development. We refine user stories and acceptance criteria for all our tasks as tickets in JIRA.',
        },
        {
          type: 'paragraph',
          text: 'Our test cases help us ensure that these requirements are maintained as code changes.',
        },
        {
          type: 'paragraph',
          text: 'An important note is that generally we should not alter or remove test cases unless there was a requirement change or the logic being tested has been removed from the application.',
        },
        {
          type: 'heading',
          text: 'Unit',
        },
        {
          type: 'paragraph',
          text: 'Unit tests focus on testing and validating one distinct unit of a codebase. That unit is often one focused piece of logic that can be exercised independently.',
        },
        {
          type: 'list',
          items: [
            { text: 'A function' },
            { text: 'A class' },
            { text: 'A service' },
          ],
        },
        {
          type: 'paragraph',
          text: 'Any dependencies outside of this unit are mocked so they can be controlled while testing the scenarios the unit needs to handle.',
        },
        {
          type: 'paragraph',
          text: 'A good approach is to create at least one test case for each acceptance criterion in your ticket, plus test cases for edge cases you encounter, so those behaviors stay covered over time.',
        },
        {
          type: 'paragraph',
          text: 'In our Angular apps we use Karma and Jasmine for unit tests. For Python we use Nose2. Our Node APIs use Jest in both JavaScript and TypeScript.',
        },
        {
          type: 'heading',
          text: 'Example',
        },
        {
          type: 'paragraph',
          text: 'Let us say we have a ticket whose requirements involve displaying dollar values in a particular format in our application. We refine the following user story and acceptance criteria with our business partners.',
        },
        {
          type: 'heading',
          text: 'User Story',
        },
        {
          type: 'paragraph',
          text: 'As a user of Money Table Tool'
        },
        {
          type: 'paragraph',
          text: 'When I want to see all values in the Dollars column always have 2 decimal places, commas every 3 whole number digits and a $ symbol on the far left'
        },
        {
          type: 'paragraph',
          text: 'So that the values are easy to read and understand at a glance'
        },
        {
          type: 'heading',
          text: 'Acceptance Criteria',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            {
              text: 'Given the Working View Table, when a user looks at the Dollars column, then all cells should have a dollar sign ($) to the left of the number.',
            },
            {
              text: 'Given the Working View Table, when a user looks at the Dollars column, then there should always be exactly two decimal values visible.',
            },
            {
              text: 'Given the Working View Table, when a user looks at the Dollars column, then there should be a comma separating every three whole number values.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Here we have the function signature.',
        },
        {
          type: 'code',
          language: 'TypeScript',
          caption: 'Dollar formatter function signature',
          text: `function formatDollars(amount: number): string {
  ...
}`,
        },
        {
          type: 'paragraph',
          text: 'Once the function is written, we are ready to write test cases that ensure the logic remains consistent in the future. We do not need to worry about the implementation details for this example.',
        },
        {
          type: 'paragraph',
          text: 'Since we have three acceptance criteria, I will start with three test cases to cover those basics. For Jasmine/Karma and Jest, the syntax is very similar, so this test approach should apply to either setup.',
        },
        {
          type: 'code',
          language: 'TypeScript',
          caption: 'Unit tests for dollar formatting',
          text: `describe('formatDollars', () => {
  // These first three cover the basics that were asked for
  it('should add a "$" to the beginning of the string', () => {
    const amount = 5.55;
    const expectedResult = '$5.55';

    expect(formatterUtils.formatDollars(amount)).toEqual(expectedResult);
  });

  it('should round decimals to just two', () => {
    const amount = 5.3939;
    const expectedResult = '$5.39';

    expect(formatterUtils.formatDollars(amount)).toEqual(expectedResult);
  });

  it('should add a comma after three whole number digits', () => {
    const amount = 1999.99;
    const expectedResult = '$1,999.99';

    expect(formatterUtils.formatDollars(amount)).toEqual(expectedResult);
  });

  // We realize there are some edge cases that we should make sure we cover
  it('should add two zeroes to the decimal part of the string', () => {
    const amount = 5;
    const expectedResult = '$5.00';

    expect(formatterUtils.formatDollars(amount)).toEqual(expectedResult);
  });

  it('should add another zero to the decimal part of the string', () => {
    const amount = 5.1;
    const expectedResult = '$5.10';

    expect(formatterUtils.formatDollars(amount)).toEqual(expectedResult);
  });

  it('should not begin number with a comma', () => {
    const amount = 100;
    const expectedResult = '$100.00';

    expect(formatterUtils.formatDollars(amount)).toEqual(expectedResult);
  });

  it('should add multiple commas after every three whole number digits', () => {
    const amount = 1000000000;
    const expectedResult = '$1,000,000,000.00';

    expect(formatterUtils.formatDollars(amount)).toEqual(expectedResult);
  });
});`,
        },
        {
          type: 'paragraph',
          text: 'You can see above that we start by covering the basics of what was asked for. After that, we identify scenarios that might occur and make sure our logic handles them after future updates to the code.',
        },
        {
          type: 'heading',
          text: 'End-to-End',
        },
        {
          type: 'paragraph',
          text: 'End-to-End tests focus on testing and validating things at a feature level. This is typically accomplished by creating automated scripts that interact with the front-end application the same way a user would.'
        },
        {
          type: 'paragraph',
          text: 'Although it is possible to mock certain dependencies, our team’s approach is typically not to do so and instead to do all tests in the lower environments (Dev & Test) to avoid changing anything that could impact our business users. As long as we follow our trunk-based development pattern, only things that pass all tests in the lower environments will be promoted up to Production.'
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
        },
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
