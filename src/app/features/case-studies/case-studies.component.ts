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
      "id": "therapy-with-ruth-optimizing-small-business-website-for-seo-1",
      "eyebrow": "Case study",
      "title": "Therapy With Ruth - Website Case Study",
      "date": "November 18, 2026",
      "summary": "Redesigning an independent therapy practice’s website with Angular, Sanity CMS, and Cloudflare, from content strategy and SEO to launch and early results.",
      "href": "https://therapywithruth.com/",
      "linkLabel": "Visit Therapy With Ruth",
      "showLinkAtTop": true,
      "tags": [
        "Angular",
        "Sanity CMS",
        "Cloudflare",
        "SEO",
        "UX",
        "Client Work"
      ],
      "content": [
        {
          "type": "heading",
          "text": "Project Overview"
        },
        {
          "type": "paragraph",
          "text": "I met a woman named Ruth, an independent psychotherapist who runs her own private practice. She already had a website she built in Wix, but she wanted to do a better job being found in search engine results in order to bring in more business."
        },
        {
          "type": "paragraph",
          "text": "I agreed to help Ruth with her therapy site and also showed her examples of what would be possible if she let me redesign it completely. I recommended it because I believed I could give potential clients a better user experience as well as a more consistent visual presentation that would build confidence in her business. This would be my first opportunity to apply my design skills to a production website for a client, outside of internal business applications."
        },
        {
          "type": "paragraph",
          "text": "In the middle of the project, at Ruth’s request, I had to pivot from using Wix and instead code the site myself. Despite that, in the end, I successfully launched a completely redesigned version of Therapy with Ruth, built from scratch with Angular. The new site is responsive, has a stronger technical SEO foundation, and includes an easy-to-use publishing workflow that allows Ruth to manage and publish her own blog posts. The new technology stack also reduced her ongoing website expenses to less than $20 per month. Since launch, Ruth has reported that two new clients found her through the website."
        },
        {
          "type": "heading",
          "text": "The Starting Point"
        },
        {
          "type": "paragraph",
          "text": "The original website was text-heavy, and its layouts didn't adapt consistently to different screen sizes. On some desktop viewports, text overlapped other elements, extended beyond the visible area, or lacked sufficient contrast against background images. The mobile experience was generally more positive. The main issue was the amount of text visitors needed to scroll through."
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/original-wix-specialties.png",
            "alt": "Original Wix Specialties page with overlapping text and content extending beyond the viewport.",
            "caption": "The original Specialties page showed why the redesign needed more flexible layouts and focused content."
          }
        },
        {
          "type": "paragraph",
          "text": "Several pages relied heavily on clinical terminology and lengthy explanations, which I felt could make Ruth's services difficult for prospective clients to understand quickly. Similarly, all of the services were listed on one page, as were all of the modalities. I questioned whether presenting all that information together made it harder for prospective clients to find what was relevant to them."
        },
        {
          "type": "paragraph",
          "text": "Ruth’s biography page was also written in the third person, which created distance between Ruth and the reader and revealed relatively little about the personal experiences she wanted prospective clients to connect with. Many of the images lacked context or a clear relationship to the content they accompanied."
        },
        {
          "type": "paragraph",
          "text": "The site already had some positive SEO elements, including a logical heading hierarchy, unique page titles and meta descriptions, and a sitemap that had been submitted to Google Search Console. However, there was little contextual internal linking beyond the main navigation, and many images lacked descriptive alternative text. Ruth's NYC location was mentioned only on the Contact page, and the site didn't clearly explain that she offered remote therapy sessions."
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/original-wix-homepage.png",
            "alt": "Original Therapy With Ruth homepage with violet and yellow foliage behind the title.",
            "caption": "The original Wix homepage, before the redesign."
          }
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/angular-homepage-hero.png",
            "alt": "Redesigned Angular homepage with orange flowers, a forest green background, and a consultation button.",
            "caption": "The final Angular homepage introduces Ruth’s services and New York location with a clear path to consultation."
          }
        },
        {
          "type": "heading",
          "text": "My Goals for the Redesign"
        },
        {
          "type": "paragraph",
          "text": "I wanted prospective clients to understand Ruth's services and approach to therapy, determine whether she might be a good fit for their needs, and have an easy path to contacting her."
        },
        {
          "type": "paragraph",
          "text": "Because choosing a therapist is highly personal, the site needed to represent Ruth's voice and help prospective clients get a sense of her as both a person and a professional. She also wanted to reach immigrant and first-generation communities she identifies with and hopes to support. Additionally, Ruth needed to be able to publish and manage her own blog content without relying on me to make updates."
        },
        {
          "type": "paragraph",
          "text": "From a technical perspective, I wanted the site to adapt reliably across desktop and mobile screens while remaining readable, accessible, and performant. The code also needed to be easy to understand and maintain for anyone who might work on it in the future. Finally, improving search visibility remained a priority, as SEO was the main reason Ruth originally approached me."
        },
        {
          "type": "heading",
          "text": "Discovery & Content Strategy"
        },
        {
          "type": "paragraph",
          "text": "I considered some feedback Ruth gave me about the earlier Wix revamp of the website: she felt that it didn't feel personal enough to her. After viewing other independent therapists' websites together and discussing what she liked and disliked about them, I decided it would be important to lean further into her story and voice when rewriting the site's content. I also wanted to include more personal photos, such as pictures of Ruth and her dog, rather than relying primarily on stock images of other people. Ruth also had photos from Peru, her birthplace, that I wanted to incorporate into the site's design."
        },
        {
          "type": "paragraph",
          "text": "Ruth was particularly interested in reaching immigrants, first-generation clients, and people who might identify with aspects of her own background and experiences. I wanted to bring more of those experiences into her biography and give prospective clients something they might connect with in Ruth's story."
        },
        {
          "type": "paragraph",
          "text": "I also started thinking about how I could better organize the information on the site to make it easier for visitors to find and digest what was relevant to them. Instead of listing every service together on one page, I wanted to give the major services their own dedicated pages so prospective clients could focus on the information most relevant to their needs. These individual pages would then be connected through a general Services page that provided an overview of what Ruth offered."
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/services-overview.png",
            "alt": "Areas of Support section with six cards linking to dedicated therapy service pages.",
            "caption": "A Services overview helps visitors choose the area of support most relevant to them."
          }
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/anxiety-depression-page.png",
            "alt": "Anxiety and Depression service page with an introduction, concerns to explore, and a consultation call to action.",
            "caption": "Dedicated service pages give each topic room for a focused explanation and a next step."
          }
        },
        {
          "type": "paragraph",
          "text": "Beyond the Services section, I mapped out the site's major pages around the questions I expected prospective clients to have: Who is Ruth? What can she help me with? What is working with her like? What should I know before getting started? And how can I contact her? Thinking about the site from this perspective helped me determine what information deserved its own page and how those pages should relate to one another."
        },
        {
          "type": "paragraph",
          "text": "Finally, I wanted each page to provide a clear call to action, giving prospective clients an easy path to schedule a consultation if they decided Ruth might be a good fit."
        },
        {
          "type": "heading",
          "text": "Visual Design & UX"
        },
        {
          "type": "paragraph",
          "text": "I wanted the site to communicate professionalism while still feeling personal and authentic to Ruth. It was important to her that visitors felt confident in her professional abilities while also being able to connect with her personality and her experiences growing up as an immigrant in the United States."
        },
        {
          "type": "paragraph",
          "text": "The initial Wix redesign used shades of violet, which Ruth liked, but I struggled to find imagery that complemented the palette. When rebuilding the site in Angular, I revisited the visual direction. Ruth had mentioned that orange was her favorite color, and I'd previously found a photograph of orange flowers that worked well as a hero image. We ultimately settled on forest green as the primary color, creating a calm, natural foundation, with orange accents adding warmth and reflecting Ruth's personality."
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/wix-redesign-support-section.png",
            "alt": "Earlier Wix redesign with a violet palette and a photograph of hands under the heading You Don’t Have to Navigate This Alone.",
            "caption": "The first Wix redesign explored a violet palette and stock photography."
          }
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/angular-support-section.png",
            "alt": "Angular redesign of the support section using forest green typography and a light green background.",
            "caption": "The Angular rebuild carries the same message into the final green and orange visual direction."
          }
        },
        {
          "type": "paragraph",
          "text": "I used Times New Roman for headings to give them a more distinctive, traditional appearance, while Arial kept the body text simple and readable. Both are widely supported system fonts, allowing me to maintain a consistent presentation without relying on externally hosted font files. I used dark forest green text over lighter backgrounds and white text over darker backgrounds to maintain readability throughout the site."
        },
        {
          "type": "paragraph",
          "text": "Beyond the color palette and typography, photography was another important part of making the website feel personal to Ruth. In the first Wix redesign, I relied heavily on stock images and the two or three existing pictures Ruth already had in her account, which contributed to her feeling that the site wasn't personal enough."
        },
        {
          "type": "paragraph",
          "text": "Ruth had also shared that a new client mentioned a photo of her smiling with her dog as one reason she felt drawn to her practice. When it came time for the Angular rebuild, I made it a point to get more meaningful photographs from Ruth that were unique to her and better represented her personality and experiences. In the hero section of the About page, I made sure to include a picture from her original Wix site showing Ruth with her Doberman peeking over her shoulder."
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/about-ruth-and-dog.png",
            "alt": "Redesigned About page featuring Ruth with her Doberman alongside the heading Every Person Carries a Story.",
            "caption": "Personal photography helps introduce Ruth as a person as well as a therapist."
          }
        },
        {
          "type": "paragraph",
          "text": "I occasionally used images as full-section backgrounds. The homepage hero features a close-up photograph of orange flowers among the branches of a tree. I also incorporated recognizable New York imagery, including an older MTA subway car and a photograph Ruth took of Manhattan from across the Hudson River. These helped establish a sense of place and visually connect the website to the city where she practices."
        },
        {
          "type": "paragraph",
          "text": "Beyond the visual elements, I also wanted the content itself to feel approachable and easy to navigate. To make the information easier to digest, I broke longer explanations into smaller sections with clear headings, short paragraphs, and occasional bullet points. This gave each idea more space and made the pages easier to scan. Links to the site's main pages remained available in the navigation bar at the top of the screen."
        },
        {
          "type": "paragraph",
          "text": "Most pages follow a consistent structure: a hero section that introduces the page's topic, supporting sections that provide relevant information, and a final call to action encouraging visitors to reach out to Ruth through the Contact page. The sections in between also help tell the story of how Ruth can support visitors with their mental health."
        },
        {
          "type": "paragraph",
          "text": "For example, the main Services page begins with a hero section introducing Ruth's belief that everyone has a unique story and that there is no \"one-size-fits-all\" approach to therapy. The next section lists different mental health concerns Ruth has experience addressing, with links to dedicated pages where visitors can learn more. Finally, the call-to-action section reinforces the message from the hero and encourages visitors to fill out the consultation form on the Contact page."
        },
        {
          "type": "paragraph",
          "text": "I designed the page layouts to adapt across desktop, tablet, and mobile screen sizes. Multi-column arrangements progressively stack vertically as the available width decreases, keeping text, images, buttons, and other elements within the viewport. On mobile, the desktop navigation is replaced with a hamburger menu that opens a full-screen list of the site's pages."
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/faq-desktop.png",
            "alt": "Desktop FAQ page with its introduction on the left and accordion questions on the right.",
            "caption": "On desktop, the FAQ introduction sits beside the expandable questions."
          }
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/faq-mobile.png",
            "size": "compact",
            "alt": "Mobile FAQ page with a hamburger menu and questions stacked below the introduction.",
            "caption": "On mobile, the FAQ becomes a single column for natural scrolling."
          }
        },
        {
          "type": "paragraph",
          "text": "Alongside the responsive layouts, I experimented with how visitors would move between sections of a page. Initially, I used headings and sometimes contrasting background colors to distinguish adjacent sections. Eventually, I introduced scroll snapping, allowing each section to snap into place as visitors scrolled. This helped visually separate the sections and limit the amount of competing content on screen."
        },
        {
          "type": "paragraph",
          "text": "I also limited the amount of content in each section and included adequate padding around its edges. The FAQ page required a different approach because its accordion-style content wasn't well suited to scroll snapping. On desktop, I kept the page title and description anchored on the left while the questions and answers could scroll freely on the right, with the call to action at the bottom. On mobile, the content stacks vertically and allows visitors to scroll naturally."
        },
        {
          "type": "heading",
          "text": "Moving Away from Wix"
        },
        {
          "type": "paragraph",
          "text": "From the beginning of the project, Ruth and I had discussed the possibility of creating a new website from scratch with code, as this would give us greater control over the site. With a custom implementation, I felt I could more easily adjust visual elements, functionality, and performance directly in the code rather than navigating Wix's editor to find the equivalent settings. We decided that we could revisit that plan a couple of years down the line and, for now, stick with Wix for this iteration."
        },
        {
          "type": "paragraph",
          "text": "As I was nearing completion, incorporating feedback from Ruth, configuring the site's SEO settings, and making final adjustments before launch, Ruth began dealing with a billing discrepancy with Wix. She received an unexpected $500 charge that she couldn't account for. Eventually, she was refunded, but the back-and-forth with customer service eroded her confidence in the platform. After the incident, she decided to cancel her subscription and asked me to move up our plans to build the website from scratch."
        },
        {
          "type": "paragraph",
          "text": "Although the Wix-specific implementation would need to be rebuilt, much of the design and written content could be reused. My experience building Angular applications meant I could use a familiar framework without slowing down the project by learning a new technology. However, moving away from Wix also meant finding replacements for the hosting and content-management features it had provided. The biggest new challenge was figuring out how Ruth could update content, such as her blog posts, without requiring me to make changes to the code and deploy them. I wanted to keep the ongoing costs of her new site as low as possible, so I researched tools that were free or inexpensive."
        },
        {
          "type": "paragraph",
          "text": "I chose Sanity CMS because it could integrate with the Angular application while providing Ruth with a user-friendly interface for creating and managing blog posts without needing to work directly with the code. I also chose Cloudflare to host the website using its free tier. Together, these tools gave us a way to move forward with a custom website while keeping hosting costs low and preserving Ruth's ability to manage her own content."
        },
        {
          "type": "heading",
          "text": "Technical Implementation"
        },
        {
          "type": "paragraph",
          "text": "I organized the Angular application using a feature-based directory structure. Each major page has its own folder, with components used exclusively by that page organized into subdirectories. I created shared components for the contact button, navigation bar, and footer, which I reused throughout the app. Organizing related code together makes the application easier to maintain by clarifying where components are used and reducing the need to search across unrelated directories."
        },
        {
          "type": "paragraph",
          "text": "Angular Router maps URLs to lazily loaded standalone page components, while child components compose each page's sections. During the Cloudflare build, Angular prerenders both static routes and blog pages generated from Sanity content into HTML. This means the initial page content is available without relying entirely on client-side JavaScript, supporting faster initial rendering and making the content more accessible to search-engine crawlers. In-app navigation uses Angular's RouterLink to move between pages without full reloads, while unknown URLs display a custom 404 page."
        },
        {
          "type": "paragraph",
          "text": "To allow Ruth to publish blog posts without developer involvement, I integrated Sanity CMS with the Angular application and connected Sanity's publishing events to Cloudflare's deployment pipeline. When Ruth publishes or updates an article in Sanity Studio, a webhook triggers a new Cloudflare build. The build retrieves the latest published content, prerenders the corresponding blog pages, and regenerates the sitemap before deploying the updated site."
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/sanity-blog-editor.png",
            "alt": "Sanity Studio blog editor with fields for the post title, page URL, and article summary.",
            "caption": "Sanity Studio gives Ruth a way to write and publish blog posts without editing code."
          }
        },
        {
          "type": "paragraph",
          "text": "The application is hosted using Cloudflare Workers, with GitHub connected to its deployment workflow. Pushing code to the main branch also triggers a build, allowing application updates and CMS content changes to use the same deployment process. Cloudflare installs the project's dependencies, builds the Angular application, and publishes the generated site after a successful deployment."
        },
        {
          "type": "media",
          "media": {
            "src": "assets/therapy-with-ruth/completed/publishing-workflow.png",
            "alt": "Publishing workflow: Sanity updates and GitHub pushes trigger Cloudflare to build Angular, prerender pages, regenerate the sitemap, and deploy the website.",
            "caption": "Content updates and code changes feed into the same automated build and deployment process."
          }
        },
        {
          "type": "paragraph",
          "text": "I wanted to keep the site's day-to-day maintenance manageable for Ruth. This involves ensuring that services and subscriptions, such as Calendly, her Psychology Today profile, and domain registration, remain current and that external links and contact information are accurate. Although the custom implementation requires occasional technical maintenance, I designed the site so Ruth could manage her blog content without developer involvement. Other responsibilities, such as managing external service subscriptions can be handled through the respective platforms that Ruth can access. More involved changes, such as dependency upgrades or modifications to the application's functionality, would still require a developer."
        },
        {
          "type": "heading",
          "text": "SEO Strategy & Implementation"
        },
        {
          "type": "paragraph",
          "text": "While developing an SEO strategy, I kept in mind Ruth's intended audience: young professionals in New York seeking mental health support. I wanted the site's content to reflect the concerns prospective clients might search for, particularly anxiety, trauma, and depression, while also emphasizing that Ruth serves clients in New York to help establish the site's relevance to local searches."
        },
        {
          "type": "paragraph",
          "text": "Ruth also expressed her desire to work with immigrants and first-generation Americans, drawing on her own experiences and those of her siblings growing up in the United States. I created a dedicated page about racism and immigrant experiences to make that area of Ruth's practice easier for prospective clients to discover and understand. I applied the same approach to Ruth's other services, creating dedicated pages that made each topic easier for visitors to explore and search engines to understand."
        },
        {
          "type": "paragraph",
          "text": "I organized each page into clearly defined sections with descriptive headings and relevant content. This helped visitors scan the pages while giving search engines a clearer understanding of each topic. I also added contextual internal links between related pages, making it easier for both visitors and crawlers to discover additional information."
        },
        {
          "type": "paragraph",
          "text": "Each page has its own title, description, canonical URL, social-sharing metadata, and relevant structured data. The sitemap is regenerated during each build, and a robots.txt file declares its location for search-engine crawlers. The Sanity CMS setup also allows alternative text to be provided for images included in blog posts. Together, these features help search engines discover, crawl, and interpret the site's content. They establish a technical foundation for SEO, while rankings will ultimately depend on factors such as content quality, local relevance, authority, backlinks, and time."
        },
        {
          "type": "paragraph",
          "text": "I submitted the site's XML sitemap through Google Search Console to help Google discover its pages. Google Search Console recorded approximately 786 impressions during the first three months after launch. While this provides an initial baseline, it's too early to determine whether the redesign has meaningfully improved organic search visibility."
        },
        {
          "type": "heading",
          "text": "Performance, Accessibility & Technical Challenges"
        },
        {
          "type": "paragraph",
          "text": "In the later stages of development, I noticed that many of the source images had much higher resolutions than necessary for the dimensions at which they would be displayed. Upon further inspection, I realized that the folder containing all my images was approximately 80 MB, a significant portion of the project's total asset size. By resizing and converting the images to WebP while retaining compressed JPEG fallbacks, I reduced the total image directory to approximately 5.8 MB."
        },
        {
          "type": "paragraph",
          "text": "I also made several accessibility improvements compared to the previous version of the site. I used semantic HTML and a consistent heading hierarchy to make the site's structure clearer for both visual navigation and assistive technologies. I provided descriptive alternative text for relevant images. Links and buttons are keyboard accessible, with visible focus indicators to help users navigate without a mouse. Text throughout the site was kept at readable sizes, with attention paid to maintaining contrast between text and backgrounds."
        },
        {
          "type": "paragraph",
          "text": "One accessibility issue I identified involves scroll snapping. Although the site respects reduced-motion preferences, browser zoom can make some sections difficult to navigate. I plan to revisit this behavior to ensure that it doesn't interfere with reading or navigation at different zoom levels."
        },
        {
          "type": "paragraph",
          "text": "Another challenge was ensuring that the layouts remained usable across different screen sizes and orientations. Throughout development, I tested the site using browser developer tools, resized desktop windows, and checked the layouts on several physical phones and tablets. I also tested both portrait and landscape orientations to identify unexpected overflow, spacing, or layout issues."
        },
        {
          "type": "paragraph",
          "text": "One issue I encountered involved a background image of an older NYC subway car interior. While the image worked well as a section background on desktop, I struggled to display enough of it on narrower screens in portrait orientation. After experimenting with different positioning and scaling options, I decided to display it as a decorative image rather than a full-section background on mobile. This allowed me to preserve the imagery without forcing the desktop layout onto smaller screens."
        },
        {
          "type": "heading",
          "text": "Launch, Outcomes & Early Results"
        },
        {
          "type": "paragraph",
          "text": "Throughout the design process, I periodically had Ruth review a local version of the website and walked her through the changes I had made. Once she approved the final version for launch, I transferred her domain away from Wix to a registrar with lower annual fees. The transfer took a couple of days, and the new Angular website went live through Cloudflare on August 18, 2026."
        },
        {
          "type": "paragraph",
          "text": "We originally planned to launch with three blog posts, but decided to prioritize getting Ruth's business website back online rather than waiting for the articles to be completed. Shortly after launch, I realized the empty blog page needed a more intentional presentation, so I added a \"Coming Soon\" message."
        },
        {
          "type": "paragraph",
          "text": "Throughout development, I made sure that accounts required to operate the site were either registered under Ruth's email address or could be transferred to her after development. The site's ongoing costs are limited to domain registrar payments for less than $20 a month, since hosting and content management operating are on free tiers."
        },
        {
          "type": "paragraph",
          "text": "Ruth felt the final site was an improvement over her original website and appreciated its professionalism, colors, imagery, and graphics. Although she still had some reservations about how personally the design represented her, she felt it was more aligned with the therapy websites she admired. The improved design and lower operating costs were meaningful benefits for her."
        },
        {
          "type": "paragraph",
          "text": "Since launch, Ruth has reported that two new clients found her through the website. While this is an encouraging early outcome, it doesn't establish whether the redesign or SEO improvements directly contributed to their discovery of her practice."
        },
        {
          "type": "paragraph",
          "text": "Google Search Console has begun recording impressions, but a review of its indexing reports revealed that some legacy Wix URLs remain indexed while several new service pages have not yet been indexed. I've submitted indexing requests for those pages and will continue monitoring their status."
        },
        {
          "type": "paragraph",
          "text": "Ruth is also reconsidering whether maintaining a blog fits her schedule, so that feature may be revised or removed in a future update."
        },
        {
          "type": "heading",
          "text": "Reflections & Lessons Learned"
        },
        {
          "type": "paragraph",
          "text": "I enjoyed working on this project and stretching my web design muscle. I found it both challenging and rewarding to work on a public-facing website where I was responsible for everything from beginning to end. I had to consider how prospective clients would find the site, how it would represent Ruth, and how she would feel about that representation."
        },
        {
          "type": "paragraph",
          "text": "One lesson was the importance of establishing a shared visual language early in the design process. My early designs didn't really start resonating with Ruth until we began looking through other therapists' websites together and identifying elements we liked. Describing a feeling about something can be imprecise. Working with examples gave us an easier way to understand each other's design preferences."
        },
        {
          "type": "paragraph",
          "text": "Working on this project was also a lesson in flexibility. Moving away from Wix near the end of the redesign reinforced that lesson. Even though I had to rebuild the site, I was able to carry forward much of the initial design work. I was reminded that I shouldn't become too attached to any particular implementation because it can distract from the client's current needs and priorities."
        },
        {
          "type": "paragraph",
          "text": "Another lesson was the importance of distinguishing between what a client needs and what I believe could be helpful. Early on, I suggested including a blog because I thought publishing articles could potentially expand the range of search queries for which the site might appear. Ruth agreed to the idea, but later reconsidered whether she had the time to maintain it. Going forward, I want to spend more time evaluating features that place an ongoing maintenance burden on my clients."
        },
        {
          "type": "paragraph",
          "text": "If I work on another website migration, I'll also make sure to document the existing site's URLs before beginning the rebuild. After launching Ruth's new website, I discovered several pages from the old Wix site that Google had indexed without my knowledge, including Spanish-language versions of its pages. Although this didn't prevent the new website from launching, it created additional SEO work I hadn't anticipated. In the future, I'll audit the existing site's URLs and SEO configuration more thoroughly so I can plan how to handle legacy pages before migrating."
        }
      ]
    }
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
