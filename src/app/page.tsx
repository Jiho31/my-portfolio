import { Toaster } from "sonner";
import AboutMe from "components/AboutMe";
import TechStack from "components/TechStack";
import Experiences from "components/Experiences";
import Projects from "components/Projects";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Blog from "@/components/Blog";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <>
      <Toaster />
      <ThemeSwitcher />
      <main className="w-full p-5 md:max-w-4xl md:mx-auto">
        <Landing />
        <AboutMe />
        <TechStack />
        <Experiences />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
