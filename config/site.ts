export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ClawnCoding",
  description: "A Next.js 13 web blog application",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Perfil",
      href: "/profile",
    },
    {
      label: "Configurações",
      href: "/settings",
    },
    {
      label: "Sair",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Claudenir-Nojosa",
    twitter: "https://twitter.com/nojosaf",
    linkedin: "https://www.linkedin.com/in/claudenir-nojosa/",
  },
};
