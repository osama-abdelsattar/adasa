import { useEffect } from "react";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Standards from "./standards/Standards";
import Team from "./team/Team";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Hero />
      <Standards />
      <Team />
      <Contact />
    </>
  );
}
