import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Blogs() {
  const blogs = [
    {
      title: "The Future of AI in Everyday Life",
      author: "John Doe",
      date: "2024-12-01",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Artificial intelligence is transforming industries and daily life. Let's explore its impact and future trends.",
      sections: [
        {
          title: "Introduction to AI",
          paragraph:
            "Artificial intelligence is reshaping the way we interact with technology in our daily lives. From smart assistants to autonomous vehicles, the possibilities are endless.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "Introduction to AI",
          paragraph:
            "Artificial intelligence is reshaping the way we interact with technology in our daily lives. From smart assistants to autonomous vehicles, the possibilities are endless.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "Introduction to AI",
          paragraph:
            "Artificial intelligence is reshaping the way we interact with technology in our daily lives. From smart assistants to autonomous vehicles, the possibilities are endless.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "AI is a game-changing technology with the potential to significantly enhance our lives. As it evolves, it's crucial to navigate its challenges responsibly.",
    },
    {
      title: "Top Car Tuning Trends in 2024",
      author: "Jane Smith",
      date: "2024-11-28",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Car tuning is an art and a science. Dive into the latest trends shaping this dynamic field in 2024.",
      sections: [
        {
          title: "What is Car Tuning?",
          paragraph:
            "Car tuning is all about customizing your vehicle to enhance its performance or aesthetics.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "Performance Upgrades",
          paragraph:
            "Performance upgrades include turbocharging, remapping the ECU, and upgrading exhaust systems to improve speed and efficiency.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "With the latest innovations in car tuning, enthusiasts have more options than ever to personalize their rides and optimize performance.",
    },
    {
      title: "Top Car Tuning Trends in 2024",
      author: "Jane Smith",
      date: "2024-11-28",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Car tuning is an art and a science. Dive into the latest trends shaping this dynamic field in 2024.",
      sections: [
        {
          title: "What is Car Tuning?",
          paragraph:
            "Car tuning is all about customizing your vehicle to enhance its performance or aesthetics.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "Performance Upgrades",
          paragraph:
            "Performance upgrades include turbocharging, remapping the ECU, and upgrading exhaust systems to improve speed and efficiency.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "With the latest innovations in car tuning, enthusiasts have more options than ever to personalize their rides and optimize performance.",
    },
    {
      title: "The Future of AI in Everyday Life",
      author: "John Doe",
      date: "2024-12-01",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Artificial intelligence is transforming industries and daily life. Let's explore its impact and future trends.",
      sections: [
        {
          title: "Introduction to AI",
          paragraph:
            "Artificial intelligence is reshaping the way we interact with technology in our daily lives. From smart assistants to autonomous vehicles, the possibilities are endless.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "AI in Healthcare",
          paragraph:
            "AI is revolutionizing healthcare by providing tools for early diagnosis, personalized medicine, and efficient patient care.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "AI is a game-changing technology with the potential to significantly enhance our lives. As it evolves, it's crucial to navigate its challenges responsibly.",
    },
    {
      title: "Top Car Tuning Trends in 2024",
      author: "Jane Smith",
      date: "2024-11-28",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Car tuning is an art and a science. Dive into the latest trends shaping this dynamic field in 2024.",
      sections: [
        {
          title: "What is Car Tuning?",
          paragraph:
            "Car tuning is all about customizing your vehicle to enhance its performance or aesthetics.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "Performance Upgrades",
          paragraph:
            "Performance upgrades include turbocharging, remapping the ECU, and upgrading exhaust systems to improve speed and efficiency.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "With the latest innovations in car tuning, enthusiasts have more options than ever to personalize their rides and optimize performance.",
    },
    {
      title: "Top Car Tuning Trends in 2024",
      author: "Jane Smith",
      date: "2024-11-28",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Car tuning is an art and a science. Dive into the latest trends shaping this dynamic field in 2024.",
      sections: [
        {
          title: "What is Car Tuning?",
          paragraph:
            "Car tuning is all about customizing your vehicle to enhance its performance or aesthetics.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "Performance Upgrades",
          paragraph:
            "Performance upgrades include turbocharging, remapping the ECU, and upgrading exhaust systems to improve speed and efficiency.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "With the latest innovations in car tuning, enthusiasts have more options than ever to personalize their rides and optimize performance.",
    },
    {
      title: "The Future of AI in Everyday Life",
      author: "John Doe",
      date: "2024-12-01",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Artificial intelligence is transforming industries and daily life. Let's explore its impact and future trends.",
      sections: [
        {
          title: "Introduction to AI",
          paragraph:
            "Artificial intelligence is reshaping the way we interact with technology in our daily lives. From smart assistants to autonomous vehicles, the possibilities are endless.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "AI in Healthcare",
          paragraph:
            "AI is revolutionizing healthcare by providing tools for early diagnosis, personalized medicine, and efficient patient care.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "AI is a game-changing technology with the potential to significantly enhance our lives. As it evolves, it's crucial to navigate its challenges responsibly.",
    },
    {
      title: "Top Car Tuning Trends in 2024",
      author: "Jane Smith",
      date: "2024-11-28",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Car tuning is an art and a science. Dive into the latest trends shaping this dynamic field in 2024.",
      sections: [
        {
          title: "What is Car Tuning?",
          paragraph:
            "Car tuning is all about customizing your vehicle to enhance its performance or aesthetics.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "Performance Upgrades",
          paragraph:
            "Performance upgrades include turbocharging, remapping the ECU, and upgrading exhaust systems to improve speed and efficiency.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "With the latest innovations in car tuning, enthusiasts have more options than ever to personalize their rides and optimize performance.",
    },
    {
      title: "Top Car Tuning Trends in 2024",
      author: "Jane Smith",
      date: "2024-11-28",
      coverImage:
        "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      intro:
        "Car tuning is an art and a science. Dive into the latest trends shaping this dynamic field in 2024.",
      sections: [
        {
          title: "What is Car Tuning?",
          paragraph:
            "Car tuning is all about customizing your vehicle to enhance its performance or aesthetics.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          title: "Performance Upgrades",
          paragraph:
            "Performance upgrades include turbocharging, remapping the ECU, and upgrading exhaust systems to improve speed and efficiency.",
          image:
            "https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      conclusion:
        "With the latest innovations in car tuning, enthusiasts have more options than ever to personalize their rides and optimize performance.",
    },
  ];

  return (
    <>
      <div className="w-[90vw] mx-auto my-8">
        <div className="flex items-center gap-5 px-5">
          <div>
            <img
              src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="object-cover w-16 h-16 rounded-full"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-lg font-semibold">Blogs</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {blogs.map((_, i) => {
            return (
              <React.Fragment key={i}>
                <Link
                  to="/readblog"
                  state={{
                    Blog: _,
                  }}
                >
                  <div className="p-5 cursor-pointer">
                    <div>
                      <img src={_.coverImage} alt="" className="rounded-lg" />
                      <div className="flex items-center gap-3 mt-3">
                        <img
                          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="object-cover w-12 h-12 rounded-full"
                          alt=""
                        />
                        <div className="space-y-1 ">
                          <h1 className="font-semibold text-gray-800">
                            {_.author}
                          </h1>
                          <p className="text-sm text-gray-700">{_.date}</p>
                        </div>
                      </div>
                      <div className="my-3 space-y-2">
                        <h1 className="text-lg font-semibold">{_.title}</h1>
                        <p className="text-sm text-gray-600">{_.intro}</p>
                      </div>
                    </div>
                  </div>
                </Link>
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
      </footer>{" "}
    </>
  );
}
