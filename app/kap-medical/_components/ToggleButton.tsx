'use client';

import React, { useState } from 'react';

interface ToggleButtonProps {
    label?: string;
    onToggle?: (enabled: boolean) => void;
    initialState?: boolean;
}

/**
 * A responsive premium toggle button (switch) for mobile and desktop.
 */
export default function ToggleButton({ label, onToggle, initialState = false }: ToggleButtonProps) {
    const [isEnabled, setIsEnabled] = useState(initialState);

    const toggle = () => {
        const newState = !isEnabled;
        setIsEnabled(newState);
        if (onToggle) onToggle(newState);
    };

    return (
        <div className="flex items-center gap-4 select-none group cursor-pointer" onClick={toggle}>
            {label && (
                <span className="text-gray-700 font-medium group-hover:text-[#D32F2F] transition-colors text-sm md:text-base">
                    {label}
                </span>
            )}
            <button
                type="button"
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:ring-offset-2 ${isEnabled ? 'bg-[#D32F2F]' : 'bg-gray-200'
                    }`}
            >
                <span className="sr-only">Toggle {label}</span>
                <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isEnabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                />
            </button>
        </div>
    );
}
