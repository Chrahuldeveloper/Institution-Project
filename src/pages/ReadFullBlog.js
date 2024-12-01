import React from "react";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function ReadFullBlog() {
  const data = useLocation();

  console.log(data);

  return (
    <>
      <div className="p-9 border-b-[1px] border-gray-300 shadow-sm">
        
      </div>
      <div className="max-w-3xl p-5 mx-auto my-8 lg:p-0">
        <div className="">
          <div className="flex items-center gap-3 my-4">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="space-y-1">
              <h1 className="font-semibold text-gray-800">
                {data.state.Blog.author}
              </h1>
              <p className="text-sm text-gray-500">{data.state.Blog.date}</p>
            </div>
          </div>

          <div className="flex ">
            <img
              src={data.state.Blog.coverImage}
              className="rounded-lg"
              alt=""
            />
          </div>
          <h1 className="my-3 text-xl font-semibold">
            {data.state.Blog.title}
          </h1>
        </div>
        <div className="max-w-md ">
          {data.state.Blog.sections.map((i, id) => {
            return (
              <React.Fragment key={id}>
                <div className="mt-5">
                  <h1 className="text-lg font-semibold">{i.title}</h1>
                  <p>{i.paragraph}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <footer className="bg-[#303030] p-6 mt-28">
        <div className="flex flex-col items-center justify-center gap-8 md md:justify-around md:flex-row pt-7">
          <div className="space-y-4">
            <img
              src={"https://www.tapasyaedu.com/assets/img/logo/logo-light.svg"}
              className="object-cover mx-auto w-36"
              alt=""
            />
            <div className="flex items-center gap-5">
              <h1 className="font-semibold text-slate-300">Follow Us :</h1>
              <ul className="flex items-center gap-5">
                <FaInstagram
                  size={24}
                  color="white"
                  className="cursor-pointer"
                />
                <FaInstagram
                  size={24}
                  color="white"
                  className="cursor-pointer"
                />
                <FaInstagram
                  size={24}
                  color="white"
                  className="cursor-pointer"
                />
                <FaInstagram
                  size={24}
                  color="white"
                  className="cursor-pointer"
                />
              </ul>
            </div>
          </div>
          <div className="max-w-md">
            <h1 className="text-center text-slate-300">
              Aakash Educational Services Limited Registered office Address: No.
              5/2, 2nd Floor, Kundanahalli Gate, Varthur Road, Opposite SKR
              Kalyana Mandapa, Whitefield, Bengaluru 560037 CIN:
              U80300KA2007PLC150057 Telephone: +91-11–47623456 Fax:
              +91-11–47623472 Email: corporate@aesl.in
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-10 mt-10 md:gap-20 lg:pr-72 md md:flex-row">
          <ul className="space-y-4 text-slate-300 ">
            <h1 className="text-lg font-semibold">About</h1>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <ul className="space-y-4 text-slate-300">
            <h1 className="text-lg font-semibold">About</h1>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </footer>{" "}
    </>
  );
}
