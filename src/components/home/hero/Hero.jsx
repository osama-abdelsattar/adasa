import "./Hero.css";
import HeaderBadge from "../../header-badge/HeaderBadge";
import Btns from "./btns/Btns";
import Stats from "./stats/Stats";
import BgGraphics from "./background-graphics/BgGraphics";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      <BgGraphics />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <HeaderBadge text="مرحبًا بك في عدسة" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <Btns />
          <Stats />
        </div>
      </div>
    </section>
  );
}
