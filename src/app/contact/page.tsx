import type { MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

export const meta: MetaFunction = () => [
  { title: "Contact | Anvik Labs" },
  {
    name: "description",
    content:
      "Contact Anvik Labs about product design and engineering work.",
  },
  { property: "og:title", content: "Contact | Anvik Labs" },
  {
    property: "og:description",
    content:
      "Contact Anvik Labs about product design and engineering work.",
  },
];

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
