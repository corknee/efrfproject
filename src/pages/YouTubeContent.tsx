import React, { useState } from 'react';
import { Video, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/shared/LoadingSpinner';
import { ResultCard } from '../components/shared/ResultCard';
import { generateVideoIdeas, generateVideoScript } from '../lib/gemini';
import { YouTubeUrlInput } from '../components/youtube/YouTubeUrlInput';
import { ScriptOptions } from '../components/youtube/ScriptOptions';

export function YouTubeContent() {
  const [loading, setLoading] = useState(false);
  const [videoIdeas, setVideoIdeas] = useState<string[]>([]);
  const [script, setScript] = useState('');
  const [selectedIdea, setSelectedIdea] = useState('');
  const [formData, setFormData] = useState({
    videoUrl: '',
    generateScript: false,
    scriptStyle: 'conversational',
    targetDuration: '10',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const ideas = await generateVideoIdeas(formData.videoUrl);
      setVideoIdeas(ideas);
      setScript('');
    } catch (error) {
      console.error('Error generating video ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateScript = async () => {
    if (!selectedIdea) return;
    setLoading(true);
    try {
      const generatedScript = await generateVideoScript(
        selectedIdea,
        formData.scriptStyle,
        parseInt(formData.targetDuration)
      );
      setScript(generatedScript);
    } catch (error) {
      console.error('Error generating script:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">YouTube Content Generator</h1>
          <p className="mt-4 text-xl text-gray-600">
            Get AI-powered video ideas and scripts based on your latest content
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <YouTubeUrlInput
            value={formData.videoUrl}
            onChange={(value) => setFormData({ ...formData, videoUrl: value })}
          />

          <ScriptOptions
            generateScript={formData.generateScript}
            scriptStyle={formData.scriptStyle}
            targetDuration={formData.targetDuration}
            onChange={(updates) => setFormData({ ...formData, ...updates })}
          />

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
            isLoading={loading}
            loadingText="Generating Ideas..."
          >
            <Video size={20} />
            Generate Video Ideas
          </Button>
        </form>

        {videoIdeas.length > 0 && (
          <div className="mt-8 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Ideas</h3>
              <div className="space-y-4">
                {videoIdeas.map((idea, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedIdea === idea
                        ? 'bg-blue-50 border-2 border-blue-500'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedIdea(idea)}
                  >
                    <p className="text-gray-800">{idea}</p>
                  </div>
                ))}
              </div>
              {formData.generateScript && selectedIdea && (
                <Button
                  onClick={handleGenerateScript}
                  className="mt-6 flex items-center justify-center gap-2"
                  isLoading={loading}
                  loadingText="Generating Script..."
                >
                  <Sparkles size={20} />
                  Generate Script for Selected Idea
                </Button>
              )}
            </div>

            {script && (
              <ResultCard
                title="Generated Script"
                content={script}
                onCopy={() => navigator.clipboard.writeText(script)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}