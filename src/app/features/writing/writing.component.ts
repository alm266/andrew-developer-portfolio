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
          text: 'The goal of our test suite is to ensure that the behavior of our applications and APIs stays consistent and we avoid regressions as they evolve. Tests provide a layer of protection so updates to our code do not alter other logic as an unintended side effect.',
        },
        {
          type: 'paragraph',
          text: 'It is unrealistic for any developer to remember every decision, logic path, or edge case in an app. You can think of test cases as a checklist of expected outcomes for an application.',
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
            { text: 'unit tests' },
            { text: 'End-to-end tests' },
            { text: 'integration tests' },
          ],
        },
        {
          type: 'heading',
          text: 'How We Approach Testing',
        },
        {
          type: 'paragraph',
          text: 'As of writing this article, we do not enforce TDD, or test-driven development. We follow something closer to BDD, or behavior-driven development. We refine user stories and acceptance criteria for all our tasks before recording and tracking all progress in a JIRA tickets.',
        },
        {
          type: 'paragraph',
          text: 'Our test cases help us ensure that these requirements are maintained as code changes.',
        },
        {
          type: 'paragraph',
          text: 'Generally we should not alter or remove test cases unless there was a requirement change or the logic being tested has been removed from the application.',
        },
        {
          type: 'heading',
          text: 'Unit',
        },
        {
          type: 'paragraph',
          text: 'Unit tests focus on validating one distinct unit of a codebase. That unit is often one focused piece of logic that can be exercised independently.',
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
          text: 'Let\'s say we have a ticket whose requirements involve displaying dollar values in a particular format in our application. We refine the following user story and acceptance criteria with our business partners.',
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
          text: 'When I view the Dollars column, I want every value to show two decimal places, commas every three whole-number digits, and a dollar sign on the far left.'
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
          text: 'Here is the function signature.',
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
          text: 'Since we have three acceptance criteria, we will start with three test cases to cover those basics. For Jasmine/Karma and Jest, the syntax is very similar, so this test approach should apply to either setup.',
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
          text: 'Integration',
        },
        {
          type: 'paragraph',
          text: 'The purpose of integration tests is to test that different units (as we defined in the Unit section) are functioning correctly when used together. In practice, integration tests can validate different kinds of connections between units. It could be an end-to-end integration where we test that the data is being transformed as expected when sent from the database to the API and then to the front-end application. It could be a component integration where we test the same thing but only between different components within the same front-end or back-end application.',
        },
        {
          type: 'paragraph',
          text: 'Currently, our team uses integration tests sparingly. They can be fragile since they need to be updated whenever the logic being validated has also been updated. They touch a wider set of logic than unit tests. They also depend on the code and data directly, unlike E2E tests which depend only on the UI of the app. Our team has found that E2E tests combined with unit tests cover much of the same ground as integration tests, but there are still scenarios where they can be valuable.',
        },
        {
          type: 'paragraph',
          text: 'You would want to use an integration test over another type of test when there is risk in the way that different units are working together. If individual units work correctly alone but sometimes break when running as part of a workflow, then that would be a good case for an integration test. If a unit test for something would require so much mocking that it barely resembles the actual usage, then an integration test might be better.',
        },
        {
          type: 'heading',
          text: 'Example',
        },
        {
          type: 'paragraph',
          text: 'Here is a simplified version of a snippet of code from an integration test in one of our APIs.',
        },
        {
          type: 'code',
          language: 'TypeScript',
          caption: 'Integration test for local adjustments',
          text: `describe('buildRows with local adjustments', () => {
  it('applies a local sales adjustment before returning the final row', () => {
    // Arrange: raw inputs from different parts of the flow
    const metrics = [
      { brand: 'BrandA', tySalesDollars: 1000 },
    ];

    const localAdjustments = [
      {
        primaryBrandOrVendor: 'BrandA',
        prop: 'tyTotalSalesDollars',
        value: 1500,
      },
    ];

    // Imagine buildRows does two real things:
    // 1. creates rows from metrics
    // 2. applies local adjustments before returning
    const result = buildRows({
      metrics,
      localAdjustments,
    });

    // Assert: final row includes the adjusted value
    expect(result.rows).toEqual([
      {
        type: 'primary',
        primaryBrandOrVendorName: 'BrandA',
        tyTotalSalesDollars: 1500,
      },
    ]);
  });
});`,
        },
        {
          type: 'paragraph',
          text: 'In our front-end application, users can make adjustments to the numbers in a table. These changes are only visible to them and are stored in their web browser\'s local storage. Here, if the user edits the TY Total Sales Dollars, then other metrics that use that metric also have to be calculated using this edited value. To do this, the front-end includes this number in its request for all the values for that row in the table from the API.',
        },
        {
          type: 'paragraph',
          text: 'This test makes sure that when a row is built, the local adjusted value that was given is actually used for the row. Here we could create additional test cases to make sure that any metrics that use TY Total Sales Dollars in their calculation are using the local adjusted value as well.',
        },
        {
          type: 'paragraph',
          text: 'Tests like these validate that, going forward, this business logic is preserved and any change would require us to notice the failing test and either opt in to changing the logic or recognize that it was changed by mistake and correct it.',
        },
        {
          type: 'heading',
          text: 'End-to-End',
        },
        {
          type: 'paragraph',
          text: 'End-to-End tests focus on validating things at a feature level. This is typically accomplished by creating automated scripts that interact with the front-end application the same way a user would.'
        },
        {
          type: 'paragraph',
          text: 'Although it is possible to mock certain dependencies, our team\'s approach is typically not to do so and instead to do all tests in the lower environments (Dev & Test) to avoid changing anything that could impact our business users. As long as we follow our trunk-based development pattern, only things that pass all tests in the lower environments will be promoted up to production.'
        },
        {
          type: 'paragraph',
          text: 'We do not have a test user for our Cypress tests currently (we were blocked within IT from creating one).'
        },
        {
          type: 'paragraph',
          text: 'The strength of E2E tests is that they can validate applications at a high level and they are less focused on the specifics of how the logic gets there meaning they are less coupled to the implementation details than unit tests. They are great for testing button clicks, page changes and other complex UI interactions.'
        },
        {
          type: 'paragraph',
          text: 'On the flip side, they are not usually great for validating numbers and complex calculations. This is because E2E tests are slow to run, especially compared to unit tests which are much better suited to validating code logic. You have to interact with the UI and then wait for it to finish reacting. They can also be flaky when there is rounding or truncating of decimals in the front-end code at any point in the logic.'
        },
        {
          type: 'heading',
          text: 'Example',
        },
        {
          type: 'paragraph',
          text: 'I will use the sidebar in one of our applications as an example of something we might test. Below is a screenshot from the application. You can see on the left-hand side there is a black sidebar that contains various buttons and UI pieces. We are going to focus on the X button on the right side.',
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
          text: 'Most test cases function by using selectors to grab an HTML element in our app and then check its state based on the CSS classes attached to it. The following is what the code for testing this interaction might look like in Cypress:'
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
 
	// Sidebar drawer should be initially open
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
            { text: 'We validate our starting state is set up a certain way' },
            { text: 'We run our tests' },
            { text: 'We return the UI to its starting state' },
          ],
        },
        {
          type: 'paragraph',
          text: 'The app ideally should be returned to a state that will allow the following test cases to run unencumbered.'
        },
        {
          type: 'heading',
          text: 'Conclusion',
        },
        {
          type: 'paragraph',
          text: 'The purpose of any test is to give us confidence that our software behaves the way we expect under different conditions. Different types of tests give us that confidence in different ways. Unit tests are concise tests that protect against regressions at a low level, usually around a function, class, or service. Integration tests validate that separate pieces of software behave as expected when they work together, not just when they run in isolation. E2E tests are useful for protecting user workflows because they simulate the way a user interacts with the application’s UI. The goal of our test suite is to call attention to changes in application behavior so engineers can decide whether the change is expected or an unintended regression. We do not need to use every type of test for every change. Instead, we want to choose the tests that give us meaningful confidence in the scenarios we expect the code to handle.',
        },
      ],
    },
    {
      eyebrow: 'Runbook Sample',
      title: 'Batch Job Runbook',
      summary:
        'A sanitized sample runbook for setting up, troubleshooting, configuring, scheduling, documenting, and promoting batch jobs.',
      linkLabel: 'Batch Job Runbook',
      tags: ['Documentation', 'Developer Education', 'Runbook', 'Internal Tools'],
      content: [
        {
          type: 'heading',
          text: 'Setup',
        },
        {
          type: 'paragraph',
          text: 'There are three versions of the Java application you will need the following executables:',
        },
        {
          type: 'list',
          items: [
            { text: 'DEV - This is where you would create and test a new job' },
            { text: 'UAT - This is where testing is done before a job is promoted to production' },
            { text: 'PROD - This is connected to the production server' },
          ],
        },
        {
          type: 'paragraph',
          text: 'DEV is where most of your actual work will be done in the batch job runner',
        },
        {
          type: 'paragraph',
          text: 'Work with the operations team in order to get your job promoted to production.',
        },
        {
          type: 'paragraph',
          text: 'You will need the following to access the batch job runner:',
        },
        {
          type: 'list',
          items: [
            { text: 'Confirm you have access to the batch job runner' },
            { text: 'You must have Java installed' },
          ],
        },
        {
          type: 'heading',
          text: 'Troubleshooting',
        },
        {
          type: 'paragraph',
          text: 'I ran into a few issues when first trying to get the batch job runner to work from my machine so I listed them here in case anyone also encounters them. Hopefully this will prevent you from spending the hours I had trying to figure out what was wrong.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            {
              text: 'Check that any file paths are absolute rather than relative paths. This means any path in an .env file or that is hardcoded needs to have the full path from the root directory. This is because the batch job runner always starts from the root when checking paths on the servers.',
            },
            {
              text: 'Make sure that after pulling down code from git or updating files in a directory on our servers, be sure to update the execution permissions for the main script. You can do this with the following command: chmod +x{script name}',
            },
            {
              text: 'In any python3 scripts, be sure to include this as the first line in your script or it may fail to run correctly: #!/usr/bin/python3',
            },
          ],
        },
        {
          type: 'heading',
          text: 'Jobs',
        },
        {
          type: 'paragraph',
          text: 'Simply put, jobs are tasks or scripts that are automatically run via the batch job runner. Jobs are run from scripts that live on our on-prem machines. Whenever they run into errors, the output is sent to the operations team who then forward it to whoever is the documented email address on the job.',
        },
        {
          type: 'paragraph',
          text: 'You can open the list of Jobs by going to Development > Jobs',
        },
        {
          type: 'paragraph',
          text: 'Select the application group for your team or project. This will then show a list of jobs we have saved under it. You can choose to edit one of the existing jobs or create a new job.',
        },
        {
          type: 'paragraph',
          text: 'Either way, a new window will open up with several tabs and options for configuring the job. I will mostly focus on the ones that are most relevant.',
        },
        {
          type: 'heading',
          text: 'General',
        },
        {
          type: 'paragraph',
          text: 'The General tab has several options for setting up a job.',
        },
        {
          type: 'heading',
          text: 'Name',
        },
        {
          type: 'list',
          items: [
            { text: 'What you called it when you created it in the Jobs Selector' },
            {
              text: 'If you plan to promote this job to PROD, make sure not to prepend something like DEV to the name because the name cannot be changed when it is promoted to other environments.',
            },
          ],
        },
        {
          type: 'heading',
          text: 'Description',
        },
        {
          type: 'list',
          items: [
            { text: 'Defaults to the name. Please add a brief description so others know what the purpose of this job is' },
          ],
        },
        {
          type: 'heading',
          text: 'Application',
        },
        {
          type: 'list',
          items: [
            { text: 'Same as the one selected in the Jobs Selector' },
          ],
        },
        {
          type: 'heading',
          text: 'Agent/Agent Group',
        },
        {
          type: 'list',
          items: [
            {
              text: 'This is the group of machines that are running the batch runner software. When the job is promoted to PROD it will run on the production server.',
            },
          ],
        },
        {
          type: 'heading',
          text: 'Queue',
        },
        {
          type: 'list',
          items: [
            { text: 'A set of jobs waiting to be run' },
            { text: 'Queues can be toggled on and off when needed' },
          ],
        },
        {
          type: 'heading',
          text: 'Library',
        },
        {
          type: 'list',
          items: [
            { text: 'This is the directory for the files that are needed to run this job' },
            { text: 'For batch job runner DEV this is pointing at the development server' },
          ],
        },
        {
          type: 'heading',
          text: 'Program Name',
        },
        {
          type: 'list',
          items: [
            { text: 'This is the file path to the script that is run from the development server' },
            {
              text: 'This is where you want to make sure the file you select has the correct execution permissions set as I shared in the Troubleshooting section earlier',
            },
          ],
        },
        {
          type: 'heading',
          text: 'Execution Options',
        },
        {
          type: 'heading',
          text: 'Notification',
        },
        {
          type: 'list',
          items: [
            { text: 'You can define types of exceptions that can occur in the script and set different messages that will be sent for each one' },
          ],
        },
        {
          type: 'heading',
          text: 'Primary Login ID',
        },
        {
          type: 'list',
          items: [
            { text: 'Make sure the batch job runner has the same permissions as a non-admin user on our server' },
            { text: 'Again make sure that the script has the correct execution permissions' },
          ],
        },
        {
          type: 'paragraph',
          text: "There are some other options on this tab but you don't need to worry about them for the time being.",
        },
        {
          type: 'heading',
          text: 'Schedule',
        },
        {
          type: 'paragraph',
          text: 'You can set a schedule for when a job should run. This allows you to select the days of the week as well as the dates for the beginning and end of the schedule. The end date has a default that you should leave alone unless you have a reason to make it end earlier.',
        },
        {
          type: 'paragraph',
          text: "You can use the Exceptions tab to define days where it should break the schedule for things like holidays or other days that offices are closed and the job doesn't need to run.",
        },
        {
          type: 'heading',
          text: 'Prompts',
        },
        {
          type: 'paragraph',
          text: 'The Prompts tab can be used to define parameters or flags you would normally type into the command line when executing a script manually.',
        },
        {
          type: 'heading',
          text: 'Documentation',
        },
        {
          type: 'paragraph',
          text: 'At a minimum, this needs to have contact information for the team that owns the job so that the operations team knows who to contact when a job fails or throws an exception. Not having at least that info will prevent the job from being promoted to PROD so please include it.',
        },
        {
          type: 'heading',
          text: 'Promoting to Production',
        },
        {
          type: 'paragraph',
          text: 'In order to promote a job from TEST to PROD, you must contact the operations team and let them know you are looking to do so. You will want to include the names of the jobs you are promoting as he will need to add them to the master list of approved jobs list in our system.',
        },
        {
          type: 'paragraph',
          text: 'You also will need to create the required change-management tickets and approvals.',
        },
        {
          type: 'paragraph',
          text: 'Here is a short checklist of things that should be handled before promoting to production:',
        },
        {
          type: 'list',
          items: [
            { text: 'Add job to list of approved jobs list in production' },
            { text: 'Set permissions for the file being run on the server. It should show as green in the terminal' },
            { text: 'Add the required interpreter comment to the top of any Python 3 file' },
          ],
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
