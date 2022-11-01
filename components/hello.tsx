import React from "react";
import Image from "next/image";

interface helloProps {}

const Hello: React.FC<helloProps> = ({}) => {
  return (
    <div className="flex w-screen items-center justify-around">
      <h1 className="text-8xl">Projects</h1>
      <div className="bg-white rounded-full">
        <Image src="/window.svg" alt="main image" width="400" height="400" />
      </div>
    </div>
  );
};
export default Hello;
