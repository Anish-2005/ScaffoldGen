export default function AboutSection() {
  return (
    <section className="relative z-30 -mt-[280px] pb-44">
      <div className="mx-auto max-w-7xl px-6">
        {/* ORANGE GLOW SHELL */}
        <div className="relative rounded-[28px] p-[2px]">
          <div
            className="absolute inset-0 rounded-[28px]"
            style={{
              background:
                "radial-gradient(130% 130% at 50% 100%, rgba(255,120,40,0.95) 0%, rgba(255,120,40,0.6) 38%, rgba(255,80,20,0.28) 58%, transparent 72%)",
              filter: "blur(52px)",
            }}
          />

          {/* MAIN FLOATING CARD */}
          <div className="relative rounded-[24px] bg-black px-12 pt-12 pb-16">
            <div className="grid items-start gap-12 md:grid-cols-2">
              {/* LEFT CONTENT (extra bottom space like image) */}
              <div>
                <h3 className="text-[22px] font-medium text-white">
                  About ScaffoldGen CLI
                </h3>
                <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-neutral-400">
                  Our CLI tool is a powerful and versatile command-line interface that
                  helps developers streamline their workflow and boost productivity.
                  With a wide range of features and customization options, it’s the
                  perfect tool for any developer looking to optimize their development
                  process.
                </p>
                <button className="mt-7 rounded-md bg-orange-500 px-5 py-2.5 text-[13.5px] font-medium text-white transition hover:bg-orange-400">
                  Learn More
                </button>
                {/* intentional empty space below (matches image) */}
                <div className="h-10" />
              </div>
              {/* TERMINAL AREA */}
              <div className="relative">
                {/* GREY GRADIENT SLAB (THIS WAS MISSING) */}
                <div className="absolute -inset-x-6 -inset-y-6 rounded-3xl bg-gradient-to-b from-neutral-700/40 via-neutral-800/30 to-transparent blur-[30px]" />
                {/* TERMINAL WINDOW */}
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                  <div className="relative min-w-[520px] rounded-2xl bg-neutral-950 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 rounded-t-2xl bg-neutral-800 px-5 py-3">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                      <span className="ml-auto text-xs text-neutral-400">
                        scaffoldgen
                      </span>
                    </div>
                    {/* Terminal Body (extra bottom padding like image) */}
                    <pre className="px-6 pt-5 pb-10 text-[13.5px] leading-relaxed text-neutral-200 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                      <span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">cd</span> <span className="text-white">web_development</span>{"\n"}
                      <span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">scaffoldgen new **my-awesome-app** --template next-ts --style tailwind</span>{"\n"}
                      <span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">scaffoldgen generate **component** UserProfile --type rfc --path src/components</span>{"\n"}
                      <span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">scaffoldgen create **route** auth --handler **login,register** --method post</span>{"\n"}
                      <span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">scaffoldgen config set **default-lang** python</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
