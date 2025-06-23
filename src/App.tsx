import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculators from './components/Calculators';
import Footer from './components/Footer';

function App() {
  const [activeCalculator, setActiveCalculator] = useState('emi');
  return (
    <div className="min-h-screen bg-white">
      <Header setActiveCalculator={setActiveCalculator} />
      <Hero />
      <Calculators activeCalculator={activeCalculator} setActiveCalculator={setActiveCalculator} />
      <Footer />
    </div>
  );
}

export default App;