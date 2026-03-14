import React from 'react';
import useBattery from '#hooks/useBattery';

const Battery = () => {
    const { level, charging, supported } = useBattery();

    // Hide if browser doesn't support Battery API (like Safari)
    if (!supported) return null;

    // Logic for the fill color
    const getFillColor = () => {
        if (charging) return 'bg-[#34c759]'; // macOS Charging Green
        if (level <= 0.2) return 'bg-[#ff3b30]'; // macOS Low Battery Red
        return 'bg-black'; // Default
    };

    return (
        <div className="flex items-center gap-2 px-2 hover:bg-black/10 rounded-md transition-colors cursor-default select-none max-[840px]:hidden">
            {/* Percentage Text */}
            <span className="text-[12px] font-medium text-black/90">
                {Math.round(level * 100)}%
            </span>

            {/* Battery Icon Shell */}
            <div className="relative w-5.5 h-2.75 border border-black/40 rounded-[2.5px] p-px flex items-center">
                {/* The Level Fill */}
                <div 
                    className={`h-full rounded-[1px] transition-all duration-500 ease-in-out ${getFillColor()}`}
                    style={{ width: `${level * 100}%` }}
                />
                
                {/* The Battery Nub (Small tip on the right) */}
                <div className="absolute -right-[3.5px] top-0.75 w-[1.5px] h-1 bg-black/40 rounded-r-[1px]" />

                {/* Charging Bolt: Only shows when charging */}
                {charging && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-black text-[9px] font-bold leading-none">⚡</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Battery;