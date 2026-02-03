import "./Modal.css";

export default function Modal({ icon, title, subTitle, color }) {
  return (
    <div className={`modal-${color} rounded-2xl p-6 mb-12`}>
      <div className="flex gap-4">
        <div className="shrink-0">{icon}</div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
