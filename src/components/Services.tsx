import { motion } from "motion/react";
import {
  BarChart3,
  Brain,
  Database,
  LineChart,
  Shield,
  Settings,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { appStore } from "./Store/appStore";
function Services() {
  const { setActiveService } = appStore();

  const mainServices = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights with our comprehensive analytics solutions.",
      features: [
        "Real-time data processing",
        "Custom dashboard creation",
        "Performance metrics tracking",
        "Trend analysis and forecasting",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Leverage the power of AI to automate processes and predict future trends.",
      features: [
        "Predictive modeling",
        "Pattern recognition",
        "Automated decision making",
        "Neural network development",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Data Infrastructure",
      description:
        "Build robust and scalable data infrastructure for your growing business needs.",
      features: [
        "Cloud data warehousing",
        "ETL pipeline development",
        "Database optimization",
        "Data security implementation",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const additionalServices = [
    {
      icon: LineChart,
      title: "Business Intelligence",
      description:
        "Convert complex data into clear, actionable business insights",
      price: "Custom pricing",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Protect your valuable data with advanced security measures",
      price: "From $999/mo",
    },
    {
      icon: Settings,
      title: "Data Integration",
      description: "Seamlessly connect all your data sources into one platform",
      price: "From $799/mo",
    },
  ];

  return (
    <div className="lg:pt-28  min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 ">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Comprehensive data solutions tailored to your business needs. From
          analytics to infrastructure, we've got you covered.
        </p>
      </motion.div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setActiveService(index)}
              className={`relative group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
              <div className="relative space-y-6">
                <service.icon className="h-12 w-12" />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold">Additional Services</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Complement your main services with these specialized solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-xl bg-gray-50 dark:bg-gray-900 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  <service.icon className="h-8 w-8" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                  <p className="text-sm font-medium">{service.price}</p>
                  <Button variant="outline" className="w-full">
                    Get started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="relative bg-gray-900 dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let us help you transform your data into meaningful insights and
              drive your business forward.
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Schedule a consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
