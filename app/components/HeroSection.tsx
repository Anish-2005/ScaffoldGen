import ComponentLoader from "./ComponentLoader"

export default function HeroSection() {
  return (
    <ComponentLoader variant="HeroSection">
      <section className="relative min-h-screen overflow-hidden bg-black pt-20 pb-[32rem] text-center font-sans">
      {/* Heading */}
      <h1 className="relative z-10 text-[56px] font-bold tracking-tight text-[#ff6b35]">ScaffoldGen</h1>
      {/* Subtext */}
      <p className="relative z-10 mx-auto mt-5 max-w-2xl px-4 text-[16px] font-normal leading-relaxed text-neutral-300/90">
        A powerful command-line interface tool for developers, designed to streamline your workflow and boost your productivity
      </p>
      {/* Buttons */}
      <div className="relative z-10 mt-8 flex justify-center gap-4 px-4">
        <button className="rounded-lg bg-[#ff6b35] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-[#ff7b45] hover:shadow-orange-500/30">
          Download for Linux
        </button>
        <button className="rounded-lg border-2 border-[#ff6b35] bg-transparent px-7 py-3.5 text-[15px] font-semibold text-[#ff6b35] transition-all hover:bg-[#ff6b35]/10">
          Download for Windows
        </button>
      </div>
      {/* Planet/Arc Glow Effect */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[750px]">
        {/* Deep ambient base glow */}
        <div className="absolute left-1/2 top-[48%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(ellipse at center, rgba(200,80,30,0.2) 0%, rgba(180,70,25,0.15) 30%, rgba(140,50,20,0.08) 50%, transparent 70%)", filter: "blur(120px)" }} />
        {/* Mid-level warm glow */}
        <div className="absolute left-1/2 top-[44%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(ellipse at center, rgba(255,140,50,0.22) 0%, rgba(255,120,40,0.16) 35%, rgba(240,100,30,0.1) 55%, transparent 72%)", filter: "blur(80px)" }} />
        {/* Bright inner core glow */}
        <div className="absolute left-1/2 top-[42%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(ellipse at center, rgba(255,200,120,0.18) 0%, rgba(255,160,80,0.14) 28%, rgba(255,140,60,0.08) 48%, transparent 62%)", filter: "blur(50px)" }} />
        {/* Sharp bright arc rim - main feature */}
        <div className="absolute left-1/2 top-[40%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(ellipse at center, transparent 58.5%, rgba(255,220,140,0.95) 59.8%, rgba(255,190,110,1) 60.3%, rgba(255,160,80,0.98) 60.8%, rgba(255,130,50,0.75) 61.5%, rgba(220,100,40,0.35) 62.5%, transparent 64%)", filter: "blur(1.5px)" }} />
        {/* Outer rim soft glow */}
        <div className="absolute left-1/2 top-[40%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(ellipse at center, transparent 58%, rgba(255,150,70,0.35) 60%, rgba(255,120,50,0.25) 61.5%, rgba(200,90,40,0.12) 63.5%, transparent 67%)", filter: "blur(20px)" }} />
        {/* Upper highlight/bloom */}
        <div className="absolute left-1/2 top-[38%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(ellipse at center, transparent 59%, rgba(255,230,180,0.4) 60.2%, transparent 61.5%)", filter: "blur(8px)" }} />
        {/* Bottom atmospheric fade with warmth */}
        <div className="absolute left-1/2 top-[54%] h-[450px] w-[1100px] -translate-x-1/2" style={{ background: "linear-gradient(to bottom, rgba(255,110,40,0.12) 0%, rgba(200,80,30,0.08) 25%, rgba(150,60,20,0.04) 50%, transparent 100%)", filter: "blur(60px)" }} />
        {/* Subtle lower edge definition */}
        <div className="absolute left-1/2 top-[58%] h-[350px] w-[1100px] -translate-x-1/2" style={{ background: "linear-gradient(to bottom, rgba(180,70,25,0.06) 0%, transparent 70%)", filter: "blur(35px)" }} />
      </div>
      </section>
    </ComponentLoader>
  )
}
