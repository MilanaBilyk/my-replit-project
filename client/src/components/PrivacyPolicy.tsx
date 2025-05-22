import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PrivacyPolicyProps {
  asButton?: boolean;
}

const PrivacyPolicy = ({ asButton = false }: PrivacyPolicyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const triggerElement = asButton ? (
    <span 
      className="cursor-pointer text-white font-bold"
      onClick={handleOpenModal}
    >
      Политика конфиденциальности
    </span>
  ) : (
    <Button 
      variant="link" 
      className="text-primary hover:text-secondary transition-colors duration-300"
      onClick={handleOpenModal}
    >
      Политика конфиденциальности
    </Button>
  );

  return (
    <>
      {triggerElement}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-lexend font-semibold text-primary">Политика конфиденциальности</h2>
                <Button 
                  variant="ghost" 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-times text-xl"></i>
                </Button>
              </div>
              
              <div className="prose prose-blue max-w-none">
                <p>Последнее обновление: 22 мая 2023 года</p>
                
                <h3>1. Введение</h3>
                <p>
                  Данная Политика конфиденциальности объясняет, как InclusiveLearn ("мы", "нас" или "наш") 
                  собирает, использует и раскрывает вашу информацию при использовании нашей онлайн-платформы для 
                  адаптации учебных материалов для детей с дислексией и дисграфией (далее "Сервис").
                </p>
                
                <h3>2. Какую информацию мы собираем</h3>
                <p>
                  <strong>Личная информация</strong>: Мы можем запрашивать определенную информацию, такую как ваше имя, 
                  электронная почта, возраст ребенка и информацию о его образовательных потребностях, чтобы предоставить 
                  вам персонализированный опыт.
                </p>
                <p>
                  <strong>Данные об использовании</strong>: Мы автоматически собираем информацию о том, как вы взаимодействуете 
                  с нашим Сервисом, включая страницы, которые вы посещаете, время, проведенное на платформе, 
                  и учебные материалы, с которыми вы взаимодействуете.
                </p>
                
                <h3>3. Как мы используем вашу информацию</h3>
                <p>Мы используем собранную информацию для следующих целей:</p>
                <ul>
                  <li>Предоставление и улучшение нашего Сервиса</li>
                  <li>Персонализация обучающего контента для конкретных потребностей</li>
                  <li>Отслеживание прогресса обучения</li>
                  <li>Обновление вас о новых функциях или образовательных ресурсах</li>
                  <li>Обеспечение технической поддержки</li>
                </ul>
                
                <h3>4. Защита данных детей</h3>
                <p>
                  Наш Сервис предназначен для использования детьми под руководством родителей или опекунов. 
                  Мы сознательно не собираем личную информацию непосредственно от детей младше 13 лет без 
                  согласия родителей. Если вам стало известно, что ваш ребенок предоставил нам личную информацию 
                  без вашего согласия, пожалуйста, свяжитесь с нами по адресу milana.com04@mail.ru.
                </p>
                
                <h3>5. Безопасность данных</h3>
                <p>
                  Безопасность вашей информации важна для нас. Мы внедряем разумные меры безопасности для защиты 
                  ваших личных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>
                
                <h3>6. Изменения в Политике конфиденциальности</h3>
                <p>
                  Мы можем обновлять нашу Политику конфиденциальности время от времени. Мы будем уведомлять вас 
                  о любых изменениях, публикуя новую Политику конфиденциальности на этой странице и обновляя 
                  дату "последнего обновления" вверху.
                </p>
                
                <h3>7. Связь с нами</h3>
                <p>
                  Если у вас есть вопросы или предложения относительно нашей Политики конфиденциальности, 
                  пожалуйста, свяжитесь с нами по адресу: milana.com04@mail.ru
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-6 rounded-lg shadow-md btn-transition"
                  onClick={() => setIsOpen(false)}
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicy;