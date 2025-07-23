"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "Git", level: 85 },
];

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {skills.map(({ name, level }, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {name}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {level}%
                </span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-indigo-600 h-4 rounded-full"
                  custom={level}
                  initial="hidden"
                  animate={controls}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
