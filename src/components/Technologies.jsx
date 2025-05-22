import { RiReactjsLine } from "react-icons/ri";
import { TbBrandDocker } from "react-icons/tb";
import {
  SiMongodb,
  SiNestjs,
  SiFlutter,
  SiAngular,
  SiGraphql,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologias
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.div
          className="p-4"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
        >
          <SiAngular className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
        >
          <SiFlutter className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
        >
          <SiNestjs className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <SiGraphql className="text-7xl text-pink-600" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
        >
          <TbBrandDocker className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
