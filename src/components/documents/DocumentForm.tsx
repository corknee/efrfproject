import React, { useState } from 'react';
import { Button } from '../Button';
import { documentTypes } from '../../utils/documentTypes';

interface DocumentFormProps {
  onSubmit: (data: any) => Promise<void>;
  loading: boolean;
  initialData: {
    type: string;
    details: Record<string, string>;
    tone: string;
    style: string;
  };
}

export function DocumentForm({ onSubmit, loading, initialData }: DocumentFormProps) {
  const [formData, setFormData] = useState(initialData);
  const [details, setDetails] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, details });
  };

  const currentTypeFields = documentTypes[formData.type]?.fields || [];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Document Type
        </label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) => {
            setFormData({ ...formData, type: e.target.value });
            setDetails({});
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select a document type</option>
          {Object.entries(documentTypes).map(([key, { label }]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {formData.type && (
        <>
          {currentTypeFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type="text"
                id={field.name}
                value={details[field.name] || ''}
                onChange={(e) => setDetails({ ...details, [field.name]: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          ))}

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
              <option value="creative">Creative</option>
              <option value="formal">Formal</option>
            </select>
          </div>

          <div>
            <label htmlFor="style" className="block text-sm font-medium text-gray-700">
              Style
            </label>
            <select
              id="style"
              value={formData.style}
              onChange={(e) => setFormData({ ...formData, style: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="modern">Modern</option>
              <option value="traditional">Traditional</option>
              <option value="minimalist">Minimalist</option>
              <option value="creative">Creative</option>
            </select>
          </div>
        </>
      )}

      <Button
        type="submit"
        className="w-full"
        isLoading={loading}
        loadingText="Generating Document..."
      >
        Generate Document
      </Button>
    </form>
  );
}