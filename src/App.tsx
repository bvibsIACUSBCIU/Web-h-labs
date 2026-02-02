import React, { useState } from 'react';
import { Target, Users, GraduationCap, PieChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Language } from './constants/translations';

// Landing Components
import LandingHero from './components/landing/LandingHero';
import ServicesSection from './components/landing/ServicesSection';
import TechSupportSection from './components/landing/TechSupportSection';
import MediaInfluenceSection from './components/landing/MediaInfluenceSection';
import { FeatureSectionRight, FeatureSectionLeft } from './components/landing/FeatureSections';

// Visualization Components
import { Suspense, lazy } from 'react';

// Visualization Components - Lazy Loaded
const WarRoomVisual = lazy(() => import('./components/visualizations/WarRoomVisual'));
const KolVisual = lazy(() => import('./components/visualizations/KolVisual'));
const BountyVisual = lazy(() => import('./components/visualizations/BountyVisual'));
const AcademyVisual = lazy(() => import('./components/visualizations/AcademyVisual'));
const FundVisual = lazy(() => import('./components/visualizations/FundVisual'));

// Layout Components
import PartnersAndMedia from './components/layout/PartnersAndMedia';
import LandingFooter from './components/layout/LandingFooter';

import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  // 跳转到外部终端
  const handleLaunchTerminal = () => {
    window.location.href = 'https://app.hlabs.me';
  };

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  // Helper for tags array casting
  const getTags = (key: string) => t(key, { returnObjects: true }) as string[];

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200">
        <Helmet>
          <title>{lang === 'en' ? 'H-Labs Ecosystem OS - Web3 Growth Engine' : 'H-Labs 生态操作系统 - Web3 增长引擎'}</title>
          <meta name="description" content={t('hero.subtitle')} />
          <meta property="og:title" content="H-Labs Ecosystem OS" />
          <meta property="og:description" content={t('hero.subtitle')} />
        </Helmet>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-slate-50">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 text-orange-600"></div>
              <div className="text-sm font-mono text-slate-400">LOADING H-OS...</div>
            </div>
          </div>
        }>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-slate-50">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 text-orange-600"></div>
                <div className="text-sm font-mono text-slate-400">LOADING H-OS...</div>
              </div>
            </div>
          }>
            <div className="animate-in fade-in zoom-in-95 duration-700">
              <nav className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-sm bg-orange-600 flex items-center justify-center text-white font-bold text-xl">H</div>
                  <span className="font-bold text-lg tracking-tight text-slate-900">LABS</span>
                </div>

                <div className="flex items-center gap-8">
                  <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
                    <a href="#" className="hover:text-slate-900 transition-colors">{t('nav.services')}</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">{t('nav.partners')}</a>
                  </div>

                  {/* Language Switcher */}
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                    <button onClick={() => changeLanguage('en')} className={`${lang === 'en' ? 'text-slate-900' : 'hover:text-slate-600'}`}>EN</button>
                    <button onClick={() => changeLanguage('zh')} className={`${lang === 'zh' ? 'text-slate-900' : 'hover:text-slate-600'}`}>中文</button>
                  </div>

                  <button onClick={handleLaunchTerminal} className="px-6 py-2.5 bg-slate-900 text-white font-bold text-sm rounded hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                    {t('nav.login')}
                  </button>
                </div>
              </nav>

              <LandingHero onEnter={handleLaunchTerminal} />

              <ServicesSection />

              <TechSupportSection />

              <FeatureSectionRight
                title={t('features.war_room.title')}
                subtitle={t('features.war_room.subtitle')}
                desc={t('features.war_room.desc')}
                tags={getTags('features.war_room.tags')}
                color="red"
                icon={Target}
                illustration={<WarRoomVisual />}
              />

              <MediaInfluenceSection />

              <FeatureSectionLeft
                title={t('features.kol.title')}
                subtitle={t('features.kol.subtitle')}
                desc={t('features.kol.desc')}
                tags={getTags('features.kol.tags')}
                color="purple"
                icon={Users}
                illustration={<KolVisual />}
              />

              <FeatureSectionRight
                title={t('features.bounty.title')}
                subtitle={t('features.bounty.subtitle')}
                desc={t('features.bounty.desc')}
                tags={getTags('features.bounty.tags')}
                color="emerald"
                icon={Target}
                illustration={<BountyVisual />}
              />

              <FeatureSectionLeft
                title={t('features.academy.title')}
                subtitle={t('features.academy.subtitle')}
                desc={t('features.academy.desc')}
                tags={getTags('features.academy.tags')}
                color="blue"
                icon={GraduationCap}
                illustration={<AcademyVisual />}
              />

              <FeatureSectionRight
                title={t('features.fund.title')}
                subtitle={t('features.fund.subtitle')}
                desc={t('features.fund.desc')}
                tags={getTags('features.fund.tags')}
                color="yellow"
                icon={PieChart}
                illustration={<FundVisual />}
              />

              <PartnersAndMedia />
              <LandingFooter />
            </div>
          </Suspense>
        </Suspense>
      </div>
    </HelmetProvider >
  );
}
