import React from 'react';
import { FeatureShowcase } from '../components/features/FeatureShowcase';

const features = [
  {
    title: 'AI-Powered Ad Copy Generation',
    description: 'Create compelling ad copy that converts. Our AI analyzes successful ads across industries to generate high-performing copy tailored to your brand.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
  {
    title: 'YouTube Content Planning',
    description: 'Supercharge your YouTube channel with AI-powered video ideas and scripts. Simply share your latest video URL, and our AI will analyze your content to suggest engaging topics and create professional scripts.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80',
    reverse: true,
  },
  {
    title: 'Long-form Content Creation',
    description: 'Generate in-depth articles and blog posts that engage your audience. Our AI understands your topic and creates well-researched, SEO-optimized content.',
    imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80',
  },
  {
    title: 'Social Media Management',
    description: 'Get AI-powered social media post suggestions with optimized hashtags. Analyze trends and create content that resonates with your audience.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    reverse: true,
  },
];

export function Features() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Powerful Features</h1>
          <p className="mt-4 text-xl text-gray-600">Everything you need to create amazing content</p>
        </div>
        <div className="space-y-24">
          {features.map((feature) => (
            <FeatureShowcase key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}