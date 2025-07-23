"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek and modern personal portfolio built using Next.js and Tailwind CSS. It showcases my work, skills, and journey.",
    link: "https://codedbyashik.github.io/login-form/",
  },
  {
    title: "Todo App",
    description:
      "A minimal and functional Todo application using React and localStorage to keep track of daily tasks.",
    link: "https://your-todo-app-link.com",
  },
  {
    title: "Landing Page Design",
    description:
      "A responsive landing page for a fictional SaaS product, designed with Tailwind and optimized for all devices.",
    link: "https://your-landing-page.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-500 dark:text-indigo-300 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
