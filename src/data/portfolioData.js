/* ============================================
   PORTFOLIO DATA
   Centralized content for Sakuwaha Henry's portfolio
   ============================================ */

export const personalInfo = {
  name: 'Sakuwaha Henry',
  title: 'Computer Engineering Student | Web Developer | Graphic Designer',
  description:
    'Building practical solutions across IT infrastructure, networking, software development, cybersecurity and embedded systems.',
  location: 'Kalulushi, Copperbelt Province, Zambia',
  email: 'sakuwaha7henry@gmail.com',
  phone: '+260 963 872 499',

  linkedin: 'Sakuwaha Henry',
  linkedinUrl: 'https://www.linkedin.com/in/sakuwaha-henry-337b6231b',

  github: 'github.com/Eng-Sakuwaha',
  githubUrl: 'https://github.com/Eng-Sakuwaha',

  whatsapp: '+260 963 872 499',
  whatsappUrl: 'https://wa.me/260963872499',
  whatsappMessage:
    'Hello Sakuwaha, I found your portfolio and would like to connect.',

  cvPath: '/assets/Sakuwaha-Henry-CV.pdf',

  profileImage: '/assets/profile.jpg',

  placeholderImage:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0B1E33"/>
            <stop offset="100%" stop-color="#112240"/>
          </linearGradient>
        </defs>
        <rect width="800" height="800" fill="url(#bg)"/>
        <circle cx="400" cy="320" r="120" fill="none" stroke="#2563EB" stroke-width="4" opacity="0.4"/>
        <circle cx="400" cy="320" r="90" fill="#1E3A5F"/>
        <path d="M 400 260 a 40 40 0 1 0 0.01 0 z M 330 380 q 70 -50 140 0" fill="#60A5FA" opacity="0.7"/>
        <text x="400" y="540" fill="#60A5FA" font-family="Inter,sans-serif" font-size="44" font-weight="800" text-anchor="middle" letter-spacing="-1">SAKUWAHA HENRY</text>
        <text x="400" y="585" fill="#94A3B8" font-family="Inter,sans-serif" font-size="20" font-weight="500" text-anchor="middle">Computer Engineering Student</text>
        <text x="400" y="620" fill="#64748B" font-family="Inter,sans-serif" font-size="16" text-anchor="middle">Web Developer · Graphic Designer</text>
        <text x="400" y="680" fill="#475569" font-family="Inter,sans-serif" font-size="14" text-anchor="middle" letter-spacing="2">PROFILE PHOTO COMING SOON</text>
      </svg>`
    ),

  designPlaceholder:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
        <defs>
          <linearGradient id="dbg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0B1E33"/>
            <stop offset="100%" stop-color="#1E3A5F"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="900" fill="url(#dbg)"/>
        <g opacity="0.15" stroke="#60A5FA" stroke-width="2" fill="none">
          <circle cx="600" cy="400" r="200"/>
          <circle cx="600" cy="400" r="140"/>
          <circle cx="600" cy="400" r="80"/>
        </g>
        <text x="600" y="410" fill="#60A5FA" font-family="Inter,sans-serif" font-size="72" font-weight="800" text-anchor="middle" letter-spacing="-2">DESIGN</text>
        <text x="600" y="470" fill="#94A3B8" font-family="Inter,sans-serif" font-size="22" font-weight="500" text-anchor="middle">Portfolio Sample Coming Soon</text>
        <text x="600" y="800" fill="#475569" font-family="Inter,sans-serif" font-size="16" text-anchor="middle" letter-spacing="3">GRAPHIC DESIGN BY SAKUWAHA HENRY</text>
      </svg>`
    ),

  designDriveUrl:
    'https://drive.google.com/drive/folders/1KKWuFwC3_bvLhy7jrM8OZo5XdEnF84i1?usp=drive_link',

  // ---------- Web3Forms (contact form backend) ----------
  web3formsAccessKey: '12efe53f-fe21-410d-b6ea-6209ae5e8171',
};

