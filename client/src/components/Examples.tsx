import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useSpeech } from '@/hooks/useSpeech';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExampleText {
  title: string;
  originalText: string;
  adaptedBlocks: string[];
  subject: string;
  grade: string;
}

const exampleTexts: ExampleText[] = [
  {
    title: "Фотосинтез",
    subject: "Биология",
    grade: "6 класс",
    originalText: "Фотосинтез — процесс, при котором растения превращают солнечный свет в энергию. Этот процесс происходит в хлоропластах и включает две стадии: световую и темновую.",
    adaptedBlocks: [
      "Фотосинтез — процесс, при котором растения",
      "превращают солнечный свет в энергию.",
      "Этот процесс происходит в хлоропластах и включает две стадии: световую и темновую."
    ]
  },
  {
    title: "Умножение дробей",
    subject: "Математика",
    grade: "5 класс",
    originalText: "Чтобы умножить дробь на дробь, нужно умножить числитель на числитель, а знаменатель на знаменатель. Например, 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2.",
    adaptedBlocks: [
      "Чтобы умножить дробь на дробь,",
      "нужно умножить числитель на числитель,",
      "а знаменатель на знаменатель.",
      "Например, 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2."
    ]
  },
  {
    title: "Планеты Солнечной системы",
    subject: "Астрономия",
    grade: "4 класс",
    originalText: "В нашей Солнечной системе восемь планет: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран и Нептун. Они вращаются вокруг Солнца по своим орбитам. Ближе всего к Солнцу находится Меркурий.",
    adaptedBlocks: [
      "В нашей Солнечной системе восемь планет:",
      "Меркурий, Венера, Земля, Марс,",
      "Юпитер, Сатурн, Уран и Нептун.",
      "Они вращаются вокруг Солнца по своим орбитам.",
      "Ближе всего к Солнцу находится Меркурий."
    ]
  }
];

const Examples = () => {
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const { speak, isSpeaking } = useSpeech();

  const selectedExample = exampleTexts[selectedExampleIndex];
  
  const handleToggleFont = () => {
    setIsDyslexicFont(!isDyslexicFont);
  };
  
  const handleSpeak = () => {
    speak(selectedExample.originalText);
  };
  
  return (
    <section id="examples" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">Попробуйте сами!</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-xl font-semibold font-lexend text-primary mb-2">Примеры из учебников</h3>
                <p className="text-sm text-gray-600">Выберите текст для адаптации</p>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  onClick={handleToggleFont}
                  className={`flex items-center border border-primary rounded-lg px-4 py-2 transition-colors duration-300 ${
                    isDyslexicFont ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  <i className="fas fa-font mr-2"></i> Шрифт для дислексии
                </Button>
                <Button
                  variant="outline"
                  onClick={handleSpeak}
                  disabled={isSpeaking}
                  className={`flex items-center border border-primary rounded-lg px-4 py-2 transition-colors duration-300 ${
                    isSpeaking ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  <i className={`fas ${isSpeaking ? 'fa-volume-high' : 'fa-volume-up'} mr-2`}></i> {isSpeaking ? 'Озвучивается...' : 'Слушать'}
                </Button>
              </div>
            </div>
            
            <Tabs 
              defaultValue="0" 
              onValueChange={(value) => setSelectedExampleIndex(parseInt(value))}
              className="mb-6"
            >
              <TabsList className="grid grid-cols-3">
                {exampleTexts.map((example, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    <div className="text-center">
                      <div className="font-semibold">{example.title}</div>
                      <div className="text-xs text-gray-500">{example.subject}, {example.grade}</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">Оригинальный текст:</h4>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {selectedExample.subject}, {selectedExample.grade}
                </span>
              </div>
              <div 
                className={`p-4 bg-gray-50 rounded-lg text-gray-800 ${isDyslexicFont ? 'font-dyslexic' : ''}`}
              >
                {selectedExample.originalText}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Адаптированный текст:</h4>
              <div className={`rounded-lg overflow-hidden ${isDyslexicFont ? 'font-dyslexic' : ''}`}>
                {selectedExample.adaptedBlocks.map((block, index) => {
                  const backgrounds = ["bg-[#E6F3FF]", "bg-[#E6FFED]", "bg-[#F2E6FF]", "bg-[#FFFDE6]", "bg-[#FFE6F3]"];
                  return (
                    <div key={index} className={`p-4 ${backgrounds[index % backgrounds.length]}`}>
                      {block}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
