import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/shared/LoadingSpinner';
import { ResultCard } from '../components/shared/ResultCard';
import { generateSocialPost } from '../lib/gemini';

export function SocialMedia() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ content: string; hashtags: string[] } | null>(null);
  const [formData, setFormData] = useState({
    topic: '',
    platform: 'twitter' as const,
    goal: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const post = await generateSocialPost(
        formData.topic,
        formData.platform,
        formData.goal
      );
      setResult(post);
    } catch (error) {
      console.error('Error generating social post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Social Media Post Generator</h1>
          <p className="mt-4 text-xl text-gray-600">
            Create engaging social media content with optimized hashtags
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
            <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
              Platform
            </label>
            <select
              id="platform"
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value as 'twitter' | 'instagram' | 'linkedin' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>

          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
              Goal
            </label>
            <input
              type="text"
              id="goal"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., Increase engagement, Drive traffic, Build awareness"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
            isLoading={loading}
            loadingText="Generating Post..."
          >
            <Share2 size={20} />
            Generate Post
          </Button>
        </form>

        {result && (
          <div className="mt-8 space-y-4">
            <ResultCard
              title="Generated Post"
              content={result.content}
              onCopy={() => navigator.clipboard.writeText(result.content)}
            />
            {result.hashtags.length > 0 && (
              <ResultCard
                title="Suggested Hashtags"
                content={result.hashtags.join(' ')}
                onCopy={() => navigator.clipboard.writeText(result.hashtags.join(' '))}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}