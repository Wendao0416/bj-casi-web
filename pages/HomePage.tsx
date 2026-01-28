import React from 'react';
import { ArrowRight, Layers, Thermometer, Cpu, Users, Settings } from 'lucide-react';
import { Page } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION (Classic Layout) */}
      <section className="relative flex flex-col h-screen max-h-[900px] min-h-[600px] w-full border-b border-stone-200 bg-stone-100 overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
<<<<<<< HEAD
             src="/images/hero/hero-mocvd-equipment.webp"
=======
             src="https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIFbGl4bC1E4PmFYWu1fCQHvXw_ilt5AAJYC2sbyYbJRyjTJ-4wRyZtAQADAgADeQADOAQ"
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
             alt="MOCVD Equipment"
             className="w-full h-full object-cover object-center"
             loading="eager"
             fetchPriority="high"
             decoding="async"
             width="1920"
             height="1080"
          />
          {/* Optimized gradient: Solid on left for text, fading gently to reveal image on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-stone-100/85 to-stone-100/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center pt-20">
           <div className="max-w-2xl">
              {/* Tagline */}
              <div className="mb-8 flex items-center gap-3 animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
                <span className="text-[10px] uppercase text-stone-500 tracking-widest font-mono border border-stone-300 bg-stone-50/80 backdrop-blur rounded px-2 py-1">
                  CASInstruments
                </span>
                <span className="h-[1px] w-12 bg-stone-400"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-600">
                  Semiconductor Technology
                </span>
              </div>

              {/* Big Typography */}
              <h1 className="text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.95] text-stone-900 tracking-tighter mb-8 font-heading font-light">
                 <span className="block opacity-0 animate-aura-slide-down" style={{animationDelay: '0s'}}>
                   精工制造。
                 </span>
                 <span className="block opacity-0 animate-aura-slide-down text-stone-400" style={{animationDelay: '0.2s'}}>
                   自主创新。
                 </span>
                 <span className="block opacity-0 animate-aura-slide-down" style={{animationDelay: '0.4s'}}>
                   MOCVD。
                 </span>
              </h1>

              <p className="text-lg md:text-xl text-stone-600 font-light max-w-lg mb-12 leading-relaxed tracking-tight opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                深耕 MOCVD 装备研发，赋能化合物半导体创新突破。源于科研，精于实战，提供高端定制化装备与全流程工艺解决方案。
              </p>

              <div className="flex flex-wrap gap-6 items-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
<<<<<<< HEAD
                {/* Primary Button - Glass morphism style inspired by Launch App button */}
                <button 
                  onClick={() => onNavigate(Page.PRODUCT)}
                  className="group hover:scale-105 duration-500 ease-out transition-all flex text-sm font-medium text-stone-600 bg-gradient-to-b from-black/10 via-black/20 to-black/10 hover:from-brand-600/10 hover:via-brand-600/20 hover:to-brand-600/10 rounded-full px-8 py-3 relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-2 items-center"
                  style={{
                    boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                    '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))',
                    '--border-radius-before': '9999px'
                  } as React.CSSProperties}
                >
                  <span className="text-sm font-medium text-black/60 tracking-tight group-hover:text-brand-600 transition-colors duration-500">
                    设备详情
                  </span>
                  <Settings size={16} className="text-stone-400 group-hover:text-brand-600 transition-colors duration-500" />
=======
                {/* Primary Button - Synced with Navbar Contact Button Style */}
                <button 
                  onClick={() => onNavigate(Page.PRODUCT)}
                  className="group relative flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(28,25,23,0.2)]"
                >
                  {/* Spinning Border Beam (Visible on Hover) */}
                  <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  
                  {/* Default Static Border (Hidden on Hover) */}
                  <span className="absolute inset-0 rounded-full bg-stone-800 transition-opacity duration-300 group-hover:opacity-0"></span>

                  {/* Inner Content */}
                  <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-stone-800 to-stone-950 px-8 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors duration-300">
                    <span className="tracking-tight">设备详情</span>
                    <Settings size={16} className="text-stone-400 group-hover:text-white transition-colors" />
                  </span>
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
                </button>

                {/* Secondary Button - Updated Style */}
                <button 
                  onClick={() => onNavigate(Page.CONTACT)}
                  className="group inline-flex items-center gap-2 text-sm font-mono text-stone-500 hover:text-stone-900 transition-colors duration-300"
                >
                  <span className="relative">
                    合作咨询
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
           </div>
        </div>

        {/* Bottom Ticker Section */}
        <div className="w-full flex flex-col mt-auto relative z-20">
          <div className="w-full border-t border-stone-200 bg-white/60 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
              <div className="flex gap-4 md:gap-8 text-[10px] font-mono uppercase text-stone-500 tracking-widest overflow-x-auto no-scrollbar">
                <span className="whitespace-nowrap">30+ Years Experience</span>
                <span className="hidden md:inline">•</span>
                <span className="whitespace-nowrap">50+ Core Patents</span>
                <span className="hidden md:inline">•</span>
                <span className="whitespace-nowrap">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL CARDS SECTION */}
      <section className="w-full bg-stone-950 border-t border-stone-800">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
