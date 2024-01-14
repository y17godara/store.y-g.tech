import { cn } from "@/lib/utils";

export function Skeleton({
  className = "w-full h-full",
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        `
       relative
       isolate 
       flex 
       items-center
       justify-center
       overflow-hidden
       rounded-md bg-black/10
       bg-gradient-to-r 
       from-transparent 
       via-black/10 
       to-transparent 
       shadow-xl
       shadow-white/5
       before:absolute
       before:inset-0
       before:-translate-x-full
       before:animate-[shimmer_2s_infinite]
       before:border-t
       before:border-black/10
       before:bg-gradient-to-r
       before:from-transparent
       before:via-black/10
       before:to-transparent
      dark:bg-rose-100/10
      dark:bg-gradient-to-r
      dark:from-transparent 
      dark:via-rose-100/10 
      dark:to-transparent
      dark:shadow-black/5 
      dark:before:border-rose-100/10  
      dark:before:bg-gradient-to-r 
      dark:before:from-transparent 
      dark:before:via-rose-100/10 
      dark:before:to-transparent`
      )}
    ></div>
  );
}
