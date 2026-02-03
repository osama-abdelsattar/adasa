import "./HeaderBadge.css";
export default function HeaderBadge({ text, noBefore, icon }) {
  return (
    <div
      className={`badge inline-flex items-center gap-2 mb-8 animate-fade-in ${noBefore && "before:hidden"}`}
    >
      {icon ? (
        icon
      ) : (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
        </>
      )}
      <span className="text-sm font-medium text-orange-500">{text}</span>
    </div>
  );
}
