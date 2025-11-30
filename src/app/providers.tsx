"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      delay: 50,
    });
  });
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
