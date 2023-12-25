"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`; // active path
  const active = pathname === href;

  return (
    <Link
      className={cn(
        "rounded-lg px-4 py-2 text-sm transition-colors hover:text-primary",
        active ? "bg-secondaryA text-primary" : "text-secondary",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

// export function NavPath({ href, children, className }: NavLinkProps) {
//   // http://localhost:3000/products?view=list
//   //  get ?view from url
//   const searchParams = `${useSearchParams()}`; // get ?view from url
//   console.log("Search Params: ", searchParams);

//   const active = searchParams === href;

//   return (
//     <Link
//       key={href}
//       className={cn(
//         "rounded-lg px-4 py-2 text-sm transition-colors hover:text-primary",
//         active ? "bg-secondaryA text-red-500" : "text-secondary",
//         className
//       )}
//       href={href}
//     >
//       {children}
//     </Link>
//   );
// }
