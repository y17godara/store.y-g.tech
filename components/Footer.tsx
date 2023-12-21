import { cn } from "@/lib/utils";
import { Link } from "./ui";
import { siteConfig } from "@/config";

export function Footer() {
  return (
    <div
      className={cn(
        "md:stick relative top-0 z-50 my-36 animate-in bg-primary pb-12 text-base"
      )}
      style={{ "--index": 1 } as React.CSSProperties}
    >
      {/* Socials */}
      <footer className='mx-auto flex max-w-[700px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-6'>
        <div className='flex flex-col items-center justify-center text-start'>
          {/* Build Stack */}
          <p className='mt-8 text-start text-sm text-secondary'>
            Built with <span className='text-primary'>❤️</span> using{" "}
            <Link
              className='italic underline-offset-2 hover:underline'
              href={"https://nextjs.org/"}
              target
            >
              Next.js
            </Link>
            {", "}
            <Link
              className='italic underline-offset-2 hover:underline'
              href={"https://stripe.com/en-in"}
              target
            >
              Stripe
            </Link>
            {", "}
            <Link
              className='italic underline-offset-2 hover:underline'
              href={"https://tailwindcss.com/"}
              target
            >
              Tailwindcss
            </Link>
            {", "}
            and{" "}
            <Link
              className='italic underline-offset-2 hover:underline'
              href={"https://vercel.com/"}
              target
            >
              Vercel
            </Link>
            {". "}
          </p>
        </div>

        <div className='flex flex-col items-center justify-center text-start'>
          <div className='flex flex-row items-center justify-center gap-1 text-xs font-medium text-secondary'>
            <span className='text-primary'>Beta</span>{" "}
            {`v${siteConfig.siteVersion}`}
          </div>
        </div>
      </footer>
    </div>
  );
}
