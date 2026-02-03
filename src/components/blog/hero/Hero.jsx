import "./Hero.css";
import HeaderBadge from "../../header-badge/HeaderBadge";
import BgGraphics from "./background-graphics/BgGraphics";

export default function Hero() {
  return (
    <section id="blog-hero" className="relative py-20 overflow-hidden">
      <BgGraphics />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HeaderBadge
          text="مدونتنا"
          icon={
            <i className="far fa-newspaper fa-sm transform rotate-y-180"></i>
          }
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          استكشف <span className="gradient-text">مقالاتنا</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
    </section>
  );
}
