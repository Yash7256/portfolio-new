import type { MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const meta: MetaFunction = () => [
  { title: "Challenge | Anvik Labs" },
  {
    name: "description",
    content: "The Anvik Labs challenge page is coming soon.",
  },
];

export default function ChallengePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        <ComingSoon
          label="CHALLENGE"
          description="A new space for design challenges and prompts. I'm building it now. Check back soon."
        />
      </main>
      <Footer />
    </>
  );
}
