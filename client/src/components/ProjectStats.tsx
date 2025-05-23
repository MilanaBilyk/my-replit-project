const ProjectStats = () => {
  const stats = [
    {
      number: "125+",
      label: "Интерактивных упражнений",
      description: "Разнообразные задания для развития навыков чтения и письма"
    },
    {
      number: "5",
      label: "Типов упражнений",
      description: "Пропущенные буквы, выбор ответа, сборка слов, поиск рифм, слоги"
    },
    {
      number: "8",
      label: "Учебных материалов",
      description: "Тексты по разным предметам с полной адаптацией"
    },
    {
      number: "3",
      label: "Аудиофайла",
      description: "Профессиональная озвучка учебных текстов"
    }
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">
          Цифры проекта
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md border border-primary/10">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-lexend">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md border border-primary/10 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold font-lexend text-primary mb-4">
              О развитии проекта
            </h3>
            <p className="text-gray-700 leading-relaxed">
              InclusiveLearn находится в активной разработке. Мы постоянно добавляем новые упражнения, 
              улучшаем адаптацию текстов и расширяем возможности платформы. Каждое упражнение создано 
              с учетом особенностей восприятия детей с дислексией и дисграфией.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;