import React from 'react';
import { BlogCard } from '../components/blog/BlogCard';

const blogPosts = [
  {
    title: 'How AI is Transforming Content Creation',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we create and distribute content.',
    date: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    slug: 'ai-transforming-content-creation',
  },
  {
    title: 'The Future of Social Media Marketing',
    excerpt: 'Learn about the latest trends and predictions for social media marketing in the coming years.',
    date: 'March 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80',
    slug: 'future-social-media-marketing',
  },
  {
    title: 'Writing Better Ad Copy with AI',
    excerpt: 'Tips and techniques for using AI to create more effective advertising copy.',
    date: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80',
    slug: 'writing-better-ad-copy-ai',
  },
];

export function Blog() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Latest Updates</h1>
          <p className="mt-4 text-xl text-gray-600">Insights and news from our team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}