import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://amarjeet.app/",
  author: "Amarjeet",
  profile: "https://amarjeet.app/",
  desc: "Amarjeet's blog site",
  title: "Amarjeet.app",
  // ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/masteramarjeet/amarjeet-app/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/masteramarjeet",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amarjeet-kumar-345880208",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:masteramarjeetkumar@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "X",
    href: "https://x.com/masteramarjeet",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
];