=======
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
          
          {/* Card 1: Products */}
          <div 
            onClick={() => onNavigate(Page.PRODUCT)}
<<<<<<< HEAD
            className="group relative overflow-hidden rounded-xl bg-stone-900/50 border border-white/10 p-8 md:p-10 backdrop-blur-md hover:bg-stone-900/80 transition-all duration-500 cursor-pointer flex flex-col"
=======
            className="group relative overflow-hidden rounded-xl bg-stone-900/50 border border-white/10 p-8 md:p-10 backdrop-blur-md hover:bg-stone-900/80 transition-all duration-500 cursor-pointer"
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full gap-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 text-white group-hover:scale-110 transition-transform duration-500">
                 <Settings size={20} strokeWidth={1.5} />
              </div>
<<<<<<< HEAD
              <div className="flex-1">
                <h3 className="text-2xl text-white font-normal tracking-tight mb-3 font-heading">
                  ZY316 MOCVD 系列设备
=======
              <div>
                <h3 className="text-2xl text-white font-normal tracking-tight mb-3 font-heading">
                  ZY316 Series
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
                </h3>
                <p className="text-sm text-stone-400 font-light leading-relaxed">
                  科研与研发试制平台。双重构型（水平行星式/垂直喷淋式），精准控制，覆盖氮化物、氧化物及SiC等多材料体系。
                </p>
              </div>
<<<<<<< HEAD
              <div className="pt-4 border-t border-white/10 w-full">
=======
              <div className="mt-auto pt-4 border-t border-white/10 w-full">
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
                 {/* Dark Tech Card Button */}
                 <div className="group relative flex w-full items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                    <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <span className="absolute inset-0 rounded-full bg-stone-800 transition-opacity duration-300 group-hover:opacity-0"></span>
                    <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-stone-800 to-stone-950 px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-stone-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors duration-300 group-hover:text-white">
<<<<<<< HEAD
                      查看规格 <ArrowRight size={12} />
=======
                      View Specs <ArrowRight size={12} />
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
                    </span>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 2: Cooperation */}
          <div 
             onClick={() => onNavigate(Page.COOPERATION)}
<<<<<<< HEAD
             className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 cursor-pointer flex flex-col"
=======
             className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 cursor-pointer"
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full gap-6">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                 <Users size={20} strokeWidth={1.5} />
              </div>
<<<<<<< HEAD
              <div className="flex-1">
=======
              <div>
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
                <h3 className="text-2xl text-white font-normal tracking-tight mb-3 font-heading">
                  合作研发
                </h3>
                <p className="text-sm text-stone-400 font-light leading-relaxed">
                   面向新材料与新工艺研发。提供从设备交付到中试验证的协同支持。灵活合作、工艺协同、交付运维保障。
                </p>
              </div>
<<<<<<< HEAD
              <div className="pt-4 border-t border-white/10 flex items-center justify-between w-full">
                {/* Secondary Button - Updated Style (Dark Mode Context) */}
                <div className="group flex items-center justify-between w-full">
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300">
                    了解更多
                  </span>
                  <ArrowRight size={16} className="text-stone-400 group-hover:text-white transition-colors group-hover:translate-x-1" />
