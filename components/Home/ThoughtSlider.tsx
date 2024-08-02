"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";

interface Slide {
  title: string;
  desc: string;
  readMoreText: string;
  readMoreLink: string;
  img: string;
  letsTalkText: string;
  letsTalkLink: string;
  color: string;
}

export default function ThoughtSlider() {
  const slides: Slide[] = [
    {
      img: "/home/1.png",
      title: "Quality",
      desc: "Do you care about Quality? Well, we are passionate about it. Join in our wicked bug hunting process through Thought Quality Now!",
      readMoreText: "Read More",
      readMoreLink: "/",
      letsTalkText: "Lets Talk",
      letsTalkLink: "/",
      color: "yellow"
    },
    {
      img: "/home/2.png",
      title: "Design",
      desc: "Tired of pixelated dreams? We breathe life into ideas and Design that ignite experiences, get on call with Creative strategists through Thought Design Now!",
      readMoreText: "Read More",
      readMoreLink: "/",
      letsTalkText: "Lets Talk",
      letsTalkLink: "/",
      color: "green"
    },
    {
      img: "/home/3.png",
      title: "Code",
      desc: "Building something? Then it's time to Get our Thought Coders Onboard for Codes that click, sites that soar, and experiences that win hearts!",
      readMoreText: "Read More",
      readMoreLink: "/",
      letsTalkText: "Lets Talk",
      letsTalkLink: "/",
      color: "blue"
    },
    {
      img: "/home/4.png",
      title: "Digital",
      desc: "Looking to strengthen the Infrastucture in DevOps, DevSecOps and Cloud Services? Get the best Thought Ops to take care of all your Infra Services and Support.",
      readMoreText: "Read More",
      readMoreLink: "/",
      letsTalkText: "Lets Talk",
      letsTalkLink: "/",
      color: "yellow"
    },
    {
      img: "/home/5.png",
      title: "Ops",
      desc: "It's time to Spark your brand's voice! We craft digital journeys that captivate and convert. Let's build a Strong Online Presence together through Thought Digital.",
      readMoreText: "Read More",
      readMoreLink: "/",
      letsTalkText: "Lets Talk",
      letsTalkLink: "/",
      color: "blue"
    },
  ];

  return (
    <div className="thoughtSection">
      <Container>
        <h2>LET{"'"}S TALK BUSINESS IN</h2>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          // navigation={true}
          // autoplay={{
          //   delay: 5500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
                const title = slides[index].title;
                const color = slides[index].color;
              return `<span class="${className} ${color}" >${title}</span>`;
            },
          }}
          loop={true}
          scrollbar={{ draggable: true }}
          modules={[Autoplay, Pagination, A11y]}
          className={"thoughtSlider"}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} data-title={slide.title}>
              <div className="slider_textbox">
                <section className="thought-Imgsection mb-4">
                  <Image
                    src={slide.img || "/home/1.png"}
                    alt={slide.title}
                    className="thought-slider-img"
                    width={1078}
                    height={304}
                  />
                </section>
                <section className="text-contents">
                  <p>{slide.desc}</p>
                  <div className={`btncolumns ${slides[index].color}`}>
                    <Link
                      className="ts-btn readMoreBtn"
                      href={slide.readMoreLink}
                    >
                      {slide.readMoreText}
                    </Link>
                    <Link
                      className="ts-btn letstalkBtn"
                      href={slide.letsTalkLink}
                    >
                      {slide.letsTalkText}
                    </Link>
                  </div>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
