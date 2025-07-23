"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Load mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (
      savedMode === "dark" ||
      (!savedMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Ashik <span className="text-blue-600 dark:text-blue-400">.</span>
        </h1>
        <nav className="space-x-6 text-gray-700 dark:text-gray-200 flex items-center">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="#skills" className="hover:text-blue-500">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>
          <Link href="/faq" className="hover:text-blue-500">
            FAQ
          </Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="ml-6 text-2xl focus:outline-none transition-transform hover:scale-110"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}
