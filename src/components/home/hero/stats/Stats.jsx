import React from "react";
import StatCard from "./stat-card/StatCard";

export default function Stats() {
  const stats = [
    {
      icon: "newspaper",
      number: "+50",
      desc: "مقالة",
    },
    {
      icon: "users",
      number: "+10 ألف",
      desc: "قارئ",
    },
    {
      icon: "folder-open",
      number: "5",
      desc: "تصنيفات",
    },
    {
      icon: "pen-nib",
      number: "6",
      desc: "كاتب",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {stats.map(({ icon, number, desc }, index) => {
          return (
            <StatCard
              key={`${desc}-${index}`}
              icon={icon}
              number={number}
              desc={desc}
            />
          );
        })}
      </div>
    </>
  );
}
