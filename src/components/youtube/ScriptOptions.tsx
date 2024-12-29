import React from 'react';

interface ScriptOptionsProps {
  generateScript: boolean;
  scriptStyle: string;
  targetDuration: string;
  onChange: (updates: Partial<{
    generateScript: boolean;
    scriptStyle: string;
    targetDuration: string;
  }>) => void;
}

export function ScriptOptions({
  generateScript,
  scriptStyle,
  targetDuration,
  onChange,
}: ScriptOptionsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="generateScript"
          checked={generateScript}
          onChange={(e) => onChange({ generateScript: e.target.checked })}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="generateScript" className="ml-2 block text-sm text-gray-700">
          Generate video script for selected idea
        </label>
      </div>

      {generateScript && (
        <div className="pl-6 space-y-4">
          <div>
            <label htmlFor="scriptStyle" className="block text-sm font-medium text-gray-700">
              Script Style
            </label>
            <select
              id="scriptStyle"
              value={scriptStyle}
              onChange={(e) => onChange({ scriptStyle: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="conversational">Conversational</option>
              <option value="educational">Educational</option>
              <option value="entertaining">Entertaining</option>
              <option value="professional">Professional</option>
            </select>
          </div>

          <div>
            <label htmlFor="targetDuration" className="block text-sm font-medium text-gray-700">
              Target Duration (minutes)
            </label>
            <select
              id="targetDuration"
              value={targetDuration}
              onChange={(e) => onChange({ targetDuration: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
              <option value="30">30 minutes</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}