import { useState } from 'react';
import { Link } from 'wouter';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-6 shadow-sm z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold font-lexend text-primary">InclusiveLearn</h1>
        </div>
        
        <nav className={`md:flex md:space-x-8 ${mobileMenuOpen ? 'flex flex-col absolute top-16 right-0 bg-white p-4 shadow-md rounded-lg z-50' : 'hidden'}`}>
          <a 
            href="#how-it-works" 
            className="text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Как это работает
          </a>
          <a 
            href="#examples" 
            className="text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Примеры
          </a>
          <a 
            href="#exercises" 
            className="text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Задания
          </a>
          <a 
            href="#about" 
            className="text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            О проекте
          </a>
          <a 
            href="#about-us" 
            className="text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            О нас
          </a>
        </nav>
        
        <button 
          className="md:hidden text-primary focus:outline-none" 
          aria-label="Меню"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
