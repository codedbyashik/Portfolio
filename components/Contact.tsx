"use client";

import { motion, easeOut } from "framer-motion"; // ✅ Import the actual easing function

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut }, // ✅ fixed
  },
};

const inputVariants = {
  rest: { scale: 1 },
  focus: { scale: 1.05, boxShadow: "0 0 8px rgb(99 102 241)" }, // indigo glow
};

const buttonVariants = {
  rest: { boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 15px rgb(99 102 241)",
    transition: { duration: 0.3, yoyo: Infinity },
  },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-16 px-4 bg-white dark:bg-gray-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
          variants={containerVariants}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="mb-8 text-gray-700 dark:text-gray-300"
          variants={containerVariants}
          transition={{ delay: 0.2 }}
        >
          Got a project? Or just wanna say hi? Shoot me a message!
        </motion.p>

        <form
          action="https://formspree.io/f/mvovzryd"
          method="POST"
          className="flex flex-col space-y-4"
        >
          {["name", "email"].map((field) => (
            <motion.input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100"
              variants={inputVariants}
              initial="rest"
              whileFocus="focus"
              animate="rest"
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}

          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100"
            variants={inputVariants}
            initial="rest"
            whileFocus="focus"
            animate="rest"
            transition={{ type: "spring", stiffness: 300 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded cursor-pointer"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
