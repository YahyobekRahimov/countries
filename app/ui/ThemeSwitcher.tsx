"use client";

import { useState } from "react";

export default function ThemeSwitcher() {
   const [isDark, setIsDark] = useState(getThemeInitialState());

   function getThemeInitialState() {
      if (
         localStorage.theme === "dark" ||
         (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
         document.documentElement.classList.add("dark");
         return true;
      } else {
         document.documentElement.classList.remove("dark");
         return false;
      }
   }

   const handleThemeSwitcher = () => {
      if (isDark) {
         document.documentElement.classList.remove("dark");
         setIsDark(false);
      } else {
         document.documentElement.classList.add("dark");
         setIsDark(true);
      }
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
