import Hero from "@/components/hero/Hero";
import Programs from "@/components/programs/Programs";
import About from "@/components/about/About";
import Features from "@/components/features/Features";
import Testimonials from "@/components/testimonials/Testimonials";
import Cta from "@/components/cta/Cta";
// import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Programs />
      <About />
      <Features /> 
      <Testimonials /> 
      <Cta />
      {/* <Faq /> */}
    </main>
  );
}