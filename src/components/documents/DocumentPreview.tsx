import React from 'react';
import { Button } from '../Button';

interface DocumentPreviewProps {
  content: string;
  onChange: (content: string) => void;
}

export function DocumentPreview({ content, onChange }: DocumentPreviewProps) {
  if (!content) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
        Your document preview will appear here
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="prose prose-sm max-w-none">
        <textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-h-[500px] p-4 border rounded-md focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}