"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div id="particles-js">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          // autoplay={{
          //   delay: 5500,
          //   disableOnInteraction: true,
          // }}
          effect={"fade"}
          pagination={{ clickable: true }}
          loop={true}
          // scrollbar={{ draggable: true }}
          modules={[EffectFade, Autoplay, Pagination, A11y]}
          className={"heroSlider"}
        >
          <SwiperSlide>
            <div className="slider_box7">
              <section className="animated-section">
                <Image
                  id="animated-image"
                  src="/home/slider-1.png"
                  alt="Communication"
                  className="clockwise-enter-active"
                  width={550}
                  height={550}
                />
              </section>
              <section className="text-animation">
                <h2>Communication</h2>
              </section>
              <div className="columns">
                <span className="leftcome">Left Coming Text</span>
                <span className="rightcome">Right Coming Text</span>
              </div>
              <div className="btnWrap">
                <Link className="buttonLink" href="">Get Started!</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_box7">
              <section className="animated-section">
                <Image
                  id="animated-image2"
                  src="/home/slider-2.png"
                  alt="Communication"
                  className="clockwise-enter-active"
                  width={550}
                  height={550}
                />
              </section>
              <section className="text-animation">
                <h2>Communication</h2>
              </section>
              <div className="columns">
                <span className="leftcome">Left Coming Text</span>
                <span className="rightcome">Right Coming Text</span>
              </div>
              <div className="btnWrap">
                <Link className="buttonLink" href="">Get Started!</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_box7">
              <section className="animated-section">
                <Image
                  id="animated-image3"
                  src="/home/slider-3.png"
                  alt="Communication"
                  className="clockwise-enter-active"
                  width={550}
                  height={550}
                />
              </section>
              <section className="text-animation">
                <h2>Communication</h2>
              </section>
              <div className="columns">
                <span className="leftcome">Left Coming Text</span>
                <span className="rightcome">Right Coming Text</span>
              </div>
              <div className="btnWrap">
                <Link className="buttonLink" href="">Get Started!</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
