import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { appStore } from "./Store/appStore";
import CenterUnderline from "./animation/CenterUnderline ";
function Nav() {
  const location = useLocation();
  const {
    isNavOpen,
    setIsNavOpen,
    isDarkMode,
    setIsDarkMode,
    visibility,
    setVisibility,
  } = appStore();
  const navRef = useRef<HTMLElement>(null);

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
    setVisibility(window.scrollY > 40);
  };

  // Click outside handling
  const handleClickOutside = (e: MouseEvent) => {
    if (
      isNavOpen &&
      navRef.current &&
      !navRef.current.contains(e.target as Node)
    ) {
      setIsNavOpen(false);
    }
  };

  // Event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      <nav>
        <div className="p-4 flex flex-row justify-around items-center">
          <div className="flex space-x-4">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map(
              ({ label, path }) =>
                location.pathname !== path && (
                  <Link key={path} to={path}>
                    <CenterUnderline label={label} />
                  </Link>
                )
            )}
          </div>
          <Button className="bg-black text-white dark:bg-white dark:text-black">
            Get in touch
          </Button>
          <div className="hidden md:block">
            <Button size={"icon"} onClick={toggleTheme}>
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
          </div>
        </div>
      </nav>

      {/* The menu button */}
      <AnimatePresence mode="wait">
        {visibility && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed top-11 right-6 z-30 p-4 "
          >
            {!isNavOpen && (
              <Button size="icon" onClick={() => setIsNavOpen(true)}>
                <Menu />
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* The drawer */}
      <nav
        ref={navRef}
        className={`
    shadow-2xl  fixed top-0 right-0 h-full bg-black dark:bg-white backdrop-blur-lg
      w-80 sm:w-96 z-40 transform transition-transform duration-300 text-white
      ${isNavOpen ? "translate-x-0" : "translate-x-full"}
    `}
      >
        <div className="p-8 flex flex-col h-full space-y-8">
          <Button
            onClick={() => setIsNavOpen(false)}
            size="icon"
            className="mb-10  bg-white dark:bg-black hover:bg-slate-100 "
          >
            <X className="text-black dark:text-white" />
          </Button>

          <div className="flex items-start flex-col space-y-32 text-white dark:text-black">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map(
              ({ path, label }) =>
                location.pathname !== path && (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsNavOpen(false)}
                  >
                    <CenterUnderline
                      label={label}
                      className="text-5xl font-bold"
                    />
                  </Link>
                )
            )}
            <div className="sm:hidden">
              <Button
                size={"icon"}
                onClick={toggleTheme}
                className=" bg-white dark:bg-black hover:bg-slate-100 text-black dark:text-white"
              >
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
