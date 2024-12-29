import React from 'react';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export function FeatureShowcase({ title, description, imageUrl, reverse = false }: FeatureShowcaseProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'lg:pl-12' : 'lg:pr-12'}>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}