import Testimonial from "./Testimonial";
import Quote from "./Quote";
import "./Home.css";
import Footer from "./Footer";
import Image from "./Image";

function Home() {
  return (
    <div>
      <h2 className="mt-5 font-extrabold text-3xl flex justify-center ">
        Computer Society of India
      </h2>
      <Image />
      <h3 className="mt-5 flex justify-center items-center text-2xl">Quotes</h3>
      <h4 className="m-10 text-center md:text-right">
        <Quote />
      </h4>
      <div>
        <h3 className="mt-5 flex justify-center items-center text-2xl">
          Testimonials
        </h3>
        <h4 className="mt-5 mx-20">
          <Testimonial />
        </h4>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
