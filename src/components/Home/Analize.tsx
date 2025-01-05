import { Button } from "../ui/button";

export default function Analyze() {
  const features: { title: string; description: string }[] = [
    {
      title: "Data Visualization",
      description:
        "Our platform provides a variety of visualization tools to help you understand your data.",
    },
    {
      title: "Predictive Analytics",
      description:
        "Leverage machine learning models to predict future trends and outcomes.",
    },
    {
      title: "Data Mining",
      description:
        "Discover hidden patterns and relationships in your data to drive business decisions.",
    },
    {
      title: "Statistical Analysis",
      description:
        "We offer a range of statistical tools to help you analyze your data effectively.",
    },
  ];
  return (
    <div className="px-14 flex flex-col md:flex-row justify-between md:items-center space-y-11 md:space-y-0 text-left">
      <div className=" space-y-10">
        <h2 className="font-semibold text-5xl">Analyze Effectively</h2>
        <p className="text-sm sm:w-96">
          We utilize advanced analytics tools to uncover patterns and trends in
          your data.
        </p>
        <Button className="group relative h-12 w-40 overflow-hidden font-bold text-lg bg-gray-800 dark:bg-gray-200">
          <div className="absolute inset-0 w-0 bg-slate-950 dark:bg-white transition-all duration-1000 ease-out group-hover:w-full" />
          <span className="relative text-white dark:text-slate-950  group-hover:text-white dark:group-hover:text-slate-950">
            Read more
          </span>
        </Button>
      </div>
      <div>
        <div className=" grid md:grid-cols-2 gap-6 justify-center sm:justify-start">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2  ">
              <div className="space-y-2 sm:space-y-8 ">
                <h3 className="font-semibold px-14 sm:px-0">{feature.title}</h3>
                <p className=" text-xs w-96 px-14 sm:px-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
