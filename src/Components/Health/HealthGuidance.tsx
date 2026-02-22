import { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

import image1 from "../../assets/img/health/img1.png";
import image2 from "../../assets/img/health/img2.png";
import image3 from "../../assets/img/health/img3.png";

import { BiMessageDetail } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

interface CardType {
  title: string;
  objectID: number;
  description: string;
  number: string;
  number1: string;
  image: string;
}

const Cards: CardType[] = [
  {
    title: "How to Finally Stop Catastrophizing",
    description: "Ever thinks minor headache is a tumor?",
    image: image1,
    number: "41,951",
    number1: "947",
    objectID: 1,
  },
  {
    title: "So, Relationship OCD Is a Thing",
    description: "As the old saying goes, 'I love you; it's ruining my life.'",
    image: image2,
    number: "41,951",
    number1: "947",
    objectID: 2,
  },
  {
    title: "Wait, Am I Autistic?",
    description: "Read this before your self-diagnosis",
    image: image3,
    number: "41,951",
    number1: "947",
    objectID: 3,
  },
];

function HealthGuidance() {
  const [cardsState, setCardsState] = useState(
    Cards.map((card) => ({
      ...card,
      likes: 100000,
      isLiking: true,
    }))
  );

  const handleLike = (index: number) => {
    setCardsState((prevState) =>
      prevState.map((card, i) =>
        i === index
          ? {
              ...card,
              likes: card.isLiking ? card.likes + 1 : card.likes - 1,
              isLiking: !card.isLiking,
            }
          : card
      )
    );
  };
  // const [showView, setShowView] = useState(false)
  return (
    <>
      <h1 className="pt-12 py-9 text-center font-bold text-2xl">
        Health Guidance
      </h1>
      <div className="grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 lg:px-12 md:px-10">
        {cardsState.map((card, index) => (
          <div key={card.objectID}>
            <div className="relative overflow-hidden group rounded-3xl">
              <div className="w-full h-full absolute z-[2] top-0 left-0 flex items-center justify-center">
                <a href="">
                  <div className="text-white scale-0 group-hover:scale-110 duration-300 bg-blue-500 rounded-3xl px-3 py-1 flex items-center justify-center gap-5">
                    View Blog
                    <IoArrowForward className="-rotate-45" />
                  </div>
                </a>
              </div>
              <img
                src={card.image}
                alt="adei"
                className="h-[200px] w-full z-[1] duration-500 group-hover:rotate-12 group-hover:scale-150 cursor-pointer"
              />
            </div>
            <div className="pt-8 space-y-3 sans">
              <h4 className="font-bold text-xl md:text-2xl xl:text-[26px]">
                {card.title}
              </h4>
              <p className="text-[14px]">{card.description}</p>
              <div className="flex gap-2" onClick={() => handleLike(index)}>
                <div className="flex justify-between px-2 items-center gap-2 bg-gray-200 rounded-full cursor-pointer">
                  <div className="flex justify-center items-center gap-2 bg-gray-200 rounded-full cursor-pointer">
                    <div
                      className={`${
                        card.isLiking ? "text-white" : "text-red-500"
                      }`}
                    >
                      {card.isLiking ? <CiHeart /> : <FaHeart />}
                    </div>
                  </div>
                  <p className="text-center">{card.likes}</p>
                </div>
                <div className="flex justify-between px-2 items-center gap-2 bg-gray-200 w-20 rounded-3xl">
                  <BiMessageDetail />
                  <p className="text-center pt-1 h-8">{card.number1}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HealthGuidance;
