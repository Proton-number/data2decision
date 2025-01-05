import { fadeIn } from "@/variants";
import { motion } from "motion/react";

export default function Help() {
  return (
    <div>
      <div className="flex flex-col justify-center min-h-screen  space-y-2 ">
        <span className="uppercase px-14 py-20">// how we help</span>
        <motion.div
          variants={fadeIn("down", 0.3 )}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row justify-between items-center space-y-4 px-14 py-20 w-full overflow-hidden"
        >
          <div>
            <h1 className="text-6xl font-bold leading-tight text-center sm:text-left w-96">
              Efficient Data Processing
            </h1>
            <p className="text-xl max-w-lg leading-relaxed text-center sm:text-left">
              Our advanced analytics tools ensure efficient and accurate
              processing of large volumes of data, saving you time and
              resources.
            </p>
          </div>
          <div className="m-auto sm:m-0 flex justify-center sm:justify-start">
            <div
              style={{ width: "300px", background: "blue", height: "300px" }}
            />
          </div>
        </motion.div>

        <div className="px-14 py-20  bg-white text-black ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col lg:flex-row justify-between items-center space-y-4 w-full"
          >
            <div>
              <h1 className="text-6xl font-bold leading-tight text-center sm:text-left w-96">
                Customized Solutions
              </h1>
              <p className="text-xl max-w-lg leading-relaxed text-center sm:text-left">
                We understand that every business is unique, which is why we
                offer tailor-made solutions to meet your specific needs and
                goals.
              </p>
            </div>
            <div className="m-auto sm:m-0 flex justify-center sm:justify-start">
              <div
                style={{ width: "300px", background: "blue", height: "300px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
