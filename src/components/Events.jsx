import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../client";

function Events() {
  const [events, setevents] = useState([]);
  const [filterEvent, setfilterEvent] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "events"]';

    client.fetch(query).then((data) => {
      setevents(data);
      setfilterEvent(data);
    });
  }, []);

  const handleEventFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setfilterEvent(events);
      } else {
        setfilterEvent(events.filter((event) => event.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="text-center mt-9 capitalize font-extrabold text-4xl">
        Our <span className="text-blue-700">Events</span>
      </h2>

      <div className="flex flex-row justify-center items-center font-medium flex-wrap mx-0 mb-8 mt-16">
        {["2017", "2018", "2019", "2020", "2021", "2022", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleEventFilter(item)}
              className={`py-2 px-4 bg-white rounded-lg font-extrabold text-black cursor-pointer m-2 hover:bg-blue-700 hover:text-white leading-normal text-left ${
                activeFilter === item ? "text-white bg-blue-800" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterEvent.map((event, index) => (
          <div
            className="flex flex-col m-8 p-4 rounded-2xl bg-white text-black w-96 cursor-pointer shadow-xl hover:shadow-2xl"
            key={index}
          >
            <div className="flex justify-center items-center w-full h-56 relative">
              <img
                className="w-full h-full rounded-lg object-none"
                src={urlFor(event.imgUrl)}
                alt={event.name}
              />
            </div>

            <div className="flex justify-center items-center flex-col relative w-full p-2 ">
              <p className="text-xl leading-normal text-left text-gray-700">
                {event.date}
              </p>
              <h4 className="mt-2 text-2xl leading-6">{event.title}</h4>
              <p
                className="text-sm m-2 leading-normal hover:delay-[800] text-left text-gray-700 line-clamp-6 hover:line-clamp-12"
                style={{ marginTop: 10 }}
              >
                {event.description}
              </p>
              {/* <p className="text-gray-400">Hover to Read more</p> */}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Events;
