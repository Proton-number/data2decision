import RandomLetterSwapPingPong from "../animation/RandomLetterSwapPingPong";

export default function Footer() {
  return (
    <div>
      <footer
        className="relative flex min-h-screen bg-black dark:bg-white text-white dark:text-black"
        style={{ zIndex: 2 }}
      >
        <div className="flex flex-col w-full px-14 py-20">
          <h2 className=" text-6xl sm:text-9xl font-bold">
            Exploring <br /> Data,
          </h2>
          <div className="flex-grow" />
          <h2 className=" text-6xl sm:text-9xl font-bold self-end text-right">
            Enhancing <br /> Vision.
          </h2>
        </div>
      </footer>

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
