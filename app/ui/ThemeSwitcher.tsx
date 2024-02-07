"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
   const [isDark, setIsDark] = useState(false);

   useEffect(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         setIsDark(true);
      }
   }, []);

   useEffect(() => {
      if (isDark) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [isDark]);

   const handleThemeSwitcher = () => {
      setIsDark(!isDark);
   };

   return (
      <button
         className="cursor-pointer"
         onClick={handleThemeSwitcher}
      >
         {isDark ? "dark" : "light"}
      </button>
   );
}
