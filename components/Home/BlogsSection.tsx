"use client";

import React from "react";
import Container from "../common/container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { FreeMode, EffectFade, Autoplay, A11y } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export const BlogsSection = () => {
  const whys: { title: string, img: string, class: string }[] = [
    {
      title: "Team",
      img: "/home/why-1.svg",
      class: "blue"
    },
    {
      title: "Thrive",
      img: "/home/why-2.svg",
      class: "yellow"
    },
    {
      title: "Trust",
      img: "/home/why-3.svg",
      class: "black"
    },
  ];
  return (
    <div className="whySection">
      <Container>
        <div className="clientWrap11">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, FreeMode, A11y]}
            className={"blogsSlider4 mt-4"}
          >
            {whys.map((why, index) => (
              <SwiperSlide key={index}>
                <div className="slider_bgImx" style={{ background: `url(${why.img}) no-repeat center`}}>
                  <h2 className={`whyTitle ${why.class}`}>{why.title}</h2>
                </div>
                <Link href="/">
                     <button className="btn btn-outline-light">Let{"'"}s Talk</button>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};
