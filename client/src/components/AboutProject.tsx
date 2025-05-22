import { Button } from "@/components/ui/button";

const AboutProject = () => {
  return (
    <section id="about" className="py-16 bg-gradient-pink-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">Почему InclusiveLearn?</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 mb-8">
            Мы объединяем технологии и педагогику, чтобы помочь детям с дислексией раскрыть свой потенциал. 
            Наша платформа использует научно доказанные методы: мультисенсорное обучение, геймификацию и персонализацию.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
            alt="Дети разных возможностей учатся вместе" 
            className="rounded-xl shadow-xl max-w-full h-auto mx-auto mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-secondary mb-2">85%</div>
              <p className="text-gray-700">пользователей улучшили навыки чтения за 3 месяца</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-secondary mb-2">10,000+</div>
              <p className="text-gray-700">адаптированных материалов</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-gray-700">доступность на любом устройстве</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg shadow-md btn-transition"
            >
              Присоединиться
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg btn-transition"
            >
              Перейти к упражнениям
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
