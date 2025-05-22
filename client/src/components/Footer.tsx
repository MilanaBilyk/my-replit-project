import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-3xl font-bold font-lexend mb-4">InclusiveLearn</h2>
            <p className="text-teal-100">Учимся без границ!</p>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-3">
              <li><a href="#about-us" className="text-teal-100 hover:text-white transition-colors duration-300">О нас</a></li>
              <li><a href="#exercises" className="text-teal-100 hover:text-white transition-colors duration-300">Упражнения</a></li>
              <li>
                <div className="mt-3 mb-2">
                  <div className="bg-secondary text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#45A049] transition-colors duration-300 flex items-center">
                    <i className="fas fa-shield-alt mr-2"></i>
                    <PrivacyPolicy asButton={true} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <div className="mb-4">
              <p className="text-teal-100 mb-2">
                <i className="fas fa-envelope mr-2"></i> milana.com04@mail.ru
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="py-2 px-4 rounded-lg bg-white text-gray-800" 
                aria-label="Email для подписки"
              />
              <Button 
                className="bg-secondary hover:bg-[#45A049] text-white font-bold py-2 px-4 rounded-lg shadow-md btn-transition"
              >
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-teal-700 mt-8 pt-8 text-center text-teal-100">
          <p>&copy; {new Date().getFullYear()} InclusiveLearn. Основатель: Милана Билык. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
