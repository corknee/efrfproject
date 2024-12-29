import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/shared/LoadingSpinner';
import { ResultCard } from '../components/shared/ResultCard';
import { generateAdCopy } from '../lib/gemini';

export function AdCopy() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({
    product: '',
    target: '',
    tone: 'professional',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const copy = await generateAdCopy(
        formData.product,
        formData.target,
        formData.tone
      );
      setResult(copy);
    } catch (error) {
      console.error('Error generating ad copy:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">AI Ad Copy Generator</h1>
          <p className="mt-4 text-xl text-gray-600">
            Create compelling ad copy in seconds with our AI-powered generator
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
              Product or Service
            </label>
            <input
              type="text"
              id="product"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="target" className="block text-sm font-medium text-gray-700">
              Target Audience
            </label>
            <input
              type="text"
              id="target"
              value={formData.target}
              onChange={(e) => setFormData({ ...formData, target: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
              Tone
            </label>
            <select
              id="tone"
              value={formData.tone}
              onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="humorous">Humorous</option>
              <option value="formal">Formal</option>
              <option value="friendly">Friendly</option>
            </select>
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
            isLoading={loading}
            loadingText="Generating Ad Copy..."
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <Wand2 size={20} />
                Generate Ad Copy
              </>
            )}
          </Button>
        </form>

        {result && (
          <div className="mt-8">
            <ResultCard
              title="Generated Ad Copy"
              content={result}
              onCopy={() => navigator.clipboard.writeText(result)}
            />
          </div>
        )}
      </div>
    </div>
  );
}