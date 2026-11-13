// ============================================================
//  BLOG DATA  —  "Field Notes"
//
//  HOW TO EDIT:
//   - Change title, date, excerpt, and the text inside `sections`.
//   - To add a cover image: put it in /public/images/blog/ and set
//     cover: '/images/blog/my-image.jpg'  (leave null for the placeholder).
//   - `date` is shown as the publication date. These are DRAFT dates
//     (the date this site was first built). Change them to your real
//     publication dates.
//   - To add a new post, copy one object and give it a new unique `slug`.
//
//  These drafts only use facts Isha provided. Personal stories, events,
//  and reflections should be added by Isha in her own words.
// ============================================================

export const blogs = [
  {
    slug: 'data-analytics-internship-thiranex',
    title: 'My Data Analytics Internship Experience at Thiranex',
    date: '2026-11-03',
    readingTime: '2 min read',
    tag: 'Internship',
    cover: '/images/blog/thiranex-internship.jpg',
    coverAlt: 'Thiranex certificate of achievement for a Data Analytics internship',
    coverPosition: 'center 35%',
    excerpt:
      'A look at the areas I worked on during my Data Analytics internship at Thiranex, and what that kind of work teaches.',
    sections: [
      {
        heading: 'The internship',
        paragraphs: [
          'As part of my learning in data analytics, I completed a Data Analytics Internship at Thiranex. It gave me a practical view of how analytics work is organised, beyond what I had seen in classroom topics.',
        ],
      },
      {
        heading: 'What I worked on',
        list: [
          'Sales and Revenue Dashboard',
          'Customer Segmentation',
          'Predictive Analytics',
          'Data Cleaning and Reporting Automation',
        ],
        paragraphs: [
          'The tools involved were Python, SQL, Excel, and Power BI.',
        ],
      },
      {
        heading: 'Technical learnings',
        paragraphs: [
          'The work areas showed me how many steps sit between raw data and a useful report. Data has to be cleaned and prepared before analysis, and reporting becomes more reliable when repeated tasks are automated.',
          'It also showed me how SQL, Python, Excel, and Power BI each fit into a workflow: querying and preparing data, analysing it, and presenting it visually.',
        ],
      },
      {
        heading: 'Personal reflection',
        paragraphs: [
          'This experience strengthened my interest in what happens to data before it reaches a dashboard. That curiosity is a big part of why I am drawn to Data Engineering.',
        ],
      },
    ],
    takeaways: [
      'Clean, well-prepared data comes before good analysis.',
      'Dashboards depend on the quality of the data behind them.',
      'Automating repeated reporting steps saves effort and reduces mistakes.',
    ],
  },
  {
    slug: 'building-drainmind-hackathon',
    title: 'My Hackathon Experience – Building DrainMind',
    date: '2026-11-03',
    readingTime: '2 min read',
    tag: 'Project',
    cover: '/images/blog/prompt-war-hackathon.jpg',
    coverAlt: 'A laptop and a Prompt War Hackathon badge at a hackathon venue',
    coverPosition: 'center 25%',
    excerpt:
      'Why I chose urban waterlogging as a problem to explore, and what building the DrainMind prototype taught me.',
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'Blocked stormwater drains, unmanaged waste, and heavy rainfall can contribute to urban waterlogging. Inspecting drains and reporting issues can be hard to organise. That everyday, real-world problem became the starting point for DrainMind.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'DrainMind is a web-based prototype for drainage issue reporting and monitoring. It includes an interactive map of reports, a reporting interface, severity categories, status tracking, dashboard statistics, search and filtering, and an illustrative rainfall monitoring interface.',
          'It is built with React.js, Vite, JavaScript, and CSS, with Leaflet and OpenStreetMap for mapping. The project stack also includes Node.js, Express.js, and MongoDB.',
        ],
      },
      {
        heading: 'Being honest about the prototype',
        paragraphs: [
          'The current frontend demo uses illustrative sample data and local state. Live weather integration, predictive risk scoring, and AI-based image assessment are not implemented. They are ideas for the future, not features of today.',
        ],
      },
      {
        heading: 'Personal reflection',
        paragraphs: [
          'Building DrainMind showed me how a real problem can be turned into a working interface, and how much of a project is about organising information clearly.',
        ],
      },
    ],
    takeaways: [
      'Starting from a real problem gives a project direction.',
      'Map, severity, and status make data easier to understand at a glance.',
      'A prototype should describe clearly what it does and does not do yet.',
    ],
  },
  {
    slug: 'learning-journey-coding-to-data-science',
    title: 'My Learning Journey – From Coding to Data Science',
    date: '2026-11-03',
    readingTime: '2 min read',
    tag: 'Learning',
    cover: '/images/blog/learning-journey.jpg',
    coverAlt: 'A desk with a laptop showing Data Science and a wall note titled My Learning Journey, From Coding to Data Science',
    coverPosition: 'center 30%',
    excerpt:
      'How programming, databases, analytics, and web development connect in my path towards Data Engineering.',
    sections: [
      {
        heading: 'Where it started',
        paragraphs: [
          'I am a Computer Science and Engineering undergraduate at JSPM University. My journey began with programming in Python, Java, and C, and expanded into databases, data analysis, and web development.',
        ],
      },
      {
        heading: 'What I am learning now',
        list: [
          'Python, Java, and C',
          'SQL and database concepts',
          'Data Structures and Algorithms using C',
          'Excel, Power BI, and Tableau',
        ],
      },
      {
        heading: 'Where I am heading',
        paragraphs: [
          'Along the way I realised that I am most curious about how data is collected, processed, organised, and transformed into useful information. That points towards Data Engineering, which is my primary career direction.',
          'Next on my list of interests are ETL and ELT, data pipelines, data warehousing, Apache Spark, Apache Kafka, Airflow, cloud data engineering, and distributed data processing. These are things I want to explore, not things I have already mastered.',
        ],
      },
      {
        heading: 'Personal reflection',
        paragraphs: [
          'I like to learn fundamentals first and then build something real to test them. Each project and each tool adds one more piece to the picture.',
        ],
      },
    ],
    takeaways: [
      'Strong programming fundamentals support everything else.',
      'Databases and analytics show what data can do.',
      'Data Engineering is the next step I want to grow into.',
    ],
  },
]
