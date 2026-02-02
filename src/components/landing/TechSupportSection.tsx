import React from 'react';
import { Database, Building2, Flame, Check } from 'lucide-react';
import { translations, Language } from '../../constants/translations';
import { techSupportCategories } from '../../constants';

const TechSupportSection = ({ lang }: { lang: Language }) => {
    const t = translations[lang].tech_support;

    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: React.ComponentType<any> } = {
            'database': Database,
            'building': Building2,
            'flame': Flame
        };
        return iconMap[iconName] || Database;
    };

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string, border: string, text: string } } = {
            'blue': { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600' },
            'emerald': { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-600' },
            'orange': { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-600' }
        };
        return colorMap[color] || colorMap['blue'];
    };

    return (
        <div className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t.title}</h2>
                    <p className="text-slate-500 text-sm">{t.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {techSupportCategories.map((category) => {
                        const Icon = getIcon(category.icon);
                        const colors = getColorClasses(category.color);
                        const title = lang === 'zh' ? category.title_zh : category.title_en;
                        const desc = lang === 'zh' ? category.desc_zh : category.desc_en;
                        const items = lang === 'zh' ? category.items_zh : category.items_en;
                        return (
                            <div key={category.id} className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-xl transition-all duration-300 group shadow-sm">
                                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} mb-6 group-hover:bg-opacity-80 transition-colors border ${colors.border}`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                                <p className="text-slate-500 mb-5 leading-relaxed text-sm">{desc}</p>
                                <div className="space-y-2">
                                    {items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                            <Check size={14} className={colors.text} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TechSupportSection;
