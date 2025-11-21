import { Experience } from "./types";

const basic = {
  name: "Jiho Bok",
  roleTitle: "Frontend Engineer",
  email: "bok.jiho@gmail.com",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut posuere odio. Vivamus malesuada fermentum eleifend. Cras laoreet, nulla scelerisque interdum tristique, mi felis hendrerit arcu, nec blandit augue quam nec tortor. Fusce et lobortis lectus. Nulla vel dui id turpis fringilla rutrum sed non nulla. Proin et tempor nunc, non blandit tellus. In eu elit vel orci porttitor aliquet nec a enim. Donec sit amet nisl a ante fringilla hendrerit.",
  linkedIn: "https://www.linkedin.com/in/jiho-bok/",
  github: "https://github.com/Jiho31",
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
    description: ["acheivement #1", "acheivement #2", "acheivement #3"],
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
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Firestore",
      "Firebase Authentication",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut posuere odio. Vivamus malesuada fermentum eleifend. Cras laoreet, nulla scelerisque interdum tristique, mi felis hendrerit arcu, nec blandit augue quam nec tortor. ",
    imageSrcs: ["/temp_image.jpg" /* "/temp_image.jpg" */],
  },
  {
    name: "Bookit List",
    repositoryLink: "https://github.com/Jiho31/bookit-list-v2",
    liveServiceLink: "https://bookit-list-v2.netlify.app/",
    techStack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Firestore",
      "Firebase Authentication",
    ],
    description:
      "Fusce et lobortis lectus. Nulla vel dui id turpis fringilla rutrum sed non nulla. Proin et tempor nunc, non blandit tellus. In eu elit vel orci porttitor aliquet nec a enim. Donec sit amet nisl a ante fringilla hendrerit.",
    imageSrcs: [],
  },
];

export { basic, techStack, experiences, projects };
