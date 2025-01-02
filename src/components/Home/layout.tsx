import Analyze from "./Analize";
import Help from "./Help";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen justify-center  flex flex-col pb-60  ">
        <Hero />
        <Analyze />
      </div>
      <div className="min-h-screen justify-center  flex flex-col bg-black dark:bg-white text-white dark:text-black ">
        <Help />
      </div>
    </div>
  );
}
