import React from 'react';

interface PlanToggleProps {
  isAnnual: boolean;
  onChange: (isAnnual: boolean) => void;
}

export function PlanToggle({ isAnnual, onChange }: PlanToggleProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <span className={`text-sm ${!isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
        Monthly
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isAnnual}
        onClick={() => onChange(!isAnnual)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isAnnual ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isAnnual ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <div className="flex items-center space-x-1.5">
        <span className={`text-sm ${isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
          Annual
        </span>
        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
          Save 20%
        </span>
      </div>
    </div>
  );
}