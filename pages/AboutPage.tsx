import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        
        {/* Header */}
        <div className="mb-24 animate-fade-in-up">
           <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-4">
             About Us
           </span>
           <h1 className="text-5xl md:text-7xl font-heading font-light text-stone-900 mb-8 tracking-tighter">
             精工制造。<br/>
             创新驱动。
           </h1>
           <div className="h-[1px] w-full bg-stone-200 mb-12"></div>
           <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl">
             北京中科重仪半导体科技有限公司是一家以MOCVD装备与技术为核心的国家级高新技术企业。我们独创“装备-材料”验证链条，以推动我国化合物半导体科研装备国产化、高端化为使命。
           </p>
        </div>

        {/* Timeline / Milestones */}
        <div className="mb-32">
           <h2 className="text-2xl font-light text-stone-900 mb-12 border-l-4 border-stone-900 pl-4">
             发展历程
           </h2>
           <div className="relative border-l border-stone-200 ml-3 space-y-16 pb-12">
             {[
               { year: '1990', title: '国产化探索', desc: '国产化探索起点，主持早期国产化 MOCVD 实验设备建设。' },
               { year: '2004', title: '工程化落地', desc: '工程化落地，建成国内首台应用于LED外延制备的GaN MOCVD设备。' },
               { year: '2015', title: '技术突破', desc: '应力与翘曲控制难题突破，实现多层薄膜材料中各个膜层的本征应力值评估。' },
               { year: '2021', title: '首台套推出', desc: '科研型MOCVD设备推出，研制出国内首台功率电子大尺寸水平式装备。' },
               { year: '2024', title: '技术升级', desc: '垂直喷淋式反应腔结构设计升级，达到更高生长均匀性。' },
               { year: '2025', title: '合作网络', desc: '科研合作网络形成，与十余家高校与科研院所建立长期合作。' },
             ].map((item, i) => (
               <div key={i} className="relative pl-12 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-300 group-hover:bg-brand-600 transition-colors ring-4 ring-white"></div>
                  <span className="text-xs font-mono text-stone-400 mb-1 block">{item.year}</span>
                  <h3 className="text-xl font-normal text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500 max-w-md">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-stone-50 p-12 border border-stone-200">
           <div>
             <h3 className="text-xl font-normal text-stone-900 mb-6">核心团队</h3>
             <p className="text-sm text-stone-500 leading-relaxed mb-6">
               团队由国家级海外高层次人才、教授级专家及高级工程师组成。核心成员在MOCVD反应腔设计、热场均匀性控制、气流分布精度等方面拥有长期经验。
             </p>
             <div className="flex gap-2">
                <span className="px-2 py-1 bg-white border border-stone-200 text-xs font-mono text-stone-600">50+ 专利布局</span>
                <span className="px-2 py-1 bg-white border border-stone-200 text-xs font-mono text-stone-600">专家领衔</span>
             </div>
           </div>
           <div>
              <h3 className="text-xl font-normal text-stone-900 mb-6">企业文化</h3>
              <ul className="space-y-4">
                 {[
                   { label: '价值观', val: '崇实、担当、严谨、突破' },
                   { label: '使命', val: '专注MOCVD高端装备研发' },
                   { label: '愿景', val: '成为信赖的装备供应商与合作平台' }
                 ].map((v, i) => (
                   <li key={i} className="flex flex-col border-b border-stone-200 pb-2">
                      <span className="text-[10px] uppercase font-mono text-stone-400 mb-1">{v.label}</span>
                      <span className="text-sm text-stone-800">{v.val}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>

      </div>
    </div>
  );
};