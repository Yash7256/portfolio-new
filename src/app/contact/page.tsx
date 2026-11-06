import type { MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Contact | Anvik Labs",
    description:
      "Contact Anvik Labs about product design and engineering work.",
    path: "/contact",
  });

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col pt-24 md:pt-28">
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
