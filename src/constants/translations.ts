import { TranslationSchema } from '../types';

export type Language = 'en' | 'zh';

export const translations: Record<Language, TranslationSchema> = {
    en: {
        nav: { services: "Modules", partners: "Partners", login: "Launch Terminal" },
        hero: {
            badge: "H LABS ECOSYSTEM OS v2.0",
            title: 'H-Labs Ecosystem OS',
            subtitle: 'Trusted by 400+ partners. The definitive Web3 Growth Engine combining AI-driven analytics, global KOL networks, and automated bounty systems to scale your project from launch to dominance.',
            buttons: {
                primary: 'Launch Terminal',
                secondary: 'View Demo'
            },
            stats: {
                tvl: 'Total Value Locked',
                volume: 'Trading Volume',
                partners: 'Strategic Partners'
            }
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
            title: 'H-Labs 生态操作系统',
            subtitle: '400+ 合作伙伴信赖。Web3 增长引擎，集成了 AI 驱动的分析、全球 KOL 网络和自动赏金系统，助您的项目从启动到主导市场。',
            buttons: {
                primary: '启动终端',
                secondary: '查看演示'
            },
            stats: {
                tvl: '总锁定价值',
                volume: '交易量',
                partners: '战略合作伙伴'
            }
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
