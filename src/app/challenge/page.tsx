import type { MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Design Challenges & Prompts | Anvik Labs",
    description:
      "Join the Anvik Labs design challenge: practical prompts and briefs to sharpen your UI/UX and product thinking. New challenges are on the way.",
    path: "/challenge",
  });

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
