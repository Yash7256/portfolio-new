import type { MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/FeaturedProduct";
import MeetTheHumans from "@/components/MeetTheHumans";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const meta: MetaFunction = () => [
  { title: site.title },
  { name: "description", content: site.description },
  { property: "og:title", content: site.title },
  { property: "og:description", content: site.description },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <FeaturedProduct />
        <MeetTheHumans />
        <Services />
        <Testimonials />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
