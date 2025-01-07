import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { appStore } from "./Store/appStore";
import CenterUnderline from "./animation/CenterUnderline ";
function Nav() {
  const location = useLocation();
  const { isNavOpen, setIsNavOpen, isDarkMode, setIsDarkMode, setVisibility } =
    appStore();
  const navRef = useRef<HTMLElement>(null);

  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setIsDarkMode(savedTheme);
    updateThemeClass(savedTheme);
  }, []);

  const updateThemeClass = (isDark: boolean): void => {
    document.documentElement.classList.toggle("dark", isDark);
  };

  const toggleTheme = (): void => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    updateThemeClass(newTheme);
  };

  // Scroll visibility handling
  const handleScroll = () => {
    const scrolled = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxScroll) * 100;
    setScrollProgress(progress);
    setVisibility(scrolled > 40);
  };

  // Event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", (e) => {
      if (
        isNavOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsNavOpen(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavOpen]);

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r  from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Data To Decision
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(
                ({ label, path }) =>
                  location.pathname !== path && (
                    <Link
                      key={path}
                      to={path}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <CenterUnderline label={label} />
                    </Link>
                  )
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:shadow-xl  hover:opacity-90 transition-opacity hidden md:block">
                Get in touch
              </Button>

              <Button size="icon" variant="outline" onClick={toggleTheme}>
                <Sun
                  className={`h-5 w-5 transition-all ${
                    isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />
                <Moon
                  className={`absolute h-5 w-5 transition-all ${
                    isDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-0"
                  }`}
                />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsNavOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="h-0.5 bg-gradient-to-r bg-gray-900 dark:bg-white text-white dark:text-gray-900  transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm md:hidden"
          >
            <motion.nav
              ref={navRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-end">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="mt-8 flex flex-col space-y-8">
                  {navigationItems.map(
                    ({ label, path }) =>
                      location.pathname !== path && (
                        <Link
                          key={path}
                          to={path}
                          onClick={() => setIsNavOpen(false)}
                          className="text-2xl font-semibold from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text  transition-colors"
                        >
                          <CenterUnderline label={label} />
                        </Link>
                      )
                  )}
                </div>

                <div className="mt-auto">
                  <Button
                    className="w-full bg-gradient-to-r bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:shadow-xl  hover:opacity-90 transition-opacity"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Get in touch
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
