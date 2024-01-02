import { Spotlight } from "@/components/ui";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement<RootLayoutProps> {
  return (
    <>
      <Spotlight size={600} strength={3} color='rgb(179, 179, 204)'>
        <div className='flex h-full min-h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-stone-800 to-gray-900 md:max-h-screen'>
          <main
            className={
              "mx-auto w-full max-w-[1200px] px-4 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20 "
            }
          >
            {children}
          </main>
        </div>
      </Spotlight>
    </>
  );
}
