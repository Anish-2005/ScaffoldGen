import Image from 'next/image';
import ComponentLoader from './ComponentLoader'

export default function Navbar() {
  return (
    <ComponentLoader variant="Navbar">
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="ScaffoldGen logo"
            className="h-8 w-40"
          />
        </div>
        {/* Spacer */}
        <div className="flex-1" />
        {/* Right: Nav items + Search + Links */}
        <div className="flex items-center gap-6">
          {/* Nav links (just left of search) */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              Downloads
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              Releases
            </a>
          </div>
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-56 rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-base text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none"
            />
            <svg
              className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <a
            href="#"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            Docs
          </a>
          <a
            href="#"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            Snippet Manager
          </a>
        </div>
      </div>
    </nav>
    </ComponentLoader>
  );
}
