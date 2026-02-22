// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../../assets/img/Doctors-Images/overlay.png";

import doctor1 from "../../assets/img/Doctors-Images/doctor1.png";
import doctor2 from "../../assets/img/Doctors-Images/doctor2.png";
import doctor3 from "../../assets/img/Doctors-Images/doctor3.png";
import doctor4 from "../../assets/img/Doctors-Images/doctor4.png";
import doctor5 from "../../assets/img/Doctors-Images/doctor5.png";
import doctor6 from "../../assets/img/Doctors-Images/doctor6.png";
import doctor7 from "../../assets/img/Doctors-Images/doctor7.png";
import doctor8 from "../../assets/img/Doctors-Images/doctor8.png";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

// import DocImg from "./Components/DoctorsImages/doctor.png";
interface DoctorsDataType {
  id: number;
  name: string;
  specialty: string;
  image: string;
}
const doctorsData: DoctorsDataType[] = [
  {
    id: 0,
    name: "Dr. Abdul Rauf Rasooli",
    specialty: "Laboratory Haematologist",
    image: doctor1,
  },
  {
    id: 1,
    name: "Dr. Abdul Rauf Rasooli",
    specialty: "Laboratory Haematologist",
    image: doctor2,
  },
  {
    id: 2,
    name: "Dr. Abdul Rauf Rasooli",
    specialty: "Laboratory Haematologist",
    image: doctor3,
  },
  {
    id: 3,
    name: "Dr. Abdul Rauf Rasooli",
    specialty: "Laboratory Haematologist",
    image: doctor4,
  },
  {
    id: 4,
    name: "Dr. Abdul Rauf Rasooli",
    specialty: "Laboratory Haematologist",
    image: doctor5,
  },
  {
    id: 5,
    name: "Dr. Abdul Rauf Rasooli",
    specialty: "Laboratory Haematologist",
    image: doctor6,
  },
  {
    id: 6,
    name: "Dr. Abdul Rauf Rasooli",
    specialty: "Laboratory Haematologist",
    image: doctor7,
  },
  {
    id: 7,
    name: "Dr. Abdul Rauf Rasooli",
    specialty: "Laboratory Haematologist",
    image: doctor8,
  },
];

const Doctors = () => {
  return (
    <div className="flex flex-col justify-center gap-3 mt-10">
      <div className="flex flex-col justify-between items-center gap-4">
        <p className="font-bold text-center text-3xl sm:text-4xl 2xl:text-5xl">
          Professional{" "}
          <span className="bg-gradient-to-br from-[rgba(110,111,250,0.3)] to-[rgba(245,235,255,0)] px-[17px] rounded-xl">
            Doctors
          </span>
        </p>
        <p className="text-center w-full md:w-[80%] lg:w-[70%] xl:w-[40%] text-base 2xl:text-xl">
          We are proud to have a team of skilled and compassionate doctors.
          Explore our expert and find the right care for your needs.
        </p>
      </div>

      <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 lg:gap-y-14 px-6 sm:px-12 md:px-24">
        {doctorsData.map((doctor, index) => (
          <div key={index} className="w-full relative group cursor-pointer">
            <img className="w-full" src={doctor.image} />
            <img className="w-full absolute z-10 left-0 top-0" src={Overlay} />

            <div className="text-white z-20   absolute left-5 sm:left-3 bottom-5 sm:bottom-5 w-[73%] 2xl:bottom-7 2xl:left-4  pr-2     ">
              <p className="text-3xl font-bold sm:text-[25px] md:text-[18px] 2xl:text-[28px]">
                {doctor.name}
              </p>
              <p className="text-2xl sm:text-[15px] 2xl:text-[20px]">
                {doctor.specialty}
              </p>
            </div>

            <div className="rounded-full absolute text-gray-500 px-5 py-4 sm:px-3 md:px-2 2xl:py-3 sm:py-2 md:py-1 2xl:px-4 text-2xl sm:text-lg md:text-sm xl:text-2xl -right-4 sm:-right-2 md:-right-2 -bottom-4 sm:-bottom-2 md:-bottom-1">
              <FaSquareArrowUpRight className="text-5xl md:text-4xl group-hover:scale-110 duration-500 group-hover:text-[#5050fa]" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-14">
        <button className="bg-[#5050fa] text-white cursor-pointer group pl-5 pr-4 py-2 rounded-full text-sm mt-4 flex items-center">
          Find Your Doctor
          <IoIosArrowRoundForward className="text-2xl ml-1 group-hover:translate-x-1 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Doctors;
