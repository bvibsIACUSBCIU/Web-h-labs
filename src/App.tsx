import React, { useState } from 'react';
import { Target, Users, GraduationCap, PieChart } from 'lucide-react';
import { translations, Language } from './constants/translations';

// Landing Components
import LandingHero from './components/landing/LandingHero';
import ServicesSection from './components/landing/ServicesSection';
import TechSupportSection from './components/landing/TechSupportSection';
import MediaInfluenceSection from './components/landing/MediaInfluenceSection';
import { FeatureSectionRight, FeatureSectionLeft } from './components/landing/FeatureSections';

// Visualization Components
import WarRoomVisual from './components/visualizations/WarRoomVisual';
import KolVisual from './components/visualizations/KolVisual';
import BountyVisual from './components/visualizations/BountyVisual';
import AcademyVisual from './components/visualizations/AcademyVisual';
import FundVisual from './components/visualizations/FundVisual';

// Layout Components
import PartnersAndMedia from './components/layout/PartnersAndMedia';
import LandingFooter from './components/layout/LandingFooter';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');

  // 跳转到外部终端
  const handleLaunchTerminal = () => {
    window.location.href = 'https://app.hlabs.me';
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200">
      <div className="animate-in fade-in zoom-in-95 duration-700">
        <nav className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-orange-600 flex items-center justify-center text-white font-bold text-xl">H</div>
            <span className="font-bold text-lg tracking-tight text-slate-900">LABS</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <a href="#" className="hover:text-slate-900 transition-colors">{translations[lang].nav.services}</a>
              <a href="#" className="hover:text-slate-900 transition-colors">{translations[lang].nav.partners}</a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
              <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-slate-900' : 'hover:text-slate-600'}`}>EN</button>
              <button onClick={() => setLang('zh')} className={`${lang === 'zh' ? 'text-slate-900' : 'hover:text-slate-600'}`}>中文</button>
            </div>

            <button onClick={handleLaunchTerminal} className="px-6 py-2.5 bg-slate-900 text-white font-bold text-sm rounded hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
              {translations[lang].nav.login}
            </button>
          </div>
        </nav>

        <LandingHero onEnter={handleLaunchTerminal} lang={lang} />

        <ServicesSection lang={lang} />

        <TechSupportSection lang={lang} />

        <FeatureSectionRight
          title={translations[lang].features.war_room.title}
          subtitle={translations[lang].features.war_room.subtitle}
          desc={translations[lang].features.war_room.desc}
          tags={translations[lang].features.war_room.tags}
          color="red"
          icon={Target}
          illustration={<WarRoomVisual />}
        />

        <MediaInfluenceSection lang={lang} />

        <FeatureSectionLeft
          title={translations[lang].features.kol.title}
          subtitle={translations[lang].features.kol.subtitle}
          desc={translations[lang].features.kol.desc}
          tags={translations[lang].features.kol.tags}
          color="purple"
          icon={Users}
          illustration={<KolVisual />}
        />

        <FeatureSectionRight
          title={translations[lang].features.bounty.title}
          subtitle={translations[lang].features.bounty.subtitle}
          desc={translations[lang].features.bounty.desc}
          tags={translations[lang].features.bounty.tags}
          color="emerald"
          icon={Target}
          illustration={<BountyVisual />}
        />

        <FeatureSectionLeft
          title={translations[lang].features.academy.title}
          subtitle={translations[lang].features.academy.subtitle}
          desc={translations[lang].features.academy.desc}
          tags={translations[lang].features.academy.tags}
          color="blue"
          icon={GraduationCap}
          illustration={<AcademyVisual />}
        />

        <FeatureSectionRight
          title={translations[lang].features.fund.title}
          subtitle={translations[lang].features.fund.subtitle}
          desc={translations[lang].features.fund.desc}
          tags={translations[lang].features.fund.tags}
          color="yellow"
          icon={PieChart}
          illustration={<FundVisual />}
        />

        <PartnersAndMedia lang={lang} />
        <LandingFooter lang={lang} />
      </div>
    </div>
  );
}
