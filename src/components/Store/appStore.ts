import { create } from "zustand";

interface Appstore {
  isNavOpen: boolean;
  setIsNavOpen: (val: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  visibility: boolean;
  setVisibility: (val: boolean) => void;
}
export const appStore = create<Appstore>((set) => ({
  isNavOpen: false,
  setIsNavOpen: (val) => set({ isNavOpen: val }),
  isDarkMode: false,
  setIsDarkMode(val) {
    set({ isDarkMode: val });
    localStorage.setItem("theme", val ? "dark" : "light");
    document.documentElement.classList.toggle("dark", val);
  },
  visibility: false,
  setVisibility: (val) => set({ visibility: val }),
}));
