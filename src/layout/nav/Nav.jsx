import "./Nav.css";
import logoSrc from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { siteInfo } from "../../assets/posts.json";
import { useState } from "react";

export default function Nav() {
  const { name, tagline } = siteInfo;
  const [menu, setMenu] = useState("hidden");
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link className="flex items-center gap-3 group" to="/">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img
                  alt="Photography Logo"
                  className="w-full h-full object-cover"
                  src={logoSrc}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  {name}
                </span>
                <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                  {tagline}
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                <NavLink
                  className="btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-30"
                  to=""
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  className="btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-30"
                  to="blog"
                >
                  المدونة
                </NavLink>
                <NavLink
                  className="btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-30"
                  to="about"
                >
                  من نحن
                </NavLink>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] cursor-pointer">
                <i className="fas fa-magnifying-glass"></i>
              </button>
              <Link className="btn-primary text-sm" to="blog">
                ابدأ القراءة
              </Link>
            </div>
            <button
              onClick={() => {
                if (menu === "hidden") setMenu("shown");
                else setMenu("hidden");
              }}
              className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] cursor-pointer"
            >
              <i className="fas fa-bars fa-lg"></i>
            </button>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${menu === "shown" ? "max-h-80 pb-6" : "max-h-0"}`}
          >
            <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
              <div className="flex flex-col space-y-1">
                <NavLink
                  onClick={() => {
                    setMenu("hidden");
                  }}
                  className="mobile-btn px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                  to=""
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  onClick={() => {
                    setMenu("hidden");
                  }}
                  className="mobile-btn px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                  to="blog"
                >
                  المدونة
                </NavLink>
                <NavLink
                  onClick={() => {
                    setMenu("hidden");
                  }}
                  className="mobile-btn px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                  to="about"
                >
                  من نحن
                </NavLink>
                <Link
                  onClick={() => {
                    setMenu("hidden");
                  }}
                  className="btn-primary text-sm text-center mt-2"
                  to="blog"
                >
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
