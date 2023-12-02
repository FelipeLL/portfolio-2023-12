import GithubIcon from "@/icons/Github.astro";
import InstagramIcon from "@/icons/Instagram.astro";
import LinkedinIcon from "@/icons/Linkedin.astro";
import TwitterIcon from "@/icons/Twitter.astro";
import type { Job } from "@/interfaces/JobModel";

export const iconList = [
  {
    icon: GithubIcon,
    url: "https://github.com/FelipeLL",
  },
  {
    icon: InstagramIcon,
    url: "#",
  },
  {
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/jfelipeladino/",
  },
  {
    icon: TwitterIcon,
    url: "#",
  },
];

export const jobs: Job[] = [
  {
    title: "Let's Do it Now",
    date: "July 2023",
    description: "Development of ERP-oriented applications.",
    activities: [
      "SCRUM as an agile methodology to manage project development",
      "Create user interfaces with application logic for effective interaction",
      "Coordinate and execute software deployments to production environments",
    ],
    badges: ["Vue", "TypeScript", "Javascript", "CSS"],
    current: true,
  },
  {
    title: "Un Toque Digital",
    date: "December 2022 - June 2023",
    description: "Creation and maintenance of platforms and web pages.",
    activities: [
      "Deployment to production on EC2 AWS servers and Nginx",
      "Software as a Service (SaaS) design",
      "SCRUM as an agile methodology and Trello tool to manage project development",
    ],
    badges: ["React", "Angular", "Node.js", "AWS", "Nginx", "MongoDB", "MySQL"],
  },
  {
    title: "Fusagasugá Mayor's Office",
    date: "January 2022 - June 2022",
    description:
      "Development and implementation of a management of trees with georeferencing application in the municipality of Fusagasugá, Cundinamarca.",
    badges: ["PHP", "Laravel", "MySQL", "Javascript"],
  },
];
