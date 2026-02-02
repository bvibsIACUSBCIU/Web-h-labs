import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import ParticleSphere from '../ParticleSphere';
import { translations, Language } from '../../constants/translations';

const LandingHero = ({ onEnter, lang }: { onEnter: () => void, lang: Language }) => {
    const t = translations[lang].hero;
    return (
        <div className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-32">
            {/* Dots Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Particle Sphere Effect */}
            <ParticleSphere />

            {/* Decorative Blur - Subtler for light mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-mono mb-6 animate-fade-in">
                    <Terminal size={12} />
                    {t.badge}
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-sans font-normal tracking-tight text-slate-900 leading-tight whitespace-nowrap">
                    AI + Web3 Growth Engine
                </h1>

                {/* Subtitle - Elegant Italic */}
                <p className="text-3xl md:text-4xl font-serif italic text-slate-500 max-w-3xl mx-auto leading-relaxed">
                    {t.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
                    <button
                        onClick={onEnter}
                        className="group relative px-10 py-4 bg-orange-600 text-white font-medium rounded-sm hover:bg-orange-700 transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
                    >
                        {t.cta1}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 mt-12 w-full max-w-5xl mx-auto">
                    {[
                        { label: t.stats.users, value: "12,500+" },
                        { label: t.stats.tvl, value: "$240M+" },
                        { label: t.stats.tasks, value: "450K+" },
                        { label: t.stats.partners, value: "400+" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 group cursor-default">
                            <span className="text-3xl md:text-4xl font-bold text-slate-900 font-sans tracking-tight group-hover:text-orange-600 transition-colors">{stat.value}</span>
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest font-sans">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingHero;
