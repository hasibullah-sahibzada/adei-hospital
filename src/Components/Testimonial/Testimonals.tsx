import { FaQuoteLeft } from "react-icons/fa";
import img from "../../assets/img/Testimonial/Avatar1.png";
import img2 from "../../assets/img/Testimonial/Avatar2.png";
import img3 from "../../assets/img/Testimonial/Avatar.png";
import img4 from "../../assets/img/Testimonial/1.png";
import img5 from "../../assets/img/Testimonial/2.png";
import img6 from "../../assets/img/Testimonial/3.png";

const Testimonals = () => {
  interface testimonialData {
    id: number;
    name: string;
    username: string;
    feedback: string;
    image: string;
  }
  const testimonal: testimonialData[] = [
    {
      id: 1,
      name: "Habiburahman Safi",
      username: "dilatory_curtains_98",
      feedback:
        '"The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."',
      image: img6,
    },
    {
      id: 2,
      name: "Hassan Ali",
      username: "turbulent_unicorn_29",
      feedback:
        '"The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."',
      image: img2,
    },
    {
      id: 3,
      name: "Naweed Faizy",
      username: "nefarious_jellybeans_91",
      feedback:
        '"The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."',
      image: img3,
    },
    {
      id: 4,

      name: "Hakimi Wakman",
      username: "pervasive_inker_83",
      feedback:
        '"The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."',
      image: img,
    },
    {
      id: 5,

      name: "Hawas",
      username: "nefarious_shop_47",
      feedback:
        '"The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."',
      image: img4,
    },
    {
      id: 6,

      name: "Ahmad Khan",
      username: "antic_circus_76",
      feedback:
        '"The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."',
      image: img5,
    },
  ];

  return (
    <div className="bg-gray-100 py-10 mt-20">
      <div className="text-center flex flex-col justify-center items-center mb-10">
        <p className="text-blue-700 text-sm border rounded-full border-blue-500 w-32 uppercase font-medium">
          TESTIMONIALS
        </p>
        <h1 className="text-[48px] font-medium text-gray-700 pt-6">
          Happy Clients
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {testimonal.map((testimona) => (
          <div
            key={testimona.id}
            className="bg-white  cursor-pointer font-medium text-sm border border-gray-100 shadow-sm rounded-[30px] p-6 transition transform hover:shadow-xl hover:scale-105 duration-500"
          >
            <div className="mb-5 bg-gray-300/10 border border-blue-100 w-[60px] h-[60px] pl-3 pt-4  rounded-full ">
              <FaQuoteLeft size={35} className=" pb-2 text-gray-300 " />
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed ">
              {testimona.feedback}
            </p>
            <hr />
            <div className="flex items-center space-x-4  mt-4">
              <div className="w-[60px] h-[60px] rounded-full bg-gray-300 flex items-center justify-center">
                {/* {testimona.image} */}
                <img
                  src={testimona.image}
                  className="w-[60px] h-[60px]"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {testimona.name}
                </h3>
                <p className="text-sm font-semibold text-gray-950">
                  {testimona.username}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;
