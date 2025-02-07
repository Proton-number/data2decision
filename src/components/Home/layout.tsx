import Analyze from "./Analize";
import Help from "./Help";
import Hero from "./Hero";
import Work from "./Work";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <div style={{ zIndex: 1 }}>
        <div className="  min-h-screen justify-center  flex flex-col pb-14 lg:pb-60  relative space-y-6">
          <Hero />

          <Analyze />
        </div>
        <div className="  min-h-screen justify-center  flex flex-col bg-black dark:bg-white text-white dark:text-black relative ">
          <Help />
        </div>
        <Work />
      </div>
    </div>
  );
}
