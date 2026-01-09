import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">
            为什么选择 NebulaCloud
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            不仅仅是托管，更是赋能
          </h3>
          <p className="text-lg text-slate-600">
            我们为您处理所有的基础设施复杂性，提供企业级的性能、可靠性和安全性，让您专注构建伟大的应用。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {FEATURES.map((feature, index) => (
            <div key={index} className="group flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 mb-6 group-hover:bg-primary-50 group-hover:border-primary-100 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;