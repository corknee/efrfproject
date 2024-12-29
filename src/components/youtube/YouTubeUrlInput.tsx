import React from 'react';

interface YouTubeUrlInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function YouTubeUrlInput({ value, onChange }: YouTubeUrlInputProps) {
  return (
    <div>
      <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700">
        Latest Video URL
      </label>
      <input
        type="url"
        id="videoUrl"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="https://www.youtube.com/watch?v=..."
        required
      />
      <p className="mt-1 text-sm text-gray-500">
        Paste the URL of your latest YouTube video to get content recommendations
      </p>
    </div>
  );
}