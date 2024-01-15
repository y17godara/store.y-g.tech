import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { cn } from "@/lib/utils";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement<RootLayoutProps> {
  return (
    <>
      <header
        className={cn("md:stick relative top-0 z-50 h-14 bg-primary shadow-sm")}
      >
        <Header />
      </header>
      <main
        className={"mx-auto max-w-[1200px] px-4 pb-24 pt-10 md:px-6 md:pb-44"}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
