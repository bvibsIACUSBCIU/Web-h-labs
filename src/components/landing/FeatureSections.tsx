import React from 'react';

// Feature Section Layout Right (Text Left, Image Right)
export const FeatureSectionRight = ({
    title, subtitle, desc, tags, color, icon: Icon, illustration
}: {
    title: string, subtitle: string, desc: string, tags: string[], color: string, icon: any, illustration: React.ReactNode
}) => (
    <div className="py-24 relative overflow-hidden border-t border-slate-100 bg-white">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-${color}-50 rounded-full blur-[100px] pointer-events-none`} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
                <div className={`inline-flex items-center justify-center p-3 bg-${color}-50 rounded-xl`}>
                    <Icon size={32} className={`text-${color}-600`} />
                </div>
                <div>
                    <h3 className={`text-${color}-600 font-bold text-sm uppercase tracking-widest mb-2`}>{subtitle}</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">{title}</h2>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag, i) => (
                        <span key={i} className={`px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-600 font-bold`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-${color}-100/40 to-transparent blur-3xl -z-10`} />
                {illustration}
            </div>
        </div>
    </div>
);

// Feature Section Layout Left (Text Right, Image Left)
export const FeatureSectionLeft = ({
    title, subtitle, desc, tags, color, icon: Icon, illustration
}: {
    title: string, subtitle: string, desc: string, tags: string[], color: string, icon: any, illustration: React.ReactNode
}) => (
    <div className="py-24 relative overflow-hidden border-t border-slate-100 bg-slate-50">
        <div className={`absolute top-0 left-0 w-[500px] h-[500px] bg-${color}-50 rounded-full blur-[100px] pointer-events-none`} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="order-2 lg:order-1 relative">
                <div className={`absolute inset-0 bg-gradient-to-l from-${color}-100/40 to-transparent blur-3xl -z-10`} />
                {illustration}
            </div>
            <div className="order-1 lg:order-2 space-y-8">
                <div className={`inline-flex items-center justify-center p-3 bg-${color}-50 rounded-xl`}>
                    <Icon size={32} className={`text-${color}-600`} />
                </div>
                <div>
                    <h3 className={`text-${color}-600 font-bold text-sm uppercase tracking-widest mb-2`}>{subtitle}</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">{title}</h2>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag, i) => (
                        <span key={i} className={`px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-600 font-bold`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
