import React from 'react';
import Button from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              NebulaCloud V2.0 现已发布
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              专注代码创新 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-700">
                基础设施交给我们
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              为现代开发者打造的下一代全托管云平台。无论是简单的静态网站，还是复杂的微服务架构，只需几行命令即可全球部署。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button size="lg" className="w-full sm:w-auto gap-2 group">
                立即开始部署
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                查看演示
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600" />
                无需绑定信用卡
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600" />
                14天免费试用
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600" />
                99.99% SLA
              </div>
            </div>
          </div>

          {/* Visual Content / Dashboard Mockup */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative">
             <div className="relative rounded-xl bg-slate-900 shadow-2xl border border-slate-800 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent rounded-xl pointer-events-none" />
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                  {/* Mock Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 px-3 py-1 bg-slate-950 rounded text-xs text-slate-400 font-mono w-full max-w-[200px]">
                      nebulacloud.com/dashboard
                    </div>
                  </div>
                  {/* Mock Content */}
                  <div className="p-6 grid gap-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold">当前状态</div>
                        <div className="text-green-400 font-bold flex items-center gap-2 mt-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> 运行中
                        </div>
                      </div>
                      <div className="text-right">
                         <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold">总请求数</div>
                         <div className="text-white font-bold mt-1">2,458,901</div>
                      </div>
                    </div>
                    
                    {/* Mock Chart Area */}
                    <div className="h-32 bg-slate-800/50 rounded border border-slate-700/50 relative overflow-hidden flex items-end justify-between px-2 pb-0 pt-8 gap-1">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 50].map((h, i) => (
                          <div key={i} style={{height: `${h}%`}} className="w-full bg-primary-500/80 rounded-t-sm hover:bg-primary-400 transition-colors" />
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-800/30 rounded border border-slate-700/50">
                         <div className="text-slate-400 text-xs">CPU 使用率</div>
                         <div className="text-white font-mono mt-1">42%</div>
                         <div className="w-full h-1 bg-slate-700 mt-2 rounded-full overflow-hidden">
                           <div className="w-[42%] h-full bg-blue-500" />
                         </div>
                      </div>
                      <div className="p-4 bg-slate-800/30 rounded border border-slate-700/50">
                         <div className="text-slate-400 text-xs">内存使用率</div>
                         <div className="text-white font-mono mt-1">1.2 GB / 2.0 GB</div>
                         <div className="w-full h-1 bg-slate-700 mt-2 rounded-full overflow-hidden">
                           <div className="w-[60%] h-full bg-purple-500" />
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;