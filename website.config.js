export const personalInfo = {
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

export const websiteInfo = {
  title: personalInfo.name,
  description: "HCI researcher",
};

export const navigations = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "News", route: "/news" },
  { name: "CV", route: "/cv/cv.pdf" },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = "sans"; // "sans" | "serif" | "mono"
