"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Hi, I'm{" "}
        <span className="text-blue-600 dark:text-blue-400">Ashik</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-xl text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        A passionate Web Developer, JavaScript ninja, and lifelong learner on a
        journey to build beautiful digital things.
      </motion.p>

      <motion.div
        className="space-x-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          download
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
