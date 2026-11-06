import type { MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Community | Anvik Labs",
    description: "The Anvik Labs community page is coming soon.",
    path: "/community",
  });

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        <ComingSoon
          label="COMMUNITY"
          description="A place for the design community to connect and share work. I'm building it now. Check back soon."
        />
      </main>
      <Footer />
    </>
  );
}
