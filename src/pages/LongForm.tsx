import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/shared/LoadingSpinner';
import { ResultCard } from '../components/shared/ResultCard';
import { generateLongFormContent } from '../lib/gemini';

export function LongForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({
    topic: '',
    type: 'blog' as const,
    wordCount: 500,
    keywords: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const content = await generateLongFormContent(
        formData.topic,
        formData.type,
        formData.wordCount,
        formData.keywords.split(',').map((k) => k.trim())
      );
      setResult(content);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Long-form Content Generator</h1>
          <p className="mt-4 text-xl text-gray-600">
            Create in-depth articles and blog posts with AI assistance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
              Topic
            </label>
            <input
              type="text"
              id="topic"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Content Type
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as 'blog' | 'article' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="blog">Blog Post</option>
              <option value="article">Article</option>
            </select>
          </div>

          <div>
            <label htmlFor="wordCount" className="block text-sm font-medium text-gray-700">
              Word Count
            </label>
            <input
              type="number"
              id="wordCount"
              value={formData.wordCount}
              onChange={(e) => setFormData({ ...formData, wordCount: parseInt(e.target.value) })}
              min="100"
              max="2000"
              step="100"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
              Keywords (comma-separated)
            </label>
            <input
              type="text"
              id="keywords"
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., AI, marketing, strategy"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
            isLoading={loading}
            loadingText="Generating Content..."
          >
            <FileText size={20} />
            Generate Content
          </Button>
        </form>

        {result && (
          <div className="mt-8">
            <ResultCard
              title="Generated Content"
              content={result}
              onCopy={() => navigator.clipboard.writeText(result)}
            />
          </div>
        )}
      </div>
    </div>
  );
}