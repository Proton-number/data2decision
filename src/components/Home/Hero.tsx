import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center min-h-screen ">
      <div className="space-y-10 max-w-5xl px-14 py-20 ">
        <h1 className="text-6xl font-bold leading-tight text-left">
          DATA TO DECISION
        </h1>
        <p className="text-xl max-w-lg leading-relaxed text-left">
          Transform your raw data into actionable insights with ease. Our
          platform bridges the gap between complex data and smart business
          decisions.
        </p>
        <Button className="group relative h-12 w-40 overflow-hidden rounded-lg  text-lg bg-gray-800 dark:bg-gray-200 shadow-2xl dark:shadow-2xl font-bold">
          <div className="absolute inset-0 w-0 bg-black dark:bg-white transition-all duration-1000 ease-out group-hover:w-full" />
          <span className="relative flex items-center justify-center  text-white dark:text-slate-950  group-hover:text-white dark:group-hover:text-slate-950">
            Get Started <ArrowRight className="h-5 w-5 ml-2" />
          </span>
        </Button>
      </div>
      <div className="px-14 space-y-3 font-medium text-lg">
        <p>Trusted by businesses of all sizes worldwide.</p>
        <p className="opacity-65">
          Regardless of size, from small startups to large corporations.
        </p>
      </div>
    </div>
  );
}
