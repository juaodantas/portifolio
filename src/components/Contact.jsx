import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 pt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-4xl"
      >
        Entre em Contato
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <p className="text-lg text-stone-400 mb-8">
          Estou sempre aberto a novas oportunidades e parcerias interessantes.
          Se você tem um projeto em mente ou quer bater um papo sobre
          desenvolvimento, fique à vontade para entrar em contato!
        </p>
      </motion.div>

      <div className="text-center space-y-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 text-xl"
        >
          <MdEmail className="text-2xl text-stone-400" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-stone-300 hover:text-stone-100 transition-colors duration-300"
          >
            {CONTACT.email}
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-8 pt-6"
        >
          <a
            href="https://www.linkedin.com/in/juaodantas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-stone-400 hover:text-stone-100 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/juaodantas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-stone-400 hover:text-stone-100 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/juao.dantas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-stone-400 hover:text-stone-100 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
