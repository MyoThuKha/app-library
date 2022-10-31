import { motion } from "framer-motion";
import React, { useState } from "react";

interface contentProps {}

const iconVariant = {
  hover: {
    scale: 1.1,
  },
};
const Content: React.FC<contentProps> = ({}) => {
  const links: string[] = [
    "https://github.com/MyoThuKha/calculator/releases",
    "https://github.com/MyoThuKha/Simple-Note-App/releases",
  ];
  const maxIndex = links.length - 1;
  const [curr, setCurr] = useState(0);
  return (
    <div className="flex items-center justify-around w-screen h-screen relative">
      <div className="absolute top-4 right-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
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
        onClick={() =>
          setCurr(() => {
            if (curr === 0) return maxIndex;
            return curr - 1;
          })
        }
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
        onClick={() =>
          setCurr(() => {
            if (curr === maxIndex) return 0;
            return curr + 1;
          })
        }
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
        className="btn-outline"
        href={links[curr]}
        target="_blank"
        rel="noreferrer"
      >
        <p>Try out</p>
        <div className="rounded-full w-9 h-9 bg-white ml-2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </motion.a>
    </div>
  );
};
export default Content;
