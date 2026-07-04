import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FlavorMenu from "@/components/FlavorMenu";
import Showcase from "@/components/Showcase";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <FlavorMenu />
        <Showcase />
        <Location />
      </main>
      <Footer />
      <Analytics/>
    </>
  );
}
