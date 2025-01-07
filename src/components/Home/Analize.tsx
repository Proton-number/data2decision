import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
export default function Analyze() {
  const features = [
    {
      title: "Data Visualization",
      description:
        "Our platform provides a variety of visualization tools to help you understand your data.",
      icon: "📊",
    },
    {
      title: "Predictive Analytics",
      description:
        "Leverage machine learning models to predict future trends and outcomes.",
      icon: "🔮",
    },
    {
      title: "Data Mining",
      description:
        "Discover hidden patterns and relationships in your data to drive business decisions.",
      icon: "⛏️",
    },
    {
      title: "Statistical Analysis",
      description:
        "We offer a range of statistical tools to help you analyze your data effectively.",
      icon: "📈",
    },
  ];
  return (
    <div className="relative py-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 itejms-start">
          {/* Left section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                Analyze Effectively
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                We utilize advanced analytics tools to uncover patterns and
                trends in your data, providing actionable insights for your
                business.
              </p>
            </div>

            <Button className="group h-14 px-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:shadow-xl transition-all duration-300">
              <span className="flex items-center text-lg">
                Read more
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>

          {/* Right section - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative h-full p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
