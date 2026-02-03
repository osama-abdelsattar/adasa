import { posts } from "../../../assets/posts.json";
import HeaderBadge from "../../header-badge/HeaderBadge";
import { Link } from "react-router-dom";
import Topic from "./topic/Topic";

export default function SelectedTopics() {
  return (
    <section
      id="selected-topics"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="text d-flex flex-column gap-3">
            <HeaderBadge text="مميز" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              مقالات مختارة
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-lg">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>
          <Link
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
            to="/blog"
          >
            عرض الكل
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="space-y-8">
          {posts.map(
            (
              {
                id,
                image,
                title,
                excerpt,
                slug,
                category,
                readTime,
                author,
                date,
                featured,
              },
              i,
            ) =>
              i < 3 && (
                <Topic
                  key={id}
                  imgSrc={image}
                  title={title}
                  text={excerpt}
                  path={slug}
                  categ={category}
                  readTime={readTime}
                  authName={author.name}
                  authAvatar={author.avatar}
                  date={date}
                  isFeatured={featured}
                />
              ),
          )}
        </div>
      </div>
    </section>
  );
}
