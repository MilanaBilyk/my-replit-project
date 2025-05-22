import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Examples from "@/components/Examples";
import InteractiveExercises from "@/components/InteractiveExercises";
import AboutProject from "@/components/AboutProject";
import AboutUs from "@/components/AboutUs";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Examples />
      <InteractiveExercises />
      <AboutProject />
      <AboutUs />
    </main>
  );
};

export default Home;
