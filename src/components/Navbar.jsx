import { useState } from "react";
import { Link } from "react-router-dom";
import { image } from "../assets";

import  Home  from "./Home";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-transparent shadow-md">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/" className="flex">
              {/* <h2 className="text-xl font-bold text-black">UCOE-CSI</h2> */}
              <img src={image.onlycsi} alt="CSI" className="h-16 w-16 a" />
              <h1 className=""></h1>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center text-center font-semibold justify-center m-a md:flex md:align-middle md:space-x-6 md:space-y-0 ">
              <Link to="/">
                <li className="text-black text-lg hover:text-blue-800">Home</li>
              </Link>
              <Link to="/about">
                <li className="text-black text-lg hover:text-blue-800">About Us</li>
              </Link>
              <Link to="/events">
                <li className="text-black text-lg hover:text-blue-800">Events</li>
              </Link>
              <Link to="/team">
                <li className="text-black text-lg hover:text-blue-800">Our Team</li>
              </Link>
              <Link className="md:hidden" to="/Contact">
                <li className="text-black text-lg hover:text-blue-800 md:hidden">Contact Us</li>
              </Link>
              
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Link to="/contact">
            <li className="px-4 py-2 text-lg text-white bg-blue-600 rounded-md shadow hover:bg-blue-500">
              Contact Us
            </li>
          </Link>
        </div>

      </div>
    </nav>
  );
}
