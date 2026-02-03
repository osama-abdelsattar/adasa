import { useState } from "react";
import "./FilterBar.css";
import { posts } from "../../../assets/posts.json";

export default function FilterBar({
  categ,
  setCateg,
  setPageNum,
  setCategPosts,
}) {
  const categories = [
      "جميع المقالات",
      "إضاءة",
      "بورتريه",
      "مناظر طبيعية",
      "تقنيات",
      "معدات",
    ],
    [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              onInput={(e) => {
                setSearchQuery(e.target.value);
                setCategPosts(
                  posts.filter((post) => {
                    // Checks the category && query
                    return (
                      (post.title.includes(e.target.value) ||
                        post.slug.includes(e.target.value) ||
                        post.category.includes(e.target.value)) &&
                      (post.category === categ || categ === "جميع المقالات")
                    );
                  }),
                );
                setPageNum(1);
              }}
              placeholder="ابحث في المقالات..."
              className="input-dark w-full px-5 py-3 pr-12"
              type="text"
              value={searchQuery}
            />
            <i className="fas fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"></i>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setCateg(category);
                  setCategPosts(
                    posts.filter(
                      (post) =>
                        category === post.category ||
                        category === "جميع المقالات",
                    ),
                  );
                  setPageNum(1);
                  window.scrollTo({ top: 402.4, behavior: "smooth" });
                }}
                className={`btn ${categ === category && "active"} px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 cursor-pointer`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
