import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { blue, grey } from "@mui/material/colors";

import { urlFor, client } from "../client";

function Team() {
  const [team, setteam] = useState([]);
  const [filterTeam, setfilterTeam] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "team"]';

    client.fetch(query).then((data) => {
      setteam(data);
      setfilterTeam(data);
    });
  }, []);

  const handleteamFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setfilterTeam(team);
      } else {
        setfilterTeam(team.filter((team) => team.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="text-center mt-9 capitalize font-extrabold text-4xl">
        Our <span className="text-blue-700">Team</span>
      </h2>

      <div className="flex flex-row justify-center items-center flex-wrap mx-0 mb-8 mt-16">
        {[
          "Faculty",
          "Committee",
          "Treasurer",
          "Organizing",
          "Marketing",
          "Technical",
          "Registration",
          "Creative",
          "Discipline",
          "Logistics",
          "Documentation",
          "Social Media",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleteamFilter(item)}
            className={`py-2 px-4 bg-white rounded-lg font-semibold text-black cursor-pointer m-2 hover:bg-blue-700 hover:text-white leading-normal text-left ${
              activeFilter === item ? "bg-blue-600" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterTeam.map((team, index) => (
          <div
            className="flex flex-col m-8 p-4 rounded-2xl bg-white text-black w-96 cursor-pointer hover:shadow-2xl"
            key={index}
          >
            <div className="flex justify-center items-center w-full h-56 relative">
              <img
                className="w-full h-full rounded-lg flex justify-center"
                src={urlFor(team.imgUrl).url()}
                alt={team.name}
              />
            </div>

            <div className="flex justify-center items-center flex-col relative w-full p-2">
              <p className="text-xl leading-normal text-left text-gray-700">
                {team.position}
              </p>
              <h4 className="mt-2 text-2xl leading-6">{team.name}</h4>
              <div className="mt-5 grid grid-cols-2 gap-9">
                <a href="mailto:{team.email}" target="_blank" rel="noreferrer ">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <EmailIcon sx={{ color: grey[600] }} />
                  </motion.div>
                </a>
                <a href={team.linkedin} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <LinkedInIcon sx={{ color: blue[500] }} />
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Team;
