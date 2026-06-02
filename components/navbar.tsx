"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
              <span className="font-bold text-xl hidden sm:block gradient-text">
                Sallo Cuts
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Order Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 py-4 space-y-3"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
