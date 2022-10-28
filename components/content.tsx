import { motion } from "framer-motion";
import React from "react";

interface contentProps {}

const iconVariant = {
  hover: {
    scale: 1.1,
  },
};
const Content: React.FC<contentProps> = ({}) => {
  return (
    <div className="flex items-center justify-around w-screen h-screen relative">
      <motion.svg
        variants={iconVariant}
        whileHover="hover"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={0.8}
        stroke="currentColor"
        className=" w-16 h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </motion.svg>

      <div className="text-center h-1/3 w-1/3 border-2 border-black rounded-3xl px-8 py-4">
        <h2 className="text-4xl py-4 font-bold">Calculator app</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          laboriosam.
        </p>
      </div>
      <motion.svg
        variants={iconVariant}
        whileHover="hover"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={0.8}
        stroke="currentColor"
        className=" w-16 h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </motion.svg>
      <motion.a
        variants={iconVariant}
        whileHover="hover"
        className="absolute bottom-20 border bg-blue-300 text-white rounded-full px-4 py-3"
        href="https://github.com/MyoThuKha/calculator/releases"
        target="_blank"
        rel="noreferrer"
      >
        Try out
      </motion.a>
    </div>
  );
};
export default Content;
