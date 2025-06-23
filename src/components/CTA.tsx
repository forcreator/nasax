import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 via-blue-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-8">
            <TrendingUp className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Ready to Start Investing?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Naasa has stepped up,<br />
            have you?
          </h2>
          
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of investors who trust NAASA Securities for their trading and investment needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-2">
              Sign Up Now
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="border border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-200 backdrop-blur-sm">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">50k+</p>
              <p className="text-white opacity-80">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">Rs.10B+</p>
              <p className="text-white opacity-80">Assets Under Management</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">99.9%</p>
              <p className="text-white opacity-80">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;