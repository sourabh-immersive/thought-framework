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

export const ReviewSection = () => {
  const reviews: {
    name: string;
    position: string;
    review: string;
    img: string;
    class: String;
  }[] = [
    {
      name: "Gwen Lecalvez (CTO)",
      position: "Birdie",
      review:
        "Bhaskar and his team helps us delivering the best product for our customers. They helped us to reduce release cycle as well. I would highly recommend them for your testing needs.",
      img: "/home/review/img5.png",
      class: "yellow",
    },
    {
      name: "Vitalii Ozerov",
      position: "QA Manager, Arkadium",
      review:
        "I want to note the professionalism of the team. The company is very flexible to adapt its employees to any customer processes. Gently, but quickly, they are trained to be introduced into a new team. They comply with all the rules, both from the point of view of the contract and compliance with the established culture of interaction within the customer’s company. Management always requests feedback to improve the quality of employees’ work. Thank you for providing high-quality services. Never stop at the achieved level!",
      img: "/home/review/img6.png",
      class: "blue",
    },
    {
      name: "Anup Kulkarni",
      position: "QA Manager WazirX",
      review:
        "It was great working with QA’s through ThoughFrameworks. Never at any point while working with them, it feels they are not part of your organization. <ol><li>Very prompt in their work and everyone takes full responsibility.</li><li>Proper communication regarding if anyone is leaving a project or applying for a leave.</li><li>&nbsp;Reports are shared on monthly basis with stakeholders.</li><li>Performance is monitored and feedback is taken positively.</li><li>When someone new joins, it is a lot of hassle to explain the entire product but these guys make sure to give enough KT to new joinees so it becomes easy to gel in quickly.</li></ol>",
      img: "/home/review/img3.jpg",
      class: "green",
    },
    {
      name: "Ashwini K",
      position: "Director Engineering Jifflenow",
      review:
        "At Jifflenow, we chose ThoughtFrameworks as our QA testing partner almost 6 years ago and I can say that this is the best thing that has happened. From the very first engagement, they have shown utmost professionalism. They understand our requirements and provide the best trained resources which help their testers to quickly settle as a member of our team and contribute from day 1. They are a value addition and would definitely recommend ThoughtFrameworks to any company looking for highly reliable and professional QA services.",
      img: "/home/review/img4.jpg",
      class: "yellow",
    },
    {
      name: "Jason Groth",
      position: "QA Manager, 12Twenty Inc",
      review:
        "Thought Frameworks provides an outstanding level of service. They are highly adaptable to meet our changing requirem- ents. I would highly recommend them for your testing needs.",
      img: "/home/review/img2.jpg",
      class: "blue",
    },
    {
      name: "Marjorie Reynolds",
      position: "Director of Product Management, Scantron",
      review:
        "What will leave a lasting impression on us is not just what you did, but how you did it. This team was made up of individuals in different countries and different roles, but we witnessed tremendous cooperation and superior teamwork and communication throughout this process. We could not have done this without you.",
      img: "/home/review/img1.jpg",
      class: "green",
    },
  ];
  return (
    <div className="reviewSection">
      <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            loop={true}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, FreeMode, A11y]}
            className={"thoughtSlider mt-4"}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="slider_reviewWrap">
                  <div className="col-md-6">
                    <Image
                      src={review.img || "/home/1.png"}
                      alt={`Client Review - ${review.name} - ${review.position}`}
                      className="thought-slider-img"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="contentWtap">
                      <p>{review.review}</p>
                      <h2>{review.name}</h2>
                      <p>{review.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  );
};
