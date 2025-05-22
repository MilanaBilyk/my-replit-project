import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">О нас</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden border-4 border-primary shadow-lg mx-auto w-48 h-48">
                <img 
                  src="/images/milana.jpg" 
                  alt="Милана Билык" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-lexend font-semibold text-primary mb-4">Милана Билык</h3>
              <p className="text-gray-700 mb-4 italic">Основатель проекта</p>
              <p className="text-gray-700 mb-6">
                Привет! Я основатель образовательной платформы InclusiveLearn. Наша миссия - сделать обучение 
                доступным для всех детей, включая тех, кто сталкивается с трудностями в обучении 
                из-за дислексии и дисграфии. 
              </p>
              <p className="text-gray-700 mb-6">
                Я верю, что технологии должны служить инструментом для преодоления барьеров в 
                образовании и помогать каждому ребенку раскрыть свой потенциал.
              </p>
            </div>
          </div>
          
          <div className="bg-[#E6F3FF] rounded-xl p-8 shadow-md mb-12">
            <h3 className="text-xl font-lexend font-semibold text-primary mb-4">Наша философия</h3>
            <p className="text-gray-700 mb-4">
              Мы считаем, что каждый ребенок уникален и заслуживает индивидуального подхода к обучению. 
              Наша платформа создана с учетом особенностей восприятия информации детьми с дислексией и дисграфией.
            </p>
            <p className="text-gray-700">
              Мы непрерывно совершенствуем нашу методику, консультируясь с педагогами, психологами и родителями, 
              чтобы сделать процесс обучения максимально эффективным и увлекательным.
            </p>
          </div>
          
          <div className="bg-white border border-[#E6F3FF] rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-lexend font-semibold text-primary mb-4">Контакты</h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-2">Напишите нам</h4>
                <p className="text-gray-700 mb-4">
                  У вас есть вопросы или предложения? Мы всегда открыты для общения!
                </p>
                <p className="flex items-center gap-2 text-primary">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:milana.com04@mail.ru" className="hover:underline">milana.com04@mail.ru</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;