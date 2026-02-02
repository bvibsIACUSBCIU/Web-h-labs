import React from 'react';
import { Twitter, Mic, Globe } from 'lucide-react';
import { translations, Language } from '../../constants/translations';
import { mediaInfluenceCategories } from '../../constants';

const MediaInfluenceSection = ({ lang }: { lang: Language }) => {
    const t = translations[lang].media_influence;

    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: React.ComponentType<any> } = {
            'twitter': Twitter,
            'mic': Mic,
            'globe': Globe
        };
        return iconMap[iconName] || Twitter;
    };

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string, text: string } } = {
            'sky': { bg: 'bg-sky-50', text: 'text-sky-600' },
            'purple': { bg: 'bg-purple-50', text: 'text-purple-600' },
            'amber': { bg: 'bg-amber-50', text: 'text-amber-600' }
        };
        return colorMap[color] || colorMap['sky'];
    };

    return (
        <div className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t.title}</h2>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {mediaInfluenceCategories.map((category) => {
                        const Icon = getIcon(category.icon);
                        const colors = getColorClasses(category.color);
                        const title = lang === 'zh' ? category.title_zh : category.title_en;
                        const desc = lang === 'zh' ? category.desc_zh : category.desc_en;
                        return (
                            <div key={category.id} className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-xl transition-all duration-300 group shadow-sm">
                                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} mb-4`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MediaInfluenceSection;
