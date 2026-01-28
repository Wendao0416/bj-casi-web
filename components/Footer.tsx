import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-24 px-6 md:px-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="w-8 h-8 bg-white text-stone-900 rounded-full flex items-center justify-center font-bold text-xs mb-6">
            CA
          </div>
          <p className="text-xs text-stone-500 leading-loose max-w-sm">
            北京中科重仪半导体科技有限公司<br/>
            Beijing CASI Semiconductor Technology Co., Ltd.<br/>
            Building the infrastructure for compound semiconductor innovation.
          </p>
        </div>
        
        <div>
          <h5 className="text-white text-xs uppercase tracking-widest mb-6">网站地图 Sitemap</h5>
          <ul className="space-y-4 text-xs">
            <li><button onClick={() => onNavigate(Page.HOME)} className="hover:text-white transition-colors">首页 Home</button></li>
            <li><button onClick={() => onNavigate(Page.ABOUT)} className="hover:text-white transition-colors">关于我们 About</button></li>
            <li><button onClick={() => onNavigate(Page.PRODUCT)} className="hover:text-white transition-colors">产品技术 Product</button></li>
            <li><button onClick={() => onNavigate(Page.COOPERATION)} className="hover:text-white transition-colors">合作服务 Cooperation</button></li>
          </ul>
        </div>

        <div>
           <h5 className="text-white text-xs uppercase tracking-widest mb-6">联系方式 Contact</h5>
           <ul className="space-y-4 text-xs font-mono text-stone-500">
             <li>北京市顺义区南法信HICOOL产业园</li>
             <li>zhanghao@semi-casi.com</li>
             <li>189 1159 2876</li>
           </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 pt-12 text-[10px] text-stone-600 flex flex-col md:flex-row justify-between">
         <p>© 2025 Beijing CASI Semiconductor Technology Co., Ltd. All rights reserved.</p>
         <a 
           href="https://beian.miit.gov.cn/#/Integrated/index" 
           target="_blank" 
           rel="noopener noreferrer"
           className="mt-2 md:mt-0 hover:text-stone-400 transition-colors"
         >
           京ICP备2023009551号
         </a>
      </div>
    </footer>
  );
};