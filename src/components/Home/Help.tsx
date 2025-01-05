import { fadeIn } from "@/variants";
import { motion } from "motion/react";

export default function Help() {
  return (
    <div>
      <div className="flex flex-col justify-center min-h-screen  space-y-2 ">
        <span className="uppercase px-14 py-20">// how we help</span>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row justify-between items-center space-y-4 px-14 py-20 w-full overflow-hidden"
        >
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight text-center lg:text-left lg:w-96">
              Efficient Data Processing
            </h1>
            <p className="text-xl max-w-sm m-auto lg:max-w-lg leading-relaxed text-center lg:text-left">
              Our advanced analytics tools ensure efficient and accurate
              processing of large volumes of data, saving you time and
              resources.
            </p>
          </div>
          <div className="m-auto sm:m-0 flex justify-center sm:justify-start">
            <div className=" sm:w-[500px] lg:w-[600px] ">
              <img
                src="/photo-1454165804606-c3d57bc86b40.png"
                alt="data-img"
                className="object-fill"
              />
            </div>
          </div>
        </motion.div>

        <div className="px-14 py-20  bg-white text-black dark:bg-black dark:text-white ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col lg:flex-row justify-between items-center space-y-4 w-full"
          >
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight text-center lg:text-left w-96">
                Customized Solutions
              </h1>
              <p className="text-xl max-w-sm m-auto lg:max-w-lg leading-relaxed text-center lg:text-left">
                We understand that every business is unique, which is why we
                offer tailor-made solutions to meet your specific needs and
                goals.
              </p>
            </div>
            <div className="m-auto sm:m-0 flex justify-center sm:justify-start">
              <div className="  sm:w-[500px] lg:w-[600px]">
                <img
                  src="/photo-1516383274235-5f42d6c6426d.png"
                  alt="data-img2"
                  className="object-fill"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
