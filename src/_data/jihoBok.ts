import { Experience } from "./types";

const basic = {
  name: "Jiho Bok",
  roleTitle: "Frontend Engineer",
  email: "bok.jiho@gmail.com",
  summary: "",
};

const techStack = [
  {
    imgSrc: "",
    label: "TypeScript",
  },
  {
    imgSrc: "",
    label: "React",
  },
  {
    imgSrc: "",
    label: "JavaScript",
  },
  {
    imgSrc: "",
    label: "Tailwind CSS",
  },
  {
    imgSrc: "",
    label: "Vue.js",
  },
];

const experiences: Experience[] = [
  {
    companyName: "Smilegate",
    roleTitle: "Frontend Developer",
    roleType: "full-time",
    startDate: "Apr 2023",
    endDate: "Jun 2025",
    description: [""],
    techStack: [
      "JavaScript(ES6+)",
      "Vue.js",
      "Bootstrap",
      "Figma",
      "GitLab",
      "Jira/Wiki",
    ],
  },
  {
    companyName: "Smilegate",
    roleTitle: "Frontend Developer",
    roleType: "intern",
    startDate: "Dec 2022",
    endDate: "Mar 2023",
    description: [""],
    techStack: [
      "TypeScript",
      "React",
      "Styled-component",
      "Figma",
      "GitLab (CI/CD)",
    ],
  },
];

export { basic, techStack, experiences };
