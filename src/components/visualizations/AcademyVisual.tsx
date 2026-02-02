import React from 'react';
import { BookOpen, ShieldCheck, FileText } from 'lucide-react';

const AcademyVisual = () => (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xl relative">
        <div className="absolute top-4 right-4 text-blue-500">
            <BookOpen size={24} />
        </div>
        <div className="space-y-6">
            <div>
                <h4 className="text-slate-400 text-xs uppercase mb-2">Current Course</h4>
                <h3 className="text-xl font-bold text-slate-900">DeFi Advanced Strategies</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-slate-50 p-3 rounded border border-slate-100 flex flex-col gap-2">
                        <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center text-blue-500">
                            {i === 1 ? <ShieldCheck size={16} /> : <FileText size={16} />}
                        </div>
                        <div className="h-1.5 bg-slate-200 rounded w-2/3" />
                    </div>
                ))}
            </div>
            <button className="w-full py-2 bg-blue-50 text-blue-600 border border-blue-100 rounded font-bold text-sm hover:bg-blue-100 transition-colors">
                Resume Learning
            </button>
        </div>
    </div>
);

export default AcademyVisual;
