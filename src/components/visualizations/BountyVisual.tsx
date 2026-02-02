import React from 'react';
import { Coins, Target } from 'lucide-react';

const BountyVisual = () => (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xl">
        <div className="space-y-3">
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-transparent border border-emerald-100 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100/50 rounded flex items-center justify-center text-emerald-600">
                        <Coins size={20} />
                    </div>
                    <div>
                        <div className="text-slate-900 font-bold">Airdrop Task #102</div>
                        <div className="text-xs text-emerald-600">ZkSync Era</div>
                    </div>
                </div>
                <div className="text-slate-900 font-mono font-bold">$500+</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center opacity-70">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white border border-slate-200 rounded flex items-center justify-center text-slate-400">
                        <Target size={20} />
                    </div>
                    <div>
                        <div className="text-slate-900 font-bold">CEX Campaign</div>
                        <div className="text-xs text-slate-500">Binance</div>
                    </div>
                </div>
                <div className="text-slate-900 font-mono font-bold">$50</div>
            </div>
        </div>
        <div className="mt-6">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Task Progress</span>
                <span>85%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[85%]" />
            </div>
        </div>
    </div>
);

export default BountyVisual;
