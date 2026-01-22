export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  profilePicture?: string;
  role: string;
  university: string;
  universityWebsite: string;
  socialMedia: SocialMediaLink[];
}

export interface WebsiteInfo {
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  route: string;
}

export interface HomepageSection {
  AboutSection?: boolean;
  NewsSection?: boolean;
  SelectedPublicationsSection?: boolean;
  ProjectSection?: boolean;
}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {
  name: "Hiroshi Ishii",
  profilePicture: "/profile.jpg", //optional
  role: "Professor",
  university: "MIT Media Lab",
  universityWebsite: "https://www.zju.edu.cn/",
  socialMedia: [
    { name: "Email", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com/anxndsgn" },
    {
      name: "GitHub",
      url: "https://github.com/anxndsgn/academic-homepage-template",
    },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "ORCID", url: "https://orcid" },
    { name: "Google Scholar", url: "https://scholar.google.com" },
  ],
};

export const websiteInfo: WebsiteInfo = {
  title: personalInfo.name,
  description: "HCI researcher",
};

export const navigations: NavigationItem[] = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "News", route: "/news" },
  { name: "CV", route: "/cv/cv.pdf" },
];

export const homepageSection: HomepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle: FontStyle = "sans"; // "sans" | "serif" | "mono"
