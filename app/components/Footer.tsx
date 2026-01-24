import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function Footer() {
  return (
    <ComponentLoader variant="Footer">
    <AnimatedOnScroll variant="fadeUp">
    <footer className="relative bg-black pt-24 pb-10">
  {/* subtle top fade */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-neutral-900/40 to-transparent" />

  <div className="relative mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 gap-16 md:grid-cols-3">

      {/* LEFT: Logo */}
      <div>
        <div className="flex items-center gap-3">
          {/* Logo image */}
          <img
            src="/logo.png"
            alt="ScaffoldGen logo"
            className="h-8 w-40"
          />

        </div>
      </div>

      {/* MIDDLE: Quick Links */}
      <div>
        <h4 className="mb-6 text-lg font-medium text-white">
          Quick Links
        </h4>

        <ul className="space-y-4 text-[15px] text-neutral-400">
          <li className="transition hover:text-white">Downloads</li>
          <li className="transition hover:text-white">Releases</li>
          <li className="transition hover:text-white">Documentation</li>
          <li className="transition hover:text-white">Support</li>
        </ul>
      </div>

      {/* RIGHT: Social */}
      <div>
        <h4 className="mb-6 text-lg font-medium text-white">
          Connect with Us
        </h4>

        <ul className="space-y-4 text-[15px] text-neutral-400">
          <li className="flex items-center gap-3 transition hover:text-white">
            <span className="text-lg">in</span>
            LinkedIn
          </li>
          <li className="flex items-center gap-3 transition hover:text-white">
            <span className="text-lg">⌂</span>
            GitHub
          </li>
          <li className="flex items-center gap-3 transition hover:text-white">
            <span className="text-lg">◌</span>
            Discord
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom copyright */}
    <div className="mt-20 text-sm text-neutral-500">
      © 2024 ScaffoldGenCLI All rights reserved.
    </div>
  </div>
</footer>
  </AnimatedOnScroll>
  </ComponentLoader>

  );
}
