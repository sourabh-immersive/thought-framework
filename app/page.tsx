'use client'

import HeroSection from "@/components/Home/HeroSection";
import ThoughtSlider from "@/components/Home/ThoughtSlider";
import TypedSection from "@/components/Home/TypedSection";
import Image from "next/image";

export default function Home() {
  const beforeText = "We are a Trusted Team"
  const texts = [ " that Thrives on Thought Transformation! "];
  const period = 2000;
  
  return (
    <main className="">
      <HeroSection />
      <TypedSection texts={texts} period={period} beforeText={beforeText} />
      <ThoughtSlider />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="imgBox">
              <Image src="/home/bg.png" width={250} height={250} alt="" />
              <div className="innerWrap">
              <Image src="/home/12.png" width={250} height={250} className="reviewIcon leftTop" alt="" />
                <Image src="/home/12.png" width={250} height={250} className="profileImage" alt="" />
              <Image src="/home/12.png" width={250} height={250} className="reviewIcon rightBottom" alt="" />
              </div>
              <Image src="/home/bg.png" width={250} height={250} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contwentWrap">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consectetur, vero amet illum distinctio tempora sed ipsa natus laudantium voluptas in, corporis numquam vitae accusantium incidunt neque dicta impedit eligendi.</p>
              <h2>Profile Title</h2>
              <p>Designation</p>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}