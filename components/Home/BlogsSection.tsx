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
import limitWords from "@/utils/limitWords";

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
    <div className="blogsSection">
      <Container>
        <div className="clientWrap11">
          <h2 className="yellow">Recommended Blogs</h2>
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
            breakpoints={{
              // When window width is >= 640px (tablet)
              640: {
                slidesPerView: 2,
              },
              // When window width is >= 1024px (default)
              1024: {
                slidesPerView: 3,
              },
              // When window width is < 640px (mobile)
              0: {
                slidesPerView: 1,
              }
            }}
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
                  <div className="blogContetn">
                    <h3>{post.title.rendered}</h3>
                    <div
                      className="blogPar"
                      dangerouslySetInnerHTML={{
                        __html: limitWords(post.excerpt.rendered, 16),
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Link href="/">
            <button className="btn yellow-btn">View All Blogs</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BlogsSection;
