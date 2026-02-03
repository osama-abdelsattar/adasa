import { siteInfo } from "../../../../assets/posts.json";

export default function Policy({ i, name, desc, additionalLink, children }) {
  return (
    <section className="group">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
          {i}
        </span>
        {name}
      </h2>
      <div className="pr-11">
        {!children ? (
          <>
            <p className="text-neutral-400 leading-relaxed">{desc}</p>
            {additionalLink && (
              <a
                href={`mailto:${siteInfo.email}`}
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium mt-4"
              >
                <i className="far fa-envelope fa-lg"></i> {siteInfo.email}
              </a>
            )}
          </>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
