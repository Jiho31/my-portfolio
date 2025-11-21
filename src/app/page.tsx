import { Toaster } from "sonner";
import AboutMe from "components/AboutMe";
import TechStack from "components/TechStack";
import Experiences from "components/Experiences";
import Projects from "components/Projects";

export default function Home() {
  return (
    <>
      <Toaster />
      <div className="w-full p-5">
        <AboutMe />
        <TechStack />
        <Experiences />
        <Projects />
      </div>
    </>
  );
}
