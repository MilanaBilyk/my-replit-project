const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">3 шага к комфортному обучению</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 border border-[#E6F3FF] rounded-xl p-8 shadow-sm card-hover">
            <div className="text-4xl mb-4 text-center">📄</div>
            <h3 className="text-xl font-lexend font-semibold text-primary text-center mb-4">Загрузите текст</h3>
            <p className="text-gray-700 text-center">Копируйте текст из учебника или загружайте PDF</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gray-50 border border-[#E6F3FF] rounded-xl p-8 shadow-sm card-hover">
            <div className="text-4xl mb-4 text-center">🎨</div>
            <h3 className="text-xl font-lexend font-semibold text-primary text-center mb-4">Настройте формат</h3>
            <p className="text-gray-700 text-center">Выберите шрифт, цвет фона и аудиосопровождение</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gray-50 border border-[#E6F3FF] rounded-xl p-8 shadow-sm card-hover">
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-lexend font-semibold text-primary text-center mb-4">Начните учиться</h3>
            <p className="text-gray-700 text-center">Решайте интерактивные задания и отслеживайте прогресс</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
