import footer from "../../assets/img/About/437082811_122125438682243954_5525340619569944776_n 1.png";
import vector from "../../assets/img/About/Vector.png";
import btn1 from "../../assets/img/About/Button.png";
import btn2 from "../../assets/img/About/Button (1).png";
import btn3 from "../../assets/img/About/Button (2).png";

function Footer() {
  return (
    <div className="px-5">
      <div className="flex flex-col gap-10 justify-center items-center px-5 lg:px-20 mt-32 bg-[#F5F7F9] rounded-2xl py-8 w-full">
        <div className="flex flex-col justify-start items-center gap-3">
          <img src={footer} className="w-16" alt="" />
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="font-semibold text-xl sm:text-2xl text-center">
              Book An Appointment Today
            </h1>
            <p className="text-[12px] text-center w-[73%]">
              Book an appointment with our handpicked mental health and wellness
              experts whenever or wherever you want!
            </p>
          </div>
          <button className="bg-[#7C42B7] text-white text-[13px] px-6 py-2 rounded-full cursor-pointer flex items-center justify-center gap-2 group">
            <p>Booke Appointment</p>
            <img
              src={vector}
              className="w-3 mt-1 group-hover:translate-x-1 duration-300"
              alt=""
            />
          </button>
        </div>
        <hr className="w-full text-[#e1e0e0]" />
        <div className="flex justify-between items-start flex-wrap gap-10 w-full">
          <div className="flex flex-col items-start justify-start gap-4">
            <div>
              <h1 className="font-semibold text-xl">Contact</h1>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex items-center justify-between gap-1">
                <img src={btn1} className="w-8" alt="" />
                <p className="text-[12px]">+9376-5000-158</p>
              </div>
              <div className="flex items-center justify-between gap-1 w-[80%]">
                <img src={btn2} className="w-8" alt="" />
                <p className="text-[12px]">
                  11022 South 51st Street Suite 105 Phoenix, AZ 85044
                </p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <img src={btn3} className="w-8" alt="" />
                <p className="text-[12px]">+9376-5000-158</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <div>
              <h1 className="font-semibold text-xl">Navigate</h1>
            </div>
            <ul className="text-[13px] flex flex-col gap-2">
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Services
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Success Stories
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Discover
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Care
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Donwload App
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <div>
              <h1 className="font-semibold text-xl">Solution</h1>
            </div>
            <ul className="text-[13px] flex flex-col gap-2">
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Get in Touch
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Technology
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Who&apos;re We?
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Expertise
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <div>
              <h1 className="font-semibold text-xl">Follow Us</h1>
            </div>
            <ul className="text-[13px] flex flex-col gap-2">
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Facebook
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Instagram
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                LinkedIn
              </li>
              <li className="cursor-pointer hover:text-[#7C42B7] duration-300 hover:translate-x-1">
                Twitter
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-full text-[#e1e0e0]" />
        <div className="flex justify-between w-full text-[13px] text-[#c5c4c4]">
          <p>
            ©2025,{" "}
            <span className="text-[#5050FA] cursor-pointer">upskill</span> | All
            right reserved.
          </p>
          <p className="hover:text-[#7C42B7] duration-300 cursor-pointer">
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
