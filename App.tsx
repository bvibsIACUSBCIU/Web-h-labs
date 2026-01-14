import React, { useState } from 'react';
import {
  Cpu,
  TrendingUp,
  ArrowRight,
  Users,
  Activity,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
  Newspaper,
  Megaphone,
  Terminal,
  Target,
  Coins,
  GraduationCap,
  FileText,
  PieChart,
  Eye,
  Lightbulb,
  Database,
  Building2,
  Flame,
  Twitter,
  Mic,
  Globe,
  Check
} from 'lucide-react';

import {
  strategicPartners,
  mediaPartners,
  techSupportCategories,
  mediaInfluenceCategories
} from './constants';

// --- TYPES & TRANSLATIONS ---

type Language = 'en' | 'zh';

const translations = {
  en: {
    nav: { services: "Modules", partners: "Partners", login: "Launch Terminal" },
    hero: {
      badge: "H LABS ECOSYSTEM OS v2.0",
      title: "The Operating System for Web3 Growth.",
      subtitle: "Integrated Intelligence, Traffic, Capital, and Task execution in one terminal.",
      cta1: "Launch Terminal",
      cta2: "View Documentation",
      stats: { users: "Active Users", tvl: "Ecosystem TVL", tasks: "Tasks Completed", partners: "Partners" }
    },
    services_section: {
      title: "Venture Building Services",
      subtitle: "Comprehensive Incubation Support",
      tech: {
        title: "Technology Empowerment",
        desc: "Full-stack Web3 development from L1/L2 chains to dApps. We provide rigorous smart contract audits and scalable architecture design.",
        tags: ["L1/L2 Dev", "Smart Contracts", "Audits"]
      },
      brand: {
        title: "Brand Planning",
        desc: "Zero-to-one narrative construction. We specialize in Tokenomics design, whitepaper creation, and global Go-To-Market strategies.",
        tags: ["Tokenomics", "Narrative", "GTM Strategy"]
      },
      media: {
        title: "Media Operations",
        desc: "Global traffic acquisition and influence amplification. Comprehensive PR distribution, community management, and offline event coordination.",
        tags: ["Global PR", "Community", "Events"]
      }
    },
    features: {
      war_room: {
        title: "War Room Intelligence",
        subtitle: "Stay Ahead of the Market",
        desc: "Aggregate real-time data from Macro, On-chain, and Social signals. Track whales and smart money flows instantly.",
        tags: ["Alpha Stream", "Whale Tracking", "Narrative Radar"]
      },
      kol: {
        title: "KOL Traffic Matrix",
        subtitle: "Monetize Influence",
        desc: "Connect your Twitter account to visualize your impact. Join the H-Club for exclusive allocations and mutual growth opportunities.",
        tags: ["Data Analytics", "Mutual Growth", "Exclusive Allocation"]
      },
      bounty: {
        title: "Bounty Hall",
        subtitle: "Proof of Work & Earn",
        desc: "Participate in curated high-value tasks. From CEX campaigns to on-chain interactions and airdrop hunting.",
        tags: ["Airdrop Hunter", "CEX Campaigns", "On-Chain Tasks"]
      },
      academy: {
        title: "H-Academy",
        subtitle: "Knowledge Base",
        desc: "Master Web3 with structured courses ranging from DeFi basics to advanced security and investment strategies.",
        tags: ["Research", "Security", "DeFi Mastery"]
      },
      fund: {
        title: "H-Fund Portfolio",
        subtitle: "Institutional Capital",
        desc: "Access institutional-grade asset management. View portfolio performance and request access to LP opportunities.",
        tags: ["Asset Management", "Incubation", "Venture Capital"]
      }
    },
    partners: {
      title: "Strategic Partners",
      subtitle: "Ecosystem Backers",
      media_title: "Media Alliance"
    },
    footer: {
      rights: "© 2024 H Labs Ecosystem.",
      links: ["Modules", "Partners", "Twitter", "Contact"]
    },
    tech_support: {
      title: "Hardcore Tech Support",
      subtitle: "Comprehensive Solutions from 0 to 1 for Web3 Projects"
    },
    media_influence: {
      title: "H Media Influence Matrix",
      subtitle: "Proprietary Traffic Factory + KOL Influence Academy + Brand Ecosystem"
    }
  },
  zh: {
    nav: { services: "核心模块", partners: "合作伙伴", login: "启动终端" },
    hero: {
      badge: "H LABS 生态操作系统 v2.0",
      title: "Web3 增长引擎操作系统",
      subtitle: "集成情报作战室、流量矩阵、资金管理与任务执行的一站式终端。",
      cta1: "启动终端",
      cta2: "查看文档",
      stats: { users: "活跃用户", tvl: "生态 TVL", tasks: "完成任务", partners: "合作伙伴" }
    },
    services_section: {
      title: "全生态孵化服务",
      subtitle: "核心业务板块",
      tech: {
        title: "技术赋能",
        desc: "从公链到底层协议的全栈开发支持。我们提供智能合约审计协调、技术架构设计以及高性能 DApp 开发。",
        tags: ["公链开发", "智能合约", "代码审计"]
      },
      brand: {
        title: "品牌策划",
        desc: "从 0 到 1 的叙事构建与品牌孵化。涵盖代币经济学设计 (Tokenomics)、白皮书撰写及市场定位策略。",
        tags: ["代币经济学", "叙事构建", "市场策略"]
      },
      media: {
        title: "媒体运营",
        desc: "全球化流量获取与影响力放大。提供全渠道 PR 宣发、社区冷启动与管理，以及全球线下活动策划。",
        tags: ["全球 PR", "社区运营", "线下活动"]
      }
    },
    features: {
      war_room: {
        title: "情报作战室",
        subtitle: "时刻领先市场",
        desc: "聚合宏观、链上及社交信号的实时数据。即时追踪巨鲸动向与聪明钱流向，捕捉 Alpha 机会。",
        tags: ["Alpha 情报流", "巨鲸追踪", "叙事雷达"]
      },
      kol: {
        title: "KOL 流量矩阵",
        subtitle: "影响力变现",
        desc: "连接推特账户，可视化您的影响力数据。加入 H-Club 获取独家额度与互推互粉的增长机会。",
        tags: ["数据分析", "互助增长", "独家额度"]
      },
      bounty: {
        title: "赏金大厅",
        subtitle: "工作量证明与收益",
        desc: "参与精选的高价值任务。从 CEX 拉新活动到链上交互与空投猎手指南，赚取丰厚回报。",
        tags: ["空投猎手", "CEX 活动", "链上交互"]
      },
      academy: {
        title: "H-学院",
        subtitle: "Web3 知识库",
        desc: "通过系统化课程掌握 Web3，涵盖从 DeFi 基础操作到高级安全防护与投研策略。",
        tags: ["深度投研", "安全风控", "DeFi 进阶"]
      },
      fund: {
        title: "H-基金组合",
        subtitle: "机构级资本",
        desc: "访问机构级资产管理服务。查看投资组合表现，合格投资者可申请 LP 份额。",
        tags: ["资产管理", "项目孵化", "风险投资"]
      }
    },
    partners: {
      title: "战略合作伙伴",
      subtitle: "生态支持者",
      media_title: "合作媒体联盟"
    },
    footer: {
      rights: "© 2024 H Labs Ecosystem.",
      links: ["核心模块", "合作伙伴", "推特", "联系我们"]
    },
    tech_support: {
      title: "硬核技术支持",
      subtitle: "为 Web3 项目提供 0 到 1 的全套解决方案与赛道支持。"
    },
    media_influence: {
      title: "H Media 影响力矩阵",
      subtitle: "自有流量工厂 + KOL 影响力学院 + 品牌全案"
    }
  }
};

