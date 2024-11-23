import React from "react";
import { HeroSection } from "../components";
import { FaPlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const data = [
    {
      tittle: "Engineering",
      list: [
        "Two Year First Step Integrated Classroom Course for JEE (Main and Advanced)",
        "One Year Second Step Integrated Classroom Course for JEE (Main and Advanced)",
      ],
    },
    {
      tittle: "Engineering",
      list: [
        "Two Year First Step Integrated Classroom Course for JEE (Main and Advanced)",
        "One Year Second Step Integrated Classroom Course for JEE (Main and Advanced)",
      ],
    },
    {
      tittle: "Engineering",
      list: [
        "Two Year First Step Integrated Classroom Course for JEE (Main and Advanced)",
        "One Year Second Step Integrated Classroom Course for JEE (Main and Advanced)",
      ],
    },
  ];

  const Testimonials = [
    {
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/testimonial-video-image/2024-06/mridul-manya-anand-thumb.webp?Y_iP8kH8CK1.PA6GgR31wksF2ESijrYk",
      Para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, similique, reprehenderit itaque enim alias doloribus maiores quia dolorem molestias architecto a dolorum, ipsa sunt unde cumque ad. Suscipit, culpa quo.",
      ProfilePic:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/styles/image_60_60/public/testimonial_student_photo/2024-06/mridul-manya-anand-photo.jpg?pJ5T22fnf6.ROEWojSF.Iip.rlr4X2sA&itok=QwsCNGTW",
      Name: "Rahul",
      course: "IIT-UG 2021",
    },
    {
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/testimonial-video-image/2024-06/mridul-manya-anand-thumb.webp?Y_iP8kH8CK1.PA6GgR31wksF2ESijrYk",
      Para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, similique, reprehenderit itaque enim alias doloribus maiores quia dolorem molestias architecto a dolorum, ipsa sunt unde cumque ad. Suscipit, culpa quo.",
      ProfilePic:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/styles/image_60_60/public/testimonial_student_photo/2024-06/mridul-manya-anand-photo.jpg?pJ5T22fnf6.ROEWojSF.Iip.rlr4X2sA&itok=QwsCNGTW",
      Name: "Rahul",
      course: "IIT-UG 2021",
    },
    {
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/testimonial-video-image/2024-06/mridul-manya-anand-thumb.webp?Y_iP8kH8CK1.PA6GgR31wksF2ESijrYk",
      Para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, similique, reprehenderit itaque enim alias doloribus maiores quia dolorem molestias architecto a dolorum, ipsa sunt unde cumque ad. Suscipit, culpa quo.",
      ProfilePic:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/styles/image_60_60/public/testimonial_student_photo/2024-06/mridul-manya-anand-photo.jpg?pJ5T22fnf6.ROEWojSF.Iip.rlr4X2sA&itok=QwsCNGTW",
      Name: "Rahul",
      course: "IIT-UG 2021",
    },
    {
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/testimonial-video-image/2024-06/mridul-manya-anand-thumb.webp?Y_iP8kH8CK1.PA6GgR31wksF2ESijrYk",
      Para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, similique, reprehenderit itaque enim alias doloribus maiores quia dolorem molestias architecto a dolorum, ipsa sunt unde cumque ad. Suscipit, culpa quo.",
      ProfilePic:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/styles/image_60_60/public/testimonial_student_photo/2024-06/mridul-manya-anand-photo.jpg?pJ5T22fnf6.ROEWojSF.Iip.rlr4X2sA&itok=QwsCNGTW",
      Name: "Rahul",
      course: "IIT-UG 2021",
    },
  ];

  const results = [
    {
      tittle: "JEE (Advanced) 2024 Results",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/outstanding-results-neet-2024-revised-thumb.webp",
    },
    {
      tittle: "JEE (Advanced) 2024 Results",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/outstanding-results-neet-2024-revised-thumb.webp",
    },
    {
      tittle: "JEE (Advanced) 2024 Results",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/outstanding-results-neet-2024-revised-thumb.webp",
    },
  ];

  const adv = [
    {
      tittle: "Teaching Methodology",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Concept & application based learning",
        "Interactive & engaging lectures",
        "Integrated approach focusing on competitive & school exams",
      ],
    },
    {
      tittle: "Teaching Methodology",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Concept & application based learning",
        "Interactive & engaging lectures",
        "Integrated approach focusing on competitive & school exams",
      ],
    },
    {
      tittle: "Teaching Methodology",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Concept & application based learning",
        "Interactive & engaging lectures",
        "Integrated approach focusing on competitive & school exams",
      ],
    },
    {
      tittle: "Teaching Methodology",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Concept & application based learning",
        "Interactive & engaging lectures",
        "Integrated approach focusing on competitive & school exams",
      ],
    },
    {
      tittle: "Teaching Methodology",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Concept & application based learning",
        "Interactive & engaging lectures",
        "Integrated approach focusing on competitive & school exams",
      ],
    },
    {
      tittle: "Teaching Methodology",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Concept & application based learning",
        "Interactive & engaging lectures",
        "Integrated approach focusing on competitive & school exams",
      ],
    },
  ];

  return (
    <div className="overflow-clip">
      <HeroSection />
      <div className="flex flex-col items-center justify-center gap-20 md:items-start md:flex-row my-28 px-7">
        <div>
          <img
            src="https://www.tapasyaedu.com/assets/img/about/about_2.png"
            alt=""
            className="max-w-md"
          />
        </div>
        <div className="max-w-xl space-y-8">
          <h1 className="text-lg font-semibold">
            Tapasya College of Commerce Management
          </h1>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Setting You up For Success
          </h2>
          <p>
            From a single college initially to a network of 17+ modern campuses
            spread throughout the southern states of Telangana and Karnataka,
            today, Tapasya is a name to reckon with in the top commerce colleges
            in Hyderabad and Bengaluru.
          </p>
          <p>
            Tapasya College of Commerce and Management is an exclusive school of
            commerce for future aspirants who see themselves as success
            milestones.
          </p>
          <div className="flex items-center gap-5 justify-evenly">
            <div className="space-y-4">
              <h1 className="text-[#293c73] font-bold text-xl">15000+</h1>
              <p className="text-sm font-bold">Students</p>
            </div>
            <div className="space-y-4">
              <h1 className="text-[#293c73] font-bold text-xl">23+</h1>
              <p className="text-sm font-bold">Branches</p>
            </div>
            <div className="space-y-4">
              <h1 className="text-[#293c73] font-bold text-xl">600+</h1>
              <p className="text-sm font-bold">Faculty</p>
            </div>
            <div className="space-y-4">
              <h1 className="text-[#293c73] font-bold text-xl">5000+</h1>
              <p className="text-sm font-bold">Students got placed</p>
            </div>
          </div>
          <div>
            <button className="border-blackhover:border-blue-500 border-[1px] hover:bg-blue-500 ease-in-out duration-700 hover:text-white flex items-center justify-center gap-4 text-sm p-4 w-full font-bold  rounded-lg">
              <FaPlay size={24} />
              <h1 className="">Watch Intro</h1>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#e0f5fe] w-full p-7 my-20">
        <div>
          <h1 className="pt-10 text-xl font-bold text-center md:text-2xl lg:text-3xl">
            Popular Courses
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 mt-10 md:flex-row md:justify-evenly md:gap-0">
          {data.map((itm, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="max-w-sm bg-white shadow-xl">
                  <div className=" bg-[#00b0f5] p-3 rounded-t-lg text-lg text-center font-bold text-white">
                    <h1>{itm.tittle}</h1>
                  </div>
                  <ul className="space-y-3 p-7">
                    {itm.list.map((i) => {
                      return <li className="font-semibold">{i}</li>;
                    })}
                  </ul>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="my-20">
        <div>
          <h1 className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-[#060f3f]">
            Outstanding Results
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center my-10 md:flex-row md:justify-evenly">
          {results.map((_, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="bg-white shadow-xl">
                  <div className="bg-[#00b0f5] p-4 rounded-t-lg max-w-sm text-center text-white font-semibold text-lg md:text-xl">
                    <h1>{_.tittle}</h1>
                  </div>
                  <div className="p-5">
                    <img src={_.image} alt="" />
                  </div>
                  <div className="flex justify-center border-t-[1px] border-gray-300 p-5">
                    <button className="font-semibold text-center text-blue-500">
                      See All results
                    </button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="bg-[#e0f5fe] w-full  my-20">
        <div className="space-y-3">
          <h1 className="pt-10 text-xl font-bold text-center md:text-2xl lg:text-3xl text-[#060f3f]">
            Testimonials
          </h1>
          <p className="text-[#159fdc] text-center text-lg md:text-xl font-semibold">
            Our Pride there Stories
          </p>
        </div>
        <div className="flex w-[87vw] overflow-x-auto snap-x snap-mandatory scroll-smooth  mx-auto gap-20 p-5">
          {Testimonials.map((itm, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="flex-shrink-0 max-w-sm bg-white rounded-lg shadow-xl snap-center ">
                  <div>
                    <img
                      src={itm.image}
                      alt=""
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <p className="text-gray-700">{itm.Para}</p>
                    <div className="flex items-center gap-5">
                      <img
                        src={itm.ProfilePic}
                        alt=""
                        className="w-16 h-16 rounded-full border-[1px] border-gray-300 shadow-2xl object-cover"
                      />
                      <div>
                        <h1 className="font-bold">{itm.Name}</h1>
                        <p className="text-gray-500">{itm.course}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="bg-[#e0f5fe] w-full p-7 my-20">
        <div className="space-y-3">
          <h1 className="pt-10 text-xl font-bold text-center md:text-2xl lg:text-3xl">
            Aakash Advantage
          </h1>
          <p className="text-[#159fdc] text-center text-lg md:text-xl font-semibold">
            Stay ahead with all-round performance in your chosen stream
          </p>
        </div>
        <div className="grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3 gap-x-3 place-items-center gap-y-7">
          {adv.map((i, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="bg-white p-5 border-[1px] border-gray-300 max-w-sm rounded-lg space-y-3">
                  <div className="flex items-center gap-5">
                    <img src={i.image} alt="" className="w-10 " />
                    <h1 className="text-lg text-[#060f3f] font-semibold">
                      {i.tittle}
                    </h1>
                  </div>
                  <ul className="pl-16 space-y-2">
                    {i.list.map((i) => {
                      return (
                        <li className="text-sm text-gray-700 list-disc">{i}</li>
                      );
                    })}
                  </ul>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="my-16">
        <h1 className="py-10 text-xl font-bold text-center md:text-2xl lg:text-3xl">
          Scholarships
        </h1>
        <div className="p-5">
          <img
            className="max-w-md mx-auto cursor-pointer lg:max-w-5xl"
            src="https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/2024-04/iacst-repeater-scholarship-hpbanner.webp?GguBe4vJM5TS_9L9CKZT7Ua1pW3AaCyM"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1 className="py-7 text-xl font-bold text-center md:text-2xl lg:text-3xl text-[#00337e]">
          Talk to our expert
        </h1>

        <div className="p-8 max-w-2xl mx-auto bg-white shadow-2xl border-[1px] border-gray-300 rounded-lg">
          <h2 className="mb-6 text-2xl font-bold text-center text-[#00337e]">
            Contact Us
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  className="block mb-2 font-semibold text-gray-700"
                  for="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none "
                />
              </div>
              <div>
                <label
                  className="block mb-2 font-semibold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none "
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block mb-2 font-semibold text-gray-700"
                  for="class"
                >
                  Class
                </label>
                <input
                  type="text"
                  id="class"
                  placeholder="Enter your class"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none"
                />
              </div>
              <div>
                <label
                  className="block mb-2 font-semibold text-gray-700"
                  for="stream"
                >
                  Stream
                </label>
                <input
                  type="text"
                  id="stream"
                  placeholder="Enter your stream"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none"
                />
              </div>
            </div>

            <div>
              <label
                className="block mb-2 font-semibold text-gray-700"
                for="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="w-full px-8 py-3 text-white bg-blue-500 rounded-md">
                Submit
              </button>
            </div>
          </div>
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
        <div className="flex flex-col items-center gap-5 mt-16 md md:flex-row justify-evenly">
          <ul className="space-y-4 text-slate-300 ">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <ul className="space-y-4 text-slate-300">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <ul className="space-y-4 text-slate-300">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <ul className="space-y-4 text-slate-300">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
