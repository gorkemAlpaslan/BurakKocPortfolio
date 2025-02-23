"use client";

import Link from "next/link";
import { useTheme } from "./theme-provider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll değerlerine göre header stillerini değiştir
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(3, 3, 3, 0)", "rgba(3, 3, 3, 0.8)"]
  );

  const headerPadding = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);

  const headerBorderRadius = useTransform(scrollY, [0, 100], ["0rem", "90px"]);

  const headerMargin = useTransform(scrollY, [0, 100], ["0rem", "0.25rem"]);

  const headerWidth = useTransform(
    scrollY,
    [0, 100],
    ["100%", "calc(100% - 4.5rem)"]
  );

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        padding: headerPadding,
        borderRadius: headerBorderRadius,
        margin: headerMargin,
        width: headerWidth,
      }}
      className="fixed top-0 left-[50%] -translate-x-1/2 right-0 backdrop-blur-md transition-all duration-300 z-[100] w-full "
    >
      <div className="container w-full  ">
        <nav className="flex items-center justify-between relative w-full">
          <Link
            href="/"
            className="text-2xl font-bold text-black dark:text-white relative z-50"
          >
            B
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black dark:text-white relative z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 relative z-50">
            <Link
              href="/"
              className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
            >
              Anasayfa
            </Link>
            <Link
              href="/portfolyo"
              className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
            >
              Portfolyo
            </Link>
            <Link
              href="/e-cv"
              className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
            >
              E-CV
            </Link>
            <Link
              href="/iletisim"
              className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
            >
              İletişim
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/iletisim"
              className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              Şimdi Ara
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white dark:bg-[#030303] z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link
                href="/"
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Anasayfa
              </Link>
              <Link
                href="/portfolyo"
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolyo
              </Link>
              <Link
                href="/e-cv"
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                E-CV
              </Link>
              <Link
                href="/iletisim"
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <Link
                  href="/iletisim"
                  className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Şimdi Ara
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
