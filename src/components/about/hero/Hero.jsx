import "./Hero.css";
import HeaderBadge from "../../header-badge/HeaderBadge";
import Stats from "./stats/Stats";
import BgGraphics from "./background-graphics/BgGraphics";

export default function Hero() {
  return (
    <section id="about-hero" className="relative py-24 overflow-hidden">
      <BgGraphics />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HeaderBadge text="من نحن" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
          ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
          المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>
        <Stats />
      </div>
    </section>
  );
}
