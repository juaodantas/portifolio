import profilePic from "../assets/fota.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, straggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <section className="pb-4 lg:mb-36" aria-label="Apresentação">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="João Vitor Dantas - Desenvolvedor Full Stack"
              className="border border-stone-900 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              width={650}
              height={650}
              loading="eager"
              decoding="async"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 space-y-4"
          >
            <motion.h1
              className="pb-2 text-4xl tracking-tight lg:text-7xl font-bold"
              variants={childVariants}
            >
              João Vitor Dantas
            </motion.h1>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r
                          from-stone-300 to-stone-500 
                          bg-clip-text text-2xl lg:text-3xl tracking-tight 
                          text-transparent font-medium"
              role="text"
              aria-label="Cargo: Full Stack Developer"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-lg lg:text-xl leading-relaxed tracking-tight text-stone-300/90 text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white hover:bg-stone-100 rounded-full px-8 py-4 text-sm font-medium text-stone-800 mb-10 transition-colors duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
              aria-label="Baixar currículo em PDF"
            >
              <span>Baixe meu Currículo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
