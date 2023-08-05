import React from "react";
import Img from "../assets/dwayne.png";

const Home = () => {
  return (
    <div
      className="md:px-10 mt-20 px-7 my-14 bg-[#1a1a29]"
      id="home"
    >
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-white">
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <h1
              x-data="{ typing: 'Francis Dwayne', original: 'Francis Dwayne' }"
              x-init="() => {
            setInterval(() => {
              if (typing.length === original.length) {
                typing = '';
              }
              typing += original[typing.length];
            }, 200);
          }"
              x-text="typing"
              className="font-semibold md:text-5xl my-4 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500"
            ></h1>
            <p className="md:w-[500px]">
            Welcome to my portfolio homepage! As an IT graduate, I showcase my passion for technology through innovative projects and solutions. Explore my work and experiences in software development. Let's connect and explore the possibilities together!
            </p>
            <div className="mt-5">
              <button className="btn transition-all duration-500 bg-blue-500 py-2 px-4 rounded text-white hover:bg-white hover:text-blue-500">
                About me
              </button>
              <button className="btn outline py-1.5 px-6 rounded border-none ml-5 text-white ">
                Projects
              </button>
            </div>
          </div>
          {/* img */}
          <div className="order-first md:order-last relative">
            <img
              src={Img}
              alt=""
              className="rounded-full transform hover:scale-110 transition duration-300 sm:w-[]"
              width="420px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
