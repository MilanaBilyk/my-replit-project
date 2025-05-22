import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useSpeech } from '@/hooks/useSpeech';

const Examples = () => {
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const { speak, isSpeaking } = useSpeech();
  
  const originalText = "Фотосинтез — процесс, при котором растения превращают солнечный свет в энергию. Этот процесс происходит в хлоропластах и включает две стадии: световую и темновую.";
  
  const handleToggleFont = () => {
    setIsDyslexicFont(!isDyslexicFont);
  };
  
  const handleSpeak = () => {
    speak(originalText);
  };
  
  return (
    <section id="examples" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">Попробуйте сами!</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h3 className="text-xl font-semibold font-lexend text-primary mb-2 md:mb-0">Пример адаптированного текста</h3>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
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
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2">Оригинальный текст:</h4>
              <div 
                className={`p-4 bg-gray-50 rounded-lg text-gray-800 ${isDyslexicFont ? 'font-dyslexic' : ''}`}
              >
                {originalText}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Адаптированный текст:</h4>
              <div className={`rounded-lg overflow-hidden ${isDyslexicFont ? 'font-dyslexic' : ''}`}>
                <div className="p-4 bg-[#E6F3FF]">
                  Фотосинтез — процесс, при котором растения
                </div>
                <div className="p-4 bg-[#FFE6F3]">
                  превращают солнечный свет в энергию.
                </div>
                <div className="p-4 bg-[#E6FFED]">
                  Этот процесс происходит в хлоропластах и включает две стадии: световую и темновую.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
