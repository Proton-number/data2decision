import { motion } from "motion/react";
import RandomLetterSwapPingPong from "../animation/RandomLetterSwapPingPong";
export default function Footer() {
  return (
    <div className="relative">
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen bg-black dark:bg-white text-white dark:text-black overflow-hidden"
        style={{ zIndex: 2 }}
      >
        <div className="container mx-auto flex flex-col justify-between h-full px-6  md:px-14 py-20 space-y-40">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl sm:text-8xl  xl:text-9xl font-bold leading-tight"
          >
            Exploring <br className="hidden sm:block" /> Data,
          </motion.h2>

          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl sm:text-8xl xl:text-9xl font-bold self-end text-right leading-tight mt-auto"
          >
            Enhancing <br className="hidden sm:block" /> Vision.
          </motion.h2>
        </div>
      </motion.footer>

      <aside className="dark:bg-neutral-900 min-h-[50vh] items-center justify-center flex sticky bottom-0 z-0">
        <div className="w-full h-full rounded-lg  text-3xl md:text-5xl flex flex-col items-center justify-center font-overusedGrotesk">
          <div className="h-full  rounded-xl py-12  align-text-center gap-y-1 md:gap-y-2 flex flex-col justify-center items-center">
            <RandomLetterSwapPingPong
              label=" Data To Decison!"
              reverse={false}
              className=" font-bold text-4xl sm:text-7xl lg:text-9xl text-center"
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
