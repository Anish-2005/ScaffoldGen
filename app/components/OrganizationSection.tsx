import { Image } from "lucide-react";
export default function OrganizationSection() {
  return (
     <section className="bg-black pt-32">
  <div className="mx-auto max-w-7xl px-6 text-center">

    {/* Heading */}
    <h2 className="mb-16 text-4xl font-semibold text-white">
      Organizations
    </h2>

    {/* Card Wrapper */}
    <div className="flex justify-center">
      <div className="relative h-[220px] w-[360px] rounded-2xl bg-gradient-to-r from-black via-black to-yellow-900/60">

        {/* Soft inner shading */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/40" />

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center gap-4">
          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20">
            <Image className="h-5 w-5 text-white/70" />
          </div>

          {/* Text */}
          <span className="text-lg font-medium text-white">
            Resourcio Community
          </span>
        </div>
      </div>
    </div>

  </div>
</section>
  );
}
