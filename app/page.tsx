import { ClientsSection } from "@/components/Home/ClientsSection";
import { ConsultingSection } from "@/components/Home/ConsultingSection";
import HeroSection from "@/components/Home/HeroSection";
import { ReviewSection } from "@/components/Home/ReviewSection";
import ThoughtSlider from "@/components/Home/ThoughtSlider";
import TypedSection from "@/components/Home/TypedSection";
import { WhySection } from "@/components/Home/WhySection";
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
      <ConsultingSection />
      <ClientsSection />
      <ReviewSection />
      <WhySection />
      <section>
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      </section>
    </main>
  );
}