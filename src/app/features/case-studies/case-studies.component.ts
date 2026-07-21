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
      title: 'Therapy With Ruth: Optimizing Small Business Website for SEO',
      date: 'July 20, 2026',
      summary:
        'A website redesign and SEO case study for an online therapy practice in New York.',
      tags: ['SEO', 'UX', 'Client Work', 'Small Business'],
      content: [
        {
          type: 'paragraph',
          text: `For this case study, I am going to focus on some work I have done for a client who runs her own therapy practice. She is a practitioner who provides different mental health services for people within the state of New York, where she is licensed. She has a steady group of patrons who work with her, some of whom she has had for many years. So far, most people who find her business see her on Psychology Today or another similar online board of therapists that prospective clients can comb through.`,
        },
        {
          type: 'paragraph',
          text: `In early 2026, Ruth came to me and proposed that I help her with search engine optimization (SEO) for her website so that she might have a higher chance of new clients discovering her practice. She shared her current Wix website, which she had created herself. The site was simple; it had five static pages, each with information for clients to read and see what she could provide for them.`,
        },
        {
          type: 'paragraph',
          text: `These pages included Home, About, Specialties, Modalities, and Contact. The pages' purposes made sense for her business and what she wanted to accomplish. One of the first things I noticed as I went through the site was that the pages didn’t always scale and resize well for different screen sizes. There was a mobile phone version that fit everything into a narrow and vertically scrollable layout, but not much reactivity beyond that. Sometimes pages would become uncentered, and items on screen would be skewed to one side or the other.`,
        },
        {
          type: 'paragraph',
          text: `The next thing I noticed was that while the home page was simple with minimal text on screen, most other pages were very text heavy, which made them look busy and made it hard to pick out what information was important. She tried to fit everything on a page into one screen so the user did not have to scroll. This resulted in text covering most of each screen from edge to edge, which also contributed to the issues with reactivity. On different screen sizes, some elements were oddly anchored and would overlap with things they were not intended to. In mobile, this usually translated into scrolling through multiple screens of text.`,
        },
        {
          type: 'paragraph',
          text: `Trying not to stray too far from what she came to me for, I started doing some research on what makes for effective website SEO. Optimizing for search engines boils down to making it as easy as possible for search engines to read and understand the structure of your website. Every page should have a distinct and clear purpose. Ruth’s current site did this to some degree; however, the text content for Specialties and Modalities had too many definitions on the pages. They would benefit from being separated into their own pages or simplified in order not to overwhelm people interested in what she can provide. Additionally, the pages should also be well organized from an HTML perspective.`,
        },
        {
          type: 'paragraph',
          text: `Every page should have only one H1 tag, as well as a logical H2 and H3 tag hierarchy. Similar topics and subtopics should live at the same tag level. Page titles, button text, and alt text should be descriptive and easy to understand for anybody reading them. There should be no guessing or assuming what something is for. Doing these things also often means setting up proper accessibility features like alt text, descriptive image names, descriptive labels, and meta descriptions. Next, we need to make sure that prospective clients know where Ruth’s services are available.`,
        },
        {
          type: 'paragraph',
          text: `It was important that her website make it clear that she is licensed to practice in New York state only. We needed to make sure that her home page, about page, and contact page all told visitors that she works in the state of NY. This tells search engines that they should prioritize showing her site in local search results rather than when someone searches in California or Maine. It’s also a good idea to include some internal linking between our pages.`,
        },
        {
          type: 'paragraph',
          text: `Internal linking helps search engines understand the relationship between different pages on our websites. Having links to other pages means users can click them to move between different pages, which in turn communicates to Google and Yahoo’s web crawlers what subjects are important to each page topic they come across. They build a clearer page map for your website based on what links to what. All these things should also work the same way when a website is viewed from a mobile device.`,
        },
        {
          type: 'paragraph',
          text: `Some search engines in recent years have begun valuing mobile sites above the desktop versions. If a website is formatted oddly or text overlaps with other items when it is in mobile view, it negatively impacts the user experience, and search engines like Google will not reward you for it. The more easily users are able to engage with your website, the more the site’s SEO is positively impacted. People look at their phones on lunch breaks, during commercial breaks during television shows, or while riding the train. There is value in making sure a website can be scanned quickly and understood. With all that in mind, I began to map out a plan for how I needed to tackle SEO for Ruth’s therapy website.`,
        },
        {
          type: 'paragraph',
          text: `The first thing it needed was a reevaluation of its structure. The new site structure looked like the following:`,
        },
        {
          type: 'media',
          media: {
            src: 'assets/therapy-with-ruth/site-structure.png',
            alt: 'Site structure diagram for the redesigned Therapy With Ruth website.',
          },
        },
        {
          type: 'paragraph',
          text: `As previously mentioned, the Services and Modalities pages had too many things listed on single pages. I decided to take the services and break them out into their own concise pages for people to view while maintaining a single parent page that links to them all. This way, users can jump directly to what they want to see without wading through all the other services in the process. I removed the Modalities page entirely, as I found that there was a lot of technical detail there that users would likely not understand or be looking for. I decided these could be briefly mentioned elsewhere, like on her About page.`,
        },
        {
          type: 'paragraph',
          text: `I added an FAQ page so that Ruth can add any questions that are typically asked and any that come up in the future, all in an easy-to-find place. I also added a Blog page because I read that blogs are an effective way to show search engines that the site is active and being used, so they should keep serving it in new search queries. It also provides another way for Ruth to connect with current and potential clients, as well as build trust in her and the work she does. I asked for her help in populating some common FAQs she receives. I also gave her the homework of writing a few brief posts that we could launch the site with so that people could see them right away. She sounded enthusiastic at the idea of engaging with clients in this new way, so I believe it could be a fruitful addition.`,
        },
        {
          type: 'paragraph',
          text: `The next challenge I took on was the main home and landing page. This is likely to be the first page that visitors will see when they come across her website, so I spent a lot of time making sure that it made a strong first impression and call to action. I started by deciding on theme colors for the new website.`,
        },
        {
          type: 'media',
          media: {
            src: 'assets/therapy-with-ruth/color-palette.png',
            alt: 'Color palette options for the redesigned Therapy With Ruth website.',
          },
        },
        {
          type: 'paragraph',
          text: `I wanted to pick colors that were not overly distracting to users. Cool colors like blue often trigger a calmness in the human brain when we see it. I started there and then tweaked it until I found a few sets that Ruth was happy with. Having multiple gave me some wiggle room in case I encountered something that didn’t work well and I needed to pivot. Fortunately, Wix has an easy way to save colors for a theme and apply them when needed. Next, I thought about the sections I wanted to include on the Home page.`,
        },
        {
          type: 'paragraph',
          text: 'I began with the Hero section.',
        },
        {
          type: 'media',
          media: {
            src: 'assets/therapy-with-ruth/new/desktop/homepage-hero-desktop.png',
            alt: 'Desktop view of the redesigned Therapy With Ruth homepage hero section.',
          },
        },
        {
          type: 'paragraph',
          text: `This is the first thing on the first page that users see, so I wanted something that would begin to build trust in Ruth as a therapist. I decided something simple like the image of flowers would be inviting, with brownie points because they were orange, Ruth’s favorite color. I made the H1 title “Therapy for Anxiety, Trauma & Depression in New York,” which worked on a few levels. It told readers that she is a therapist, gave a few examples of issues she is trained to help with, and told them that she works in New York. Under that, I added a paragraph that provided a bit more detail and a button to the contact page just under that as an early call to action.`,
        },
        {
          type: 'paragraph',
          text: `The following sections build that story for readers. They include the Problem, Services, About, Approach, Getting Started, Location, FAQs, and Contact/Call to Action sections. Effectively, I wanted to present different pieces of information that potential clients would be looking for and give them an easy way to jump to them. I also wanted to form my story, that Ruth is professional and trustworthy, so readers should reach out for a consultation. The homepage acts as a synopsis of what the rest of the site has to offer to users. Each section gives a glimpse into the information you find, as well as encourages you to explore by using buttons with links. Every page, with the exception of the Blog and Contact page itself, has a call to action at the end with a button linking to the Contact page. All the pages support the main story, that Ruth can help you with your mental health needs and that you should reach out to her to learn more about how. Her about page creates the story that she shared with me, that she is an immigrant who has had to work through various challenges in her life that have come along with that. This is important to her story and serves as a basis for connecting with the clients she is trying to find to work with.`,
        },
        {
          type: 'paragraph',
          text: `Once I created all the pages and rewrote the text content, it was time to launch the site. As of this writing, the site has not yet launched, unfortunately, as I have been working with my client on some feedback she has on the site. I will update this article with more detailed results once I have them to provide.`,
        },
        {
          type: 'paragraph',
          text: `So far, I have learned a few things from this experience. I learned a lot about the specifics of search engine optimization, a topic I only had a high-level understanding of prior. I studied effective accessibility and how important it is for pages to be easily digestible by users. Working in Wix showed me that while the tools you use are important, what is most important is how you use them. I did my best to play to the strengths of this platform, to understand how it goes about handling things like resizing and mobile view, as well as HTML structure and alt tags. I have also learned about the process of parsing feedback. Oftentimes, people can tell you when something is wrong, but don’t always have the understanding or vocabulary to say how to fix it. I realized it is often most valuable to observe the actions of users and to dissect what the root cause is for things that they are pointing out rather than take all suggestions at face value. There are times when that is only a band-aid over a bigger or the wrong issue. I have had to inspect what I was being told in order to understand what my client was really trying to convey to me, so I could deliver something that better met her vision for the project.`,
        },
        {
          type: 'paragraph',
          text: `As I said, I intend to update this article shortly with further results, so more details to come!`,
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
