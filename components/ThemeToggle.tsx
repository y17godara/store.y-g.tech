"use client";
import { GoGear } from "react-icons/go";
import { GrRadialSelected } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Listbox value={theme} onChange={(value) => setTheme(value)}>
        {({ open }) => {
          return (
            <div className='relative'>
              <Listbox.Button
                className={clsx(
                  "text-secoundary relative flex h-8 w-8 cursor-default items-center justify-center rounded-full text-secondary hover:text-primary focus:outline-none focus:ring-0 focus-visible:outline-none"
                )}
              >
                <GoGear className='h-5 w-5' />
              </Listbox.Button>
              <AnimatePresence>
                {open && (
                  <Listbox.Options
                    as={motion.ul}
                    static
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                    className='absolute right-0 mt-4 max-h-60 w-40 origin-top-right gap-1 overflow-auto rounded-xl bg-white p-2 text-sm capitalize shadow-lg focus:outline-none dark:bg-black'
                  >
                    {themes.map((theme, index: number) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          clsx(
                            "relative cursor-default select-none rounded-md py-2 pl-10 pr-4",
                            active ? "bg-secondary" : ""
                          )
                        }
                        value={theme}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {theme == "system" ? "Automatic" : theme}
                            </span>
                            {selected ? (
                              <span className='absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50'>
                                <GrRadialSelected
                                  className='h-4 w-4'
                                  aria-hidden='true'
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </AnimatePresence>
            </div>
          );
        }}
      </Listbox>
    </>
  );
}
