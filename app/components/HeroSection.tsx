import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function HeroSection() {
  return (
    <ComponentLoader variant="HeroSection">
      <AnimatedOnScroll variant="zoomIn">
        <section className="relative min-h-screen overflow-hidden bg-black pt-32 sm:pt-36 pb-[12rem] text-center font-sans md:pb-[28rem] lg:pb-[40rem]">
          {/* Heading */}
          <h1 className="relative z-10 px-4 text-4xl font-bold tracking-tight text-[#ff6b35] sm:text-5xl md:text-6xl lg:text-[56px] lg:px-0">
            ScaffoldGen
          </h1>

          {/* Subtext */}
          <p className="relative z-10 mx-auto mt-5 max-w-2xl px-4 text-sm font-normal leading-relaxed text-neutral-300/90 sm:text-base md:text-[16px] lg:px-4">
            A powerful command-line interface tool for developers, designed to streamline your workflow and boost your productivity
          </p>

          {/* Buttons */}
          <div className="relative z-10 mt-6 flex flex-col justify-center gap-4 px-4 sm:flex-row lg:px-4">
            <button
              className="
    group relative rounded-lg
    px-6 py-3.5 sm:px-7 sm:text-[15px]
    text-sm font-semibold text-white
    bg-[#ff6b35]
    border-2 border-[#ff6b35]
    transition-all duration-300
    hover:border-[#ff9a6b]
    hover:shadow-[0_0_25px_rgba(255,107,53,0.45),0_0_50px_rgba(255,107,53,0.25)]
    hover:scale-105
    overflow-hidden
  "
            >
              {/* Glow beam layer */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-lg
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
    "
              >
                {/* Soft travelling beam */}
                <span
                  className="
        absolute inset-[-4px]
        rounded-lg
        bg-[conic-gradient(
          from_0deg,
          transparent_0deg,
          rgba(255,180,120,0.9)_40deg,
          rgba(255,180,120,0.5)_70deg,
          transparent_110deg
        )]
        blur-[8px]
        animate-[perimeter-beam_2.2s_linear_infinite]
      "
                />

                {/* Mask to keep glow near border */}
                <span
                  className="
        absolute inset-[2px]
        rounded-lg
        bg-black
      "
                />
              </span>

              <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">Download for Linux</span>
            </button>

            <button
              className="
    group relative rounded-lg
    px-6 py-3.5 sm:px-7 sm:text-[15px]
    text-sm font-semibold
    text-[#ff6b35]
    bg-transparent
    border-2 border-[#ff6b35]
    transition-all duration-300
    hover:border-[#ff9a6b]
    hover:text-[#ff9a6b]
    hover:shadow-[0_0_25px_rgba(255,107,53,0.45),0_0_50px_rgba(255,107,53,0.25)]
    hover:scale-105
    overflow-hidden
  "
            >
              <span
                className="
      pointer-events-none absolute inset-0 rounded-lg
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
    "
              >
                <span
                  className="
        absolute inset-[-4px]
        rounded-lg
        bg-[conic-gradient(
          from_0deg,
          transparent_0deg,
          rgba(255,160,100,0.85)_45deg,
          rgba(255,160,100,0.45)_80deg,
          transparent_120deg
        )]
        blur-[8px]
        animate-[perimeter-beam_2.4s_linear_infinite]
      "
                />

                <span className="absolute inset-[2px] rounded-lg bg-black" />
              </span>

              <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">Download for Windows</span>
            </button>

          </div>

          {/* Planet/Arc Glow Effect - Fixed positioning for mobile */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] sm:h-[400px] md:h-[550px] lg:h-[750px]">
            {/* Upper orangish glow above the curve */}
            <div className="absolute left-1/2 top-[20%] h-[250px] w-full max-w-[700px] -translate-x-1/2 rounded-full sm:top-[22%] sm:h-[300px] sm:max-w-[900px] md:top-[25%] md:h-[350px] md:max-w-[1100px] lg:top-[28%] lg:h-[450px] lg:w-[1300px] lg:max-w-none" style={{ background: "linear-gradient(to top, rgba(255,120,40,0.2) 0%, rgba(255,100,30,0.12) 50%, rgba(255,80,20,0.06) 70%, transparent 100%)", filter: "blur(60px)" }} />

            {/* Deep ambient base glow */}
            <div className="absolute left-1/2 top-[50%] h-[250px] w-full max-w-[500px] -translate-x-1/2 rounded-full sm:top-[55%] sm:h-[300px] sm:max-w-[700px] md:top-[52%] md:h-[400px] md:max-w-[900px] lg:top-[48%] lg:h-[600px] lg:w-[1100px] lg:max-w-none" style={{ background: "radial-gradient(ellipse at center, rgba(200,80,30,0.2) 0%, rgba(180,70,25,0.15) 30%, rgba(140,50,20,0.08) 50%, transparent 70%)", filter: "blur(120px)" }} />

            {/* Mid-level warm glow */}
            <div className="absolute left-1/2 top-[48%] h-[250px] w-full max-w-[500px] -translate-x-1/2 rounded-full sm:top-[53%] sm:h-[300px] sm:max-w-[700px] md:top-[48%] md:h-[400px] md:max-w-[900px] lg:top-[44%] lg:h-[600px] lg:w-[1100px] lg:max-w-none" style={{ background: "radial-gradient(ellipse at center, rgba(255,140,50,0.22) 0%, rgba(255,120,40,0.16) 35%, rgba(240,100,30,0.1) 55%, transparent 72%)", filter: "blur(80px)" }} />

            {/* Bright inner core glow */}
            <div className="absolute left-1/2 top-[46%] h-[250px] w-full max-w-[500px] -translate-x-1/2 rounded-full sm:top-[50%] sm:h-[300px] sm:max-w-[700px] md:top-[46%] md:h-[400px] md:max-w-[900px] lg:top-[42%] lg:h-[600px] lg:w-[1100px] lg:max-w-none" style={{ background: "radial-gradient(ellipse at center, rgba(255,200,120,0.18) 0%, rgba(255,160,80,0.14) 28%, rgba(255,140,60,0.08) 48%, transparent 62%)", filter: "blur(50px)" }} />

            {/* Sharp bright arc rim - main feature */}
            <div className="absolute left-1/2 top-[44%] h-[250px] w-full max-w-[500px] -translate-x-1/2 rounded-full sm:top-[48%] sm:h-[300px] sm:max-w-[700px] md:top-[44%] md:h-[400px] md:max-w-[900px] lg:top-[40%] lg:h-[600px] lg:w-[1100px] lg:max-w-none" style={{ background: "radial-gradient(ellipse at center, transparent 58.5%, rgba(255,220,140,0.95) 59.8%, rgba(255,190,110,1) 60.3%, rgba(255,160,80,0.98) 60.8%, rgba(255,130,50,0.75) 61.5%, rgba(220,100,40,0.35) 62.5%, transparent 64%)", filter: "blur(1.5px)" }} />

            {/* Outer rim soft glow */}
            <div className="absolute left-1/2 top-[44%] h-[250px] w-full max-w-[500px] -translate-x-1/2 rounded-full sm:top-[48%] sm:h-[300px] sm:max-w-[700px] md:top-[44%] md:h-[400px] md:max-w-[900px] lg:top-[40%] lg:h-[600px] lg:w-[1100px] lg:max-w-none" style={{ background: "radial-gradient(ellipse at center, transparent 58%, rgba(255,150,70,0.35) 60%, rgba(255,120,50,0.25) 61.5%, rgba(200,90,40,0.12) 63.5%, transparent 67%)", filter: "blur(20px)" }} />

            {/* Upper highlight/bloom */}
            <div className="absolute left-1/2 top-[42%] h-[250px] w-full max-w-[500px] -translate-x-1/2 rounded-full sm:top-[46%] sm:h-[300px] sm:max-w-[700px] md:top-[42%] md:h-[400px] md:max-w-[900px] lg:top-[38%] lg:h-[600px] lg:w-[1100px] lg:max-w-none" style={{ background: "radial-gradient(ellipse at center, transparent 59%, rgba(255,230,180,0.4) 60.2%, transparent 61.5%)", filter: "blur(8px)" }} />

            {/* Bottom atmospheric fade with warmth */}
            <div className="absolute left-1/2 top-[56%] h-[180px] w-full max-w-[500px] -translate-x-1/2 sm:top-[60%] sm:h-[220px] sm:max-w-[700px] md:top-[58%] md:h-[300px] md:max-w-[900px] lg:top-[54%] lg:h-[450px] lg:w-[1100px] lg:max-w-none" style={{ background: "linear-gradient(to bottom, rgba(255,110,40,0.12) 0%, rgba(200,80,30,0.08) 25%, rgba(150,60,20,0.04) 50%, transparent 100%)", filter: "blur(60px)" }} />

            {/* Subtle lower edge definition */}
            <div className="absolute left-1/2 top-[60%] h-[140px] w-full max-w-[500px] -translate-x-1/2 sm:top-[64%] sm:h-[180px] sm:max-w-[700px] md:top-[62%] md:h-[250px] md:max-w-[900px] lg:top-[58%] lg:h-[350px] lg:w-[1100px] lg:max-w-none" style={{ background: "linear-gradient(to bottom, rgba(180,70,25,0.06) 0%, transparent 70%)", filter: "blur(35px)" }} />
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}