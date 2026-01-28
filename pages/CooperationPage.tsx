import React from 'react';
import { Check } from 'lucide-react';

export const CooperationPage: React.FC = () => {
  return (
    <div className="w-full pt-20 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-5xl md:text-7xl font-heading font-light text-stone-900 mb-6">合作与服务</h1>
        <p className="text-stone-500 mb-16 max-w-2xl font-light">
           我们面向科研机构与产业用户，提供覆盖研发探索与中试验证全流程的产品支持与服务。
        </p>

        {/* Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
           {[
             { title: '设备销售', desc: '标准研究型MOCVD设备及基础工艺讲解培训服务。' },
             { title: '定制开发', desc: '依据研究方向定制设备功能模块、工艺参数与软件系统。' },
             { title: '联合攻关', desc: '与研发团队协同开展新型材料、生长工艺及配套设备开发。' }
           ].map((item, i) => (
             <div key={i} className="p-8 bg-white border border-stone-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-8 h-8 bg-stone-100 rounded flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                   <span className="font-mono text-xs font-bold">{i+1}</span>
                </div>
                <h3 className="text-lg font-normal text-stone-900 mb-3">{item.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* Process/Support */}
        <div className="bg-stone-900 text-stone-50 p-10 relative overflow-hidden">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                 <h2 className="text-2xl font-light mb-6">技术与工艺支持</h2>
                 <p className="text-sm text-stone-400 leading-relaxed mb-8">
                    全流程支持体系，覆盖从实验室研究到工程化验证的不同需求。
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {['现场支持', '7x24小时热线', '系统培训', '备件保障', '软件升级', '科研协作'].map((tag, i) => (
                       <div key={i} className="flex items-center gap-2 text-xs font-mono text-stone-300">
                          <Check size={12} className="text-accent-500" /> {tag}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="border-l border-stone-800 pl-8 flex flex-col justify-center">
                 <h3 className="text-lg font-light mb-6">技术开发合作</h3>
                 <div className="space-y-4">
                    {[
                      '中国科学院半导体研究所',
                      '清华大学',
                      '西安交通大学',
                      '北京理工大学'
                    ].map((partner, i) => (
                       <div key={i} className="flex items-center gap-4 group cursor-default">
                          <div className="h-[1px] w-4 bg-stone-700 group-hover:bg-brand-500 transition-colors"></div>
                          <span className="text-sm text-stone-400 group-hover:text-white transition-colors">{partner}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};