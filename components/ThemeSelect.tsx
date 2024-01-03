"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";

import { useTheme } from "next-themes";
import { SelectSeparator } from "@radix-ui/react-select";

export function ThemeSelect() {
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
      <Select onValueChange={(value) => setTheme(value)} defaultValue={theme}>
        <SelectTrigger className='h-8 w-full'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>

        <SelectContent>
          {themes.map((theme: string) => (
            <div key={theme}>
              <SelectItem value={theme} className='text-xs capitalize'>
                {theme}
              </SelectItem>
              <SelectSeparator />
            </div>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
