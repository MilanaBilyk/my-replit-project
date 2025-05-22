import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-3xl font-bold font-lexend mb-4">InclusiveLearn</h2>
            <p className="text-blue-200">Учимся без границ!</p>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">О нас</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Контакты</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Политика конфиденциальности</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300" aria-label="Telegram">
                <i className="fab fa-telegram fa-2x"></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300" aria-label="ВКонтакте">
                <i className="fab fa-vk fa-2x"></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300" aria-label="YouTube">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Подписка</h3>
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
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} InclusiveLearn. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
