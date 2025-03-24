import ISParent from "@/components/1-2parent/ISParent";
import Intro from "@/components/1-intro/Intro";
import Skills from "@/components/2-skills/Skills";
import Experience from "@/components/3-experience/Experience";
import Education from "@/components/4-education/Education";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ISParent />
      <Experience />
      <Education />
    </main>
  );
}
