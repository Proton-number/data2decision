import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


function Work() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { url: "/pexels-cottonbro-5483077.jpg", title: "Data Analysis" },
    { url: "/pexels-goumbik-669623.jpg", title: "Business Intelligence" },
    { url: "/pexels-mikhail-nilov-6963944.jpg", title: "Team Collaboration" },
    {
      url: "/pexels-tima-miroshnichenko-5380642.jpg",
      title: "Strategic Planning",
    },
    { url: "/pexels-brett-sayles-2881229.jpg", title: "Technology Solutions" },
  ];

    const nextImage = () => {
      setActiveImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setActiveImage((prev) => (prev - 1 + images.length) % images.length);
    };


  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Our work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A Glimpse into Our Impactful Projects
          </p>
        </motion.div>

        {/* Main carousel section */}
        <div className="relative mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800"
          >
            {/* Navigation buttons */}
            <Button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full size-12 bg-white/20 backdrop-blur-md hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 dark:text-white "
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full size-12 bg-white/20 backdrop-blur-md hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 dark:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Images */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === activeImage ? 1 : 0,
                    scale: index === activeImage ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                  style={{ display: index === activeImage ? "block" : "none" }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Image overlay and title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-white text-2xl font-bold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Thumbnails/indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeImage
                    ? "bg-gray-900 w-8 dark:bg-white"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
