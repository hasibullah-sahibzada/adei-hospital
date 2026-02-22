import PurpleButton from "../../Components/Services/PurpleButton";
import { services } from "../../constant/Services";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
  return (
    <section className="md:px-4 my-16 mt-small md:mt-medium lg:mt-large ">
      <div className="flex flex-col items-center bg-[#f5f5f5] rounded-2xl px-4 py-6 xl:px-6">
        <div>
          <div className="flex flex-col items-center gap-1">
            <span className=" h-1 w-11 bg-gradient-to-r from-[#5050FA] to-brand/10 rounded-full"></span>
            <h3 className="text-sm text-[#5050FA] font-bold">SERVICES</h3>
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-pureBlack my-4 md:mb-6  max-w-[450px]">
            Unlock Your Inner Health with Our Services
          </h2>
        </div>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-4">
          {services.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-5">
          <a href="">
            <PurpleButton text="Get Services" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
