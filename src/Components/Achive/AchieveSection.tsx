import { IoIosCheckmarkCircle } from "react-icons/io";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules"; // Correct way
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import AchivementsImg from "../../assets/img/Achivements-imgs/Achivement-img.png";
import Vecter from "../../assets/img/Achivements-imgs/Button.png";
import PlayBtn from "../../assets/img/Achivements-imgs/Vector.png";

import ClientImg1 from "../../assets/img/Achivements-imgs/client-img1.png";
import ClientImg2 from "../../assets/img/Achivements-imgs/client-img2.png";
import ClientImg3 from "../../assets/img/Achivements-imgs/client-img3.png";
import ClientImg4 from "../../assets/img/Achivements-imgs/client-img4.png";
import { useEffect, useState } from "react";

interface AchiveDataType {
  img: string;
  objectID: number;
}
const AchieveData: AchiveDataType[] = [
  {
    img: ClientImg1,
    objectID: 1,
  },
  {
    img: ClientImg2,
    objectID: 2,
  },
  {
    img: ClientImg3,
    objectID: 3,
  },
  {
    img: ClientImg4,
    objectID: 4,
  },
];

function AchieveSection() {
  const [index, setIndex] = useState(0);
  const visible = AchieveData.slice(index, index + 2);
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 2) % AchieveData.length);
  };
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Image Section */}
        <div className="order-last lg:order-first  rounded-3xl relative overflow-hidden">
          <img
            src={AchivementsImg}
            alt="Achievements"
            className="w-full h-[300px] md:h-full object-cover rounded-lg"
          />
          <div className="h-36 rounded-lg w-48 p-5 bg-white absolute left-4 md:left-6 bottom-4 md:bottom-6 shadow-lg">
            <h1 className="text-xl font-semibold">View Patient Stories</h1>
            <div className="flex pt-4 justify-between items-center">
              <img className="h-8 cursor-pointer" src={PlayBtn} alt="Play" />

              <button>
                <img className="h-8 cursor-pointer" src={Vecter} alt="Button" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-gray-100 px-6 md:px-8 py-8 rounded-[32px] ">
          <h1 className="text-slate-900 font-semibold text-3xl md:text-4xl leading-snug">
            We’re Making Your Mental Wellness Easy to Achieve
          </h1>
          <ul className="flex flex-col gap-y-4 pt-6">
            <li className="flex items-start gap-2 text-slate-600 text-sm md:text-base">
              <IoIosCheckmarkCircle className="text-green-400 text-lg" />
              Self-assessments to understand individual needs and goals.
            </li>
            <li className="flex items-start gap-2 text-slate-600 text-sm md:text-base">
              <IoIosCheckmarkCircle className="text-green-400 text-lg" />
              Accessibility in multiple languages to reach a wider audience.
            </li>
            <li className="flex items-start gap-2 text-slate-600 text-sm md:text-base">
              <IoIosCheckmarkCircle className="text-green-400 text-lg" />
              Options that allow users to engage anonymously if desired.
            </li>
          </ul>
          <div className="flex justify-between items-center gap-5 mt-10">
            {visible.map((data) => (
              <div key={data.objectID}>
                <img src={data.img} className="rounded-3xl" alt="" />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-6 gap-5">
            <button
              onClick={handleNext}
              className="cursor-pointer custom-prev group z-10  bg-[#5050fa] text-white p-3 rounded-full shadow-md"
            >
              <MdOutlineKeyboardDoubleArrowLeft className="group-hover:-translate-x-1 transition-all" />
            </button>
            <button
              onClick={handleNext}
              className="cursor-pointer custom-next group z-10  bg-[#5050fa] text-white p-3 rounded-full shadow-md"
            >
              <MdOutlineKeyboardDoubleArrowRight className="group-hover:translate-x-1 duration-300" />
            </button>
          </div>

          {/* Swiper Section */}
          {/* <div className="mt-8">
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              className="rounded-md overflow-hidden"
            >
              {AchieveData.map((Data) => (
                <SwiperSlide key={Data.objectID}>
                  <img
                    className="block h-56 w-full md:h-52 md:w-52  mx-auto rounded-xl object-cover"
                    src={Data.img}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center items-center mt-6 gap-5">
              <button className="cursor-pointer custom-prev group z-10  bg-[#5050fa] text-white p-3 rounded-full shadow-md">
                <MdOutlineKeyboardDoubleArrowLeft className="group-hover:-translate-x-1 transition-all" />
              </button>
              <button className="cursor-pointer custom-next group z-10  bg-[#5050fa] text-white p-3 rounded-full shadow-md">
                <MdOutlineKeyboardDoubleArrowRight className="group-hover:translate-x-1 duration-300" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AchieveSection;
