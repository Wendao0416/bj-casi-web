import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const ProductPage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="w-full pt-20 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        
        {/* 1. Page Header - Animated */}
        <div className="mb-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
           <span className="text-xs font-mono uppercase tracking-widest text-brand-600 bg-brand-50 px-2 py-1 rounded inline-block mb-4">
             Product Line
           </span>
           <h1 className="text-5xl md:text-7xl font-heading font-light text-stone-900 mb-6">
             科研与研发试制平台
           </h1>
           <p className="text-stone-500 max-w-2xl mx-auto font-light">
             面向科研与中试的自主创新平台，提供精确的温度、压力和气体流量控制，支持2-8英寸多种化合物半导体材料生长。
           </p>
        </div>

        {/* 2. Hero Section - Animated */}
        <div className="relative w-full bg-white border border-stone-200 p-8 md:p-12 lg:p-12 mb-24 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                
                {/* Left: Text Info */}
                <div className="flex-1 space-y-8 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">Mass Production Ready</span>
                    </div>
                    
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-heading font-light text-stone-900 mb-4">
                            ZY316 <span className="text-stone-400 font-thin">MOCVD System</span>
                        </h2>
                        <p className="text-stone-600 font-light leading-relaxed text-lg max-w-xl">
                            采用垂直喷淋式/水平行星式双重构型设计。专为 GaN、AlN 等化合物半导体材料外延生长打造的旗舰级量产装备。
                        </p>
                    </div>

                    {/* Tech Specs Mini Table */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-8 max-w-md border-t border-stone-100 pt-8">
                         <div>
                            <div className="text-xs text-stone-400 font-mono uppercase tracking-wider mb-1">Max Temperature</div>
                            <div className="text-xl text-stone-900 font-normal">1350 <span className="text-sm text-stone-500">°C</span></div>
                         </div>
                         <div>
                            <div className="text-xs text-stone-400 font-mono uppercase tracking-wider mb-1">Uniformity</div>
                            <div className="text-xl text-stone-900 font-normal">≤ 1.0 <span className="text-sm text-stone-500">%</span></div>
                         </div>
                         <div>
                            <div className="text-xs text-stone-400 font-mono uppercase tracking-wider mb-1">Chamber Pressure</div>
                            <div className="text-xl text-stone-900 font-normal">0-100 <span className="text-sm text-stone-500">kPa</span></div>
                         </div>
                         <div>
                            <div className="text-xs text-stone-400 font-mono uppercase tracking-wider mb-1">Wafer Size</div>
                            <div className="text-xl text-stone-900 font-normal">2 - 8 <span className="text-sm text-stone-500">inch</span></div>
                         </div>
                    </div>
                </div>

                {/* Right: Image Display */}
                <div className="flex-1 w-full relative order-1 lg:order-2">
                    <div className="aspect-[4/3] w-full bg-[#f9f9f9] rounded-xl border border-stone-200 flex items-center justify-center p-8 relative overflow-hidden group">
                        {/* Technical Grid Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.05]" 
                             style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
                        </div>
                        
                        {/* Corner Brackets */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-stone-300 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-stone-300 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-stone-300 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-stone-300 rounded-br-lg"></div>

                        {/* Loading Placeholder */}
                        {!imageLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center z-5">
                                <div className="w-16 h-16 border-4 border-stone-200 border-t-stone-400 rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* Product Image */}
                        <img 
                            src="/images/products/zy316-mocvd-machine.webp"
                            alt="ZY316 MOCVD Machine"
                            decoding="async"
                            loading="eager"
                            fetchPriority="high"
                            width="800"
                            height="600"
                            onLoad={() => setImageLoaded(true)}
                            className={`w-full h-full object-contain relative z-10 mix-blend-multiply contrast-[1.05] transition-opacity duration-500 ease-out-expo group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>
                    {/* Caption */}
                    <div className="mt-3 flex justify-between items-center px-1">
                        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">Fig 1.1 - Standard Configuration</span>
                        <div className="flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                           <div className="w-2 h-2 rounded-full bg-stone-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. Feature Grid - Animated Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
           {[
             { title: '自动化控制', desc: '集数据处理、原料流量控制、辅助设备监控于一体，支持生长过程预演与回放。' },
             { title: 'VR 辅助教学', desc: '集成VR深度辅助教学系统，通过虚拟现实技术再现材料生长过程，缩短培训周期。' },
             { title: '定制化设计', desc: '支持定制气体管路数量和外延片尺寸（2~8英寸），满足多种材料的高质量外延生长需求。' }
           ].map((feat, i) => (
             <div key={i} className="bg-white border border-stone-200 p-8 hover:border-brand-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ease-out-expo group">
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-brand-50 text-stone-400 group-hover:text-brand-600 transition-colors">
                  <span className="font-mono text-xs font-bold">0{i+1}</span>
                </div>
                <h3 className="text-lg font-normal text-stone-900 mb-3">{feat.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{feat.desc}</p>
             </div>
           ))}
        </div>

        {/* 4. Specs "Truth Table" Style - Animated */}
        <div className="mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
           <div className="flex items-end justify-between mb-8 border-b border-stone-200 pb-4">
              <h2 className="text-2xl font-light text-stone-900">设备规格参数</h2>
              <span className="text-xs font-mono text-stone-400">MODEL: ZY-SERIES</span>
           </div>
           
           <div className="bg-white border border-stone-200 overflow-hidden shadow-sm">
             <div className="grid grid-cols-4 border-b border-stone-200 bg-stone-50 text-xs font-mono uppercase text-stone-500 tracking-wider">
               <div className="p-4 border-r border-stone-200">参数指标</div>
               <div className="p-4 border-r border-stone-200 text-brand-600">ZY314</div>
               <div className="p-4 border-r border-stone-200 text-brand-600">ZY316</div>
               <div className="p-4 text-brand-600">ZY318</div>
             </div>
             
             {[
               { label: '晶圆尺寸', v1: '2"*3 / 4"*1', v2: '2"*6 / 4"*1 / 6"*1', v3: '2"*12 / 8"*1' },
               { label: '腔体类型', v1: '水平行星式反应器', v2: '垂直喷淋式反应器', v3: '托盘旋转系统' },
               { label: '加热温度', v1: '1350℃ (±0.1℃)', v2: '1350℃ (±0.1℃)', v3: '1350℃ (±0.1℃)' },
               { label: '压力范围', v1: '0-100 kPa', v2: '0-100 kPa', v3: '0-100 kPa' },
             ].map((row, i) => (
               <div key={i} className="grid grid-cols-4 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors duration-300 text-sm text-stone-600">
                 <div className="p-4 border-r border-stone-100 font-medium text-stone-900">{row.label}</div>
                 <div className="p-4 border-r border-stone-100 font-mono text-xs">{row.v1}</div>
                 <div className="p-4 border-r border-stone-100 font-mono text-xs">{row.v2}</div>
                 <div className="p-4 font-mono text-xs">{row.v3}</div>
               </div>
             ))}
           </div>
        </div>

        {/* 5. NEW: Available Material Systems - Color Corrected */}
        <div className="mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
             <div className="flex items-end justify-between mb-8 border-b border-stone-200 pb-4">
                <h2 className="text-2xl font-light text-stone-900">可生长材料体系</h2>
                <span className="text-xs font-mono text-stone-400 uppercase">Available Material Systems</span>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    category: '氮化物半导体材料 (III-N)',
                    materials: ['AlN', 'AlGaN', 'GaN', 'InGaN', 'AlScN'],
                    // Modified to use Stone/Brand neutral palette
                    className: 'bg-white border-stone-200 hover:border-brand-300' 
                  },
                  {
                    category: '过渡族金属硫族化合物 (TMDs)',
                    materials: ['MoS₂', 'MoSe₂', 'WS₂', 'WSe₂'],
                    // Modified to use Stone/Brand neutral palette
                    className: 'bg-white border-stone-200 hover:border-brand-300'
                  },
                  {
                    category: '其他化合物',
                    materials: ['β-Ga₂O₃', 'ZnO', 'InP', 'SiC', '2D BN'],
                    // Modified to use Stone/Brand neutral palette
                    className: 'bg-white border-stone-200 hover:border-brand-300'
                  }
                ].map((item, i) => (
                  <div key={i} className={`p-6 border ${item.className} flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ease-out-expo group`}>
                      <h3 className="font-heading font-medium text-lg mb-4 text-stone-900 group-hover:text-brand-700 transition-colors">{item.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.materials.map((m, j) => (
                          <span key={j} className="px-3 py-1 bg-stone-50 rounded-md text-xs font-mono font-medium text-stone-600 border border-stone-100 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-100 transition-colors duration-300">
                            {m}
                          </span>
                        ))}
                      </div>
                  </div>
                ))}
             </div>
        </div>

        {/* 6. Dashboard Widget Style - Performance - Animated */}
        <div className="w-full bg-stone-900 text-stone-50 p-8 md:p-12 relative overflow-hidden min-h-[500px] opacity-0 animate-fade-in-up" style={{ animationDelay: '750ms' }}>
              {/* Background Image for context */}
              <div className="absolute inset-0 z-0">
                  <img 
                    src="/images/products/performance-background.webp" 
                    className="w-full h-full object-cover opacity-20 mix-blend-luminosity transform scale-100 hover:scale-105 transition-transform duration-[2000ms] ease-out-expo" 
                    alt="Tech Background"
                    loading="lazy"
                    decoding="async"
                    width="1920"
                    height="1080"
                  />
              </div>

              {/* Abstract decorative BG */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-900 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 z-0 animate-pulse-slow"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                     <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400">性能验证 Performance Verification</span>
                        <h3 className="text-3xl md:text-4xl font-light mt-2 text-white">GaN on Si HEMT 外延片</h3>
                     </div>
                     <div className="text-right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                           <Check size={12} />
                           ISO9001 Certified
                        </div>
                     </div>
                  </div>

                  {/* Dark Mode Data Table */}
                  <div className="bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                          {[
                              { k: 'Wafer size', v: '6", 8"' },
                              { k: 'Substrate Thickness', v: '1000 μm, 1150 μm' },
                              { k: 'Epi Layer Total Thickness', v: '5.5 μm~7.0 μm' },
                              { k: 'AlGaN Barrier Layer', v: '20 nm (25% Al)' },
                              { k: 'In-situ SiN Layer', v: '50 nm~60 nm' },
                              { k: 'Sheet Resistivity', v: '<350 ohm/sq' },
                              { k: 'Electron Mobility', v: '>2000 cm²V⁻¹s⁻¹' },
                              { k: 'Bow', v: '<±30 μm' },
                              { k: 'Edge Exclusion', v: '<2 mm' },
                              { k: 'Vertical Breakdown Voltage', v: '>1000 V (@1μA/mm²)' },
                          ].map((row, idx) => (
                              <div key={idx} className={`flex justify-between items-center p-4 border-b border-white/5 ${idx % 2 === 0 ? 'md:border-r' : ''} hover:bg-white/10 transition-colors duration-300`}>
                                  <span className="text-stone-400 text-sm font-light">{row.k}</span>
                                  <span className="text-white text-sm font-mono font-medium">{row.v}</span>
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