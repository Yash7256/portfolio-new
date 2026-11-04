import { Link } from "react-router";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";

type ComingSoonProps = {
  label: string;
  description: string;
};

export default function ComingSoon({ label, description }: ComingSoonProps) {
  return (
    <section className="flex min-h-[calc(100svh-var(--header-height))] flex-col py-10 md:py-14">
      <div className={`${mono} flex items-start justify-between gap-4`}>
        <span>{label}</span>
        <span>IN PROGRESS</span>
      </div>

      <div className="flex flex-1 flex-col justify-center py-16 md:py-24">
        <h1 className="font-sans text-[clamp(64px,15vw,220px)] font-medium uppercase leading-[0.8] tracking-[-0.05em]">
          COMING
          <br />
          SOON
        </h1>

        <p className="mt-8 max-w-[42ch] font-sans text-[18px] leading-[1.35] md:text-[20px]">
          {description}
        </p>

        <Link
          to="/"
          className={`${mono} mt-10 w-fit transition-opacity duration-200 hover:opacity-50`}
        >
          [ BACK HOME ]
        </Link>
      </div>
    </section>
  );
}
