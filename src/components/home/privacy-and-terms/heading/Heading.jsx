import React from "react";
import { Link } from "react-router-dom";

export default function Heading({ pageName, icon }) {
  return (
    <header className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <nav className="flex items-center justify-center gap-2 text-sm mb-8">
          <Link
            className="text-neutral-400 hover:text-white transition-colors"
            to="/"
          >
            الرئيسية
          </Link>
          <i className="fas fa-angle-left text-neutral-600"></i>
          <span className="text-orange-500 font-medium">{pageName}</span>
        </nav>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
          {icon}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {pageName}
        </h1>
        <p className="text-neutral-400 text-lg">آخر تحديث: 15 يناير 2026</p>
      </div>
    </header>
  );
}
