"use client";

import React from "react";
import Container from "../common/container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { FreeMode, Autoplay, Pagination, A11y } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export const ClientsSection = () => {
  const imgList: { img: string }[] = [
    {
      img: "/home/clients/12twenty.png",
    },
    {
      img: "/home/clients/adext.png",
    },
    {
      img: "/home/clients/akshara.png",
    },
    {
      img: "/home/clients/ameri100-300x89.png",
    },
    {
      img: "/home/clients/amura-300x101.png",
    },
    {
      img: "/home/clients/apparel-group-300x91.png",
    },
    {
      img: "/home/clients/appium-300x103.png",
    },
  ];
  return (
    <div className="clientsSection">
      <Container>
        <div className="clientWrap">
          <h2 className="green mb-3">Trusted Clients</h2>
          <h4>Exceeding quality expectations</h4>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            // navigation={true}
            freeMode={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={8000}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, FreeMode, A11y]}
            className={"thoughtSlider mt-4"}
            breakpoints={{
              // When window width is >= 640px (tablet)
              640: {
                slidesPerView: 3,
              },
              // When window width is >= 1024px (default)
              1024: {
                slidesPerView: 5,
              },
              // When window width is < 640px (mobile)
              0: {
                slidesPerView: 2,
              }
            }}
          >
            {imgList.map((slideimg, index) => (
              <SwiperSlide key={index}>
                <div className="slider_Imx">
                  <div className="thought-Img mb-4">
                    <Image
                      src={slideimg.img || "/home/1.png"}
                      alt={"Trusted Clients"}
                      className="thought-slider-img"
                      width={300}
                      height={89}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};
