import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import logo from "../images/logo.png";
export default function HeroSection({
  scrollToElement,
  tesimonialref,
  resutsref,
  contactref,
}) {
  const [istoogle, setistoogle] = useState(false);

  const pdf =
    "https://firebasestorage.googleapis.com/v0/b/app-2-d919d.appspot.com/o/pdfcoffee.com_the-millionaire-real-estate-investor-2-pdf-free.pdf?alt=media&token=8eb14240-385e-4ac1-ae9f-1d4006090316";

  const downloadBroucher = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.target = "_blank";
    link.download = "Broucher.pdf";
    link.click();
  };

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <video
          src="https://tapasyaedu.com/assets/video/slider-3.mp4"
          loop
          muted
          autoPlay
          preload="auto"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        <div className="absolute top-[10%] left-[20%] md:left-[20%] translate-y-[-70%] translate-x-[-20%] ">
          <div className="flex items-center justify-between w-[100vw] md:px-10 lg:px-6 px-3.5">
            <div>
              <img className="w-28 h-28" src={logo} alt="" />
            </div>
            <div className="flex items-center justify-center ">
              <CiMenuFries
                size={10}
                onClick={() => {
                  setistoogle(true);
                }}
                color="black"
                className="block w-10 h-10 p-2 bg-white rounded-full cursor-pointer md:hidden"
              />

              <nav className="hidden p-5 md:block">
                <ul className="flex items-center gap-5 text-sm font-semibold text-white">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Blogs</li>
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToElement(tesimonialref);
                    }}
                  >
                    Testimonals
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToElement(resutsref);
                    }}
                  >
                    Results
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToElement(contactref);
                    }}
                  >
                    ContactUs
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="absolute top-[75%] left-[15%] md:left-[10%] translate-y-[-70%] translate-x-[-20%] text-white space-y-3 text-2xl md:text-4xl lg:text-5xl font-semibold">
          <h1>
            Building <span className="font-bold">Bright Futures</span>
          </h1>
          <h1>Since Two Decades</h1>
          <p className="text-base">--- Best Commerce collage in south india</p>
          <button
            onClick={downloadBroucher}
            className="px-8 py-3 text-sm text-black bg-white rounded-md"
          >
            Download Broucher
          </button>
        </div>
      </div>

      {istoogle ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="bg-white w-[60vw] md:hidden p-5 rounded-md">
            <div className="flex justify-end translate-x-5 -translate-y-14">
              <RxCross2
                className="p-1 bg-white rounded-full cursor-pointer w-7 h-7"
                size={23}
                color="black"
                onClick={() => {
                  setistoogle(false);
                }}
              />
            </div>
            <ul className="-mt-8 space-y-5">
              <li className="flex items-center cursor-pointer gap-7">
                <CiHome size={24} color="black" />
                <h1>Home</h1>
              </li>
              <li className="flex items-center cursor-pointer gap-7">
                <CiHome size={24} color="black" />
                <h1>Blogs</h1>
              </li>
              <li
                onClick={() => {
                  setistoogle(false);
                  scrollToElement(tesimonialref);
                }}
                className="flex items-center cursor-pointer gap-7"
              >
                <CiHome size={24} color="black" />
                <h1>Testimonals</h1>
              </li>
              <li
                onClick={() => {
                  setistoogle(false);
                  scrollToElement(resutsref);
                }}
                className="flex items-center cursor-pointer gap-7"
              >
                <CiHome size={24} color="black" />
                <h1>Results</h1>
              </li>
              <li
                onClick={() => {
                  setistoogle(false);
                  scrollToElement(contactref);
                }}
                className="flex items-center cursor-pointer gap-7"
              >
                <CiHome size={24} color="black" />
                <h1>ContactUs</h1>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
