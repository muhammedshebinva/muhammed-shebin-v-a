import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import porfolioImage4 from '../images/portfolio/collegeWeb.png';
import porfolioImage3 from '../images/portfolio/netflixClone.png';
import porfolioImage5 from '../images/portfolio/olx clone.png';
//import  heroImage from '../images/backgroundimg.png';
import porfolioImage2 from '../images/portfolio/placementPortalHome.png';
//import heroImage from '../images/header-background.webp';
import heroImage from '../images/shebinIMGN1.jpg';
//import profilepic from '../images/profilepic.jpg';
import profilepic from '../images/shebinimg1.jpg'
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'muhammed shebin',
  description: "muhammed shebin portfolio web",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Muhammed Shebin `,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a  <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Infosys Limited</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      with 2 years of hands-on experience in designing, developing, and deploying
      enterprise grade web applications Committed to delivering high-quality, scalable, and user-centric solutions. 
      </p>
    </>
  ),
  actions: [
    {
     // href: '/assets/resume.pdf',
     
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      href: './assets/resume.pdf',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a passionate Full Stack Developer with a strong foundation in React and Node.js. I enjoy building dynamic web applications from the ground up, combining my love for both frontend and backend development. I'm always eager to learn new technologies and stay up-to-date with the latest industry trends.`,
  aboutItems: [
    {label: 'Location', text: 'Kerala, India', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Video editing, Photography', Icon: SparklesIcon},
    {label: 'Education', text: 'BSc Computer Science', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Infosys Limited', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Css',
        level: 8,
      },
      {
        name: 'Next JS',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Express',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 10,
      },
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 9,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'GCP',
        level: 6,
      },
      {
        name: 'GIT',
        level: 10,
      },
      {
        name:'Docker',
        level: 9
      }
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'hindi',
        level: 8,
      },
      {
        name: 'tamil',
        level: 8,
      },
      {
        name: 'malayalam',
        level: 10,
      },
    ],
  },
 
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  
  {
    title: 'Placement Portal',
    description: `Overview: The Online Placement Portal is a comprehensive web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) designed to streamline the job placement process for companies and job seekers. This platform enables companies to register, post job openings, and manage applicants, while users can apply for jobs and track their application status.

Features:

User Registration & Profile Management:

Users (job seekers) can create and manage their profiles, upload resumes, and showcase their skills and experiences.
Companies can register and create profiles to manage their job postings and view applicants.
Job Posting & Management:

Companies can post job vacancies with detailed descriptions, requirements, and application deadlines.
Recruiters can edit or remove job postings as needed.
Application Process:

Job seekers can browse available job postings, filter them by category, location, and experience level, and apply directly through the portal.
Users receive notifications about the status of their applications (submitted, under review, approved, or rejected).
Applicant Tracking System:

Recruiters can view a list of applicants for each job posting, complete with their profiles and application materials.
The platform allows recruiters to approve or reject candidates and provide feedback.
Search and Filter Functionality:

Users can easily search for jobs based on various criteria, enhancing the discoverability of suitable positions.
Recruiters can filter applicants based on skills, experience, and application status.
Admin Dashboard:

An admin panel for overseeing the entire platform, managing users and companies, and ensuring compliance with policies.
Admins can generate reports on job postings, applications, and user engagement.
Real-time Notifications:

Users receive real-time updates regarding application status and new job postings relevant to their profiles.
Responsive Design:

The portal is optimized for both desktop and mobile devices, ensuring accessibility for all users.
Technologies Used:

MongoDB: For storing user profiles, job postings, and application data.
Express.js: For creating a robust backend API to handle requests.
React.js: For building a dynamic and responsive user interface.
Node.js: For server-side logic and handling real-time notifications.
`,
    url: 'https://github.com/muhammedshebinva/Placement-Web-App-MERN',
    image: porfolioImage2,
  },
  {
    title: 'Netflix Clone',
    description: `Project Description: Netflix Clone
Overview: The Netflix Clone is a web application developed using React.js, designed to mimic the user experience of Netflix. This project utilizes the TMDM (The Movie Database) API to fetch and display movie details, allowing users to browse, search, and explore a wide variety of films and TV shows.

Features:

User Authentication:

Users can sign up and log in to their accounts, providing a personalized experience.
Session management ensures that users remain logged in across sessions.
Movie Browsing:

A visually appealing homepage displaying featured movies, trending titles, and popular genres.
Infinite scrolling allows users to continuously browse through extensive movie lists.
Search Functionality:

Users can search for specific movies or TV shows using a search bar.
Real-time search results are displayed as users type, enhancing the user experience.
Movie Details Page:

Clicking on a movie or show takes users to a detailed page featuring a synopsis, cast, release date, ratings, and trailers.
Users can add movies to their favorites for easy access later.
Responsive Design:

The application is fully responsive, ensuring compatibility across various devices, including desktops, tablets, and mobile phones.
API Integration:

The TMDM API is used to fetch up-to-date information about movies, including trailers, reviews, and user ratings.
Dynamic content updates based on API responses provide a seamless browsing experience.
User Favorites:

Users can save their favorite movies to a dedicated list for quick access.
The favorites list is stored in local storage, allowing persistence across sessions.
Genre Filters:

Users can filter movies by genre, helping them discover content that matches their interests.
Each genre displays a curated list of relevant titles.
Watchlist Feature:

Users can create a watchlist to keep track of movies they intend to watch in the future.
Technologies Used:

React.js: For building the user interface with reusable components.
TMDM API: To fetch real-time movie data and details.
CSS/Styled Components: For styling and responsive design.
Conclusion: The Netflix Clone project showcases the ability to create a modern web application that replicates the core functionalities of a popular streaming service. By leveraging React.js and the TMDM API, this project provides users with an engaging and intuitive platform to discover and enjoy a vast array of movies and TV shows.`,
    url: 'https://github.com/muhammedshebinva/Netflix-sample-using-React',
    image: porfolioImage3,
  },
  {
    title: 'College Web Page Management System',
    description: `Overview: The College Web Page Management System is a web application developed using Node.js, Express, MongoDB, and Handlebars. This platform serves as a centralized hub for managing college courses, previous year question papers, and student access. Admins can easily upload and manage course materials, while students can log in to download resources in PDF format.

Features:

Admin Dashboard:

A user-friendly dashboard where admins can manage courses, upload previous year question papers, and oversee student accounts.
Admins can add, edit, or delete course information and associated documents.
Course Management:

Admins can create and categorize courses, providing details such as course name, description, and academic year.
Each course can have multiple previous year question papers uploaded for student access.
Student Registration & Login:

Students can register for an account and securely log in to access course materials.
User-friendly authentication process to ensure secure access.
Downloadable Resources:

Students can browse through available courses and download previous year question papers in PDF format.
Search functionality to quickly locate specific courses or documents.
User Profiles:

Each student has a profile page that displays their registered courses and download history.
Option for students to update their profile information as needed.
Responsive Design:

The web application is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.
Notifications:

Admins can send notifications to students regarding new uploads or important announcements related to courses.
Security Features:

Implementing secure password storage and session management to protect user data.
Technologies Used:

Node.js: For server-side logic and handling requests.
Express: For building a robust RESTful API.
MongoDB: For storing course details, question papers, and user information.
Handlebars: For rendering dynamic web pages with a clean and simple template syntax.`,
    url: 'https://github.com/muhammedshebinva/College_Previous-Year-Question-Papers-PDF-Download---Website',
    image: porfolioImage4,
  },
  {
    title: 'OLX Clone',
    description: `Project Description: OLX Clone
Overview: The OLX Clone is a web application developed using React.js and Google Firebase, designed to replicate the functionality of the popular online marketplace OLX. This platform allows users to buy and sell various products, offering a user-friendly interface for listing items, browsing available products, and connecting with potential buyers or sellers.

Features:

User Authentication:

Users can sign up and log in using their email or social media accounts (Firebase Authentication).
Secure user management ensures that profiles and listings are protected.
Product Listing:

Users can create and publish product listings with detailed descriptions, images, and pricing.
An intuitive form allows users to easily input product details and upload photos.
Browse and Search:

A dynamic homepage displays featured listings and categories for easy navigation.
Search functionality enables users to quickly find specific products by keywords, categories, or location.
Category Filters:

Users can filter listings by category (e.g., electronics, furniture, vehicles) to find relevant items.
Sorting options (e.g., price, newest listings) enhance the browsing experience.
Real-time Database:

Google Firebase Firestore is used for storing and retrieving product listings, ensuring real-time updates and synchronization across all users.
Changes to listings are instantly reflected in the app.
User Profiles:

Each user has a profile page showcasing their active listings and transaction history.
Users can edit their profiles and manage their listings directly from their account.
Messaging System:

A built-in chat feature allows buyers and sellers to communicate directly within the app, facilitating negotiations and inquiries.
Notifications alert users to new messages.
Responsive Design:

The application is designed to be fully responsive, providing an optimal experience on desktops, tablets, and mobile devices.
Admin Panel:

An admin dashboard for monitoring user activity, managing listings, and addressing any reported issues.
Favorites:

Users can save their favorite listings for quick access later, enhancing the shopping experience.
Technologies Used:

React.js: For building a dynamic and interactive user interface.
Firebase: For user authentication, real-time database management, and hosting.
CSS/Styled Components: For styling and creating a responsive layout.
Conclusion: The OLX Clone project demonstrates the ability to create a fully functional online marketplace using modern web technologies. By leveraging React.js and Google Firebase, this platform offers users a seamless experience for buying and selling products, complete with essential features that enhance user interaction and engagement.`,
    url: 'https://github.com/muhammedshebinva/React_tutorial_olx_clone',
    image: porfolioImage5,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '',
    location: 'Bharathiar University',
    title: 'BSc Computer Science (8.6 CGPA)',
    content: <p>Learned foundational concepts in programming, algorithms, data structures, and software development methodologies. Courses in operating systems, databases, and web development were particularly impactful, providing a solid technical base.
I also gained experience with version control systems like Git, which has been essential in my current role as a software engineer. Learning about Agile methodologies helped me understand project management and iterative development processes.
    </p>,
  },
  {
    date: '',
    location: 'Kerala',
    title: 'Higher Secondary (7.8 CGPA)',
    content: <p>My time in school equipped me with critical thinking skills, a problem-solving mindset, and technical proficiency that I apply daily in my work. I'm continually building on this foundation</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2022 - Present',
    location: 'Infosys Limited, Mysore India',
    title: 'Full Stack Developer',
    content: (
      <p>
        As a Full Stack Developer at Infosys Limited, I've been primarily involved in developing and maintaining web applications using a variety of technologies. 
        My typical responsibilities include:
        Creating user-friendly and visually appealing interfaces using React.js and its ecosystem (Redux, React Router, etc.)

        Building scalable and efficient server-side applications using Node.js and frameworks like Express.js also Designing and implementing database schemas using SQL and NoSQL databases (e.g., MySQL, MongoDB).

        Creating and consuming RESTful APIs to integrate with other systems.
      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I’m a passionate full stack developer currently seeking new job opportunities. If you’re interested in collaborating or have any potential openings, feel free to reach out!',
  items: [
    {
      type: ContactType.Email,
      text: 'muhammedshebinva@gmail.com',
      href: 'mailto:muhammedshebinva@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kerala, India',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'muhammedshebinva',
      href: 'https://github.com/muhammedshebinva',
    },
    {
      type: ContactType.LinkedIn,
      text: 'muhammedshebinva',
      href: 'https://www.linkedin.com/in/muhammed-shebin-v-a-06978b213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/muhammedshebinva'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/16924852/shebin'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/muhammed-shebin-v-a-06978b213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/shebin_vs'},
];
