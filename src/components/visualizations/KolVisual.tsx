import React from 'react';
import { Users, Eye } from 'lucide-react';

const KolVisual = () => (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xl relative">
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col items-center">
                <Users size={24} className="text-purple-600 mb-2" />
                <span className="text-2xl font-bold text-slate-900">125K</span>
                <span className="text-xs text-slate-500">Followers</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col items-center">
                <Eye size={24} className="text-purple-600 mb-2" />
                <span className="text-2xl font-bold text-slate-900">2.4M</span>
                <span className="text-xs text-slate-500">Impressions</span>
            </div>
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg border border-purple-200 text-center">
            <div className="text-sm text-purple-600 font-bold mb-2">H-CLUB STATUS</div>
            <div className="text-3xl font-bold text-purple-900 tracking-widest">ELITE</div>
        </div>
        <div className="mt-4 flex justify-center gap-[-10px]">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white -ml-2 first:ml-0 relative z-10 flex items-center justify-center text-xs text-slate-500 shadow-sm">
                    {i}
                </div>
            ))}
        </div>
    </div>
);

export default KolVisual;
