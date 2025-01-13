import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurService from "@/components/OurService";
import UnmatchedExcellence from "@/components/UnmatchExcellence";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <UnmatchedExcellence />
      <HowItWorks />
      <OurService />
      <Faq />
    </main>
  );
}
