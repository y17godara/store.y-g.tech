import { siteConfig } from "@/config/index";
import { cn } from "@/lib/utils";
import { Header, Footer } from "@/components";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement<RootLayoutProps> {
  return (
    <>
      <Header />
      <main
        className={
          "mx-auto max-w-[1200px] px-4 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
