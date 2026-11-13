// ============================================================
//  PROFILE DATA  —  edit this file to update personal details.
//  Everything here comes from the information Isha provided.
//  Nothing is invented: missing items are left as `null` and the
//  site shows a clear "coming soon" placeholder instead.
// ============================================================

export const profile = {
  name: 'Isha Jawalkar',
  headline: 'Aspiring Data Engineer | Computer Science Undergraduate',
  degree: 'B.Tech in Computer Science and Engineering',
  university: 'JSPM University',
  tagline: 'Turning curiosity into code, data into insights, and ideas into solutions.',
  heroTitle: "Hi, I'm Isha Jawalkar.",
  heroLead:
    'Aspiring Data Engineer building at the intersection of code, data, and real-world problem solving.',
  heroSupport:
    'Currently exploring programming, databases, analytics, and intelligent systems while building projects that connect technology with everyday problems.',
  // Photo lives in /public/images/isha.jpg. Set to null to show the IJ monogram instead.
  photo: '/images/isha.jpg',
}

export const links = {
  email: 'jawalkarisha@gmail.com',
  // Opens a new Gmail message to this address in the browser (works without a mail app installed).
  gmailCompose: 'https://mail.google.com/mail/?view=cm&fs=1&to=jawalkarisha@gmail.com&su=Hello%20Isha',
  linkedin: 'https://www.linkedin.com/in/isha-jawalkar-50184a397/',
  github: 'https://github.com/jawalkarisha-commits',
  leetcode: 'https://leetcode.com/u/Glitch_techisha/',
  hackerrank: 'https://www.hackerrank.com/profile/jawalkarisha',
  codechef: 'https://www.codechef.com/users/flock_beam_43',
  // YouTube: when your self-introduction video is ready, replace null with its URL.
  youtube: null,
}

export const resume = {
  // 1) Put your PDF in /public/resume/ named exactly as below
  // 2) Change `available` to true
  file: '/resume/Isha-Jawalkar-Resume.pdf',
  available: false,
}

export const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/learning-lab', label: 'Learning Lab' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/connect', label: 'Connect' },
]

// ---------- About page ----------

export const story = [
  {
    kicker: 'Academic background',
    title: 'Studying Computer Science and Engineering',
    text: 'I am a B.Tech student in Computer Science and Engineering at JSPM University, with a growing interest in Data Engineering, Data Analytics, and Data Science.',
  },
  {
    kicker: 'What draws me in',
    title: 'Technology that solves practical problems',
    text: 'I enjoy exploring how technology can solve practical problems. My learning journey includes programming, databases, data analysis, web development, and building technology projects.',
  },
  {
    kicker: 'Right now',
    title: 'Strengthening the fundamentals',
    text: 'I am currently strengthening my programming fundamentals and exploring how data can be collected, processed, organised, and transformed into useful information.',
  },
  {
    kicker: 'Career direction',
    title: 'Becoming a Data Engineer',
    text: 'My long-term goal is to become a skilled Data Engineer and work on meaningful technology systems.',
  },
]

export const aboutCards = [
  {
    title: 'Technical interests',
    items: [
      'Data Engineering',
      'Data Analytics',
      'Data Science',
      'Artificial Intelligence',
      'Generative AI',
      'Programming',
      'Database Systems',
      'Real-world problem solving',
    ],
  },
  {
    title: 'Learning philosophy',
    text: 'Fundamentals first, then build something real to test them. Programming, databases, and analytics make more sense when they are connected to an actual problem.',
  },
  {
    title: 'Approach to problem solving',
    text: 'Start from a real-world problem, break it into smaller pieces (data, logic, interface), and build a working version that can be improved step by step.',
  },
  {
    title: 'Career direction',
    text: 'Primary focus: Data Engineering. Alongside it, I stay curious about Data Science, Analytics, and AI.',
  },
]

// ---------- Experience ----------

export const experience = [
  {
    id: 'thiranex',
    type: 'Internship',
    role: 'Data Analytics Intern',
    org: 'Thiranex',
    summary:
      'An internship focused on data analytics workflows, with exposure to data preparation, analysis, reporting, and dashboard-related work.',
    areas: [
      {
        title: 'Sales and Revenue Dashboard',
        text: 'Dashboard-oriented reporting on sales and revenue data.',
      },
      {
        title: 'Customer Segmentation',
        text: 'Grouping customers by shared characteristics to understand different segments.',
      },
      {
        title: 'Predictive Analytics',
        text: 'Using patterns in historical data to explore what might happen next.',
      },
      {
        title: 'Data Cleaning and Reporting Automation',
        text: 'Preparing data for analysis and streamlining repeated reporting tasks.',
      },
    ],
    tools: ['Python', 'SQL', 'Excel', 'Power BI'],
  },
  {
    id: 'deloitte',
    type: 'Professional learning',
    role: 'Deloitte Technology Job Simulation',
    org: 'Deloitte',
    summary:
      'A job simulation undertaken as professional learning. It is a learning experience, not formal employment.',
    areas: [],
    tools: [],
  },
]

