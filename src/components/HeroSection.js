import React from "react";
import { CiMenuFries } from "react-icons/ci";

export default function HeroSection() {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <video
        src="https://tapasyaedu.com/assets/video/slider-3.mp4"
        loop
        muted
        autoPlay
        preload="auto"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />
      <div className="absolute top-[15%] left-[20%] md:left-[20%] translate-y-[-70%] translate-x-[-20%] ">
        <div className="flex items-center justify-between w-[100vw] md:px-10 lg:px-14 px-3.5">
          <div>
            <img
              className="w-36 h-36"
              src="https://www.tapasyaedu.com/assets/img/logo/logo-light.svg"
              alt=""
            />
          </div>
          <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ">
            <CiMenuFries size={25} color="black" />
          </div>
        </div>
      </div>
      <div className="absolute top-[75%] left-[15%] md:left-[10%] translate-y-[-70%] translate-x-[-20%] text-white space-y-3 text-2xl md:text-4xl lg:text-5xl font-semibold">
        <h1>
          Building <span className="font-bold">Bright Futures</span>
        </h1>
        <h1>Since Two Decades</h1>
        <p className="text-base">--- Best Commerce collage in south india</p>
        <button className="bg-white px-8 py-3 rounded-md text-black text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
