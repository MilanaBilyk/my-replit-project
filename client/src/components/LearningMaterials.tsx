import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSpeech } from '@/hooks/useSpeech';

interface MaterialText {
  id: number;
  title: string;
  subject: string;
  grade: string;
  content: string;
  adaptedContent: string[];
  exercises: Array<{
    type: string;
    question: string;
    options?: string[];
    answer: string;
  }>;
}

const LearningMaterials = () => {
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const { speak, isSpeaking } = useSpeech();
  
  const materials: MaterialText[] = [
    {
      id: 1,
      title: "Круговорот воды в природе",
      subject: "Природоведение",
      grade: "3 класс",
      content: "Вода постоянно движется в природе. Солнце нагревает воду в морях и реках. Вода превращается в пар и поднимается вверх. В небе пар охлаждается и превращается в капельки. Из капелек образуются облака. Из облаков выпадает дождь или снег.",
      adaptedContent: [
        "Вода постоянно движется в природе.",
        "Солнце нагревает воду в морях и реках.",
        "Вода превращается в пар и поднимается вверх.",
        "В небе пар охлаждается и превращается в капельки.",
        "Из капелек образуются облака.",
        "Из облаков выпадает дождь или снег."
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Что превращает воду в пар?",
          options: ["Луна", "Солнце", "Ветер"],
          answer: "Солнце"
        },
        {
          type: "fill-blank",
          question: "Из облаков выпадает ___ или снег.",
          answer: "дождь"
        }
      ]
    },
    {
      id: 2,
      title: "Домашние животные",
      subject: "Окружающий мир",
      grade: "2 класс",
      content: "Домашние животные живут рядом с человеком. Корова даёт молоко. Курица несёт яйца. Собака охраняет дом. Кошка ловит мышей. Лошадь помогает человеку в работе. За домашними животными нужно ухаживать.",
      adaptedContent: [
        "Домашние животные живут рядом с человеком.",
        "Корова даёт молоко.",
        "Курица несёт яйца.",
        "Собака охраняет дом.",
        "Кошка ловит мышей.",
        "Лошадь помогает человеку в работе.",
        "За домашними животными нужно ухаживать."
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Что даёт корова?",
          options: ["Яйца", "Молоко", "Шерсть"],
          answer: "Молоко"
        },
        {
          type: "fill-blank",
          question: "___ ловит мышей.",
          answer: "Кошка"
        }
      ]
    },
    {
      id: 3,
      title: "Времена года",
      subject: "Окружающий мир",
      grade: "1 класс",
      content: "У нас четыре времени года: весна, лето, осень, зима. Весной природа просыпается. Появляются первые листочки. Летом очень тепло и много солнца. Осенью листья жёлтеют и опадают. Зимой идёт снег и очень холодно.",
      adaptedContent: [
        "У нас четыре времени года:",
        "весна, лето, осень, зима.",
        "Весной природа просыпается.",
        "Появляются первые листочки.",
        "Летом очень тепло и много солнца.",
        "Осенью листья жёлтеют и опадают.",
        "Зимой идёт снег и очень холодно."
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Сколько времён года?",
          options: ["3", "4", "5"],
          answer: "4"
        },
        {
          type: "fill-blank",
          question: "Зимой идёт ___ и очень холодно.",
          answer: "снег"
        }
      ]
    },
    {
      id: 4,
      title: "Простые числа",
      subject: "Математика",
      grade: "4 класс",
      content: "Числа от 1 до 10: один, два, три, четыре, пять, шесть, семь, восемь, девять, десять. Когда мы складываем числа, получается сумма. Когда вычитаем, получается разность. 2 + 3 = 5. 7 - 4 = 3.",
      adaptedContent: [
        "Числа от 1 до 10:",
        "один, два, три, четыре, пять,",
        "шесть, семь, восемь, девять, десять.",
        "Когда мы складываем числа, получается сумма.",
        "Когда вычитаем, получается разность.",
        "2 + 3 = 5.",
        "7 - 4 = 3."
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "2 + 3 = ?",
          options: ["4", "5", "6"],
          answer: "5"
        },
        {
          type: "fill-blank",
          question: "7 - 4 = ___",
          answer: "3"
        }
      ]
    },
    {
      id: 5,
      title: "Части растения",
      subject: "Биология",
      grade: "3 класс",
      content: "У растения есть корень, стебель, листья и цветок. Корень питает растение из земли. Стебель держит растение прямо. Листья делают питание для растения. Цветок нужен для размножения.",
      adaptedContent: [
        "У растения есть корень, стебель, листья и цветок.",
        "Корень питает растение из земли.",
        "Стебель держит растение прямо.",
        "Листья делают питание для растения.",
        "Цветок нужен для размножения."
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Что питает растение из земли?",
          options: ["Стебель", "Корень", "Листья"],
          answer: "Корень"
        },
        {
          type: "fill-blank",
          question: "___ держит растение прямо.",
          answer: "Стебель"
        }
      ]
    }
  ];

  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [showExercises, setShowExercises] = useState(false);
  const [exerciseAnswers, setExerciseAnswers] = useState<{[key: number]: string}>({});
  const [exerciseResults, setExerciseResults] = useState<{[key: number]: boolean}>({});

  const handleMaterialSelect = (material: MaterialText) => {
    setSelectedMaterial(material);
    setShowExercises(false);
    setExerciseAnswers({});
    setExerciseResults({});
  };

  const handleExerciseAnswer = (exerciseIndex: number, answer: string) => {
    setExerciseAnswers(prev => ({
      ...prev,
      [exerciseIndex]: answer
    }));
  };

  const checkExercise = (exerciseIndex: number) => {
    const exercise = selectedMaterial.exercises[exerciseIndex];
    const userAnswer = exerciseAnswers[exerciseIndex];
    const isCorrect = userAnswer?.toLowerCase() === exercise.answer.toLowerCase();
    
    setExerciseResults(prev => ({
      ...prev,
      [exerciseIndex]: isCorrect
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">
          Учебные материалы
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="texts" className="mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
              <TabsTrigger value="texts">Тексты</TabsTrigger>
              <TabsTrigger value="exercises">Упражнения</TabsTrigger>
            </TabsList>
            
            <TabsContent value="texts">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Список материалов */}
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-semibold mb-4">Выберите материал:</h3>
                  <div className="space-y-3">
                    {materials.map((material) => (
                      <button
                        key={material.id}
                        onClick={() => handleMaterialSelect(material)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                          selectedMaterial.id === material.id
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-200 hover:border-primary'
                        }`}
                      >
                        <div className="font-semibold text-primary">{material.title}</div>
                        <div className="text-sm text-gray-600">{material.subject}, {material.grade}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Содержание материала */}
                <div className="lg:col-span-2">
                  <div className="bg-gray-50 rounded-xl p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{selectedMaterial.title}</h3>
                        <p className="text-gray-600">{selectedMaterial.subject}, {selectedMaterial.grade}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => setIsDyslexicFont(!isDyslexicFont)}
                          className={`${isDyslexicFont ? 'bg-primary text-white' : ''}`}
                        >
                          <i className="fas fa-font mr-2"></i>Шрифт для дислексии
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => speak(selectedMaterial.content)}
                          disabled={isSpeaking}
                        >
                          <i className="fas fa-volume-up mr-2"></i>
                          {isSpeaking ? 'Озвучивается...' : 'Слушать'}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Оригинальный текст:</h4>
                        <div className={`p-4 bg-white rounded-lg ${isDyslexicFont ? 'font-dyslexic' : ''}`}>
                          {selectedMaterial.content}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Адаптированный текст:</h4>
                        <div className={`space-y-2 ${isDyslexicFont ? 'font-dyslexic' : ''}`}>
                          {selectedMaterial.adaptedContent.map((block, index) => {
                            const backgrounds = ["bg-blue-50", "bg-green-50", "bg-purple-50", "bg-yellow-50", "bg-pink-50", "bg-indigo-50", "bg-red-50"];
                            return (
                              <div key={index} className={`p-3 rounded-lg ${backgrounds[index % backgrounds.length]}`}>
                                {block}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button
                          onClick={() => setShowExercises(true)}
                          className="bg-secondary hover:bg-[#45A049] text-white"
                        >
                          Перейти к упражнениям
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="exercises">
              {showExercises && (
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                    Упражнения по теме: {selectedMaterial.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {selectedMaterial.exercises.map((exercise, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <div className="mb-4">
                          <span className="text-sm text-gray-500">Упражнение {index + 1}</span>
                          <h4 className="text-lg font-semibold">{exercise.question}</h4>
                        </div>
                        
                        {exercise.type === 'multiple-choice' && exercise.options && (
                          <div className="space-y-2 mb-4">
                            {exercise.options.map((option, optionIndex) => (
                              <button
                                key={optionIndex}
                                onClick={() => handleExerciseAnswer(index, option)}
                                className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                                  exerciseAnswers[index] === option
                                    ? 'border-primary bg-primary/10'
                                    : 'border-gray-200 hover:border-primary'
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                        
                        {exercise.type === 'fill-blank' && (
                          <div className="mb-4">
                            <input
                              type="text"
                              value={exerciseAnswers[index] || ''}
                              onChange={(e) => handleExerciseAnswer(index, e.target.value)}
                              className="border-2 border-gray-300 rounded-lg p-2 w-32"
                              placeholder="Ваш ответ"
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-3">
                          <Button
                            onClick={() => checkExercise(index)}
                            disabled={!exerciseAnswers[index]}
                            className="bg-primary hover:bg-primary/80"
                          >
                            Проверить
                          </Button>
                          
                          {exerciseResults[index] !== undefined && (
                            <div className={`px-3 py-1 rounded-lg ${
                              exerciseResults[index] 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {exerciseResults[index] ? '✓ Правильно!' : `✗ Правильный ответ: ${exercise.answer}`}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {!showExercises && (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">Сначала выберите и изучите материал во вкладке "Тексты"</p>
                  <Button
                    onClick={() => setShowExercises(true)}
                    variant="outline"
                  >
                    Перейти к упражнениям
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LearningMaterials;