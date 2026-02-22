import { useEffect, useState } from "react";
import hero1 from "../../assets/img/Navbar-Hero/hero1.png";
import hero2 from "../../assets/img/Navbar-Hero/hero2.png";
import brand1 from "../../assets/img/Navbar-Hero/brand1.png";
import brand2 from "../../assets/img/Navbar-Hero/brand2.png";
import brand3 from "../../assets/img/Navbar-Hero/brand3.png";
import arrow from "../../assets/img/Navbar-Hero/arrow-left.png";
import QR from "../../assets/img/Navbar-Hero/qr.png";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Hero: React.FC = () => {
  // Hero img state

  const [heroImg, setHeroImg] = useState(true);
  const changeBg = () => {
    setHeroImg((pre) => !pre);
  };
  useEffect(() => {
    const internval = setInterval(changeBg, 3000);
    return () => clearInterval(internval);
  }, []);

  return (
    <>
      {/* Hero section start */}
      <section className="py-2 px-3 md:px-12 w-full h-[790px] md:h-[520px]">
        <div className="w-full h-full relative">
          <img
            src={heroImg ? hero2 : hero1}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl duration-500"
          />

          {/* text-box start */}
          <div className="w-full h-full bg-[#00000094] absolute top-0 right-0 left-0 rounded-2xl grid grid-cols-1 md:grid-cols-2">
            {/* text-box content start */}
            <div className="pt-10 px-6 flex flex-col gap-6 items-start justify-center w-full">
              <div className="flex items-center justify-center relative w-full">
                <img
                  src={brand2}
                  className="absolute left-5 z-[1]"
                  alt="Brand 2"
                />
                <img src={brand1} className="absolute left-0" alt="Brand 1" />
                <img
                  src={brand3}
                  className="absolute left-[45px] z-[1]"
                  alt="Brand 3"
                />
                <div className="p-[7px] bg-white rounded-full text-xs absolute left-[70px] z-[1]">
                  Adei Hospitals is open 24 Hours
                </div>
              </div>

              {heroImg ? (
                <h1 className="text-white text-5xl font-medium leading-14">
                  Adei Medical <br /> Complex
                </h1>
              ) : (
                <h1 className="text-white text-5xl font-medium leading-14">
                  Book Appointment <br />
                  Doctor
                </h1>
              )}
              <p className="text-white font-medium leading-6">
                Adei is the word that Afghans use especially children for their
                mother. As the Mother is the kindest, most sympathetic, better
                nurturer to the children and a wonderful creation of nature.
              </p>
              <div className="px-4 py-2 hover:bg-[#5050fac1] bg-[#5050FA] text-white rounded-full cursor-pointer flex items-center gap-2 group">
                Book Appointment
                <img
                  src={arrow}
                  alt="Arrow"
                  className="group-hover:translate-x-1.5 duration-300"
                />
              </div>

              <div className="flex gap-3 ms-5">
                <button
                  onClick={changeBg}
                  className="w-10 h-10 group bg-[#5050FA] hover:bg-[#5050fac1] duration-300 text-white flex items-center justify-center rounded-full cursor-pointer"
                >
                  <MdKeyboardDoubleArrowLeft className="group-hover:-translate-x-0.5 duration-300" />
                </button>
                <button
                  onClick={changeBg}
                  className="w-10 h-10 group text-white hover:bg-[#5050fac1] flex items-center justify-center rounded-full cursor-pointer bg-[#5050FA]"
                >
                  <MdKeyboardDoubleArrowRight className="group-hover:translate-x-0.5 duration-300" />
                </button>
              </div>
            </div>
            {/* text-box content end */}

            {/* QR code img */}
            <div className="flex items-center justify-center">
              <img
                src={QR}
                alt="QR Code"
                className="md:absolute bottom-4 right-6 w-[280px] md:w-[150px]"
              />
            </div>
          </div>
          {/* text-box end */}
        </div>
      </section>
      {/* Hero section end */}
    </>
  );
};

export default Hero;
