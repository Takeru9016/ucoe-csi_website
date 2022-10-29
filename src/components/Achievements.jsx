import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { client } from "../client";

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "achievements"]';

    client.fetch(query).then((data) => {
      setAchievements(data);
    });
  }, []);

  return (
    <>
      {achievements.length && (
        <>
          <figure className="mx-auto max-w-screen-md text-center">
            <figcaption className="flex justify-center items-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-bold text-2xl text-gray-900 ">
                  {achievements[currentIndex].name}
                </cite>
              </div>
            </figcaption>
            <blockquote>
              <p className="text-2xl mt-5 italic font-medium text-gray-900 ">
                {achievements[currentIndex].awards}
              </p>
            </blockquote>
          </figure>

          <div className="flex flex-row mt-4 justify-center items-center">
            <div
              className="flex justify-center items-center m-4"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? achievements.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft className="w-10 h-10 items-center hover:bg-blue-400 rounded-full" />
            </div>

            <div
              className="flex justify-center items-center m-4"
              onClick={() =>
                handleClick(
                  currentIndex === achievements.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight className="w-10 h-10 items-center hover:bg-blue-400 rounded-full" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Achievements;
