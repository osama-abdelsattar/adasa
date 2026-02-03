import { Link } from "react-router-dom";
import HeaderBadge from "../../header-badge/HeaderBadge";
import { posts } from "../../../assets/posts.json";
import "./Latest.css";

export default function Latest() {
  return (
    <>
      <section
        id="latest-articles"
        className="py-24 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <HeaderBadge text="الأحدث" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                أحدث المقالات
              </h2>
              <p className="mt-4 text-lg text-neutral-400 max-w-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              عرض جميع المقالات
              <i className="fas fa-arrow-right-long w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"></i>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(
              (
                {
                  slug,
                  title,
                  image,
                  category,
                  readTime,
                  excerpt,
                  date,
                  author,
                },
                i,
              ) => {
                return (
                  i < 7 &&
                  i > 3 && (
                    <article
                      key={slug}
                      className="group card overflow-hidden"
                      style={{ animationDelay: `${100 * (i - 4)}ms` }}
                    >
                      <Link className="block" to={`/blog/${slug}`}>
                        <div className="relative h-52 overflow-hidden">
                          <img
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            src={image}
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                              {category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                            <span className="flex items-center gap-1">
                              <i className="fas fa-clock"></i>
                              {readTime}
                            </span>
                            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                            <span>
                              {new Date(date).toLocaleDateString("ar-EG", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                            {title}
                          </h3>
                          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                            {excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                            <div className="flex items-center gap-3">
                              <img
                                alt={author.name}
                                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                                src={author.avatar}
                              />
                              <div>
                                <p className="text-sm font-medium text-white">
                                  {author.name}
                                </p>
                                <p className="text-xs text-neutral-500">
                                  {author.role}
                                </p>
                              </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                              <i className="fas fa-angle-left text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  )
                );
              },
            )}
          </div>
        </div>
      </section>
    </>
  );
}
