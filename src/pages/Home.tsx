import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, Share2, Star, Video } from 'lucide-react';
import { Button } from '../components/Button';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Create Compelling Content with AI
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Transform your content creation process with AI-powered tools that help you write better, faster, and more effectively.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex items-center"
                  onClick={() => navigate('/signup')}
                  isLoading={false}
                >
                  Start Free Trial <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/features')}
                  isLoading={false}
                >
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="AI Content Creation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Powerful AI Tools</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to create amazing content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Writing</h3>
              <p className="text-gray-600">Generate high-quality content with advanced AI technology</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-gray-600">Create engaging posts for all your social platforms</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Content</h3>
              <p className="text-gray-600">Generate video ideas and scripts that engage viewers</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ad Copy</h3>
              <p className="text-gray-600">Write compelling ad copy that converts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">Join thousands of satisfied content creators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
              </div>
              <p className="text-gray-600 mb-4">"ContentForge AI has revolutionized how I create content. It's like having a professional writer on call 24/7."</p>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Marketing Director</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
              </div>
              <p className="text-gray-600 mb-4">"The quality of content is outstanding. I've seen a significant increase in engagement since using ContentForge AI."</p>
              <p className="font-semibold">Michael Chen</p>
              <p className="text-sm text-gray-500">Content Creator</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
                <Star className="text-yellow-400" size={20} />
              </div>
              <p className="text-gray-600 mb-4">"This tool has saved me countless hours. The AI understands exactly what I need and delivers every time."</p>
              <p className="font-semibold">Emily Rodriguez</p>
              <p className="text-sm text-gray-500">Social Media Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Content?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of creators who trust ContentForge AI</p>
          <Button
            size="lg"
            variant="secondary"
            className="inline-flex items-center"
            onClick={() => navigate('/signup')}
            isLoading={false}
          >
            Start Your Free Trial <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}