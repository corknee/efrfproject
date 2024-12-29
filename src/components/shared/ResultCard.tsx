import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '../Button';

interface ResultCardProps {
  title: string;
  content: string;
  onCopy?: () => void;
}

export function ResultCard({ title, content, onCopy }: ResultCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {onCopy && (
          <Button
            variant="outline"
            size="sm"
            onClick={onCopy}
            className="flex items-center gap-2"
          >
            <Copy size={16} />
            Copy
          </Button>
        )}
      </div>
      <div className="prose prose-sm max-w-none">
        {content.split('\n').map((line, i) => (
          <p key={i} className="mb-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}