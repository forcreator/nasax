import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'One Time',
      price: '50',
      period: 'One Time',
      description: 'Demat Account Opening Fees',
      features: [
        'Online Account Opening',
        'Digital KYC Process',
        'Free Trading Account',
        'Mobile App Access',
        'Basic Support'
      ],
      color: 'emerald',
      popular: false
    },
    {
      name: 'Per Month',
      price: '100',
      period: 'Per Month',
      description: 'Annual Account Maintenance Fees',
      features: [
        'All One Time Features',
        'Advanced Trading Tools',
        'Research Reports',
        'Priority Support',
        'Portfolio Analysis'
      ],
      color: 'blue',
      popular: true
    },
    {
      name: 'Per Transaction',
      price: '25',
      period: 'Per Transaction',
      description: 'On Market Transactions of Rs.',
      features: [
        'Competitive Brokerage',
        'No Hidden Charges',
        'Instant Settlement',
        'Real-time Updates',
        'Tax Reports'
      ],
      color: 'purple',
      popular: false
    },
    {
      name: 'Per Month',
      price: '50',
      period: 'Per Month',
      description: 'Demat Account Online (Micro Broker)',
      features: [
        'Low-cost Trading',
        'Basic Features',
        'Mobile Trading',
        'Email Support',
        'Monthly Statements'
      ],
      color: 'cyan',
      popular: false
    }
  ];

  const getColorClasses = (color: string, isPopular: boolean) => {
    const colors = {
      emerald: {
        bg: isPopular ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' : 'bg-emerald-50',
        text: isPopular ? 'text-white' : 'text-emerald-600',
        border: 'border-emerald-200',
        button: 'bg-emerald-600 hover:bg-emerald-700 text-white'
      },
      blue: {
        bg: isPopular ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-blue-50',
        text: isPopular ? 'text-white' : 'text-blue-600',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700 text-white'
      },
      purple: {
        bg: isPopular ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-purple-50',
        text: isPopular ? 'text-white' : 'text-purple-600',
        border: 'border-purple-200',
        button: 'bg-purple-600 hover:purple-700 text-white'
      },
      cyan: {
        bg: isPopular ? 'bg-gradient-to-br from-cyan-500 to-cyan-600' : 'bg-cyan-50',
        text: isPopular ? 'text-white' : 'text-cyan-600',
        border: 'border-cyan-200',
        button: 'bg-cyan-600 hover:bg-cyan-700 text-white'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Affordable Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);
            return (
              <div
                key={index}
                className={`relative ${
                  plan.popular 
                    ? 'transform scale-105 z-10' 
                    : ''
                } transition-all duration-200 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`${
                  plan.popular 
                    ? colorClasses.bg + ' text-white' 
                    : 'bg-white'
                } rounded-2xl shadow-xl p-8 border border-gray-100 h-full`}>
                  
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-sm font-medium opacity-80">Rs.</span>
                      <span className="text-5xl font-bold mx-1">{plan.price}</span>
                    </div>
                    <p className={`text-sm font-medium ${plan.popular ? 'text-white opacity-80' : 'text-gray-600'}`}>
                      {plan.period}
                    </p>
                    <p className={`text-sm mt-2 ${plan.popular ? 'text-white opacity-90' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full ${
                          plan.popular ? 'bg-white bg-opacity-20' : colorClasses.bg
                        }`}>
                          <Check className={`h-3 w-3 ${
                            plan.popular ? 'text-white' : colorClasses.text
                          }`} />
                        </div>
                        <span className={`text-sm ${
                          plan.popular ? 'text-white opacity-90' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white backdrop-blur-sm'
                      : colorClasses.button
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
            View All Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;