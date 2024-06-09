export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Airside",
  description: "Find what lounges you have access to, quick.",
  navItems: [
    {
      label: "Lounges",
      href: "/lounges",
      bold: true,
      bounce: true,
    },
    {
      label: "Airports",
      href: "/airports",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "GO PRO",
      href: "/go-pro",
      bold: true,
      color: "success" as
        | "success"
        | "secondary"
        | "foreground"
        | "primary"
        | "warning"
        | "danger"
        | undefined,
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    twitter: "https://twitter.com/getnextui",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
