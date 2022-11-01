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
          <div>
            <img
              className="relative mt-10 left-[350px] max-2xl:left-24 max-xl:w-full max-lg:left-0 max-md:left-0 w-[1250px] h-[600px] rounded-2xl flex justify-center items-center"
              src={urlFor(home[currentIndex].imgurl)}
              alt={home[currentIndex].name}
            />
            <BiLeftArrowAlt
              className="absolute top-[50%] left-[32px] text-5xl text-black z-1o cursor-pointer select-none"
              onClick={prevSlide}
            />
            <BiRightArrowAlt
              className="absolute top-[50%] right-[32px] text-5xl text-black z-1o cursor-pointer select-none"
              onClick={nextSlide}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Image;
