import Hero from "./hero/Hero";
import Categories from "./categories/Categories";
import Latest from "./latest/Latest";
import Newsletter from "./newsletter/Newsletter";
import SelectedTopics from "./selected-topics/SelectedTopics";
import { useEffect } from "react";

export default function HomeContent() {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  return (
    <>
      <Hero />
      <SelectedTopics />
      <Categories />
      <Latest />
      <Newsletter />
    </>
  );
}
