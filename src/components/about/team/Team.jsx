import React from "react";
import HeaderBadge from "../../header-badge/HeaderBadge";
import { posts } from "../../../assets/posts.json";

export default function Team() {
  return (
    <section id="our-team" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HeaderBadge text="فريقنا" noBefore />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            تعرف على كتابنا
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
            المجتمع.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ author }) => (
            <div
              key={author.name}
              className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="relative inline-block mb-4">
                <img
                  alt={author.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                  src={author.avatar}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                  <i className="fas fa-check fa-xs"></i>
                </div>
              </div>
              <h3 className="font-bold text-white text-lg">{author.name}</h3>
              <p className="text-orange-500 text-sm font-medium mb-4">
                {author.role}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
