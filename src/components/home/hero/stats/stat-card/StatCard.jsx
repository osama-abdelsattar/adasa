import React from "react";

export default function StatCard({ icon, number, desc }) {
  return (
    <>
      <div
        className="glass-card p-4 hover:scale-105 transition-transform duration-300"
        style={{ animationDelay: "0ms" }}
      >
        <i className={"fas fa-" + icon + " text-2xl text-orange-500 mb-1"}></i>
        <p className="text-2xl md:text-3xl font-bold gradient-text">{number}</p>
        <p className="text-neutral-500 text-sm">{desc}</p>
      </div>
    </>
  );
}
