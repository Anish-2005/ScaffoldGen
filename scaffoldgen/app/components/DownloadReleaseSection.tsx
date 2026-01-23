export default function DownloadReleaseSection() {
  return (
    <section className="relative z-10 bg-transparent py-24">
      <div className="mx-auto max-w-7xl w-full px-6">
        <div className="grid gap-20 md:grid-cols-2 place-content-center mx-auto">
          {/* Latest Download */}
          <div className="ml-[10px]">
            <h3 className="text-2xl font-bold text-white">
              Latest Download
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              The latest version of our CLI tool is now available for download on
              Linux. Get the latest features and improvements by downloading the
              latest release.
            </p>
            <button className="mt-6 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-400">
              Download for Linux
            </button>
          </div>
          {/* Latest Release */}
          <div className="ml-[10px]">
            <h3 className="text-2xl font-extrabold text-white">
              Latest Release
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              Check out the latest release of our CLI tool, packed with new features
              and improvements. See what’s new and get the latest version.
            </p>
            <button className="mt-6 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-400">
              View Latest Release
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
