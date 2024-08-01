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

interface Post {
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_image_url: string;
  featured_media?: string;
}

interface BlogProps {
  initialPosts: Post[];
}

const BlogsSection: React.FC<BlogProps> = ({ initialPosts }) => {
  return (
    <div className="whySection">
      <Container>
        <div className="clientWrap11">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, FreeMode, A11y]}
            className={"blogsSlider4 mt-4"}
          >
              {initialPosts.map((post, index) => (
                <SwiperSlide key={index}>
                  <div className="slider_post">
                    <Image
                      src={post.featured_image_url}
                      width={600}
                      height={250}
                      alt={post.title.rendered}
                    />
                    <h2>{post.title.rendered}</h2>
                    <div className="blogPar mb-4" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default BlogsSection;
