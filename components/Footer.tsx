import React from 'react';
import { Cloud, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Cloud className="w-6 h-6" />
              <span className="text-xl font-bold">NebulaCloud</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              下一代智能托管云平台，致力于让云计算更简单、更高效、更智能。
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">产品</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">云服务器</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">容器服务 K8s</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">云数据库</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">对象存储</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">资源</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">文档中心</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">API 参考</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">社区论坛</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">状态页</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">公司</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">职业发展</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">博客</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">联系我们</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          &copy; {new Date().getFullYear()} NebulaCloud Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;