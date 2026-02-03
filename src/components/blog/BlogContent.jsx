import Hero from "./hero/Hero";
import FilterBar from "./filterBar/FilterBar";
import { posts } from "../../assets/posts.json";
import { useEffect, useState } from "react";
import GridArticle from "./article/GridArticle";
import ListArticle from "./article/ListArticle";

export default function BlogContent() {
  const [pageNum, setPageNum] = useState(1),
    [view, setView] = useState("grid"),
    [categ, setCateg] = useState("جميع المقالات"),
    [categPosts, setCategPosts] = useState(
      posts.filter(
        (post) => categ === post.category || categ === "جميع المقالات",
      ),
    ),
    totalPages = Math.round(categPosts.length / 6);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <FilterBar
        categ={categ}
        setCateg={setCateg}
        setPageNum={setPageNum}
        setCategPosts={setCategPosts}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض{" "}
            <span className="font-bold text-white">{categPosts.length}</span>{" "}
            مقالات{" "}
            {categ !== "جميع المقالات" && (
              <>
                في{" "}
                <span className="font-bold text-orange-500 capitalize">
                  {categ}
                </span>
              </>
            )}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                onClick={() => {
                  setView("grid");
                }}
                className={`${view === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"} p-2 rounded-lg transition-all duration-300 cursor-pointer`}
                title="عرض شبكي"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => {
                  setView("list");
                  window.scrollTo({ top: 402.2, behavior: "smooth" });
                }}
                className={`${view === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"} p-2 rounded-lg transition-all duration-300 cursor-pointer`}
                title="عرض قائمة"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            view === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
          }
        >
          {categPosts.map(
            (post, i) =>
              i < pageNum * 6 &&
              i >= (pageNum - 1) * 6 &&
              (view === "grid" ? (
                <GridArticle
                  key={post.slug}
                  index={i}
                  post={post}
                  categ={categ}
                />
              ) : (
                <ListArticle
                  key={post.slug}
                  index={i}
                  post={post}
                  categ={categ}
                />
              )),
          )}
        </div>
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => {
              setPageNum(pageNum - 1);
              window.scrollTo({ top: 402.4, behavior: "smooth" });
            }}
            className={`p-3 rounded-xl border transition-all duration-300 ${pageNum === 1 ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer"}`}
            disabled={pageNum === 1}
          >
            <i className="fas fa-angle-right"></i>
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (num, i) => (
                <button
                  key={num}
                  onClick={() => {
                    setPageNum(i + 1);
                    window.scrollTo({ top: 402.2, behavior: "smooth" });
                  }}
                  className={`btn ${i === pageNum - 1 && "active"} min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white cursor-pointer`}
                >
                  {num}
                </button>
              ),
            )}
          </div>
          <button
            onClick={() => {
              setPageNum(pageNum + 1);
              window.scrollTo({ top: 402.4, behavior: "smooth" });
            }}
            className={`p-3 rounded-xl border transition-all duration-300 ${pageNum === totalPages ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer"}`}
            disabled={pageNum === totalPages}
          >
            <i className="fas fa-angle-left"></i>
          </button>
        </div>
        <p className="text-center text-neutral-500 mt-4 text-sm">
          صفحة {pageNum} من {totalPages}
        </p>
      </div>
    </div>
  );
}
