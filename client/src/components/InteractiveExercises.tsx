import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ExerciseResult = {
  message: string;
  success: boolean;
  visible: boolean;
};

const InteractiveExercises = () => {
  // Missing letter exercises state
  const missingLetterExercises = [
    { word: "К_РОВА", answer: "о" },
    { word: "ЯБЛ_КО", answer: "о" },
    { word: "_КНО", answer: "о" },
    { word: "ЛЕ_", answer: "с" },
    { word: "ЗВ_ЗДА", answer: "е" },
    { word: "Р_КА", answer: "е" },
    { word: "КАР_НДАШ", answer: "а" },
    { word: "_КОЛА", answer: "ш" },
    { word: "ТЕЛ_ФОН", answer: "е" },
    { word: "Х_ЛЕБ", answer: "л" },
    { word: "МЯ_", answer: "ч" },
    { word: "КРУ_КА", answer: "ж" },
    { word: "_ТОЛ", answer: "с" },
    { word: "Г_РА", answer: "о" },
    { word: "ЗИМ_", answer: "а" },
    { word: "ПТ_ЦА", answer: "и" },
    { word: "ОБ_ЗЬяНА", answer: "е" },
    { word: "БУК_А", answer: "в" },
    { word: "ВИНОГРАД_", answer: "" },
    { word: "СОЛ_ЦЕ", answer: "н" },
    { word: "ЛИС_ЦА", answer: "и" },
    { word: "Д_М", answer: "о" },
    { word: "В_ДА", answer: "о" }
  ];
  
  const [currentMissingLetterIndex, setCurrentMissingLetterIndex] = useState(0);
  const [letterInput, setLetterInput] = useState('');
  const [missingLetterResult, setMissingLetterResult] = useState<ExerciseResult>({
    message: '',
    success: false,
    visible: false
  });

  // Multiple choice exercises state
  const multipleChoiceExercises = [
    { 
      question: "Какая планета третья от Солнца?", 
      options: ['Марс', 'Земля', 'Венера'], 
      answer: "Земля" 
    },
    { 
      question: "Сколько ног у паука?", 
      options: ['6', '8', '10'], 
      answer: "8" 
    },
    { 
      question: "Какой месяц идёт после марта?", 
      options: ['Май', 'Февраль', 'Апрель'], 
      answer: "Апрель" 
    },
    { 
      question: "Сколько дней в неделе?", 
      options: ['5', '7', '10'], 
      answer: "7" 
    },
    { 
      question: "Какое животное самое большое на Земле?", 
      options: ['Слон', 'Жираф', 'Синий кит'], 
      answer: "Синий кит" 
    },
    { 
      question: "Сколько сторон у треугольника?", 
      options: ['3', '4', '5'], 
      answer: "3" 
    },
    { 
      question: "Какое время года идёт после весны?", 
      options: ['Зима', 'Лето', 'Осень'], 
      answer: "Лето" 
    },
    { 
      question: "Сколько цветов в радуге?", 
      options: ['5', '7', '9'], 
      answer: "7" 
    },
    { 
      question: "Что делает фотосинтез?", 
      options: ['Рыбы', 'Растения', 'Грибы'], 
      answer: "Растения" 
    },
    { 
      question: "Какой орган отвечает за дыхание?", 
      options: ['Сердце', 'Лёгкие', 'Желудок'], 
      answer: "Лёгкие" 
    },
    { 
      question: "Столица России?", 
      options: ['Москва', 'Санкт-Петербург', 'Казань'], 
      answer: "Москва" 
    },
    { 
      question: "Что является источником света?", 
      options: ['Луна', 'Солнце', 'Земля'], 
      answer: "Солнце" 
    },
    { 
      question: "Сколько букв в русском алфавите?", 
      options: ['26', '33', '40'], 
      answer: "33" 
    },
    { 
      question: "2 + 2 = ?", 
      options: ['3', '4', '5'], 
      answer: "4" 
    },
    { 
      question: "10 - 5 = ?", 
      options: ['3', '5', '7'], 
      answer: "5" 
    },
    { 
      question: "3 × 4 = ?", 
      options: ['8', '12', '15'], 
      answer: "12" 
    },
    { 
      question: "Кто написал сказку 'Колобок'?", 
      options: ['А.С. Пушкин', 'Народная сказка', 'Л.Н. Толстой'], 
      answer: "Народная сказка" 
    },
    { 
      question: "Какое животное не умеет плавать?", 
      options: ['Бегемот', 'Слон', 'Жираф'], 
      answer: "Жираф" 
    },
    { 
      question: "Самый большой океан?", 
      options: ['Атлантический', 'Тихий', 'Индийский'], 
      answer: "Тихий" 
    },
    { 
      question: "Какой металл притягивает магнит?", 
      options: ['Алюминий', 'Медь', 'Железо'], 
      answer: "Железо" 
    },
    { 
      question: "Что мы используем для измерения температуры?", 
      options: ['Весы', 'Термометр', 'Линейку'], 
      answer: "Термометр" 
    },
    { 
      question: "Кто такая Белоснежка?", 
      options: ['Принцесса', 'Фея', 'Колдунья'], 
      answer: "Принцесса" 
    },
    { 
      question: "Сколько часов в сутках?", 
      options: ['12', '24', '36'], 
      answer: "24" 
    }
  ];
  
  const [currentMultipleChoiceIndex, setCurrentMultipleChoiceIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [multipleChoiceResult, setMultipleChoiceResult] = useState<ExerciseResult>({
    message: '',
    success: false,
    visible: false
  });

  // Scrambled word exercises state
  const scrambledWordExercises = [
    { scrambled: "ЛЯТСО", answer: "СТОЛ" },
    { scrambled: "КОЛАШ", answer: "ШКОЛА" },
    { scrambled: "ТАРКА", answer: "КАРТА" },
    { scrambled: "ГНИКА", answer: "КНИГА" },
    { scrambled: "АШМАНИ", answer: "МАШИНА" },
    { scrambled: "КОШАК", answer: "КОШКА" },
    { scrambled: "БАЗАСО", answer: "СОБАКА" },
    { scrambled: "ЛУППА", answer: "ПАЛУБА" },
    { scrambled: "АМРКА", answer: "РАМКА" },
    { scrambled: "ДРАВЕТ", answer: "ТЕТРАДЬ" },
    { scrambled: "ЛОЯКБ", answer: "ЯБЛОКО" },
    { scrambled: "НАДАВИН", answer: "ВАНАДИЙ" },
    { scrambled: "ПЬЮТОМКЕР", answer: "КОМПЬЮТЕР" },
    { scrambled: "ЖЕВЕЛОТ", answer: "ТЕЛЕНОК" },
    { scrambled: "АТАРПТ", answer: "ПАРТА" },
    { scrambled: "ЛОВЕРЫЦ", answer: "РЫБОЛОВ" },
    { scrambled: "ШАКАР", answer: "КРАША" },
    { scrambled: "ЧАТПО", answer: "ПОЧТА" },
    { scrambled: "ФЕНЛЕТО", answer: "ТЕЛЕФОН" },
    { scrambled: "РМОЕО", answer: "МОРЕ" },
    { scrambled: "МАДО", answer: "ДОМА" },
    { scrambled: "ДАРГО", answer: "ГОРОД" },
    { scrambled: "СЕЛЬ", answer: "ЛЕС" }
  ];
  
  const [currentScrambledWordIndex, setCurrentScrambledWordIndex] = useState(0);
  const [scrambledWordInput, setScrambledWordInput] = useState('');
  const [scrambledWordResult, setScrambledWordResult] = useState<ExerciseResult>({
    message: '',
    success: false,
    visible: false
  });

  // Exercise 1 handlers
  const handleLetterCheck = () => {
    const currentExercise = missingLetterExercises[currentMissingLetterIndex];
    
    if (letterInput.toLowerCase() === currentExercise.answer) {
      setMissingLetterResult({
        message: 'Правильно!',
        success: true,
        visible: true
      });
    } else {
      setMissingLetterResult({
        message: 'Попробуйте еще раз!',
        success: false,
        visible: true
      });
    }
  };

  const handleNextMissingLetter = () => {
    setMissingLetterResult({
      message: '',
      success: false,
      visible: false
    });
    setLetterInput('');
    setCurrentMissingLetterIndex((prev) => (prev + 1) % missingLetterExercises.length);
  };

  // Exercise 2 handlers
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    const currentExercise = multipleChoiceExercises[currentMultipleChoiceIndex];
    
    if (option === currentExercise.answer) {
      setMultipleChoiceResult({
        message: 'Правильно!',
        success: true,
        visible: true
      });
    } else {
      setMultipleChoiceResult({
        message: 'Неверно, попробуйте еще раз!',
        success: false,
        visible: true
      });
    }
  };

  const handleNextMultipleChoice = () => {
    setMultipleChoiceResult({
      message: '',
      success: false,
      visible: false
    });
    setSelectedOption(null);
    setCurrentMultipleChoiceIndex((prev) => (prev + 1) % multipleChoiceExercises.length);
  };

  // Exercise 3 handlers
  const handleScrambledWordCheck = () => {
    const currentExercise = scrambledWordExercises[currentScrambledWordIndex];
    
    if (scrambledWordInput.toUpperCase() === currentExercise.answer) {
      setScrambledWordResult({
        message: 'Правильно!',
        success: true,
        visible: true
      });
    } else {
      setScrambledWordResult({
        message: 'Попробуйте еще раз!',
        success: false,
        visible: true
      });
    }
  };

  const handleNextScrambledWord = () => {
    setScrambledWordResult({
      message: '',
      success: false,
      visible: false
    });
    setScrambledWordInput('');
    setCurrentScrambledWordIndex((prev) => (prev + 1) % scrambledWordExercises.length);
  };

  return (
    <section id="exercises" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">Практикуйтесь!</h2>
        
        <Tabs defaultValue="missing-letter" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="missing-letter">Пропущенная буква</TabsTrigger>
            <TabsTrigger value="multiple-choice">Выбери ответ</TabsTrigger>
            <TabsTrigger value="scrambled-word">Собери слово</TabsTrigger>
          </TabsList>
          
          <TabsContent value="missing-letter">
            <div className="bg-[#FFEBF5] border border-primary/20 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold font-lexend text-primary mb-6">Собери слово</h3>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-center mb-4">{missingLetterExercises[currentMissingLetterIndex].word}</p>
                <p className="text-sm text-gray-600 text-center mb-4">Вставьте пропущенную букву</p>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Input 
                  type="text" 
                  maxLength={1} 
                  value={letterInput}
                  onChange={(e) => setLetterInput(e.target.value)}
                  className="w-16 h-16 border-2 border-primary rounded-lg text-center text-2xl" 
                  placeholder="?"
                />
                <Button 
                  onClick={handleLetterCheck}
                  className="bg-secondary hover:bg-[#45A049] text-white font-bold py-3 px-6 rounded-lg shadow-md btn-transition"
                >
                  Проверить
                </Button>
              </div>
              
              {missingLetterResult.visible && (
                <div className="mb-4">
                  <div className={`text-center p-2 rounded-lg ${missingLetterResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {missingLetterResult.message}
                  </div>
                  
                  {missingLetterResult.success && (
                    <div className="mt-4 text-center">
                      <Button 
                        onClick={handleNextMissingLetter}
                        className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-lg shadow-md btn-transition"
                      >
                        Следующее слово
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="multiple-choice">
            <div className="bg-[#E6FAFF] border border-primary/20 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold font-lexend text-primary mb-6">Выбери правильный ответ</h3>
              
              <div className="mb-6">
                <p className="text-xl font-medium text-center mb-4">
                  {multipleChoiceExercises[currentMultipleChoiceIndex].question}
                </p>
              </div>
              
              <div className="flex flex-col space-y-3 mb-4">
                {multipleChoiceExercises[currentMultipleChoiceIndex].options.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    onClick={() => handleOptionSelect(option)}
                    className={`border-2 border-primary py-3 px-6 rounded-lg transition-colors duration-300 ${
                      selectedOption === option
                        ? selectedOption === multipleChoiceExercises[currentMultipleChoiceIndex].answer
                          ? 'bg-primary text-white'
                          : 'bg-red-500 text-white'
                        : 'text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              
              {multipleChoiceResult.visible && (
                <div>
                  <div className={`text-center p-2 rounded-lg ${multipleChoiceResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {multipleChoiceResult.message}
                  </div>
                  
                  {multipleChoiceResult.success && (
                    <div className="mt-4 text-center">
                      <Button 
                        onClick={handleNextMultipleChoice}
                        className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-lg shadow-md btn-transition"
                      >
                        Следующий вопрос
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="scrambled-word">
            <div className="bg-[#F2E6FF] border border-primary/20 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold font-lexend text-primary mb-6">Собери слово из букв</h3>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-center mb-4">
                  {scrambledWordExercises[currentScrambledWordIndex].scrambled.split('').join(' ')}
                </p>
                <p className="text-sm text-gray-600 text-center mb-4">Составьте правильное слово из перемешанных букв</p>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Input 
                  type="text" 
                  value={scrambledWordInput}
                  onChange={(e) => setScrambledWordInput(e.target.value)}
                  className="flex-1 border-2 border-primary rounded-lg text-center text-2xl py-2" 
                  placeholder="Введите слово"
                />
                <Button 
                  onClick={handleScrambledWordCheck}
                  className="bg-secondary hover:bg-[#45A049] text-white font-bold py-3 px-6 rounded-lg shadow-md btn-transition"
                >
                  Проверить
                </Button>
              </div>
              
              {scrambledWordResult.visible && (
                <div>
                  <div className={`text-center p-2 rounded-lg ${scrambledWordResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {scrambledWordResult.message}
                  </div>
                  
                  {scrambledWordResult.success && (
                    <div className="mt-4 text-center">
                      <Button 
                        onClick={handleNextScrambledWord}
                        className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-lg shadow-md btn-transition"
                      >
                        Следующее слово
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveExercises;
