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
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: "HCI researcher",
  // teaserImage: "/teaser.jpg",
};

export const navigation = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "CV", route: "/cv.pdf" },
  // { name: "About", route: "/about" },
  // { name: "News", route: "/news" },
];

export const homepageSection = {
  AboutSection: true,
  SelectedPublicationsSection: true,
  ProjectSection: true,
  NewsSection: true,
};
