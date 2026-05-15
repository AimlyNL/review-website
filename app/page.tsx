import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HBR from "@/components/HBR";
import Demo from "@/components/Demo";
import GetReviews from "@/components/GetReviews";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Partner from "@/components/Partner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HBR />
        <HowItWorks />
        <GetReviews />
        <Demo />
        <Pricing />
        <Partner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
