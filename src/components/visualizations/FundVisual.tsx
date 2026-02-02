import React from 'react';
import { PieChart } from 'lucide-react';

const FundVisual = () => (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xl flex flex-col items-center justify-center relative min-h-[250px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-50 to-transparent pointer-events-none" />
        <PieChart size={64} className="text-yellow-500 mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 mb-1">$120M+</h3>
        <p className="text-slate-500 text-sm mb-6">Assets Under Management</p>

        <div className="flex gap-4 w-full px-4">
            <div className="flex-1 bg-slate-50 p-2 rounded text-center border border-slate-100">
                <div className="text-yellow-500 font-bold">35+</div>
                <div className="text-[10px] text-slate-500">Portfolio</div>
            </div>
            <div className="flex-1 bg-slate-50 p-2 rounded text-center border border-slate-100">
                <div className="text-green-500 font-bold">12x</div>
                <div className="text-[10px] text-slate-500">Avg ROI</div>
            </div>
        </div>
    </div>
);

export default FundVisual;
