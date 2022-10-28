import { image } from "../assets";
import Achievements from "./Achievements";
import Testimonial from "./Testimonial";

function About() {
  return (
    <div>
      <h2 className="text-center mt-9 capitalize font-extrabold text-4xl">
        About <span className="text-blue-700">Us</span>
      </h2>
      <div className="flex justify-start items-center">
        <img className="h-60 w-66  mx-6" src={image.one} alt="about_us" />
        <p className="text-left text-xl px-2.5 py-2.5 font-medium">
          CSI student members from Universal College of Engineering had been for
          National Cyber Security Seminar, Debate n Quiz Contest held at Defence
          Institute of Advance Technology, Pune on 14th and 15th of July,2017.
          The following students have bagged some prices Chintan Popat from TE
          IT won 1trophy, 1 gold medal, 2 silver medals, Jayraj Chopda from BE
          IT won 1 silver medal, Keval Morakhia from TE IT won 1 bronze medal.
          At Universal College of Engineering, the IT and CSE department have
          formed their own student's chapter "UCOE-CSI" for overall development
          of students. Today, CSI has members from all over the nation including
          famous industry leaders, brilliant scientists, and dedicated
          academicians. The mission of the UCOE-CSI chapter is to facilitate
          research, knowledge sharing, learning and career enhancement for all
          categories of IT professionals, while simultaneously inspiring and
          nurturing students and helping them to integrate into the IT
          community.
        </p>
      </div>
      <div className="motto">
        <h2 className="text-center mt-9 capitalize font-extrabold text-2xl">
          Our <span className="text-blue-700">Motto</span>
        </h2>
        <blockquote className="text-left mt-6 mx-20 text-xl italic font-medium text-gray-900">
          <h3 className="text-3xl italic font-medium text-gray-900">
            Experienced and Enthusiastic
          </h3>
          <p className="text-medium mt-5">
            At Universal College of Engineering, the IT and CSE department have
            formed their own student's chapter 'UCOE-CSI' for overall
            development of students. Today, CSI has members from all over the
            nation including famous industry leaders, brilliant scientists, and
            dedicated academicians. The mission of the UCOE-CSI chapter is to
            facilitate research, knowledge sharing, learning and career
            enhancement for all categories of IT professionals, while
            simultaneously inspiring and nurturing students and helping them to
            integrate into the IT community.
          </p>
        </blockquote>
        <blockquote className="mt-5 mx-20 text-xl italic text-right font-medium text-gray-900">
          <h3 className="text-3xl italic font-medium text-gray-900">
            Built for the Development
          </h3>
          <p className="text-medium mt-5">
            Today, CSI has members from all over the nation including famous
            industry leaders, brilliant scientists, and dedicated academicians.
            The mission of the UCOE-CSI chapter is to facilitate research,
            knowledge sharing, learning and career enhancement for all
            categories of IT professionals, while simultaneously inspiring and
            nurturing students and helping them to integrate into the IT
            community.
          </p>
        </blockquote>
        <blockquote className="mt-5 mx-20 text-xl italic text-left font-medium text-gray-900">
          <h3 className="text-3xl italic font-medium text-gray-900">
            Eager to Learn
          </h3>
          <p className="text-medium mt-5">
            UCOE-CSI aims to provide the students of UCOE, across all four
            departments, the best opportunities to acquire knowledge and gain
            experience in varied fields and thus help them become better
            professionals. There are much registered members and the chapter is
            still growing day by day. Activities are being continuously planned
            and conducted
          </p>
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
