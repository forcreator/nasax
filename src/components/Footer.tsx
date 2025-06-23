/* naasa x,naasa x login tutorial,stock trading in nepal,naasa x use in nepali,nepse trading app,online stock trading nepal,naasa x guide 2025,naasa x account open,how to use naasa x,new tms broker no. 58,naasa securities app,how to use naasa securities new tms,how to login naasa x,how to log in to naasa x,58 broker new tms,best broker in nepal,naasa securities ko new tms kasari use garne,naasa x kasari paryog garne,naasa securities new tms,khulduli tech */
import React from 'react';
import { TrendingUp, Github, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">NAASA</h3>
                <p className="text-sm text-gray-400 -mt-1">DEMO</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Fast and responsive financial calculation tools built for performance demonstration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Code className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Zap className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Financial Tools</h4>
            <ul className="space-y-3">
              <li><a href="#emi-calculator" className="text-gray-300 hover:text-emerald-400 transition-colors">EMI Calculator</a></li>
              <li><a href="#sip-calculator" className="text-gray-300 hover:text-emerald-400 transition-colors">SIP Calculator</a></li>
              <li><a href="#tax-calculator" className="text-gray-300 hover:text-emerald-400 transition-colors">Tax Calculator</a></li>
              <li><a href="https://x.naasasecurity.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">nasaX Platform</a></li>
            </ul>
          </div>

          {/* Performance Stats */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Performance</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Load Time</p>
                  <p className="text-emerald-400 font-semibold">&lt; 0.5 seconds</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Calculations</p>
                  <p className="text-blue-400 font-semibold">Real-time</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Response Time</p>
                  <p className="text-purple-400 font-semibold">Instant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NAASA Demo. Performance demonstration website.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://x.naasasecurity.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                nasaX Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;