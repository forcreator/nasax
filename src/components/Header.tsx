/* naasa x,naasa x login tutorial,stock trading in nepal,naasa x use in nepali,nepse trading app,online stock trading nepal,naasa x guide 2025,naasa x account open,how to use naasa x,new tms broker no. 58,naasa securities app,how to use naasa securities new tms,how to login naasa x,how to log in to naasa x,58 broker new tms,best broker in nepal,naasa securities ko new tms kasari use garne,naasa x kasari paryog garne,naasa securities new tms,khulduli tech */
import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

interface HeaderProps {
  setActiveCalculator: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveCalculator }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNasaXClick = () => {
    window.open('https://x.naasasecurity.com', '_blank');
  };

  const handleCalculatorClick = (calculatorId: string) => {
    setActiveCalculator(calculatorId);
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(calculatorId + '-calculator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">NAASA</h1>
              <p className="text-xs text-gray-500 -mt-1">DEMO</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={handleNasaXClick}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              NasaX
            </button>
            <button 
              onClick={() => handleCalculatorClick('emi')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              EMI Calculator
            </button>
            <button 
              onClick={() => handleCalculatorClick('sip')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              SIP Calculator
            </button>
            <button 
              onClick={() => handleCalculatorClick('tax')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Tax Calculator
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <button 
                onClick={handleNasaXClick}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                nasaX
              </button>
              <button 
                onClick={() => handleCalculatorClick('emi')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                EMI Calculator
              </button>
              <button 
                onClick={() => handleCalculatorClick('sip')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                SIP Calculator
              </button>
              <button 
                onClick={() => handleCalculatorClick('tax')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Tax Calculator
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;