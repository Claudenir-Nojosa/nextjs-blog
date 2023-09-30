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
      href: "/root/about",
    },
    {
      label: "Criar Publicação",
      href: "/root/create",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/root/about",
    },
    {
      label: "Criar Publicação",
      href: "/root/create",
    },
    {
      label: "Configurações",
      href: "/settings",
    },
  ],
  links: {
    github: "https://github.com/Claudenir-Nojosa",
    twitter: "https://twitter.com/nojosaf",
    linkedin: "https://www.linkedin.com/in/claudenir-nojosa/",
  },
};
