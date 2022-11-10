import { image } from "../assets";
import Achievements from "./Achievements";
import Testimonial from "./Testimonial";

function About() {
  return (
    <div className="antialiased mx-2 md:mx-20 lg:mx-36 ">
      <h2 className="text-center mt-9 capitalize font-bold text-3xl">
        About <span className="text-blue-700">Us</span>
      </h2>
      <div className=" items-center mx-10 m-auto md:flex md:justify-evenly md:items-center md:text-center">
        <img className="h-66 w-60 md:h-72 md:w-64 m-auto pt-6" src={image.aboutus} alt="about_us" />
        <p className="text-center  m-2  font-medium md:text-center lg:text-left lg:pl-20 lg:text-lg">
        Computer Society of India is a body of computer professionals in India. It was started on 6 March 1965 by a few computer professionals and has now grown to be the national body representing computer professionals. It has 72 chapters across India, 511 student branches, and 100,000 members.CSI student body of Universal college aka UCOE-CSI from all the tech departments presents other students to grow in their respective field by helping them through holding workshops, seminars, competitation. CSI constantly helps to increase the knowledge domain and look out to guide each student. 
        </p>
      </div>
      <div className="motto">
        <h2 className="text-center mt-9 capitalize font-extrabold text-2xl">
          Our <span className="text-blue-700">Motto</span>
        </h2>
        <blockquote className="text-left mt-8 mx-20 text-xl font-medium text-gray-900">
          <div className="flex flex-col-reverse md:flex-row">
          <div className="md:flex-row">
          <h3 className="text-2xl italic font-medium text-center md:text-left text-gray-900">
            Experienced and Enthusiastic
          </h3>
          <p className=" text-center md:text-left md:border-l-4 text-base mt-4 p-4  ">
            At Universal College of Engineering, the IT and CSE department have
            formed their own student's chapter 'UCOE-CSI' for overall
            development of students. Today, CSI has members from all over the
            nation including famous industry leaders, brilliant scientists, and
            dedicated academicians. 
          </p>
          </div>
          <img className=" h-40 w-36 md:h-40 md:w-40  m-auto p-4" src={image.about1} alt="about_us" />
          
          </div>
        </blockquote>
        <blockquote className="mt-8 mx-20 text-xl  text-right font-medium text-gray-900">
        <div className="flex flex-col md:flex-row">
        
        <img className=" h-40 w-36 md:h-40 md:w-40  m-auto p-4 hover:translate-y-1" src={image.about2} alt="about_us" />
        <div className="md:flex-col">
          <h3 className="text-2xl italic text-center font-medium text-gray-900 md:text-right">
            Built for the Development
          </h3>
          <p className="text-center md:text-right md:border-r-4 text-base mt-4 p-4">
            Today, CSI has members from all over the nation including famous
            industry leaders, brilliant scientists, and dedicated academicians.
            Today, CSI has members from all over the nation including famous
            
          </p>
          </div>
          </div>
        </blockquote>
        <blockquote className="mt-8 mx-20 text-xl  text-left font-medium text-gray-900">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:flex-row">
          <h3 className="text-2xl italic font-medium text-center md:text-left text-gray-900">
            Eager to Learn
          </h3>
          <p className=" text-center md:text-left md:border-l-4 text-base mt-4 p-4  ">
            UCOE-CSI aims to provide the students of UCOE, across all four
            departments, the best opportunities to acquire knowledge and gain
            experience in varied fields and thus help them become better
            professionals. 
          </p>
          </div>
          <img className=" h-40 w-36 md:h-40 md:w-40  m-auto p-4" src={image.about3} alt="about_us" />
          </div>
        </blockquote>
      </div>
      <div>
        <h3 className="mt-5 flex justify-center items-center text-2xl">
          Achievements
        </h3>
        <h4 className="mt-5 mx-20">
          <Achievements />
        </h4>
      </div>
      <div>
        <h3 className="mt-5 flex justify-center items-center text-2xl">
          Testimonials
        </h3>
        <h4 className="mt-5 mx-20">
          <Testimonial />
        </h4>
      </div>
    </div>
  );
}

export default About;
