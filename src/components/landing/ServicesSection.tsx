import React from 'react';
import { Cpu, Lightbulb, Megaphone } from 'lucide-react';
import { translations, Language } from '../../constants/translations';

const ServicesSection = ({ lang }: { lang: Language }) => {
    const t = translations[lang].services_section;
    return (
        <div className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-2">{t.subtitle}</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.title}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Tech Empowerment */}
                    <div className="bg-white border border-slate-200 p-8 rounded-xl hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Cpu size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.tech.title}</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                            {t.tech.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {t.tech.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-bold px-3 py-1.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Brand Planning */}
                    <div className="bg-white border border-slate-200 p-8 rounded-xl hover:border-purple-500/40 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Lightbulb size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.brand.title}</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                            {t.brand.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {t.brand.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-bold px-3 py-1.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Media Operations */}
                    <div className="bg-white border border-slate-200 p-8 rounded-xl hover:border-orange-500/40 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <Megaphone size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.media.title}</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                            {t.media.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {t.media.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-bold px-3 py-1.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