=======
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                {/* Secondary Button - Updated Style (Dark Mode Context) */}
                <div className="group inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300">
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT US (关于我们) */}
      <section className="py-32 px-6 md:px-12 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="text-4xl tracking-tight leading-tight text-stone-900 mb-8 font-heading font-light">
              关于我们<br/>
              <span className="text-stone-400">About Us</span>
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed font-light">
               <p>
                 北京中科重仪半导体科技有限公司专注于MOCVD（金属有机化学气相沉积）设备的研发与创新。
               </p>
               <p>
                 公司面向服务高校及科研院所，提供具有自主知识产权的定制化MOCVD高端装备，构建“设备供应+工艺开发+技术合作”的多元化合作模式，与科研人员协同攻克化合物半导体材料生长的关键技术难题。
               </p>
            </div>
            {/* Secondary Button - Updated Style */}
            <button 
              onClick={() => onNavigate(Page.ABOUT)}
<<<<<<< HEAD
              className="mt-8 group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-300"
=======
              className="mt-8 group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-300"
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
            >
              <span className="relative">
                了解我们 Learn More
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
              </span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
             <div className="p-6 bg-stone-50 border border-stone-100 hover:border-stone-300 transition-colors group">
                <div className="text-4xl font-light text-stone-900 mb-2 group-hover:text-brand-600">30+</div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">年行业经验</div>
             </div>
             <div className="p-6 bg-stone-50 border border-stone-100 hover:border-stone-300 transition-colors group">
                <div className="text-4xl font-light text-stone-900 mb-2 group-hover:text-brand-600">50+</div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">核心专利</div>
             </div>
             <div className="p-6 bg-stone-50 border border-stone-100 hover:border-stone-300 transition-colors group">
                <div className="text-4xl font-light text-stone-900 mb-2 group-hover:text-brand-600">24/7</div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">全球技术支持</div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT TECHNOLOGY (产品技术) */}
      <section className="relative py-32 px-6 md:px-12 bg-stone-50 border-b border-stone-200 overflow-hidden">
         {/* Background Equipment Image (Simulated cutout) */}
         <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[120%] w-[50%] md:w-[40%] pointer-events-none opacity-10 mix-blend-multiply select-none">
            <img 
<<<<<<< HEAD
               src="/images/hero/equipment-background.webp" 
               alt="Equipment Background" 
               className="h-full w-full object-cover object-left grayscale contrast-125"
               loading="lazy"
               decoding="async"
=======
               src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop" 
               alt="Equipment Background" 
               className="h-full w-full object-cover object-left grayscale contrast-125"
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/50 to-transparent"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
               <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-2">Product & Technology</span>
                  <h2 className="text-4xl md:text-5xl tracking-tight font-light text-stone-900 font-heading">
                    ZY316 系列MOCVD设备
                  </h2>
                  <p className="text-stone-500 mt-4 font-light">科研与研发试制平台</p>
               </div>
<<<<<<< HEAD
               <div className="flex gap-5">
                  {/* Underline Link Style Button */}
                  <button 
                     onClick={() => onNavigate(Page.PRODUCT)} 
                     className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-300"
                  >
                     <span className="relative">
                        设备技术详情
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
                     </span>
                     <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
=======
               <div className="flex gap-4">
                  {/* REPLACED: PBLK Style Glass Button */}
                  <button 
                     onClick={() => onNavigate(Page.PRODUCT)} 
                     className="hover:scale-105 duration-500 ease-out transition-all flex group text-sm font-medium text-stone-600 bg-gradient-to-b from-white/80 via-white/40 to-white/80 rounded-full px-6 py-2 relative gap-x-2 gap-y-2 items-center"
                     style={{
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(209, 213, 219, 0.5)',
                        //@ts-ignore
                        '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.9))',
                        '--border-radius-before': '9999px'
                     }}
                  >
                     设备技术详情
