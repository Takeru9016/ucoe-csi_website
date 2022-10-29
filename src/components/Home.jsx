import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";

import Testimonial from "./Testimonial";
import Quote from "./Quote";
import "./Home.css";
import { image } from "../assets";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <h2 className="mt-5 font-extrabold text-3xl flex justify-center ">
        Computer Society of India
      </h2>
      <div className="hero_container m-10">
        <div className="hero_bg">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="md:max-w-fit md:max-h-full " src={image.one} alt="About" />
            </SwiperSlide>
            <SwiperSlide>
            <img className="md:max-w-fit md:max-h-full" src={image.csiucoe} alt="About" />
            </SwiperSlide>
            <SwiperSlide>
            <img className="md:max-w-fit md:max-h-full" src={image.onlycsi} alt="About" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <h3 className=" flex justify-center items-center text-2xl">Quotes</h3>
      <h4 className="mx-10 text-center md:text-right">
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
