export type MockupMedia = {
  src: string;
  type: "image" | "video";
};

export type MockupImage = {
  src: string;
  optimizedSrc: string;
};

const MOCKUP_FILES = [
  "Aurora Skincare Laptop in Mossy Terrain.png",
  "ChatGPT Image Oct 21, 2026, 11_43_29 AM.png",
  "ChatGPT Image Oct 25, 2026, 11_31_23 PM.png",
  "ChatGPT Image Oct 25, 2026, 11_40_35 PM.png",
  "ChatGPT Image Oct 26, 2026, 12_18_55 AM.png",
  "ChatGPT Image Oct 26, 2026, 12_25_16 AM.png",
  "ChatGPT Image Oct 26, 2026, 12_36_11 AM.png",
  "ChatGPT Image Oct 26, 2026, 12_40_05 AM.png",
  "M003T1519 A scroll Macbook Mockup 20sep25 (1).png",
  "MacBook Air - 61.mp4",
  "Wayfarer Website on a Cozy Blue Sofa.png",
];

const VIDEO_EXTENSIONS = new Set([".m4v", ".mov", ".mp4", ".webm"]);

export function getMockupMedia(): MockupMedia[] {
  return MOCKUP_FILES.map((file) => {
    const extension = file.slice(file.lastIndexOf(".")).toLowerCase();

    return {
      src: `/mockups/${encodeURIComponent(file)}`,
      type: VIDEO_EXTENSIONS.has(extension) ? "video" : "image",
    };
  });
}

export function getMockupImages(): MockupImage[] {
  return getMockupMedia().flatMap((media) =>
    media.type === "image"
      ? [{ src: media.src, optimizedSrc: media.src }]
      : [],
  );
}
