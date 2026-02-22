import { GoArrowUpRight } from "react-icons/go";

type Service = {
  title: string;
  desc: string;
  img: string;
};

type Props = {
  service: Service;
};

const ServicesCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="bg-white p-3 rounded-3xl drop-shadow-2xl flex flex-col justify-between">
      <div className="ml-2">
        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold my-3">
          {service.title}
        </h3>
        <p className="text-base text-softBlack mb-3">{service.desc}</p>
      </div>
      <a href="#">
        <div className="relative group hover:scale-100 transition duration-300 cursor-pointer">
          <img
            className="rounded-2xl w-full h-[200px] xl:h-[250px]"
            src={service.img}
            alt={service.title}
          />
          <div className="bg-[#5050fa] border-[3px] border-white shadow-lg p-2 w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-105 transition duration-300">
            <GoArrowUpRight className="text-white text-xl" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ServicesCard;
