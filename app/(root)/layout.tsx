import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        className={"mx-auto max-w-[1200px] px-4 pb-24 pt-10 md:px-6 md:pb-44"}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
