import React from 'react';
import { Activity, Target, TrendingUp } from 'lucide-react';

const WarRoomVisual = () => (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-slate-900 font-bold text-sm">LIVE FEED</span>
            </div>
            <span className="text-slate-400 font-bold text-xs">ETH-USDT PERP</span>
        </div>
        <div className="space-y-4">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="w-10 h-10 bg-white border border-slate-200 rounded flex items-center justify-center text-slate-400">
                        {i === 1 ? <Activity size={20} /> : i === 2 ? <Target size={20} /> : <TrendingUp size={20} />}
                    </div>
                    <div className="flex-1">
                        <div className="h-2 bg-slate-200 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-slate-200 rounded w-1/2" />
                    </div>
                    <div className="text-right">
                        <div className={`text-xs font-bold px-2 py-1 rounded ${i === 1 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {i === 1 ? 'BUY' : 'HIGH'}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {/* Floating overlay */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur border border-slate-200 p-4 rounded-lg shadow-xl">
            <div className="text-xs text-slate-500 mb-1">Sentiment</div>
            <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
                Bullish <TrendingUp size={20} />
            </div>
        </div>
    </div>
);

export default WarRoomVisual;
