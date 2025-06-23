/* naasa x,naasa x login tutorial,stock trading in nepal,naasa x use in nepali,nepse trading app,online stock trading nepal,naasa x guide 2025,naasa x account open,how to use naasa x,new tms broker no. 58,naasa securities app,how to use naasa securities new tms,how to login naasa x,how to log in to naasa x,58 broker new tms,best broker in nepal,naasa securities ko new tms kasari use garne,naasa x kasari paryog garne,naasa securities new tms,khulduli tech */
import { Calculator, Zap, Clock, GamepadIcon, Trophy, Target } from 'lucide-react';

const Hero = () => {
  const handleNaasaXClick = () => {
    window.open('https://x.naasasecurity.com', '_blank');
  };

  const scrollToCalculator = (calculatorId: string) => {
    const element = document.getElementById(calculatorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            When Speed Meets{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Satire
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Experience what happens when financial tools actually work fast. Unlike some websites that shall remain nameless... 
            <span className="text-gray-500 italic">(but rhyme with "Massa Securities")</span>
          </p>

          {/* nasaX Game Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white max-w-4xl mx-auto my-12 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <GamepadIcon className="h-8 w-8" />
              <h2 className="text-3xl font-bold">nasaX Trading Game</h2>
              <Trophy className="h-8 w-8" />
            </div>
            
            <p className="text-lg mb-6 opacity-90">
              Think you can beat the market? Try our satirical stock trading game where everything loads instantly, 
              calculations happen in real-time, and you won't wait 30 seconds for a simple page refresh!
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <Target className="h-6 w-6 mb-2 mx-auto" />
                <p className="font-semibold">Instant Trading</p>
                <p className="text-sm opacity-80">No loading screens</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <Zap className="h-6 w-6 mb-2 mx-auto" />
                <p className="font-semibold">Real-time Updates</p>
                <p className="text-sm opacity-80">Actually real-time</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <Trophy className="h-6 w-6 mb-2 mx-auto" />
                <p className="font-semibold">Win Prizes</p>
                <p className="text-sm opacity-80">Bragging rights included</p>
              </div>
            </div>
            
            <button 
              onClick={handleNaasaXClick}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 hover:scale-105"
            >
              🎮 Play nasaX Game & Win! 🏆
            </button>
            
            <p className="text-sm mt-4 opacity-75">
              *Warning: May cause addiction to fast-loading websites
            </p>
          </div>

        
             
            
          

          {/* Performance Indicators with Satirical Touch */}
          <div className="grid grid-cols-3 gap-6 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">Load Time</p>
              <p className="text-lg font-bold text-green-600">&lt;0.5s</p>
              <p className="text-xs text-gray-500">Not 30s+ 😏</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">Calculations</p>
              <p className="text-lg font-bold text-blue-600">Real-time</p>
              <p className="text-xs text-gray-500">Actually real 🎯</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">Response</p>
              <p className="text-lg font-bold text-purple-600">Instant</p>
              <p className="text-xs text-gray-500">No spinning wheels 🎪</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-200 max-w-3xl mx-auto">
            <p className="text-yellow-800 text-sm">
              <strong>Disclaimer:</strong> This is a performance demonstration. Any resemblance to slow, unresponsive financial websites is purely coincidental. 
              We're just here to show what "fast" actually means in 2025. 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;