import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full pt-20 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <div className="flex flex-col justify-center">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-4">Contact us</span>
          <h1 className="text-5xl md:text-7xl font-heading font-light text-stone-900 mb-12">联系我们</h1>
          
          <div className="space-y-10 border-l border-stone-200 pl-8">
            <div className="group">
              <h3 className="text-sm font-bold text-stone-900 mb-2 uppercase tracking-wide">公司地址</h3>
              <div className="flex items-start gap-3 text-stone-500 group-hover:text-brand-600 transition-colors">
                <p className="text-sm leading-relaxed">北京市顺义区南法信HICOOL产业园二期2号楼802A</p>
              </div>
            </div>

            <div className="group">
              <h3 className="text-sm font-bold text-stone-900 mb-2 uppercase tracking-wide">业务咨询</h3>
              <div className="space-y-2">
                <p className="text-sm text-stone-500 font-mono">189 1159 2876 (张先生)</p>
                <p className="text-sm text-stone-500 font-mono">zhanghao@semi-casi.com</p>
              </div>
            </div>

            <div className="group">
              <h3 className="text-sm font-bold text-stone-900 mb-2 uppercase tracking-wide">关注微信公众号</h3>
              <div className="w-24 h-24 bg-white border border-stone-200 p-2 flex items-center justify-center">
                 <img 
                   src="/images/contact/wechat-qrcode.webp" 
                   alt="公众号二维码"
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-contain"
                 />
              </div>
            </div>
          </div>
        </div>

        {/* Map - 地图链接 */}
        <div className="h-[500px] w-full bg-stone-100 relative overflow-hidden border border-stone-300 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center px-6">
            <MapPin className="w-20 h-20 text-stone-400 mb-6" strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-stone-900 mb-3">公司位置</h3>
            <p className="text-stone-600 mb-8 text-sm leading-relaxed max-w-md">
              北京市顺义区南法信HICOOL产业园<br/>二期2号楼802A
            </p>
            <a 
              href="https://www.amap.com/search?query=北京市顺义区南法信HICOOL产业园二期2号楼802A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(28,25,23,0.2)]"
            >
              {/* Spinning Border Beam */}
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              
              {/* Default Border */}
              <span className="absolute inset-0 rounded-full bg-stone-800 transition-opacity duration-300 group-hover:opacity-0"></span>
              
              {/* Button Content */}
              <span className="relative flex h-full w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-stone-800 to-stone-950 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors duration-300">
                <MapPin size={18} />
                点击查看地图位置
              </span>
            </a>
          </div>
          <div className="absolute top-4 right-4 bg-white px-4 py-2 border border-stone-200 shadow-sm z-10">
            <p className="text-xs font-bold text-stone-900">BEIJING CASI</p>
          </div>
        </div>

      </div>
    </div>
  );
};