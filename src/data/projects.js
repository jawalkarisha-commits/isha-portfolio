// ============================================================
//  PROJECT DATA  —  every project is a mini case study.
//
//  status: 'prototype' | 'planned'  (add 'completed' later if needed)
//  - Fields set to null show a gentle placeholder on the page.
//  - screenshots: add real images to /public/images/projects/ and list them,
//    e.g. [{ src: '/images/projects/drainmind-map.png', alt: 'Map view' }]
// ============================================================

export const statusInfo = {
  prototype: {
    label: 'Deployed prototype',
    detail: 'Live and explorable, still in initial development',
  },
  planned: {
    label: 'Planned',
    detail: 'A concept. Development has not started yet',
  },
}

export const projects = [
  {
    id: 'drainmind',
    status: 'prototype',
    statusNote: 'Deployed prototype in initial development',
    category: 'Web application',
    title: 'DrainMind',
    subtitle: 'Urban Waterlogging Risk Monitoring System',
    summary:
      'A web-based prototype designed to support drainage issue reporting and monitoring.',
    problem:
      'Blocked stormwater drains, unmanaged waste, and heavy rainfall can contribute to urban waterlogging. Drainage inspection and issue reporting can be difficult to organise.',
    why: 'When drain problems go unreported or unorganised, they are harder to see, prioritise, and follow up. A shared place to report, categorise, and track issues is a first step towards organising the response.',
    solution:
      'A web-based prototype where drainage issues can be reported, placed on a map, categorised by severity, tracked by status, and reviewed through a dashboard.',
    implementation: [
      'Built as a frontend prototype with React.js, Vite, JavaScript and CSS, and deployed on Vercel.',
      'The interactive map uses Leaflet with OpenStreetMap.',
      'The current frontend demo runs on illustrative sample data and local state.',
      'Node.js, Express.js and MongoDB are part of the project stack. Full frontend-backend integration is not claimed.',
    ],
    features: [
      'Interactive map displaying drainage reports',
      'Drainage issue reporting interface',
      'Severity categorisation',
      'Report status tracking',
      'Dashboard statistics',
      'Search and filtering',
      'Illustrative rainfall monitoring interface',
    ],
    notImplemented: [
      'Live weather integration',
      'Production-ready predictive risk scoring',
      'AI-powered image assessment',
    ],
    stack: [
      'React.js',
      'Vite',
      'JavaScript',
      'CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Leaflet',
      'OpenStreetMap',
    ],
    links: {
      demo: 'https://drainmind-app.vercel.app/',
      github: 'https://github.com/jawalkarisha-commits/DrainMind',
    },
    screenshots: [
      {
        src: '/images/projects/drainmind-dashboard.jpg',
        alt: 'DrainMind dashboard overview with report statistics, an illustrative rainfall chart and a Leaflet map of Pune with sample report locations',
        caption: 'Dashboard overview of the prototype. Reports, rainfall values and map markers are illustrative sample data.',
      },
    ],
    learnedLabel: 'What I learned',
    learned: [
      'Building an interactive map interface with Leaflet and OpenStreetMap.',
      'Structuring a React and Vite application into components and managing UI state locally.',
      'Designing a reporting flow with severity levels, report status, search, and filtering.',
      'Describing a prototype honestly: what it demonstrates now and what is still to be built.',
    ],
  },
  {
    id: 'smartpark',
    status: 'prototype',
    statusNote: 'Deployed prototype in development',
    category: 'Full-stack web application',
    title: 'SmartPark',
    subtitle: 'Intelligent Parking Management System',
    summary:
      'A web-based parking management and reservation platform that connects parking owners, customers, and administrators.',
    problem: null,
    why: null,
    solution:
      'A platform with three roles: owners register parking facilities and manage spaces and bookings, customers search for parking and reserve slots, and administrators verify owners and oversee the platform.',
    implementation: [
      'Frontend built with React, Vite, JavaScript, HTML and CSS.',
      'Backend built with Java, Spring Boot, Maven and Spring Security, with data stored in MySQL.',
      'Docker configuration is included in the repository.',
      'The live demo is a browser-only demo of the frontend (the page itself is labelled "Demo · browser-only"). The repository README lists the backend deployment as not yet confirmed.',
      'The features below are the ones listed in the repository README.',
    ],
    features: [
      'Role-based access for admin, owner and customer',
      'Owner document verification with admin approval or rejection',
      'Customer registration with email OTP verification',
      'Parking facility, location and slot management',
      'Slot reservations with a five-minute hold and overlap validation',
      'Group and multiple-vehicle bookings',
      'Parking sessions, overdue tracking and exit management',
      'Payment tracking and late-fee calculation',
      'Cancellations and refunds',
    ],
    notImplemented: [],
    stack: ['React.js', 'Vite', 'JavaScript', 'CSS', 'Java', 'Spring Boot', 'Spring Security', 'Maven', 'MySQL', 'Docker'],
    links: {
      demo: 'https://client-4lnguojs6-jawalkarisha-4959.vercel.app/owner/dashboard',
      github: 'https://github.com/jawalkarisha-commits/SmartPark',
    },
    screenshots: [
      {
        src: '/images/projects/smartpark-home.jpg',
        alt: 'SmartPark landing page with the headline "Find your spot. Park smarter." and an illustration of available parking slots',
      },
    ],
    learnedLabel: 'What I learned',
    learned: [
      'Designing a role-based system with separate admin, owner and customer experiences.',
      'Building a Java Spring Boot backend alongside a React frontend.',
      'Modelling bookings, slot availability and payments in a relational database.',
    ],
  },
  {
    id: 'geofuse',
    status: 'prototype',
    statusNote: 'Frontend deployed. Project details to be expanded',
    category: 'Government GIS web platform',
    title: 'GeoFuse',
    subtitle: 'Urban Land Record Management',
    summary:
      'A government GIS platform that integrates multi-source geospatial and land records into a unified, traceable and review-ready digital system.',
    problem: null,
    why: null,
    solution:
      'One platform that brings together revenue, municipal, cadastral and geospatial data, with source-aware records that officers can review.',
    implementation: [
      'A web application with a secure officer portal: officers sign in to the land records workspace or create an officer account.',
      'The sign-in screen states that sessions are protected using authenticated API access.',
      'The frontend is deployed on Netlify.',
      'The repository (SIH_GEOFUSE) is hosted under the GitHub account khandaskarnidhi-gif.',
      'The features below are the ones described on the application\'s own sign-in page.',
    ],
    features: [
      'Multi-source integration of revenue, municipal, cadastral and geospatial data',
      'Traceable, source-aware and reviewable land records',
      'Officer portal with sign in and officer account creation',
      'Authenticated API access for protected sessions',
    ],
    notImplemented: [],
    stack: [],
    links: {
      demo: 'https://sih-geofuse.netlify.app',
      github: 'https://github.com/khandaskarnidhi-gif/SIH_GEOFUSE',
    },
    screenshots: [
      {
        src: '/images/projects/geofuse-login.jpg',
        alt: 'GeoFuse officer portal sign-in page with the headline "One platform for harmonized land records."',
      },
    ],
    learnedLabel: 'What I learned',
    learned: [],
  },
  {
    id: 'campussync',
    status: 'planned',
    statusNote: 'Planned. Development not yet started',
    category: 'Web platform concept',
    title: 'CampusSync',
    subtitle: 'Unified Campus Events and Opportunities Platform',
    summary:
      'A proposed platform that brings campus hackathons, competitions, workshops, seminars, and internship opportunities into one place.',
    problem:
      'Students often miss hackathons, competitions, workshops, seminars, and internship opportunities because announcements are scattered across different communication channels.',
    why: 'A missed announcement can mean a missed chance to learn, compete, or apply. Bringing opportunities together makes them easier to find, filter, and act on.',
    solution:
      'A single platform with centralised listings, filtering, reminders, and recommendations, supported by tools for organisers and students looking for teams.',
    implementation: ['Concept stage. Development has not started and no code has been written.'],
    features: [
      'Centralised event listings',
      'Category-based filtering',
      'Deadline reminders',
      'Personalised recommendations',
      'Eligibility information',
      'Team-finding functionality',
      'Calendar integration',
      'Organiser dashboard',
      'Duplicate announcement detection',
    ],
    notImplemented: [],
    stack: ['React.js', 'Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'NLP-based information extraction'],
    links: { demo: null, github: null },
    screenshots: [],
    learnedLabel: 'What I plan to explore',
    learned: [
      'Building REST APIs with FastAPI and storing data in PostgreSQL.',
      'Connecting a React frontend to a Python backend.',
      'Exploring NLP-based information extraction for announcements.',
    ],
  },
]