// ---------- Certifications, badges, internships, hackathons, achievements ----------
//
// HOW TO ADD A CERTIFICATE (or achievement):
//  1. Put the image in /public/certificates/  (e.g. public/certificates/python-course.jpg)
//  2. Add an item to the right category below:
//       { id: 'python-course', title: 'Course name', issuer: 'Who issued it',
//         image: '/certificates/python-course.jpg', alt: 'Short description of the image' }
//     `issuer`, `note` and `image` are optional. Without an image a placeholder is shown.
//  3. Save. Clicking a certificate card on the site opens the full image.
//
// Empty categories show a friendly "will be added" message to visitors.

export const certCategories = [
  {
    id: 'certifications',
    label: 'Certifications',
    blurb: 'Courses, certifications and job simulations completed.',
    items: [
      {
        id: 'infosys-python',
        title: 'Infosys Fundamentals of Python Programming',
        issuer: 'Infosys Springboard',
        image: '/certificates/infosys-python-fundamentals.jpg',
        alt: 'Infosys Springboard course completion certificate for Fundamentals of Python Programming, awarded to Isha Jawalkar',
      },
      {
        id: 'simplilearn-dsa-c',
        title: 'Fundamentals of Data Structures in C',
        issuer: 'Simplilearn SkillUP',
        note: 'Course completion certificate.',
        image: '/certificates/simplilearn-data-structures-c.jpg',
        alt: 'Simplilearn SkillUP certificate of completion for the course Fundamentals of Data Structures in C, awarded to Isha Jawalkar',
      },
      {
        id: 'deloitte-sim',
        title: 'Deloitte Technology Job Simulation',
        issuer: 'Deloitte (via Forage)',
        note: 'Job simulation. Professional learning, not formal employment.',
        image: '/certificates/deloitte-job-simulation.jpg',
        alt: 'Deloitte Data Analytics Job Simulation certificate of completion, awarded to Isha Jawalkar',
      },
    ],
  },
  {
    id: 'badges',
    label: 'Learning badges',
    blurb: 'Badges earned through online learning platforms.',
    items: [
      {
        id: 'infosys-springboard-da',
        title: 'Infosys Springboard by Skillsoft – Data Analytics Learning Badge',
        issuer: 'Infosys Springboard',
        image: '/certificates/skillsoft-data-analysis-badge.jpg',
        alt: 'Skillsoft Data Analysis course completion badge',
      },
    ],
  },
  {
    id: 'internships',
    label: 'Internships',
    blurb: 'Internship completion certificates.',
    items: [
      {
        id: 'thiranex-cert',
        title: 'Thiranex Data Analytics Internship',
        issuer: 'Thiranex',
        image: '/certificates/thiranex-internship-certificate.jpg',
        alt: 'Thiranex certificate of achievement for a Data Analytics internship, awarded to Isha Jawalkar',
      },
    ],
  },
  {
    id: 'hackathons',
    label: 'Hackathons',
    blurb: 'Certificates of participation in hackathons.',
    items: [
      {
        id: 'promptwars-kick-to-tech',
        title: 'PromptWars x Kick To Tech',
        issuer: 'Kick To Tech, JSPM University, Pune',
        note: 'Certificate of participation. One-day vibe-coding hackathon (28 October 2026) with a working AI prototype built using Google Antigravity.',
        image: '/certificates/hackathon-promptwars-kick-to-tech.jpg',
        alt: 'Certificate of participation in PromptWars x Kick To Tech, Pune, awarded to Isha Jawalkar',
      },
      {
        id: 'nexus-techverse',
        title: 'Nexus: Where Prompts Become Products',
        issuer: 'Organised by TechVerse Solutions',
        note: 'Certificate of participation.',
        image: '/certificates/hackathon-nexus-techverse.jpg',
        alt: 'Unstop certificate of participation in Nexus: Where Prompts Become Products, organised by TechVerse Solutions',
      },
      {
        id: 'mit-adt-ai-grand-challenge',
        title: 'MIT-ADT AI Grand Challenge 2026',
        issuer: 'Organised by MIT Art, Design & Technology University, Pune',
        note: 'Certificate of participation as Team Axioms.',
        image: '/certificates/hackathon-mit-adt-ai-grand-challenge.jpg',
        alt: 'Unstop certificate of participation in the MIT-ADT AI Grand Challenge 2026, as Team Axioms',
      },
    ],
  },
  {
    id: 'achievements',
    label: 'Achievements',
    blurb: 'Achievements and recognitions.',
    items: [],
  },
]
