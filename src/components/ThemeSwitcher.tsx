"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = useMemo(
    () => (theme == "system" ? systemTheme : theme),
    [theme, systemTheme]
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme == "system") {
      setTheme(systemTheme == "light" ? "dark" : "light");
    } else if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-3 right-3 hover:opacity-70 hover:cursor-pointer p-3 rounded-full bg-gray-200 dark:bg-gray-600"
      >
        {currentTheme == "dark" ? (
          <Image
            className="dark:invert"
            src={"/dark_mode_filled.svg"}
            alt="moon"
            width={24}
            height={24}
          />
        ) : (
          <Image
            className="dark:invert"
            src={"/light_mode_filled.svg"}
            alt="sun"
            width={24}
            height={24}
          />
        )}
      </button>
    </div>
  );
}
