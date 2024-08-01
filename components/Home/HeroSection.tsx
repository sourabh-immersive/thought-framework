"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  title: string;
  left: string;
  right: string;
  img: string;
  btnText: string;
  btnLink: string;
}

export default function HeroSection() {
  const slides: Slide[] = [
    {
      title: "communicate",
      left: "Stop Reinventing",
      right: "The Quality Wheel!",
      img: "/home/slider-1.png",
      btnText: "Get Started!",
      btnLink: "/"
    },
    {
      title: "collaborate",
      left: "Feed Your Intelligence",
      right: "With Our Testing Approach.",
      img: "/home/slider-2.png",
      btnText: "Get Started!",
      btnLink: "/"
    },
    {
      title: "conquest",
      left: "If You Quit On The QA Process,",
      right: "You Are Quitting On The Software.",
      img: "/home/slider-3.png",
      btnText: "Get Started!",
      btnLink: "/"
    },
    {
      title: "connect",
      left: "Thought Frameworks has been perfecting",
      right: "the art of software testing for years.",
      img: "/home/slider-4.png",
      btnText: "Get Started!",
      btnLink: "/"
    },
  ];

  return (
    <div className="heroSection">
      <div id="particles-js">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          // navigation={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          pagination={{ clickable: true }}
          loop={true}
          // scrollbar={{ draggable: true }}
          modules={[EffectFade, Autoplay, Pagination, A11y]}
          className={"heroSlider"}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slider_box7">
                <section className="animated-section">
                  <Image
                    id="animated-image"
                    src={slide.img || "/home/slider-1.png"}
                    alt={slide.title}
                    className="clockwise-enter-active"
                    width={550}
                    height={550}
                  />
                </section>
                <section className="text-animation">
                  <h2>{slide.title}</h2>
                </section>
                <div className="columns">
                  <span className="leftcome">{slide.left}</span>
                  <span className="rightcome">{slide.right}</span>
                </div>
                <div className="btnWrap">
                  <Link className="buttonLink" href={slide.btnLink}>
                    {slide.btnText}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
