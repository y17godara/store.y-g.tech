import "@/styles/globals.css";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/index";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, Header, Footer } from "@/components";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `Home | Yash Godara`,
    template: `%s | Yash Godara`,
  },
  description: siteConfig.description,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  metadataBase: new URL(`https://${process.env.DOMAIN}`),
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/api/og?title=${siteConfig.title}`,
        alt: "Image: Yash Godara",
      },
    ],
  },
  openGraph: {
    title: siteConfig.aboutMe,
    siteName: siteConfig.title,
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    description: siteConfig.description,
    images: [
      {
        url: `/api/og?title=${siteConfig.title}`,
        alt: "Image: Yash Godara",
      },
    ],
  },
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.keywords,
  generator: siteConfig.generator,
  applicationName: siteConfig.title,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const hubot = localFont({
  src: "../public/assets/fonts/HubotSans.woff2",
  variable: "--font-hubot",
  display: "swap",
  weight: "400 900",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement<RootLayoutProps> {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <body
        className={cn(
          "w-full bg-primary font-sans text-primary antialiased selection:bg-secondaryA",
          hubot.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <main
            className={
              "mx-auto max-w-[1200px] px-4 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
            }
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
