import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Examples from "@/components/Examples";
import InteractiveExercises from "@/components/InteractiveExercises";
import AboutProject from "@/components/AboutProject";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Examples />
      <InteractiveExercises />
      <AboutProject />
    </main>
  );
};

export default Home;
