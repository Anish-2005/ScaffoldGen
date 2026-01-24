import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function AboutSection() {
  return (
    <ComponentLoader variant="AboutSection">
      <AnimatedOnScroll variant="fadeUp">
        <section className="relative z-30 -mt-[80px] sm:-mt-[140px] md:-mt-[180px] lg:-mt-[280px] pb-20 md:pb-28 lg:pb-44">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* ORANGE GLOW SHELL */}
       <div className="relative rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-[2px]">

  {/* PRIMARY GLOW */}
  <div
    className="
      absolute inset-[-8%]
      rounded-[28px]
      bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,120,40,0.85)_0%,rgba(255,120,40,0.45)_30%,rgba(255,90,20,0.25)_48%,transparent_65%)]
      blur-[40px]
      md:blur-[48px]
      lg:blur-[56px]
      opacity-90
    "
  />

  {/* SOFT EDGE BOOST (very subtle) */}
  <div
    className="
      absolute inset-[-4%]
      rounded-[26px]
      bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,140,60,0.25)_0%,transparent_60%)]
      blur-[22px]
      opacity-60
    "
  />


              {/* MAIN FLOATING CARD */}
              <div className="relative rounded-[16px] md:rounded-[20px] lg:rounded-[24px] bg-black px-5 pt-6 pb-8 sm:px-7 sm:pt-8 sm:pb-10 md:px-10 md:pt-10 md:pb-12 lg:px-12 lg:pt-12 lg:pb-16">
                <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">

                  {/* LEFT CONTENT */}
                  <div className="lg:order-1">
                    <h3 className="text-lg md:text-[19px] lg:text-[20px] xl:text-[22px] font-medium text-white">
                      About ScaffoldGen CLI
                    </h3>

                    <p className="mt-4 md:mt-5 px-4 py-2 md:px-0 md:py-0 max-w-full md:max-w-md text-sm md:text-[13.5px] lg:text-[14px] xl:text-[14.5px] leading-relaxed text-neutral-400">
                      Our CLI tool is a powerful and versatile command-line interface that
                      helps developers streamline their workflow and boost productivity.
                      With a wide range of features and customization options, it's the
                      perfect tool for any developer looking to optimize their development
                      process.
                    </p>

                    <button className="mt-6 md:mt-7 rounded-md bg-orange-500 px-5 py-2.5 text-xs md:text-[13px] lg:text-[13.5px] font-medium text-white transition hover:bg-orange-400">
                      Learn More
                    </button>

                    {/* spacing preserved for desktop */}
                    <div className="hidden lg:block h-10" />
                  </div>

                  {/* TERMINAL AREA */}
                  <div className="relative px-4 py-2 md:px-0 md:py-0 overflow-hidden lg:order-2">

                    {/* GREY DEPTH GLOW */}
                    <div className="absolute -inset-x-2 -inset-y-2 sm:-inset-x-3 sm:-inset-y-3 md:-inset-x-4 md:-inset-y-4 lg:-inset-x-5 lg:-inset-y-5 xl:-inset-x-6 xl:-inset-y-6 rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-b from-neutral-700/40 via-neutral-800/30 to-transparent blur-[16px] md:blur-[22px] lg:blur-[26px] xl:blur-[30px]" />

                    {/* TERMINAL WRAPPER */}
                    <div className="relative overflow-x-auto">
                      <div className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[380px] rounded-lg md:rounded-xl lg:rounded-2xl bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.8)] md:shadow-[0_25px_70px_rgba(0,0,0,0.8)] lg:shadow-[0_30px_80px_rgba(0,0,0,0.8)]">

                        {/* HEADER */}
                        <div className="flex items-center gap-2 rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl bg-neutral-800 px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3">
                          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-red-500" />
                          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-yellow-400" />
                          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-green-500" />
                          <span className="ml-auto text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">
                            scaffoldgen
                          </span>
                        </div>

                        {/* BODY */}
                        <pre className="px-2 pt-2 pb-3 sm:px-3 sm:pt-3 sm:pb-4 md:px-4 md:pt-4 md:pb-5 lg:px-5 lg:pt-4 lg:pb-6 xl:px-6 xl:pt-5 xl:pb-8 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-[12.5px] leading-relaxed text-neutral-200 whitespace-pre overflow-x-auto">
<span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">cd</span> <span className="text-white">web_development</span>{"\n"}
<span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">scaffoldgen new</span> <span className="text-yellow-300">**my-awesome-app**--template next-ts --style tailwind </span> {"\n"}
<span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">scaffoldgen generate</span> <span className="text-yellow-300">**component** UserProfile --type rfc </span> {"\n"}
<span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">scaffoldgen create</span> <span className="text-yellow-300">**route** auth --handler login,register </span> {"\n"}
<span className="text-cyan-400">~</span><span className="text-green-400">&gt;</span> <span className="text-yellow-300">scaffoldgen config set</span> <span className="text-yellow-300">**default-lang** python </span> 
                        </pre>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}