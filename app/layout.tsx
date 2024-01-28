import "@/styles/globals.css";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/index";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/ThemeProvider";
import ReduxProvider from "./reduxToolkit";
import { SessionProvider } from "next-auth/react";
import Providers from "./Provider";
import { auth } from "@/auth";
import { Toaster } from "@/components/shadcn/ui/toaster";

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

export default async function RootLayout({
  children,
}: RootLayoutProps): Promise<React.ReactElement<RootLayoutProps>> {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang='en' dir='ltr' suppressHydrationWarning>
        <body
          className={cn(
            "w-full bg-primary font-sans text-primary antialiased selection:bg-secondaryA",
            hubot.variable
          )}
        >
          <ReduxProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              <Providers>{children}</Providers>
            </ThemeProvider>
          </ReduxProvider>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
