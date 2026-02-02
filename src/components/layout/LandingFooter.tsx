import React from 'react';
import { translations, Language } from '../../constants/translations';

const LandingFooter = ({ lang }: { lang: Language }) => {
    const t = translations[lang].footer;
    return (
        <footer className="bg-white py-12 border-t border-slate-100 text-center">
            <div className="flex justify-center gap-8 mb-8 text-slate-500 text-sm font-medium">
                {t.links.map((link, i) => (
                    <a key={i} href="#" className="hover:text-slate-900 transition-colors">{link}</a>
                ))}
            </div>
            <p className="text-slate-400 text-xs">{t.rights}</p>
        </footer>
    );
};

export default LandingFooter;
