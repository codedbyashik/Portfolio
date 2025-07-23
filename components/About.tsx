// app/components/About.tsx
'use client';

import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const lines = [
  "Hey, I’m Ashik — a passionate Web Developer with a love for building beautiful and functional websites.",
  "I specialize in frontend development using Next.js, React, and Tailwind CSS.",
  "I'm also exploring backend and freelancing to become a full-stack beast.",
  "When I'm not coding, I’m probably writing poetry or watching stars. 🌌✨"
];

export default function About() {
  return (
    <section className="py-10 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="space-y-4">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="text-lg text-gray-700 dark:text-gray-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={textVariant}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
