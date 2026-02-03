import { Link } from "react-router-dom";

export default function Btns() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
      <Link
        className="btn-primary inline-flex items-center justify-center gap-2 group"
        to="/blog"
      >
        <span>استكشف المقالات</span>
        <svg
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </Link>
      <Link
        className="btn-secondary inline-flex items-center justify-center gap-2"
        to="/about"
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>اعرف المزيد</span>
      </Link>
    </div>
  );
}
