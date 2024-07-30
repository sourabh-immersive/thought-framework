'use client'

import HeroSection from "@/components/Home/HeroSection";
import ThoughtSlider from "@/components/Home/ThoughtSlider";
import TypedSection from "@/components/Home/TypedSection";

export default function Home() {
  const beforeText = "We are a Trusted Team"
  const texts = [ " that Thrives on Thought Transformation! "];
  const period = 2000;
  
  return (
    <main className="">
      <HeroSection />
      <TypedSection texts={texts} period={period} beforeText={beforeText} />
      <ThoughtSlider />
      <section>
        <h1>Section 1</h1>
        <h1>Section 2</h1>
        <h1>Section 3</h1>
        <h1>Section 4</h1>
        <h1>Section 5</h1>
      </section>
    </main>
  );
}