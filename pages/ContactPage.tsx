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
              <h3 className="text-sm font-bold text-stone-900 mb-2 uppercase tracking-wide">研发地址</h3>
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

            <div className="pt-8">
              <div className="w-24 h-24 bg-white border border-stone-200 p-2 flex items-center justify-center">
                 <img 
                   src="https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIFb2l4daQRI_t7cEpygMPauNLR-d0nAAJcC2sbyYbJR51RPlvk7AeSAQADAgADbQADOAQ" 
                   alt="公众号二维码"
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-contain"
                 />
              </div>
              <span className="text-[10px] text-stone-400 mt-2 block uppercase tracking-wider">关注微信公众号</span>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-[500px] w-full bg-stone-200 relative overflow-hidden border border-stone-300 filter grayscale contrast-125 hover:filter-none transition-all duration-700">
           <iframe 
             width="100%" 
             height="100%" 
             frameBorder="0" 
             scrolling="no" 
             marginHeight={0} 
             marginWidth={0} 
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             src="https://maps.google.com/maps?q=Beijing%20Shunyi%20Hicool&t=&z=13&ie=UTF8&iwloc=&output=embed"
             className="w-full h-full opacity-80"
           ></iframe>
           <div className="absolute top-4 right-4 bg-white px-4 py-2 border border-stone-200 shadow-sm">
             <p className="text-xs font-bold text-stone-900">BEIJING CASI</p>
           </div>
        </div>

      </div>
    </div>
  );
};