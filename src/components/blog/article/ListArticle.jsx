import { Link } from "react-router-dom";

export default function ListArticle({ post, index }) {
  return (
    <article
      className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${100 * index}ms` }}
    >
      <Link className="flex flex-col md:flex-row" to={`/blog/${post.slug}`}>
        <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
          <img
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={post.image}
          />
          <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex-1 p-6 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <i className="far fa-clock"></i>
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <i className="far fa-calendar"></i>
              {new Date(post.date).toLocaleDateString("ar-EG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                src={post.author.avatar}
              />
              <div>
                <p className="text-sm font-medium text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              اقرأ المقال <i className="fas fa-arrow-left-long"></i>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
