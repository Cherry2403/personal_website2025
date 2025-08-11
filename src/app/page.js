import ISParent from "@/components/1-2parent/ISParent";
import Experience from "@/components/3-experience/Experience";
import Education from "@/components/4-education/Education";
import Ending from "@/components/Ending/Ending";

export default function Home() {
  return (
    <main>
      <ISParent />
      <Experience />
      <Education />
      <Ending/>
    </main>
  );
}
