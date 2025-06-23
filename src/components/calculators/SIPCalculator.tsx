import React, { useState, useEffect } from 'react';
import { TrendingUp, Calendar, DollarSign, Target } from 'lucide-react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [futureValue, setFutureValue] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [wealthGain, setWealthGain] = useState(0);

  useEffect(() => {
    const calculateSIP = () => {
      const monthlyRate = expectedReturn / (12 * 100);
      const months = timePeriod * 12;
      
      const futureValueResult = monthlyInvestment * 
        (((Math.pow(1 + monthlyRate, months)) - 1) / monthlyRate) * 
        (1 + monthlyRate);
      
      const totalInvestedAmount = monthlyInvestment * months;
      const wealthGainAmount = futureValueResult - totalInvestedAmount;
      
      setFutureValue(futureValueResult);
      setTotalInvested(totalInvestedAmount);
      setWealthGain(wealthGainAmount);
    };

    calculateSIP();
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-full">
          <TrendingUp className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">SIP Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <DollarSign className="h-4 w-4" />
              Monthly Investment (Rs.)
            </label>
            <div className="relative">
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Target className="h-4 w-4" />
              Expected Annual Return (%)
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="30"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                step="0.5"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Calendar className="h-4 w-4" />
              Time Period (Years)
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="number"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Future Value</p>
            <p className="text-3xl font-bold text-blue-600">
              Rs. {futureValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Total Invested</p>
            <p className="text-2xl font-bold text-gray-900">
              Rs. {totalInvested.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Wealth Gain</p>
            <p className="text-2xl font-bold text-green-600">
              Rs. {wealthGain.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Invested Amount</span>
              <span className="font-medium">{((totalInvested / futureValue) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-700">Wealth Gain</span>
              <span className="font-medium">{((wealthGain / futureValue) * 100).toFixed(1)}%</span>
            </div>
            <div className="mt-3 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(wealthGain / futureValue) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;