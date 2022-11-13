import { useState, useEffect } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { urlFor, client } from "../client";

function Image() {
  const [home, sethome] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = home.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    const query = '*[_type == "home"]';

    client.fetch(query).then((data) => {
      sethome(data);
    });
  }, []);

  return (
    <>
      {home.length && (
        <section>
          <div className="relative  m-auto p-5 w-5/5 h-5/5 md:w-4/5 md:h-2/5">
            <img
              className=" flex justify-center items-center"
              src={urlFor(home[currentIndex].imgurl)}
              alt={home[currentIndex].name}
            />
            <BiLeftArrowAlt
              className="absolute top-1/2 left-[30px] text-5xl text-black z-1o cursor-pointer select-none border-2 rounded-3xl bg-gray-200"
              onClick={prevSlide}
            />
            <BiRightArrowAlt
              className="absolute top-1/2 right-[30px] text-5xl text-black  z-1o cursor-pointer select-none border-2 rounded-3xl bg-gray-200"
              onClick={nextSlide}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Image;
