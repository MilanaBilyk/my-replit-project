import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Examples from "@/components/Examples";
import InteractiveExercises from "@/components/InteractiveExercises";
import ProjectStats from "@/components/ProjectStats";
import LearningMaterials from "@/components/LearningMaterials";
import AboutProject from "@/components/AboutProject";
import AboutUs from "@/components/AboutUs";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <ProjectStats />
      <Examples />
      <InteractiveExercises />
      <LearningMaterials />
      <AboutProject />
      <AboutUs />
    </main>
  );
};

export default Home;
