import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Help() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row  justify-between sm:items-end px-14 space-y-11 sm:space-y-0 items-center text-center sm:text-left">
        <div className="space-y-10">
          <span className="uppercase">// who we help</span>
          <h1 className="font-semibold text-5xl sm:-w-56">
            Effortlessly manage your data
          </h1>
          <p className="sm:w-96 font-normal text-lg">
            Easily manage your datasets and insights in one place, saving time
            and effort.
          </p>
        </div>
        <Button className="group relative h-12 w-40 overflow-hidden  bg-white text-lg dark:bg-black/75 shadow-2xl dark:shadow-2xl font-bold">
          <div className="absolute inset-0 w-0 bg-black dark:bg-white transition-all duration-1000 ease-out group-hover:w-full" />
          <span className="relative flex items-center justify-center space-x-4 text-black dark:text-white transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
            Read more <ArrowRight className="h-5 w-5 ml-2" />
          </span>
        </Button>
      </div>
    </div>
  );
}
