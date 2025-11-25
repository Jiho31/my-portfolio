import { Toaster } from "sonner";
import AboutMe from "components/AboutMe";
import TechStack from "components/TechStack";
import Experiences from "components/Experiences";
import Projects from "components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Toaster />
      <main className="w-full p-5 md:max-w-4xl md:mx-auto">
        <AboutMe />
        <TechStack />
        <Experiences />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