// --- LANDING PAGE COMPONENTS ---

const LandingHero = ({ onEnter, lang }: { onEnter: () => void, lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-fast" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4 animate-fade-in shadow-[0_0_15px_rgba(79,70,229,0.2)]">
          <Terminal size={12} />
          {t.badge}
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 leading-tight">
          H LABS OS
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
          {t.subtitle}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={onEnter}
            className="group relative px-10 py-4 bg-indigo-600 text-white font-bold rounded-sm hover:bg-indigo-500 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(79,70,229,0.4)]"
          >
            {t.cta1}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-4 bg-slate-900/50 border border-slate-700 text-white font-medium rounded-sm hover:bg-slate-800 transition-all flex items-center gap-2 backdrop-blur-sm">
            {t.cta2}
            <FileText size={20} className="text-slate-400" />
          </button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-8 border-t border-slate-800/50 w-full max-w-4xl mx-auto">
          {[
            { label: t.stats.users, value: "12,500+" },
            { label: t.stats.tvl, value: "$240M+" },
            { label: t.stats.tasks, value: "450K+" },
            { label: t.stats.partners, value: "400+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white font-mono">{stat.value}</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services_section;
  return (
    <div className="py-24 bg-[#050b1d] border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-indigo-500 font-mono text-sm uppercase tracking-widest mb-2">{t.subtitle}</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tech Empowerment */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-xl hover:border-blue-500/40 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Cpu size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.tech.title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              {t.tech.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.tech.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Brand Planning */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-xl hover:border-purple-500/40 transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.brand.title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              {t.brand.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.brand.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Media Operations */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-xl hover:border-orange-500/40 transition-all duration-300 group">
            <div className="w-14 h-14 bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Megaphone size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.media.title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              {t.media.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.media.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
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

// --- 硬核技术支持组件 ---
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
      'blue': { bg: 'bg-blue-900/20', border: 'border-blue-500/30', text: 'text-blue-400' },
      'emerald': { bg: 'bg-emerald-900/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
      'orange': { bg: 'bg-orange-900/20', border: 'border-orange-500/30', text: 'text-orange-400' }
    };
    return colorMap[color] || colorMap['blue'];
  };

  return (
    <div className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.title}</h2>
          <p className="text-slate-400 text-sm">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {techSupportCategories.map((category) => {
            const Icon = getIcon(category.icon);
            const colors = getColorClasses(category.color);
            const title = lang === 'zh' ? category.title_zh : category.title_en;
            const desc = lang === 'zh' ? category.desc_zh : category.desc_en;
            const items = lang === 'zh' ? category.items_zh : category.items_en;
            return (
              <div key={category.id} className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl hover:border-opacity-60 transition-all duration-300 group">
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} mb-6 group-hover:bg-opacity-80 transition-colors border ${colors.border}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 mb-5 leading-relaxed text-sm">{desc}</p>
                <div className="space-y-2">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
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

// --- H Media 影响力矩阵组件 ---
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
      'sky': { bg: 'bg-sky-900/20', text: 'text-sky-400' },
      'purple': { bg: 'bg-purple-900/20', text: 'text-purple-400' },
      'amber': { bg: 'bg-amber-900/20', text: 'text-amber-400' }
    };
    return colorMap[color] || colorMap['sky'];
  };

  return (
    <div className="py-24 bg-[#020617] border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.title}</h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mediaInfluenceCategories.map((category) => {
            const Icon = getIcon(category.icon);
            const colors = getColorClasses(category.color);
            const title = lang === 'zh' ? category.title_zh : category.title_en;
            const desc = lang === 'zh' ? category.desc_zh : category.desc_en;
            return (
              <div key={category.id} className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-all duration-300 group">
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Feature Section Layout Right (Text Left, Image Right)
const FeatureSectionRight = ({
  title, subtitle, desc, tags, color, icon: Icon, illustration
}: {
  title: string, subtitle: string, desc: string, tags: string[], color: string, icon: any, illustration: React.ReactNode
}) => (
  <div className="py-24 relative overflow-hidden border-t border-slate-900 bg-slate-950">
    <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-${color}-900/10 rounded-full blur-[100px] pointer-events-none`} />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div className="space-y-8">
        <div className={`inline-flex items-center justify-center p-3 bg-${color}-500/10 rounded-xl`}>
          <Icon size={32} className={`text-${color}-500`} />
        </div>
        <div>
          <h3 className={`text-${color}-500 font-mono text-sm uppercase tracking-widest mb-2`}>{subtitle}</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{title}</h2>
        </div>
        <p className="text-slate-400 text-lg leading-relaxed">
          {desc}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span key={i} className={`px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-300 font-mono`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/20 to-transparent blur-3xl -z-10`} />
        {illustration}
      </div>
    </div>
  </div>
);

// Feature Section Layout Left (Text Right, Image Left)
const FeatureSectionLeft = ({
  title, subtitle, desc, tags, color, icon: Icon, illustration
}: {
  title: string, subtitle: string, desc: string, tags: string[], color: string, icon: any, illustration: React.ReactNode
}) => (
  <div className="py-24 relative overflow-hidden border-t border-slate-900 bg-[#020617]">
    <div className={`absolute top-0 left-0 w-[500px] h-[500px] bg-${color}-900/10 rounded-full blur-[100px] pointer-events-none`} />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div className="order-2 lg:order-1 relative">
        <div className={`absolute inset-0 bg-gradient-to-l from-${color}-500/20 to-transparent blur-3xl -z-10`} />
        {illustration}
      </div>
      <div className="order-1 lg:order-2 space-y-8">
        <div className={`inline-flex items-center justify-center p-3 bg-${color}-500/10 rounded-xl`}>
          <Icon size={32} className={`text-${color}-500`} />
        </div>
        <div>
          <h3 className={`text-${color}-500 font-mono text-sm uppercase tracking-widest mb-2`}>{subtitle}</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{title}</h2>
        </div>
        <p className="text-slate-400 text-lg leading-relaxed">
          {desc}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span key={i} className={`px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-300 font-mono`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- MODULE VISUALIZATIONS ---

const WarRoomVisual = () => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl relative overflow-hidden">
    <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        <span className="text-white font-mono text-sm">LIVE FEED</span>
      </div>
      <span className="text-slate-500 font-mono text-xs">ETH-USDT PERP</span>
    </div>
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4 p-3 bg-slate-950/50 rounded-lg border border-slate-800/50">
          <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-slate-400">
            {i === 1 ? <Activity size={20} /> : i === 2 ? <Target size={20} /> : <TrendingUp size={20} />}
          </div>
          <div className="flex-1">
            <div className="h-2 bg-slate-800 rounded w-3/4 mb-2" />
            <div className="h-2 bg-slate-800 rounded w-1/2" />
          </div>
          <div className="text-right">
            <div className={`text-xs font-mono px-2 py-1 rounded ${i === 1 ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
              {i === 1 ? 'BUY' : 'HIGH'}
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Floating overlay */}
    <div className="absolute bottom-6 right-6 bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-lg shadow-xl">
      <div className="text-xs text-slate-400 mb-1">Sentiment</div>
      <div className="text-2xl font-bold text-green-400 flex items-center gap-2">
        Bullish <TrendingUp size={20} />
      </div>
    </div>
  </div>
);

const KolVisual = () => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl relative">
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col items-center">
        <Users size={24} className="text-purple-500 mb-2" />
        <span className="text-2xl font-bold text-white">125K</span>
        <span className="text-xs text-slate-500">Followers</span>
      </div>
      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col items-center">
        <Eye size={24} className="text-purple-500 mb-2" />
        <span className="text-2xl font-bold text-white">2.4M</span>
        <span className="text-xs text-slate-500">Impressions</span>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 p-4 rounded-lg border border-purple-500/20 text-center">
      <div className="text-sm text-purple-300 font-bold mb-2">H-CLUB STATUS</div>
      <div className="text-3xl font-bold text-white tracking-widest">ELITE</div>
    </div>
    <div className="mt-4 flex justify-center gap-[-10px]">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 -ml-2 first:ml-0 relative z-10 flex items-center justify-center text-xs text-slate-400">
          {i}
        </div>
      ))}
    </div>
  </div>
);

const BountyVisual = () => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
    <div className="space-y-3">
      <div className="p-4 bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-900/30 rounded-lg flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-900/30 rounded flex items-center justify-center text-emerald-400">
            <Coins size={20} />
          </div>
          <div>
            <div className="text-white font-bold">Airdrop Task #102</div>
            <div className="text-xs text-emerald-400">ZkSync Era</div>
          </div>
        </div>
        <div className="text-white font-mono font-bold">$500+</div>
      </div>
      <div className="p-4 bg-slate-950/50 border border-slate-800 rounded-lg flex justify-between items-center opacity-60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-slate-400">
            <Target size={20} />
          </div>
          <div>
            <div className="text-white font-bold">CEX Campaign</div>
            <div className="text-xs text-slate-400">Binance</div>
          </div>
        </div>
        <div className="text-white font-mono font-bold">$50</div>
      </div>
    </div>
    <div className="mt-6">
      <div className="flex justify-between text-xs text-slate-500 mb-1">
        <span>Task Progress</span>
        <span>85%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 w-[85%]" />
      </div>
    </div>
  </div>
);

const AcademyVisual = () => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl relative">
    <div className="absolute top-4 right-4 text-blue-500">
      <BookOpen size={24} />
    </div>
    <div className="space-y-6">
      <div>
        <h4 className="text-slate-400 text-xs uppercase mb-2">Current Course</h4>
        <h3 className="text-xl font-bold text-white">DeFi Advanced Strategies</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-slate-950 p-3 rounded border border-slate-800 flex flex-col gap-2">
            <div className="w-8 h-8 bg-blue-900/20 rounded flex items-center justify-center text-blue-400">
              {i === 1 ? <ShieldCheck size={16} /> : <FileText size={16} />}
            </div>
            <div className="h-1.5 bg-slate-800 rounded w-2/3" />
          </div>
        ))}
      </div>
      <button className="w-full py-2 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded font-mono text-sm">
        Resume Learning
      </button>
    </div>
  </div>
);

const FundVisual = () => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl flex flex-col items-center justify-center relative min-h-[250px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 to-transparent pointer-events-none" />
    <PieChart size={64} className="text-yellow-500 mb-4" />
    <h3 className="text-2xl font-bold text-white mb-1">$120M+</h3>
    <p className="text-slate-400 text-sm mb-6">Assets Under Management</p>

    <div className="flex gap-4 w-full px-4">
      <div className="flex-1 bg-slate-950 p-2 rounded text-center border border-slate-800">
        <div className="text-yellow-500 font-bold">35+</div>
        <div className="text-[10px] text-slate-500">Portfolio</div>
      </div>
      <div className="flex-1 bg-slate-950 p-2 rounded text-center border border-slate-800">
        <div className="text-green-500 font-bold">12x</div>
        <div className="text-[10px] text-slate-500">Avg ROI</div>
      </div>
    </div>
  </div>
);

// --- PARTNERS & FOOTER ---

const PartnersAndMedia = ({ lang }: { lang: Language }) => {
  const t = translations[lang].partners;
  return (
    <div className="py-24 border-t border-slate-900 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Strategic Partners */}
        <div className="mb-20 text-center">
          <h3 className="text-indigo-500 font-bold mb-2">{t.subtitle}</h3>
          <h2 className="text-3xl font-bold text-white mb-12">{t.title}</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {strategicPartners.map((partner, i) => (
              <div key={i} className="group flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    filter: 'grayscale(100%) brightness(0.8)',
                    maxWidth: '140px'
                  }}
                  title={partner.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div className="text-center pt-12 border-t border-slate-800/50">
          <h2 className="text-2xl font-bold text-white mb-10">{t.media_title}</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {mediaPartners.map((media, i) => (
              <div key={i} className="group flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                <img
                  src={media.logo}
                  alt={media.name}
                  className="h-6 md:h-8 w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    filter: 'grayscale(100%) brightness(0.8)',
                    maxWidth: '120px'
                  }}
                  title={media.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingFooter = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
      <div className="flex justify-center gap-6 mb-8 text-slate-400 text-sm">
        {t.links.map((link, i) => (
          <a key={i} href="#" className="hover:text-white transition-colors">{link}</a>
        ))}
      </div>
      <p className="text-slate-600 text-xs">{t.rights}</p>
    </footer>
  );
};

// --- MAIN APP ---

export default function App() {
  const [lang, setLang] = useState<Language>('zh');

  // 跳转到外部终端
  const handleLaunchTerminal = () => {
    window.location.href = 'https://app.hlabs.me';
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30">
      <div className="animate-in fade-in zoom-in-95 duration-700">
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-slate-950/80 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-sm flex items-center justify-center text-white font-bold font-mono shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              H
            </div>
            <span className="font-bold text-lg tracking-tight">H Labs</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-white transition-colors">{translations[lang].nav.services}</a>
              <a href="#" className="hover:text-white transition-colors">{translations[lang].nav.partners}</a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-xs font-mono border border-slate-800 rounded px-2 py-1">
              <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-white font-bold' : 'text-slate-500 hover:text-slate-300'}`}>EN</button>
              <span className="text-slate-700">|</span>
              <button onClick={() => setLang('zh')} className={`${lang === 'zh' ? 'text-white font-bold' : 'text-slate-500 hover:text-slate-300'}`}>中文</button>
            </div>

            <button onClick={handleLaunchTerminal} className="text-sm font-medium text-white hover:text-indigo-400 transition-colors">
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
