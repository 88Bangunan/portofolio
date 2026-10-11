import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const offerLists = [
  {
    id: 1,
    img: "/OfferImages/Front-End-Web-Design.png",
    offerText: "Front-End Web Design",
  },
  {
    id: 2,
    img: "/OfferImages/Back-End-Web-Developer.png",
    offerText: "Back-End Web Developer",
  },
  {
    id: 3,
    img: "/OfferImages/Full-Stack-Web-Developer.png",
    offerText: "Full-Stack Web Developer",
  },
  {
    id: 4,
    img: "/OfferImages/E-Commerce-Specialist.png",
    offerText: "E-Commerce Specialist",
  },
  {
    id: 5,
    img: "/OfferImages/Database-Administrator.png",
    offerText: "Database Administrator",
  },
  {
    id: 6,
    img: "/OfferImages/UI_UX-Design-Enthusiast.png",
    offerText: "UI/UX Design",
  },
];

export const OfferCarousel = () => {
  const [itemPerSlides, setItemPerSlides] = useState(3);
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 1024) {
        setItemPerSlides(3);
      } else if (window.innerWidth >= 768) {
        setItemPerSlides(2);
      } else {
        setItemPerSlides(1);
      }
    };

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const chunkArray = (array, size) => {
    const result = [];

    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }

    return result;
  };

  const offerSlides = chunkArray(offerLists, itemPerSlides);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOfferIndex((prev) => {
        if (prev === offerSlides.length - 1) {
          return (prev = 0);
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [offerSlides.length]);

  const handleNextCarousel = () => {
    if (activeOfferIndex === offerSlides.length - 1) {
      return setActiveOfferIndex(0);
    }
    return setActiveOfferIndex((prev) => prev + 1);
  };

  const handlePreviousCarousel = () => {
    if (activeOfferIndex === 0) {
      return setActiveOfferIndex(offerSlides.length - 1);
    }
    return setActiveOfferIndex((prev) => prev - 1);
  };

  return (
    <div className="offer-container flex flex-col gap-y-5 py-27 box-border">
      <div className="offer-heading flex flex-col gap-y-8 text-center">
        <span className="text-gray-400/80 font-medium text-lg">
          What Do I Offer
        </span>
        <h3 className="capitalize text-white font-semibold leading-12 text-xl">
          Creates a professional website that directly{" "}
          <span className="block bg-primary font-bold text-white p-1 w-8/9 mx-auto box-border rounded-lg">
            solves real-world problems
          </span>{" "}
          and is proven to{" "}
          <span className="block bg-primary font-bold text-white p-1 w-3/4 mx-auto box-border rounded-lg">
            Boost business sales
          </span>
        </h3>
      </div>
      <div className="offer-outer-container pt-8 box-border">
        <div className="offer-carousel-container bg-gray-500/50 p-8 box-border rounded-lg">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeOfferIndex * 100}%)` }}
            >
              {offerSlides.map((offer, index) => (
                <div
                  key={index + 1}
                  className="min-w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                >
                  {offer.map((item) => (
                    <div
                      key={item.id}
                      className="border-2 border-primary bg-gray-400/50 rounded-lg p-5 box-border drop-shadow-xl flex flex-col items-center justify-center gap-y-3"
                    >
                      <img
                        src={item.img}
                        className="w-full object-cover aspect-10/10"
                        alt=""
                      />
                      <span className="text-lg text-primary font-semibold">
                        {item.offerText}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-3 py-5 box-border">
            <MdKeyboardArrowLeft
              className="text-2xl text-white font-semibold cursor-pointer"
              onClick={handlePreviousCarousel}
            />
            <div className="flex items-center gap-x-3">
              {offerSlides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setActiveOfferIndex(index)}
                  className={`rounded-lg py-1 px-3 box-border ${activeOfferIndex === index && "bg-primary"} cursor-pointer bg-gray-400`}
                ></div>
              ))}
            </div>
            <MdKeyboardArrowRight
              className="text-2xl text-white font-semibold cursor-pointer"
              onClick={handleNextCarousel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
