import React, { useState, useEffect } from 'react';
import { Receipt, TrendingUp, Minus, Plus } from 'lucide-react';

const StockTaxCalculator = () => {
  const [buyPrice, setBuyPrice] = useState(1000);
  const [sellPrice, setSellPrice] = useState(1200);
  const [quantity, setQuantity] = useState(100);
  const [holdingPeriod, setHoldingPeriod] = useState(365);
  const [capitalGain, setCapitalGain] = useState(0);
  const [tax, setTax] = useState(0);
  const [netGain, setNetGain] = useState(0);
  const [isLongTerm, setIsLongTerm] = useState(true);

  useEffect(() => {
    const calculateTax = () => {
      const totalBuyValue = buyPrice * quantity;
      const totalSellValue = sellPrice * quantity;
      const gain = totalSellValue - totalBuyValue;
      
      setCapitalGain(gain);
      setIsLongTerm(holdingPeriod > 365);
      
      let taxAmount = 0;
      if (gain > 0) {
        if (holdingPeriod > 365) {
          // Long term capital gain tax in Nepal (assume 5%)
          taxAmount = gain * 0.05;
        } else {
          // Short term capital gain tax in Nepal (assume 7.5%)
          taxAmount = gain * 0.075;
        }
      }
      
      setTax(taxAmount);
      setNetGain(gain - taxAmount);
    };

    calculateTax();
  }, [buyPrice, sellPrice, quantity, holdingPeriod]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-3 rounded-full">
          <Receipt className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Stock Tax Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Minus className="h-4 w-4" />
              Buy Price (Rs. per share)
            </label>
            <input
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              min="1"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Plus className="h-4 w-4" />
              Sell Price (Rs. per share)
            </label>
            <input
              type="number"
              value={sellPrice}
              onChange={(e) => setSellPrice(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              min="1"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <TrendingUp className="h-4 w-4" />
              Quantity (Number of shares)
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              min="1"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Receipt className="h-4 w-4" />
              Holding Period (Days)
            </label>
            <input
              type="number"
              value={holdingPeriod}
              onChange={(e) => setHoldingPeriod(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              min="1"
            />
            <p className="text-sm text-gray-500 mt-2">
              {isLongTerm ? 'Long-term (>365 days) - 5% tax' : 'Short-term (≤365 days) - 7.5% tax'}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Total Investment</p>
            <p className="text-2xl font-bold text-gray-900">
              Rs. {(buyPrice * quantity).toLocaleString('en-IN')}
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Total Sale Value</p>
            <p className="text-2xl font-bold text-blue-600">
              Rs. {(sellPrice * quantity).toLocaleString('en-IN')}
            </p>
          </div>

          <div className={`p-6 rounded-xl border ${capitalGain >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <p className="text-sm font-medium text-gray-700 mb-2">Capital Gain/Loss</p>
            <p className={`text-2xl font-bold ${capitalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              Rs. {capitalGain.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Tax Liability</p>
            <p className="text-2xl font-bold text-orange-600">
              Rs. {tax.toLocaleString('en-IN')}
            </p>
          </div>

          <div className={`p-6 rounded-xl border ${netGain >= 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
            <p className="text-sm font-medium text-gray-700 mb-2">Net Gain/Loss (After Tax)</p>
            <p className={`text-3xl font-bold ${netGain >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
              Rs. {netGain.toLocaleString('en-IN')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockTaxCalculator;