import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mobile1 from "../../Imgs/mobile-view1.png";
import mobile2 from "../../Imgs/mobile-view2.png";
import mobile3 from "../../Imgs/mobile-view3.png";
import mobile4 from "../../Imgs/mobile-view4.png";
import mobile5 from "../../Imgs/mobile-view5.png";
import mobile6 from "../../Imgs/mobile-view6.png";
import mobile7 from "../../Imgs/mobile-view7.png";
import mobile8 from "../../Imgs/mobile-view8.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MySlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={mobile8} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mobile1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mobile2} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mobile3} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mobile4} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mobile5} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mobile6} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mobile7} alt="Slide 1" />
      </SwiperSlide>

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default MySlider;
