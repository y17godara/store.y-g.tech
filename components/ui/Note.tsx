import React from "react";
import { Link } from "@/components/ui/index";
import { cn } from "@/lib/utils";
import { RiExternalLinkFill } from "react-icons/ri";
import { type NoteProps } from "@/types/index";

export const Badge = ({ note }: { note: string }) => {
  return (
    <>
      <div className='flex flex-row gap-1'>
        <span className='me-2 rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400'>
          {note}
        </span>
      </div>
    </>
  );
};

type SimpleNoteProps = {
  className?: string;
  children: React.ReactNode;
};

export const SimpleNote = ({ className, children }: SimpleNoteProps) => {
  return (
    <>
      <span className={cn("text-xs", className)}>{children}</span>
    </>
  );
};

export const Note = ({
  description,
  note,
  button,
  href,
  className,
}: NoteProps) => {
  return (
    <>
      <div
        className={cn(
          "inline-flex w-full flex-col gap-1 rounded-lg border border-primary p-2 text-xs font-normal no-underline transition-opacity",
          className
        )}
      >
        {" "}
        <Badge note={note || "Note"} />
        <div className='flex-1'>
          <div className=''>{description}</div>
        </div>
        {href ? (
          <div className='flex flex-row items-center gap-1'>
            <Link
              className='text-xs italic underline underline-offset-4'
              href={href}
              target
            >
              {button}
            </Link>
            <RiExternalLinkFill className='inline-block text-xs' />
          </div>
        ) : null}
      </div>
    </>
  );
};
