import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            透明定价，按需付费
          </h2>
          <p className="text-lg text-slate-600">
            无论您是个人开发者还是大型企业，我们都有适合您的方案。随时升级，随时取消。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight 
                  ? 'bg-white shadow-2xl ring-2 ring-primary-500 scale-105 z-10' 
                  : 'bg-white shadow-lg border border-slate-100'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 mx-auto w-full flex justify-center">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                    最受欢迎
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-500">{tier.description}</p>
              </div>

              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="text-slate-500 ml-2">{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-500 shrink-0 mr-3" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlight ? 'primary' : 'outline'} 
                className="w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;