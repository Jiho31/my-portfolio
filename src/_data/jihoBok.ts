import { Experience } from "./types";

const basic = {
  name: "Jiho Bok",
  roleTitle: "Frontend Engineer",
  email: "bok.jiho@gmail.com",
  summary: [
    "Hi, I’m Jiho. 👋",
    "",
    "I’m passionate about improving my knowledge through code reviews, while learning modern design patterns to apply best practices. I believe little, continuous improvements will help grow my expertise in software engineering, creating business impacts.",
    "",
    "Recently I’ve been focusing on strengthening my React & TypeScript skills through building a personal project, experiencing end-to-end product delivery.",
    "",
    "🇬🇧 Currently based in London, and seeking new opportunities.",
    "Please feel free to reach out for a chat! 🤓",
  ],
  linkedIn: "https://www.linkedin.com/in/jiho-bok/",
  github: "https://github.com/Jiho31",
  techBlog: "https://medium.com/@bokjiho",
};

const techStack = [
  {
    imgSrc: "/tech_stack/react.svg",
    label: "React",
  },
  {
    imgSrc: "/tech_stack/vuedotjs.svg",
    label: "Vue.js",
  },
  {
    imgSrc: "/tech_stack/typescript.svg",
    label: "TypeScript",
  },
  {
    imgSrc: "/tech_stack/javascript.svg",
    label: "JavaScript",
  },
  {
    imgSrc: "/tech_stack/tailwindcss.svg",
    label: "Tailwind CSS",
  },
];

const experiences: Experience[] = [
  {
    companyName: "Smilegate",
    roleTitle: "Frontend Developer",
    roleType: "Full-time",
    startDate: "Apr 2023",
    endDate: "Jun 2025",
    description: [
      "Led the successful launch of LordNine (achieving #1 on App Store and Google Play, 450,000+ downloads, and over $30M USD in revenue) by developing custom real-time monitoring dashboards with live-status widgets that processed streaming data from multiple backend services, ensuring stable service performance",
      "Reduced incident diagnostic time by 67% (from 90 to 30 minutes average) by developing an incident management system using Vue.js, JavaScript, and RESTful APIs for real-time monitoring and analysis      ",
      "Accelerated feature development by building and maintaining a reusable UI component library with 30+ atomic design components, enabling consistent UI implementation across team projects",
      // "Improved code maintainability by refactoring 15+ legacy Vue 2 modules into composables and Composition API patterns during Vue 3 migration"
    ],
    techStack: [
      "Vue.js",
      "JavaScript (ES6+)",
      "Bootstrap",
      "Figma",
      "GitLab",
      "Jira/Wiki",
    ],
  },
  {
    companyName: "Smilegate",
    roleTitle: "Frontend Developer",
    roleType: "Intern",
    startDate: "Dec 2022",
    endDate: "Mar 2023",
    description: [
      "Built a functional N:N video call prototype supporting 9+ concurrent users by implementing WebSocket and WebRTC communication",
      "Optimised code quality and team collaboration by actively participating in agile sprints and code reviews, incorporating peer feedback into rapid iteration cycles",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Styled-components",
      "WebRTC",
      "kurento-utils",
      "Figma",
      "GitLab",
    ],
  },
];

const projects = [
  {
    name: "Bookit List",
    repositoryLink: "https://github.com/Jiho31/bookit-list-v2",
    liveServiceLink: "https://bookit-list-v2.netlify.app/",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firestore",
      "Firebase Authentication",
      "Vite",
    ],
    description:
      "Personal bookshelf and book recommendation system implemented with Open Library API",
    imageSrcs: ["/bookit-list-bookshelf.png"],
  },
  // {
  //   name: "Boom",
  //   repositoryLink: "https://github.com/Jiho31/bookit-list-v2",
  //   liveServiceLink: "",
  //   techStack: ["JavaScript", "React", "HTML/CSS", "WebRTC"],
  //   description:
  //     "Fusce et lobortis lectus. Nulla vel dui id turpis fringilla rutrum sed non nulla. Proin et tempor nunc, non blandit tellus. In eu elit vel orci porttitor aliquet nec a enim. Donec sit amet nisl a ante fringilla hendrerit.",
  //   imageSrcs: [],
  // },
];

export { basic, techStack, experiences, projects };
