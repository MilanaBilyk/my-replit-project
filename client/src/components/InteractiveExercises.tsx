import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InteractiveExercises = () => {
  // Exercise 1 state
  const [letterInput, setLetterInput] = useState('');
  const [exercise1Result, setExercise1Result] = useState<{
    message: string;
    success: boolean;
    visible: boolean;
  }>({
    message: '',
    success: false,
    visible: false
  });

  // Exercise 2 state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [exercise2Result, setExercise2Result] = useState<{
    message: string;
    success: boolean;
    visible: boolean;
  }>({
    message: '',
    success: false,
    visible: false
  });

  const handleLetterCheck = () => {
    if (letterInput.toLowerCase() === 'о') {
      setExercise1Result({
        message: 'Правильно!',
        success: true,
        visible: true
      });
    } else {
      setExercise1Result({
        message: 'Попробуйте еще раз!',
        success: false,
        visible: true
      });
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    
    if (option === 'Земля') {
      setExercise2Result({
        message: 'Правильно!',
        success: true,
        visible: true
      });
    } else {
      setExercise2Result({
        message: 'Неверно, попробуйте еще раз!',
        success: false,
        visible: true
      });
    }
  };

  return (
    <section id="exercises" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-lexend text-primary text-center mb-12">Практикуйтесь!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Exercise 1 */}
          <div className="bg-gray-50 border border-[#E6F3FF] rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold font-lexend text-primary mb-6">Собери слово</h3>
            
            <div className="mb-6">
              <p className="text-2xl font-bold text-center mb-4">К_РОВА</p>
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
            
            {exercise1Result.visible && (
              <div className={`text-center p-2 rounded-lg ${exercise1Result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {exercise1Result.message}
              </div>
            )}
          </div>
          
          {/* Exercise 2 */}
          <div className="bg-gray-50 border border-[#E6F3FF] rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold font-lexend text-primary mb-6">Выбери правильный ответ</h3>
            
            <div className="mb-6">
              <p className="text-xl font-medium text-center mb-4">Какая планета третья от Солнца?</p>
            </div>
            
            <div className="flex flex-col space-y-3">
              {['Марс', 'Земля', 'Венера'].map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  onClick={() => handleOptionSelect(option)}
                  className={`border-2 border-primary py-3 px-6 rounded-lg transition-colors duration-300 ${
                    selectedOption === option
                      ? selectedOption === 'Земля'
                        ? 'bg-primary text-white'
                        : 'bg-red-500 text-white'
                      : 'text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>
            
            {exercise2Result.visible && (
              <div className={`mt-4 text-center p-2 rounded-lg ${exercise2Result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {exercise2Result.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveExercises;
