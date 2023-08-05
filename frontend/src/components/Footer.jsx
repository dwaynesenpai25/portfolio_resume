import React from "react";


const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2022 | Dev Dwayne</p>
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">Data Analyst</p>
        <p className="hidden sm:block">Designed by @devdwayne</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="/#"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width= "20px" alt="" />
        </a>
        <a
          className="ml-4"
          href="/#"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" width= "20px"  alt="" />
        </a>
        <a
          className="ml-4"
          href="/#"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png " width= "20px"  alt="" />
        </a>
        <a
          className="ml-4"
          href="/#"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png " width= "20px"  alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;