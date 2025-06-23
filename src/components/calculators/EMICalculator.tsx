import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Calendar, Percent } from 'lucide-react';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState(1000000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(12);
  const [emi, setEMI] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const calculateEMI = () => {
      const monthlyRate = interestRate / (12 * 100);
      const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                      (Math.pow(1 + monthlyRate, tenure) - 1);
      
      const totalAmountValue = emiValue * tenure;
      const totalInterestValue = totalAmountValue - principal;
      
      setEMI(emiValue);
      setTotalAmount(totalAmountValue);
      setTotalInterest(totalInterestValue);
    };

    calculateEMI();
  }, [principal, interestRate, tenure]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-emerald-100 p-3 rounded-full">
          <Calculator className="h-6 w-6 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">EMI Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <DollarSign className="h-4 w-4" />
              Principal Amount (Rs.)
            </label>
            <div className="relative">
              <input
                type="range"
                min="100000"
                max="10000000"
                step="50000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Percent className="h-4 w-4" />
              Interest Rate (% per annum)
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                step="0.1"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Calendar className="h-4 w-4" />
              Tenure (Months)
            </label>
            <div className="relative">
              <input
                type="range"
                min="6"
                max="360"
                step="6"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Monthly EMI</p>
            <p className="text-3xl font-bold text-emerald-600">
              Rs. {emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Total Amount Payable</p>
            <p className="text-2xl font-bold text-gray-900">
              Rs. {totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Total Interest</p>
            <p className="text-2xl font-bold text-blue-600">
              Rs. {totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Principal</span>
              <span className="font-medium">{((principal / totalAmount) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-700">Interest</span>
              <span className="font-medium">{((totalInterest / totalAmount) * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;