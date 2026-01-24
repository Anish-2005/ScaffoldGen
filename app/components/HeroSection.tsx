import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function HeroSection() {
  return (
    <ComponentLoader variant="HeroSection">
      <AnimatedOnScroll variant="zoomIn">
        <section className="relative min-h-screen overflow-hidden bg-black pt-20 pb-[12rem] text-center font-sans md:pb-[28rem] lg:pb-[32rem]">
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
            <button className="rounded-lg bg-[#ff6b35] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-[#ff7b45] hover:shadow-orange-500/30 sm:px-7 sm:text-[15px]">
              Download for Linux
            </button>
            <button className="rounded-lg border-2 border-[#ff6b35] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#ff6b35] transition-all hover:bg-[#ff6b35]/10 sm:px-7 sm:text-[15px]">
              Download for Windows
            </button>
          </div>
          
          {/* Planet/Arc Glow Effect - Fixed positioning for mobile */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] sm:h-[400px] md:h-[550px] lg:h-[750px]">
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