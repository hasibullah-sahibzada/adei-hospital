import { motion } from "framer-motion";
import img1 from "../../assets/img/Gallery_component/images/img1.png";
import img2 from "../../assets/img/Gallery_component/images/img2.png";
import img3 from "../../assets/img/Gallery_component/images/img3.png";
import img4 from "../../assets/img/Gallery_component/images/img4.png";
import img5 from "../../assets/img/Gallery_component/images/img5.png";
import img6 from "../../assets/img/Gallery_component/images/img6.png";
import circle from "../../assets/img/Gallery_component/images/Button.png";

function Gallary() {
  interface CardData {
    img: string;
    btn1: string;
    btn2: string;
    btn3: string;
    objectID: number;
  }
  const card1: CardData[] = [
    {
      img: img1,
      btn1: "Adei Group",
      btn2: "Female baby",
      btn3: "Modern",
      objectID: 1,
    },
    {
      img: img2,
      btn1: "Female baby",
      btn2: "Neno Children",
      btn3: "Adei Plus",
      objectID: 2,
    },
    {
      img: img3,
      btn1: "Male baby",
      btn2: "5kg weights",
      btn3: "Neno Children",
      objectID: 3,
    },
    {
      img: img4,
      btn1: "Male baby",
      btn2: "Adei Maternity",
      btn3: "Adei Plus",
      objectID: 4,
    },
    {
      img: img5,
      btn1: "5kg weights",
      btn2: "Adei Maternity",
      btn3: "Male baby",
      objectID: 5,
    },
    {
      img: img6,
      btn1: "Male baby",
      btn2: "5kg weights",
      btn3: "Neno Children",
      objectID: 6,
    },
  ];

  // Parent container animation (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }, // 0.2s delay between children
  };

  // Card animation variants (different directions)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-pureBlack my-4 md:mb-6  max-w-[450px]">
          Adei&apos;s Adorable Gallery
        </h1>
        <div className="px-1">
          <p className="text-center md:w-[650px] sm:text-xs lg:text-base">
            Celebrate the innocence and wonder of Adei through a collection of
            photos that highlight laughter, love, and unforgettable memories
          </p>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center lg:grid-cols-3 w-full p-4 gap-4 grid-rows-2 px-4 md:px-20 lg:px-28"
      >
        {card1.map((card) => (
          <motion.div
            key={card.objectID}
            variants={cardVariants}
            className="shadow-lg rounded-3xl bg-white overflow-hidden relative w-full"
          >
            {/* Image Wrapper with Hover Effect */}
            <motion.div
              className="w-full overflow-hidden"
              whileHover={{ scale: 1.1, filter: "brightness(75%)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={card.img}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </motion.div>

            {/* Buttons */}
            <div className="absolute top-2 left-2 flex gap-1">
              <button className="border-[1px] border-white text-[11px] cursor-pointer rounded-full px-2 py-[1px] text-white">
                {card.btn1}
              </button>
              <button className="border-[1px] border-white text-[11px] cursor-pointer rounded-full px-2 py-[1px] text-white">
                {card.btn2}
              </button>
              <button className="border-[1px] border-white text-[11px] cursor-pointer rounded-full px-2 py-[1px] text-white">
                {card.btn3}
              </button>
            </div>

            {/* Circle Icon */}
            <img
              className="absolute bottom-3 left-3 cursor-pointer"
              src={circle}
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Gallary;
