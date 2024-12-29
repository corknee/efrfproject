import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export function BlogCard({ title, excerpt, date, imageUrl, slug }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="block group">
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mt-2 text-gray-600">{excerpt}</p>
      </div>
    </Link>
  );
}