export const profile = [
  { label: 'Education', value: 'BEng Computer Engineering' },
  { label: 'University', value: 'Copperbelt University' },
  { label: 'Period', value: '2022 – Present' },
  { label: 'Expected Graduation', value: '2027' },
  { label: 'Location', value: 'Copperbelt Province, Zambia' },
];

export const aboutText = [
  'Sakuwaha Henry is a final-year Computer Engineering student at Copperbelt University with a strong foundation in computer networks, operating systems, databases, cybersecurity, software development, and technical troubleshooting.',
  'He has practical experience through engineering projects, web development, graphic design, data handling, collaborative technical environments, mentorship programmes, and professional internship experience.',
  'He is currently seeking graduate trainee and entry-level opportunities where he can apply problem-solving, infrastructure, system support, web development and information technology skills while continuing to grow professionally.',
];

export const skills = [
  { category: 'Operating Systems', icon: 'monitor', items: ['Windows', 'OS Administration Fundamentals', 'Resource Management'] },
  { category: 'Networking', icon: 'network', items: ['Computer Communication & Networks', 'Internet Technologies', 'Network Troubleshooting'] },
  { category: 'Programming & Scripting', icon: 'code', items: ['C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Frameworks & Tools', icon: 'tool', items: ['Node.js', 'React', 'Arduino IDE', 'FastAPI', 'PostgreSQL', 'WebSockets'] },
  { category: 'IT & Security', icon: 'shield', items: ['Cybersecurity Fundamentals', 'Databases', 'Data Handling', 'System Troubleshooting', 'Technical Problem Solving'] },
  { category: 'Areas of Interest', icon: 'star', items: ['System Administration', 'IT Infrastructure', 'Cybersecurity', 'Networking', 'Cloud / Virtualization', 'Embedded Systems', 'IoT'] },
];

export const achievements = [
  {
    id: 'achievement-smarttech',
    title: 'Most Hardworking Intern',
    organization: 'SmartTech Solutions and Trainings',
    cohort: 'Cohort 2',
    date: 'August 2026',
    description:
      'Recognised as the Most Hardworking Intern in the Smart Tech Internship Programme (Cohort 2) for consistency, dedication, resilience, determination, and commitment throughout the programme.',
    icon: 'award',
  },
];

/* ============================================
   GRAPHIC DESIGN SHOWCASE
   ============================================ */
export const designCategories = [
  'All',
  'Logos',
  'Flyers',
  'Social Media',
  'Branding',
  'Posters',
];

export const designs = [
  {
    id: 'design-1',
    title: 'Brand Logo Concept',
    category: 'Logos',
    image: '/assets/designs/design-1.jpg',
    description: 'Minimalist logo mark designed for a client brand identity.',
    tools: ['Adobe Illustrator', 'Photoshop'],
  },
  {
    id: 'design-2',
    title: 'Event Flyer',
    category: 'Flyers',
    image: '/assets/designs/design-2.jpg',
    description: 'Promotional flyer design for a technology event.',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'design-3',
    title: 'Social Media Post',
    category: 'Social Media',
    image: '/assets/designs/design-3.jpg',
    description: 'Instagram post design for a product campaign.',
    tools: ['Photoshop'],
  },
  {
    id: 'design-4',
    title: 'Brand Identity Kit',
    category: 'Branding',
    image: '/assets/designs/design-4.jpg',
    description: 'Complete brand identity package — logo, colors, and typography.',
    tools: ['Illustrator', 'Figma'],
  },
  {
    id: 'design-5',
    title: 'Motivational Poster',
    category: 'Posters',
    image: '/assets/designs/design-5.jpg',
    description: 'Inspirational poster design for campus campaign.',
    tools: ['Photoshop'],
  },
  {
    id: 'design-6',
    title: 'Business Card Design',
    category: 'Branding',
    image: '/assets/designs/design-6.jpg',
    description: 'Professional business card design with modern layout.',
    tools: ['Illustrator'],
  },
];

export const projects = [
  {
    id: 'modal0',
    title: 'Library Attendance Tracker & Seat Booking System',
    technology: 'ESP32, C++/Arduino, FastAPI, React, PostgreSQL, WebSockets',
    description:
      'IoT-enabled platform connecting seat booking, physical access, attendance, and real-time occupancy. Built as a Computer Engineering final year project at Copperbelt University to solve library seat shortages affecting 84% of students.',
    components: ['ESP32 Microcontroller', '4×4 Keypad', 'Servo Motor Gate', '16×2 LCD Display', 'FastAPI Backend', 'React Web App', 'PostgreSQL Database', 'WebSockets'],
    diagram: ['Web Booking', '4-Digit Code', 'ESP32 Keypad', 'Servo Gate', 'Real-Time Update'],
    featured: true,
    year: '2025',
    label: 'Final Year Project',
    details: {
      problemAddressed: 'Library seat shortages at Copperbelt University — 84% of students struggle to find available seating. Traditional library management offers no visibility into real-time occupancy, no advance booking, and no automated attendance tracking.',
      technicalImplementation: 'Designed a full-stack IoT system integrating hardware and software. Students view available seats on a React web app, make a booking, and receive a unique 4-digit code. At the library entrance, the code is entered via a 4×4 keypad connected to an ESP32. The backend validates the booking (expiry, previous usage, capacity) via FastAPI, then grants physical access through a servo-controlled gate. Attendance and occupancy update in real time on a 16×2 LCD and across the web application using WebSockets.',
      keyComponents: 'ESP32 microcontroller, 4×4 keypad, servo motor gate, 16×2 LCD display, FastAPI REST backend, PostgreSQL database, React web application, WebSocket server for real-time sync.',
      technicalChallenge: 'Originally planned to use RFID for access control. During prototyping, real-world testing showed that a keypad-based booking code was a better fit — simpler for students, no physical cards to manage, and easier to deploy. Changing the design mid-project was one of the biggest engineering lessons.',
      outcome: 'Successfully delivered an integrated system combining embedded systems, REST APIs, database design, networking, authentication, hardware control, real-time communication, and physical security. The system was tested by students and reviewed by the CBU School of ICT.',
      acknowledgements: 'Supervisor: Prof. Mbale J. · Copperbelt University School of ICT · Students who tested the system and challenged assumptions during development.',
      tags: ['Embedded Systems', 'IoT', 'ESP32', 'Computer Engineering', 'Smart Campus', 'FastAPI', 'WebSockets', 'Copperbelt University', 'Zambia'],
    },
  },
  {
    id: 'modal1',
    title: 'Phone Detection System',
    technology: 'C & Arduino',
    description: 'Developed a group engineering project aimed at detecting mobile phone signals in restricted environments.',
    components: ['RF Detection', 'Microcontrollers', 'Broadband Antennas', 'LEDs', 'Buzzers'],
    diagram: ['Antenna', 'RF Detection', 'Microcontroller', 'Alert'],
    featured: false,
    details: {
      problemAddressed: 'Detection of mobile phone signals in restricted environments as a group engineering project.',
      technicalImplementation: 'The system uses an antenna to capture RF signals, which are processed by a detection module. A microcontroller interprets the signal and triggers visual (LED) and audible (buzzer) alerts when activity is detected.',
      keyComponents: 'Broadband antenna, RF detection circuit, Arduino microcontroller, LED indicators, buzzer.',
      outcome: 'Additional technical documentation can be provided upon request.',
    },
  },
  {
    id: 'modal2',
    title: 'Student Management System',
    technology: 'C++',
    description: 'Developed a console-based application for managing student records and attendance.',
    components: ['Student Records', 'Attendance', 'File Handling', 'Data Persistence'],
    diagram: null,
    featured: false,
    details: {
      problemAddressed: 'Managing student records and attendance in a console-based application.',
      technicalImplementation: 'The application uses file handling for data persistence, allowing users to add, view, and manage student records and attendance data. Data is stored locally for later retrieval.',
      keyComponents: 'Student record management, attendance tracking, file I/O, data storage and persistence.',
      outcome: 'Additional technical documentation can be provided upon request.',
    },
  },
  {
    id: 'modal3',
    title: 'Bible Quiz Application',
    technology: 'JavaFX',
    description: 'Collaborated in developing an interactive quiz application using JavaFX.',
    components: ['Java', 'JavaFX', 'Interactive UI', 'Collaborative Development'],
    diagram: null,
    featured: false,
    details: {
      problemAddressed: 'Interactive quiz application developed collaboratively.',
      technicalImplementation: 'Built using JavaFX for the user interface, providing interactive question-and-answer functionality. The project was developed as part of a collaborative team effort.',
      keyComponents: 'JavaFX UI, interactive quiz logic, collaborative development workflow.',
      outcome: 'Additional technical documentation can be provided upon request.',
    },
  },
];

export const experience = [
  {
    year: '2026',
    title: 'Graphic Design Intern',
    company: 'SmartTech Solutions and Trainings · Nigeria (Remote)',
    description: 'Worked remotely with a technology company, collaborating with team members to deliver client projects on time.',
    responsibilities: [
      'Used digital tools and structured workflows to produce professional marketing materials.',
      'Maintained brand consistency across deliverables.',
      'Communicated with team members to align on project requirements.',
      'Managed assigned tasks within project timelines.',
      'Collaborated remotely on client projects.',
    ],
    achievement:
      'Recognised as the Most Hardworking Intern in the Smart Tech Internship Programme — Cohort 2 (August 2026).',
  },
];

export const leadership = [
  { year: '2024', title: "Launcher Engineers' Hub", role: 'Mentee', description: 'Participated in a technical mentorship programme focused on career development, industry preparedness and professional growth for engineering students.' },
  { year: '2025', title: 'YouthTeamUp – 4th SVE', role: 'Team Member', description: 'Participated in technology workshops and contributed to the proposal of AgroSecure – Fighting Poverty Through Smart Agriculture.' },
];

export const education = [
  {
    year: '2022 – Present',
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Copperbelt University · Expected Graduation: 2027',
    coursework: [
      'Computer Communication and Networks',
      'Operating Systems and Resource Management',
      'Database Systems',
      'Security and Computer Information',
      'Internet Technologies',
      'Embedded Systems',
      'Software Engineering',
      'Computer Architecture and Organization',
      'Systems and Project Management',
      'Data Structures & Algorithms',
    ],
  },
  { year: '2019', degree: 'High School Certificate', institution: 'Solwezi Technical School', coursework: null },
];

/* ============================================
   CERTIFICATIONS
   ============================================ */
export const certifications = [
  { title: 'Grade 12 Certificate', year: '2019' },
  { title: "Launcher Engineers' Hub Certificate", year: '2024' },
  { title: '2nd Edition of SANCS', year: '2025' },
  { title: 'YouthTeamUp – 4th SVE Certificate', year: '2025' },
  {
    title: 'Internship Completion Certificate',
    organization: 'SmartTech Solutions and Trainings',
    year: '2026',
    highlighted: true,
  },
];

export const interests = [
  'System Administration',
  'Cybersecurity',
  'Networking',
  'Artificial Intelligence',
  'Web Development',
  'Software Development',
  'IT Infrastructure',
  'Cloud / Virtualization',
  'Embedded Systems',
  'IoT',
  'Graphic Design',
];

export const growingIn = [
  'System Administration',
  'IT Infrastructure',
  'Cybersecurity',
  'Networking',
  'Cloud / Virtualization',
  'Embedded Systems',
  'IoT',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Designs', href: '#designs' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];