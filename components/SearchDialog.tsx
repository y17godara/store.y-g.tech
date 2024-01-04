import React from "react";

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/shadcn/ui/command";

function SearchDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {open && (
        <>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder='Type a command or search...' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading='Suggestions'>
                <CommandItem>
                  <RocketIcon className='mr-2 h-4 w-4' />
                  <span>New Launch</span>
                </CommandItem>
                <CommandItem>
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  <span>Orders</span>
                </CommandItem>
                <CommandItem>
                  <FaceIcon className='mr-2 h-4 w-4' />
                  <span>Favorites</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading='Settings'>
                <CommandItem>
                  <PersonIcon className='mr-2 h-4 w-4' />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <EnvelopeClosedIcon className='mr-2 h-4 w-4' />
                  <span>Notifications</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <GearIcon className='mr-2 h-4 w-4' />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading='Products'>
                <CommandItem>
                  <PersonIcon className='mr-2 h-4 w-4' />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <EnvelopeClosedIcon className='mr-2 h-4 w-4' />
                  <span>Notifications</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <GearIcon className='mr-2 h-4 w-4' />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </>
      )}
    </>
  );
}

export default SearchDialog;
