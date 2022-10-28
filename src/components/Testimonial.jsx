import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../client";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <figure className="mx-auto max-w-screen-md text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 ">
                {testimonials[currentIndex].feedback}
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center mt-6 space-x-3">
              <img
                className="w-16 h-16 rounded-full"
                src={urlFor(testimonials[currentIndex].imgurl)}
                alt={testimonials[currentIndex].name}
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-xl text-gray-900 ">
                  {testimonials[currentIndex].name}
                </cite>
              </div>
            </figcaption>
          </figure>

          <div className="flex flex-row mt-4 justify-center items-center">
            <div
              className="flex justify-center items-center m-4"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
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
                  currentIndex === testimonials.length - 1
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

export default Testimonial;
