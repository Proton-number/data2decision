import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center py-24 sm:0 hero">
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center  mx-auto">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 dark:from-white dark:to-gray-300">
                DATA TO DECISION
              </span>
            </h1>

            <p className="text-lg text-gray-100 dark:text-gray-50 max-w-lg leading-relaxed">
              Transform your raw data into actionable insights with ease. Our
              platform bridges the gap between complex data and smart business
              decisions.
            </p>

            <div className="flex gap-4">
              <Button className="group relative h-14 px-8 overflow-hidden rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:shadow-xl transition-shadow">
                <span className="relative flex items-center text-lg font-medium">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-2"
              >
                Learn more
              </Button>
            </div>
          </motion.div>

          {/* Stats/Trusted by section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20" />
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Active Users
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Support
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Countries
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
