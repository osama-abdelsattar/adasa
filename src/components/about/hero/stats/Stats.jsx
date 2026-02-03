import React from "react";
import StatCard from "./stat-card/StatCard";

export default function Stats() {
  const stats = [
    {
      icon: "users",
      number: "+2 مليون",
      desc: "قارئ شهرياً",
    },
    {
      icon: "newspaper",
      number: "+500",
      desc: "مقالة منشورة",
    },
    {
      icon: "pen-nib",
      number: "+50",
      desc: "كاتب خبير",
    },
    {
      icon: "book-open",
      number: "+15",
      desc: "تصنيف",
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
