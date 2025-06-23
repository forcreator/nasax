/* naasa x,naasa x login tutorial,stock trading in nepal,naasa x use in nepali,nepse trading app,online stock trading nepal,naasa x guide 2025,naasa x account open,how to use naasa x,new tms broker no. 58,naasa securities app,how to use naasa securities new tms,how to login naasa x,how to log in to naasa x,58 broker new tms,best broker in nepal,naasa securities ko new tms kasari use garne,naasa x kasari paryog garne,naasa securities new tms,khulduli tech */
import React from 'react';
import EMICalculator from './calculators/EMICalculator';
import SIPCalculator from './calculators/SIPCalculator';
import StockTaxCalculator from './calculators/StockTaxCalculator';

interface CalculatorsProps {
  activeCalculator: string;
  setActiveCalculator: (id: string) => void;
}

const Calculators: React.FC<CalculatorsProps> = ({ activeCalculator, setActiveCalculator }) => {
  const calculators = [
    { id: 'emi', name: 'EMI Calculator', description: 'Calculate your loan EMI', anchor: 'emi-calculator' },
    { id: 'sip', name: 'SIP Calculator', description: 'Plan your systematic investments', anchor: 'sip-calculator' },
    { id: 'tax', name: 'Tax Calculator', description: 'Calculate capital gains tax', anchor: 'tax-calculator' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lightning-Fast Financial Calculators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience what happens when financial tools actually work at the speed of thought
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            (No 30-second loading screens, we promise)
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {calculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setActiveCalculator(calc.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeCalculator === calc.id
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg transform -translate-y-0.5'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="text-center">
                <p className="font-semibold">{calc.name}</p>
                <p className="text-sm opacity-80">{calc.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <div className="max-w-6xl mx-auto">
          <div id="emi-calculator" className={activeCalculator === 'emi' ? 'block' : 'hidden'}>
            <EMICalculator />
          </div>
          <div id="sip-calculator" className={activeCalculator === 'sip' ? 'block' : 'hidden'}>
            <SIPCalculator />
          </div>
          <div id="tax-calculator" className={activeCalculator === 'tax' ? 'block' : 'hidden'}>
            <StockTaxCalculator />
          </div>
        </div>

        {/* Performance Note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-6 py-3 rounded-full border border-green-200">
            <span className="text-green-600 font-medium">⚡ All calculations happen instantly</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            No loading spinners, no timeouts, no "please wait" messages
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculators;