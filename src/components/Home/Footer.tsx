import { motion } from "motion/react";

export default function Footer() {
  return (
    <div>
      <footer className="relative min-h-52 bg-pink-500" style={{ zIndex: 2 }}>
        This is a footer
      </footer>
      <motion.aside
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="dark:bg-neutral-900 min-h-[50vh] items-center justify-center flex sticky bottom-0 z-0"
      >
        <h2 className="font-bold text-6xl sm:text-9xl text-center">
          Data To Decison
        </h2>
      </motion.aside>
    </div>
  );
}
