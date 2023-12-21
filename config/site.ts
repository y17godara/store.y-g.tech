export const siteConfig = {
  siteVersion: `1.0.0`,
  title: `Store | Yash Godara`,
  aboutMe: ``,
  creator: `Yash Godara`,
  publisher: `Yash Godara`,
  category: `technology`,
  authors: [
    {
      name: `Yash Godara`,
      twitterHandle: `@y17godara`,
    },
  ],
  description: `A E-Commerce Store built with Next.js, TypeScript, TailwindCSS, Prisma, PostgreSQL, MongoDB, and more.`,
  twitterHandle: `@y17godara`,
  meta: `A E-Commerce Store built with Next.js, TypeScript, TailwindCSS, Prisma, PostgreSQL, MongoDB, and more.`,
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  generator: `Next.js`,
  ogImage: `/og-bg.png`,
  links: {
    twitter: "https://x.com/y17godara",
    github: "https://github.com/y17godara",
  },
  keywords: process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL.split(",")
    : ["y17godar", "Yash Godara", "Store", "E-Commerce"],
};

export type SiteConfig = typeof siteConfig;
