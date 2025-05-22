import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-blue-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold font-lexend text-primary mb-4">Учимся без границ!</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">Платформа, которая делает обучение доступным для всех</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-secondary hover:bg-[#45A049] text-white font-bold py-3 px-6 rounded-lg shadow-md btn-transition"
              >
                Начать обучение
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg btn-transition"
              >
                Подробнее о проекте
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900" 
              alt="Дети читают книги с яркими буквами" 
              className="rounded-xl shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
