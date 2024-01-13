import { cn } from "@/lib/utils";

export function Skeleton({
  className = "w-full h-60",
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        `
       before:border-rose-100/10" 
       before:to-transparent' 
       relative 
       isolate
       flex
       items-center
       justify-center overflow-hidden
       rounded-md
       bg-rose-100/10
       bg-gradient-to-r from-transparent
       via-rose-100/10 to-transparent shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:bg-gradient-to-r before:from-transparent before:via-rose-100/10`
      )}
    ></div>
  );
}
