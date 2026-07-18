export interface ResumeContact {
  name: string;
  title: string;
  email: string;
  location: string;
  githubLabel: string;
  githubUrl: string;
  linkedinLabel: string;
  linkedinUrl: string;
}

export interface ResumeHeader {
  eyebrow: string;
  title: string;
  introduction: string;
  profileImage: string;
}

export interface ResumeSummary {
  heading: string;
  body: string;
  focus: string;
}

export interface ResumeExperience {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  highlights: readonly string[];
}

export interface ResumeProject {
  name: string;
  role: string;
  dateRange: string;
  description: string;
  highlights: readonly string[];
  tools: readonly string[];
  liveUrl?: string;
}

export interface ResumeEducationDetail {
  label: string;
  value: string;
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  secondaryStudy: string;
  graduation: string;
  details: readonly ResumeEducationDetail[];
}

export interface ResumeSkillGroup {
  label: string;
  skills: readonly string[];
}

export interface ResumeData {
  contact: ResumeContact;
  header: ResumeHeader;
  summary: ResumeSummary;
  experience: readonly ResumeExperience[];
  projects: readonly ResumeProject[];
  education: ResumeEducation;
  skillGroups: readonly ResumeSkillGroup[];
}

export const RESUME_DATA: ResumeData = {
  contact: {
    name: 'Andrew Marshall',
    title: 'Full-Stack Software Engineer',
    email: 'andrewleonmarshall@gmail.com',
    location: 'U.S. Eastern time · NYC opportunities preferred',
    githubLabel: 'github.com/alm266',
    githubUrl: 'https://github.com/alm266',
    linkedinLabel: 'linkedin.com/in/andrewleonmarshall',
    linkedinUrl: 'https://www.linkedin.com/in/andrewleonmarshall',
  },
  header: {
    eyebrow: 'Resume',
    title: 'Experience, skills, and selected career highlights.',
    introduction:
      'A scannable version of the portfolio for hiring teams, collaborators, and anyone comparing roles, tools, achievements, and focus areas.',
    profileImage: 'assets/andrew-profile-clean-wall.png',
  },
  summary: {
    heading: 'Code, design, writing, and developer experience.',
    body:
      "I'm a software engineer interested in the space where code, design, writing, and developer experience meet. After working across internal web apps, game development, APIs, testing, and production support, I'm looking for opportunities that let me use that technical background in more communicative and user-centered ways:",
    focus:
      'design-minded engineering, technical writing, developer education, and developer advocacy.',
  },
  experience: [
    {
      company: 'Burlington Stores, Inc.',
      role: 'Full-Stack Software Engineer II',
      dateRange: 'Jul 2022 - Present',
      location: 'Edgewater Park, New Jersey, United States',
      highlights: [
        'Build and support internal Angular, Python, and Microsoft Azure applications that help merchandising teams process millions of dollars of clothing orders daily.',
        'Created three Python automation jobs for opted-in order approvals, user-cache maintenance, and merchant-hierarchy change notifications on company servers.',
        'Created an Angular, Socket.IO, and Microsoft Azure workflow for managing store shipment timing and sending near real-time updates to teammates.',
        'Built Node.js, Express, JavaScript, SQL, Swagger, and Oracle-backed APIs that support near real-time user and application data for roughly 2,000 internal users.',
        'Designed sales and inventory API contracts with Confluence, TypeScript, and JSON objects, helping the team validate and consume production data within a three-month staged rollout.',
        'Led testing efforts across two internal applications, establishing 1,007 front-end unit tests across most of RMT and helping build VBPT’s 604-test suite, including the team’s first 80 Cypress E2E tests.',
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
  ],
  projects: [
    {
      name: 'Therapy with Ruth Website',
      role: 'Designer / Developer',
      dateRange: 'April 2025 - Present',
      description:
        'Independent website project for a therapy practice, focused on building trust with potential clients, conveying essential information about the practice and making a call to action to reach out.',
      highlights: [
        'Designed and built a responsive website experience with attention to tone, readability, accessibility, and trust-building for prospective therapy clients.',
        'Structured page content and navigation around common visitor needs, including learning about the practice, understanding services, and making contact.',
        'Designed the site with SEO and Google Search discovery in mind so potential new clients can more easily find the practice online.',
        'Planning a deeper case study covering design decisions, content strategy, visual direction, and implementation.',
      ],
      tools: ['Responsive design', 'SEO', 'Content strategy', 'Accessibility'],
    },
    {
      name: 'Vendor Brand Planning Tool',
      role: 'Developer',
      dateRange: 'March 2025 - Present',
      description:
        'Internal business application for planning which brands to buy and where to source them from for current and future seasons.',
      highlights: [
        'Built and led the effort to create the team’s first end-to-end testing suite with Cypress and TypeScript to prevent regressions after codebase updates.',
        'Led a testing effort that now includes 80 E2E tests, 244 front-end unit tests, and 280 backend tests comprising 262 unit and 18 integration tests.',
        'Participated in a rotating schedule for weekly production deployments and supported teammates with post-release validation.',
      ],
      tools: ['Cypress', 'TypeScript', 'CI/CD'],
    },
    {
      name: 'Reserve Management Tool',
      role: 'Developer',
      dateRange: 'Dec 2023 - Feb 2025',
      description:
        'Internal business application for managing when merchandise ships from distribution centers to stores.',
      highlights: [
        'Built a front-end workflow for merchants to alter and share merchandise release schedules with Angular, TypeScript, and npm libraries.',
        'Created a Socket.IO alert service hosted on company on-prem servers to notify users when teammates updated the same data they were viewing.',
        'Led the front-end testing effort, establishing 1,007 unit tests across the majority of the front-end codebase while another team owned most backend development.',
        'Enabled business users to manage millions of dollars in merchandise through near real-time schedule updates.',
      ],
      tools: ['Angular', 'TypeScript', 'Socket.IO', 'Unit testing', 'On-prem servers', 'npm'],
    },
    {
      name: 'Order Approval Tool',
      role: 'Developer',
      dateRange: 'July 2022 - Feb 2024',
      description:
        'Internal business application for merchants to request formal team-leader approval for vendor orders tied to store product.',
      highlights: [
        'Created a supporting user-data API with Node.js, Express, and TypeScript that serves hundreds of requests for business users.',
        'Built three Python scripts and configured automated server jobs for opted-in approvals, user-cache maintenance, and merchant-hierarchy change notifications.',
        'Built the front-end approval workflow with Angular, TypeScript, Python, Jasmine, and Karma, supporting an application that processes millions of dollars in orders each week.',
      ],
      tools: ['Angular', 'TypeScript', 'Python', 'Node.js', 'Express', 'Jasmine', 'Karma'],
    },
  ],
  education: {
    institution: 'Rutgers University, New Brunswick',
    degree: 'BS, Computer Science',
    secondaryStudy: 'Second major in English',
    graduation: 'Graduated 2017',
    details: [
      {
        label: 'Relevant coursework',
        value: 'Data Structures, Algorithms, Databases, Artificial Intelligence, Systems Programming',
      },
      {
        label: 'Campus leadership',
        value:
          'President and Treasurer, Creation of Games Society (COGS); Corresponding Secretary, MEET/NSBE',
      },
    ],
  },
  skillGroups: [
    {
      label: 'Backend and APIs',
      skills: ['Python', 'Node.js', 'Express', 'REST APIs', 'SQL', 'Oracle', 'Swagger'],
    },
    {
      label: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive design'],
    },
    {
      label: 'Testing',
      skills: ['Unit testing', 'Integration testing', 'Cypress', 'Jasmine', 'Karma', 'Jest'],
    },
    {
      label: 'Delivery and collaboration',
      skills: ['Microsoft Azure', 'Git', 'Jira', 'Confluence', 'Jenkins', 'npm', 'Socket.IO'],
    },
    {
      label: 'Additional technologies',
      skills: ['C#', 'Unity', 'WebGL'],
    },
  ],
};
