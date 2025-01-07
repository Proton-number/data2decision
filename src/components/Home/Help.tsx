import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Help() {
  return (
    <div className="relative bg-black dark:bg-white text-white dark:text-black">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(50,50,255,0.1),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="text-sm font-mono text-gray-400 dark:text-gray-600 tracking-wider">
            // HOW WE HELP
          </span>
        </motion.div>

        {/* First Feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-40"
        >
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 dark:from-black dark:to-gray-600">
                Efficient Data Processing
              </span>
            </h2>
            <p className="text-lg text-gray-400 dark:text-gray-600 max-w-lg">
              Our advanced analytics tools ensure efficient and accurate
              processing of large volumes of data, saving you time and
              resources.
            </p>
            <div className="flex items-center text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors cursor-pointer group">
              <span className="mr-2">Learn more</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl" />
            <img
              src="/photo-1454165804606-c3d57bc86b40.png"
              alt="Data processing visualization"
              className="relative rounded-2xl shadow-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* Second Feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8 lg:order-2">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 dark:from-black dark:to-gray-600">
                Customized Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-400 dark:text-gray-600 max-w-lg">
              We understand that every business is unique, which is why we offer
              tailor-made solutions to meet your specific needs and goals.
            </p>
            <div className="flex items-center text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors cursor-pointer group">
              <span className="mr-2">Explore solutions</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
            <img
              src="/photo-1516383274235-5f42d6c6426d.png"
              alt="Customized solutions visualization"
              className="relative rounded-2xl shadow-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