>>>>>>> e4dbc0d36fb380706d58227402fd3cba3080ce5f
                  </button>

                  {/* REPLACED: Dark Tech Card Button (Modified for light bg context, high contrast) */}
                  <button 
                     onClick={() => onNavigate(Page.COOPERATION)} 
                     className="group relative flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(28,25,23,0.3)]"
                  >
                     {/* Spinning Beam */}
                     <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#1c1917_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                     
                     {/* Border Mask */}
                     <span className="absolute inset-0 rounded-full bg-stone-900 transition-opacity duration-300 group-hover:opacity-0"></span>

                     {/* Inner */}
                     <span className="relative flex h-full w-full items-center justify-center rounded-full bg-stone-900 px-6 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                        合作开发
                     </span>
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="group bg-white p-8 border border-stone-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-stone-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                  <Layers className="relative z-10 w-10 h-10 text-stone-300 group-hover:text-stone-900 mb-6 transition-colors" strokeWidth={1} />
                  <h3 className="relative z-10 text-xl font-normal mb-4">双重构型</h3>
                  <p className="relative z-10 text-sm text-stone-500 leading-relaxed font-light">
                     提供水平行星式（适合大尺寸/量产工艺）与垂直喷淋式（适合异质结/超晶格）两种选择。
                  </p>
               </div>

               {/* Card 2 */}
               <div className="group bg-white p-8 border border-stone-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-stone-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                  <Thermometer className="relative z-10 w-10 h-10 text-stone-300 group-hover:text-stone-900 mb-6 transition-colors" strokeWidth={1} />
                  <h3 className="relative z-10 text-xl font-normal mb-4">精准控制</h3>
                  <p className="relative z-10 text-sm text-stone-500 leading-relaxed font-light">
                     加热温度高达 1350℃，控温精度 ±0.1℃，反应腔室温场、流场均匀性和稳定性优异。
                  </p>
               </div>

               {/* Card 3 */}
               <div className="group bg-white p-8 border border-stone-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-stone-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                  <Cpu className="relative z-10 w-10 h-10 text-stone-300 group-hover:text-stone-900 mb-6 transition-colors" strokeWidth={1} />
                  <h3 className="relative z-10 text-xl font-normal mb-4">应用领域</h3>
                  <p className="relative z-10 text-sm text-stone-500 leading-relaxed font-light">
                     覆盖氮化物（GaN/AlN）、氧化物（Ga₂O₃）、TMDs及SiC等多种材料体系。
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. COOPERATION SERVICE (合作服务) - WHITE THEME */}
      <section className="py-32 px-6 md:px-12 bg-white text-stone-900 border-t border-stone-200">
         <div className="max-w-7xl mx-auto">
            <div className="mb-20 max-w-4xl">
               <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-4">Cooperation Cases</span>
               <h2 className="text-3xl md:text-5xl font-light font-heading leading-tight mb-8 text-stone-900">
                  面向新材料与新工艺研发，提供从<span className="text-stone-900 border-b-2 border-brand-200">设备交付</span>到<span className="text-stone-900 border-b-2 border-brand-200">中试验证</span>的协同支持
               </h2>
               {/* Secondary Button - Updated Style */}
               <button onClick={() => onNavigate(Page.COOPERATION)} className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-300">
                  <span className="relative">
                     了解详情
                     <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1"/>
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="p-8 border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-4 group-hover:text-brand-600 transition-colors">COOPERATION MODEL</div>
                  <h3 className="text-xl font-normal text-stone-900 mb-2">合作模式</h3>
                  <div className="h-[1px] w-8 bg-stone-300 mb-4 group-hover:w-full group-hover:bg-brand-200 transition-all duration-500"></div>
                  <div className="text-sm font-medium text-stone-700 mb-4">灵活合作 · 深度协同</div>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                     设备供应、定制开发与联合攻关<br/>
                     支持新材料、新工艺的持续迭代验证
                  </p>
               </div>

               {/* Card 2 */}
               <div className="p-8 border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-4 group-hover:text-brand-600 transition-colors">TECH & PROCESS SUPPORT</div>
                  <h3 className="text-xl font-normal text-stone-900 mb-2">技术与工艺支持</h3>
                  <div className="h-[1px] w-8 bg-stone-300 mb-4 group-hover:w-full group-hover:bg-brand-200 transition-all duration-500"></div>
                  <div className="text-sm font-medium text-stone-700 mb-4">工艺协同 · 全程支持</div>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                     覆盖工艺启动、参数优化与稳定性验证<br/>
                     助力研发与中试高效推进
                  </p>
               </div>

               {/* Card 3 */}
               <div className="p-8 border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-4 group-hover:text-brand-600 transition-colors">DELIVERY & MAINTENANCE</div>
                  <h3 className="text-xl font-normal text-stone-900 mb-2">交付与运维保障</h3>
                  <div className="h-[1px] w-8 bg-stone-300 mb-4 group-hover:w-full group-hover:bg-brand-200 transition-all duration-500"></div>
                  <div className="text-sm font-medium text-stone-700 mb-4">快速交付 · 稳定运行</div>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                     安装调试、7×24 小时技术支持<br/>
                     完善备件体系，降低停机风险
                  </p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};