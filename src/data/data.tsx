import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const basePath = process.env.NODE_ENV === 'production' ? '/muhammed-shebin-v-a' : '';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import porfolioImage4 from '../images/portfolio/collegeWeb.png';
import porfolioImage3 from '../images/portfolio/netflixClone.png';
import porfolioImage5 from '../images/portfolio/olx-clone.png';
//import  heroImage from '../images/backgroundimg.png';
import porfolioImage2 from '../images/portfolio/placementPortalHome.png';
import profilepic from '../images/portfolio/profileShebin1.jpeg';
import testimonialImage from '../images/testimonial.webp';
//import heroImage from '../images/header-background.webp';
//import heroImage from '../images/';
//import profilepic from '../images/profilepic.jpg';
import heroImage from '../images/workimg1.jpeg';
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
  title: 'Muhammed Shebin V A | AI Engineer & Full-Stack Developer',
  description: 'Portfolio of Muhammed Shebin V A, AI Engineer and Full-Stack Developer specializing in Agentic AI, Python, FastAPI, React, and enterprise IT operations automation.',
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
  MyStory: 'my-story', // Added for new section
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Muhammed Shebin V A`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an <strong className="text-stone-100">AI Engineer | Full-Stack Developer (Python, React) | Agentic AI & Generative AI</strong>, with 4 years at Infosys.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Currently building a governed, multi-tenant vulnerability-remediation platform and enterprise ITSM analytics tools using LangGraph, LangChain, Azure OpenAI GPT-4o, RAG, semantic search, and automated ticket-quality scoring.
      </p>
    </>
  ),
  actions: [
    {
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      href: `${basePath}/assets/muhammed_shebin.pdf`,
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
  description: `I’m an AI Engineer and Full-Stack Developer with 4 years at Infosys, architecting production Agentic AI systems for enterprise IT operations and security. I build governed multi-tenant platforms and multi-agent ITSM analytics tools spanning RAG, semantic search, and automated ticket-quality scoring, while delivering full-stack React/TypeScript dashboards end-to-end.`,
  aboutItems: [
    {label: 'Location', text: 'Bengaluru, India (Open to relocation)', Icon: MapIcon},
    {label: 'Interests', text: 'Agentic AI, Automation, Governance', Icon: SparklesIcon},
    {label: 'Education', text: 'MCA (Online), BSc Computer Science', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Infosys Limited', Icon: BuildingOffice2Icon},
    {label: 'Availability', text: 'Open to new opportunities', Icon: CalendarIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'AI & GenAI',
    skills: [
      {name: 'Agentic AI', level: 10},
      {name: 'Multi-Agent Systems', level: 10},
      {name: 'LangGraph (StateGraph & ReAct)', level: 10},
      {name: 'LangChain', level: 10},
      {name: 'Azure OpenAI (GPT-4o)', level: 10},
      {name: 'LLM Orchestration', level: 9},
      {name: 'Prompt Engineering', level: 9},
      {name: 'RAG', level: 9},
      {name: 'Vector Databases', level: 8},
      {name: 'OpenAI Embeddings', level: 8},
      {name: 'Semantic Search (SBERT, BM25)', level: 9},
      {name: 'Cross-Encoder Reranking', level: 8},
      {name: 'Hybrid Search', level: 8},
      {name: 'MCP', level: 9},
    ],
  },
  {
    name: 'AI Governance & Guardrails',
    skills: [
      {name: 'Deterministic Policy Engines', level: 9},
      {name: 'Human-in-the-Loop Approval Gating', level: 9},
      {name: 'Confidence-Based Automation Controls', level: 8},
      {name: 'PII / Secret Redaction', level: 8},
      {name: 'Prompt-Injection Defense', level: 8},
      {name: 'Topic Gating', level: 8},
    ],
  },
  {
    name: 'Backend & APIs',
    skills: [
      {name: 'Python', level: 9},
      {name: 'FastAPI', level: 9},
      {name: 'Flask', level: 8},
      {name: 'Node.js', level: 9},
      {name: 'RESTful APIs', level: 9},
      {name: 'JWT', level: 8},
      {name: 'RBAC', level: 8},
      {name: 'Pydantic', level: 8},
      {name: 'Temporal', level: 8},
      {name: 'Microservices', level: 8},
    ],
  },
  {
    name: 'Frontend',
    skills: [
      {name: 'React.js', level: 10},
      {name: 'TypeScript', level: 9},
      {name: 'JavaScript (ES6+)', level: 10},
      {name: 'Redux Toolkit', level: 7},
      {name: 'Tailwind CSS', level: 9},
      {name: 'HTML5', level: 9},
      {name: 'CSS3', level: 8},
    ],
  },
  {
    name: 'Databases & Caching',
    skills: [
      {name: 'PostgreSQL (RLS)', level: 8},
      {name: 'DuckDB (VSS)', level: 8},
      {name: 'Redis', level: 8},
      {name: 'PL/SQL', level: 7},
      {name: 'SQL', level: 9},
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      {name: 'Docker', level: 8},
      {name: 'Git', level: 10},
      {name: 'GitHub', level: 9},
      {name: 'ServiceNow REST API', level: 7},
      {name: 'Jira', level: 7},
      {name: 'SolarWinds', level: 7},
    ],
  },
  {
    name: 'Hosting & Deployment',
    skills: [
      {name: 'IIS (Windows Server)', level: 6},
      {name: 'Apache httpd (Linux)', level: 6},
      {name: 'NSSM (Windows Services)', level: 7},
      {name: 'Virtual Machines', level: 7},
    ],
  },
  {
    name: 'AI-Assisted Development',
    skills: [
      {name: 'Claude Code', level: 9},
      {name: 'GitHub Copilot', level: 9},
    ],
  },
];

/**
 * My Story Timeline
 */
export const myStoryTimeline: TimelineItem[] = [
  {
    date: 'Jun 2019 - Jul 2022',
    location: 'Bharathiar University',
    title: 'BSc in Computer Science',
    content: (
      <p>
        Built a foundation in programming, algorithms, data structures, web development, and Git while exploring project-based learning in software engineering.
      </p>
    ),
  },
  {
    date: 'Jan 2024 - Mar 2026',
    location: 'University of Mysore',
    title: 'MCA (Online)',
    content: (
      <p>
        Continued learning advanced technical topics in AI, ML, and software engineering while working full-time in enterprise product delivery.
      </p>
    ),
  },
  {
    date: 'October 2022 - Present',
    location: 'Infosys Limited, Bengaluru, India',
    title: 'Senior Systems Associate',
    content: (
      <p>
        Started in enterprise IT operations and evolved into building AI systems for ticket analytics, governance, and vulnerability remediation across multi-tenant workflows.
      </p>
    ),
  },
  {
    date: '2024 - Present',
    location: 'Infosys Limited',
    title: 'Transition to Agentic AI',
    content: (
      <p>
        Shifted into designing multi-agent workflows, governed AI controls, and semantic search systems for ITSM automation and operational intelligence.
      </p>
    ),
  },
  {
    date: 'Present',
    location: 'Bengaluru, India',
    title: 'Current Focus',
    content: (
      <p>
        Building a governed AI-assisted vulnerability remediation platform and continuing to deliver enterprise-grade agentic systems for IT operations.
      </p>
    ),
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'FVM (REMORA)',
    description: `AI-assisted vulnerability remediation orchestration platform that unifies vulnerability scanners, CMDB, EDR, and ticketing tools into a governed remediation pipeline. Built with Python, FastAPI, PostgreSQL (RLS), Temporal, Redis, Docker, React, TypeScript, and Azure OpenAI.`,
    url: '',
    image: null,
  },
  {
    title: 'Cognitive Analyzer',
    description: `Intelligent ticket analytics platform using keyword matching, SBERT semantic similarity, and LLM-assisted residual clustering over Excel and ServiceNow data to detect trends and reduce ticket volumes. Tech: Python, Flask, LangGraph, LangChain, DuckDB, React, TypeScript, Docker.`,
    url: '',
    image: null,
  },
  {
    title: 'CLARA',
    description: `AI ITSM QA co-pilot that scores every work note across quality dimensions, detects duplicates, and generates coaching narratives for ticket quality improvement. Tech: Python, FastAPI, LangGraph, Azure OpenAI GPT-4o, OpenAI Embeddings, DuckDB, MCP, React.`,
    url: '',
    image: null,
  },
  {
    title: 'SAGA',
    description: `Multi-agent ITSM co-pilot focused on automated ticket triage, SLA-breach prediction, and service assistance through a React dashboard. Tech: Python, FastAPI, LangGraph, Azure OpenAI, PostgreSQL, React.`,
    url: '',
    image: null,
  },
  {
    title: 'Placement Portal',
    description: `MERN stack placement platform for managing job posts, candidate applications, and recruitment workflows for companies and job seekers.`,
    url: 'https://github.com/muhammedshebinva/Placement-Web-App-MERN',
    image: porfolioImage2,
  },
  {
    title: 'Netflix Clone',
    description: `React application mimicking Netflix UI, with movie browsing, search, and favorites built using the TMDB API.`,
    url: 'https://github.com/muhammedshebinva/Netflix-sample-using-React',
    image: porfolioImage3,
  },
  {
    title: 'College Web Page Management System',
    description: `Node.js, Express, MongoDB, and Handlebars-based platform for uploading and downloading college question papers and coursework resources.`,
    url: 'https://github.com/muhammedshebinva/College_Previous-Year-Question-Papers-PDF-Download---Website',
    image: porfolioImage4,
  },
  {
    title: 'OLX Clone',
    description: `Marketplace app built in React and Firebase for buying and selling goods with authentication and real-time listing flows.`,
    url: 'https://github.com/muhammedshebinva/React_tutorial_olx_clone',
    image: porfolioImage5,
  },
];

/**
 * Education section
 */
export const education: TimelineItem[] = [
  {
    date: 'Jan 2024 - Mar 2026',
    location: 'University of Mysore, Karnataka, India',
    title: 'Master of Computer Applications (MCA) – Online',
    content: (
      <p>
        Advanced study in software engineering, AI, ML, and modern application development while continuing full-time enterprise work.
      </p>
    ),
  },
  {
    date: 'Jun 2019 - Jul 2022',
    location: 'Bharathiar University, Tamil Nadu, India',
    title: 'Bachelor of Science in Computer Science',
    content: (
      <p>
        Built a strong foundation in programming, algorithms, data structures, and software development principles.
      </p>
    ),
  },
];

/**
 * Experience section
 */
export const experience: TimelineItem[] = [
  {
    date: 'October 2022 – Present',
    location: 'Infosys Limited | Bengaluru, India',
    title: 'Senior Systems Associate',
    content: (
      <>
        <p className="mb-4">
          AI Engineer and Full-Stack Developer with 4 years at Infosys, architecting production Agentic AI systems for enterprise IT operations and security. Expertise spans multi-agent workflows, governed AI policy layers, RAG pipelines, and full-stack dashboards for operational intelligence.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Current initiative: architecting FVM (REMORA), a multi-tenant AI-assisted vulnerability remediation orchestration platform unifying vulnerability scanners, CMDB, EDR, and ticketing tools into one governed workflow.</li>
          <li>Designed a deterministic policy engine evaluating remediation actions against risk, ownership, SLA, and blast-radius rules before execution, with a fail-closed Azure OpenAI gateway used only for read-only investigation and reporting.</li>
          <li>Built stateful multi-agent workflows with LangGraph and Azure OpenAI GPT-4o for context-aware classification, risk analysis, and intelligent routing of unstructured ITSM ticket data.</li>
          <li>Led the development of Cognitive Analyzer, an AI ticket-analytics platform deployed across 20+ global enterprise accounts, delivering measured incident-ticket reductions of 11–49% and service-request reductions of 8–62%.</li>
          <li>Improving Cognitive Analyzer’s categorization pipeline with ONNX Runtime and DuckDB embedding caching to speed large-volume ticket batch processing.</li>
          <li>Developed RAG and semantic-search pipelines using embeddings and vector databases (DuckDB VSS) to power an on-premise, RAG-grounded chatbot for natural-language analysis.</li>
          <li>Engineered secure Python REST APIs with JWT/RBAC and MCP integrations connecting ServiceNow, Jira, and SolarWinds.</li>
          <li>Built React/TypeScript dashboards with interactive analytics, reducing executive reporting turnaround from days to seconds.</li>
          <li>Containerized applications with Docker and hosted services on non-production VMs with IIS and Apache httpd, running backend services as Windows services with NSSM.</li>
          <li>Used Claude Code and GitHub Copilot to accelerate code generation, refactoring, debugging, and test writing across Python and React codebases.</li>
        </ul>
        <p>
          Core Tech: Python, FastAPI, Flask, LangGraph, LangChain, Azure OpenAI GPT-4o, MCP, React.js, TypeScript, PostgreSQL, DuckDB, ServiceNow API, Docker.
        </p>
      </>
    ),
  },
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
  description:
    'I’m currently open to new opportunities and would be glad to connect for AI, automation, and software engineering roles.',
  items: [
    {
      type: ContactType.Email,
      text: 'muhammedshebinva@gmail.com',
      href: 'mailto:muhammedshebinva@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+91 9961335345',
      href: 'tel:+919961335345',
    },
    {
      type: ContactType.Location,
      text: 'Bengaluru, India (Open to relocation)',
      href: '#',
    },
    {
      type: ContactType.Github,
      text: 'muhammedshebinva',
      href: 'https://github.com/muhammedshebinva',
    },
    {
      type: ContactType.LinkedIn,
      text: 'muhammed-shebin-v-a-06978b213',
      href: 'https://www.linkedin.com/in/muhammed-shebin-v-a-06978b213/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/muhammedshebinva'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/16924852/shebin'},
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/muhammed-shebin-v-a-06978b213/',
  },
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/shebin_vs'},
];
