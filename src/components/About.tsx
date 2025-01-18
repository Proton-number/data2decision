import { motion } from "motion/react";

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-14">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl text-gray-600 dark:text-gray-300"
          >
            We transform complex data into actionable insights, helping
            businesses make informed decisions.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50 dark:bg-neutral-800"
      >
        <div className="container mx-auto px-6 md:px-14">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
              To empower organizations with data-driven solutions that drive
              growth and innovation. We believe in the power of data to
              transform businesses and create meaningful impact.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Through advanced analytics and visualization, we help our clients
              unlock the full potential of their data assets.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Pushing boundaries with cutting-edge data solutions",
              },
              {
                title: "Integrity",
                description:
                  "Maintaining the highest standards of data security and ethics",
              },
              {
                title: "Impact",
                description:
                  "Delivering measurable results that drive business success",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6 md:px-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Data Scientist",
                image: "/api/placeholder/300/300",
              },
              {
                name: "Michael Chen",
                role: "Analytics Lead",
                image: "/api/placeholder/300/300",
              },
              {
                name: "Emma Davis",
                role: "ML Engineer",
                image: "/api/placeholder/300/300",
              },
              {
                name: "James Wilson",
                role: "Visualization Expert",
                image: "/api/placeholder/300/300",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div
                  // src={member.image}
                  // alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover bg-gray-500"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
