import React from "react";
import styled from "styled-components";
import banner from "../img/banner.png";

// 배너 카드넘김관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Banner() {
  return (
    <>
      <All>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 4000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src="https://media.bunjang.co.kr/images/nocrop/878946051_w2058.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.bunjang.co.kr/images/nocrop/875280504_w3087.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.bunjang.co.kr/images/nocrop/875574653_w2058.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.bunjang.co.kr/images/nocrop/879100633_w2058.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.bunjang.co.kr/images/nocrop/868284473_w2058.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.bunjang.co.kr/images/nocrop/877686996_w2058.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.bunjang.co.kr/images/nocrop/878453872_w2058.jpg" />
          </SwiperSlide>
        </Swiper>
      </All>
      <Ban2>
        <img src={banner} />
      </Ban2>
    </>
  );
}
export default Banner;

const All = styled.div`
  height: 298px;
  width: 1026px;
  margin: auto;
  img {
    height: 298px;
    width: 1026px;
  }
`;

const Ban2 = styled.div`
  text-align: center;
`;
