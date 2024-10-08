import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSction from "./components/AchievementsSction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar></NavBar>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSction/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
