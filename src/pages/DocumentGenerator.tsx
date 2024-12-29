import React, { useState } from 'react';
import { FileText, Download, Save } from 'lucide-react';
import { Button } from '../components/Button';
import { DocumentForm } from '../components/documents/DocumentForm';
import { DocumentPreview } from '../components/documents/DocumentPreview';
import { DocumentHistory } from '../components/documents/DocumentHistory';
import { generateDocument } from '../lib/gemini';
import { generatePDF } from '../utils/pdfGenerator';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

export function DocumentGenerator() {
  const { user } = useAuth();
  const [document, setDocument] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    details: {},
    tone: 'professional',
    style: 'modern',
  });

  const handleGenerate = async (data: typeof formData) => {
    setLoading(true);
    try {
      const content = await generateDocument(
        data.type,
        data.details,
        data.tone,
        data.style
      );
      setDocument(content);
      
      if (user) {
        // Save to document history
        await supabase.from('documents').insert({
          user_id: user.id,
          type: data.type,
          content,
          metadata: {
            tone: data.tone,
            style: data.style,
            details: data.details,
          },
        });
      }
    } catch (error) {
      console.error('Error generating document:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!document) return;
    await generatePDF(document, formData.type);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">AI Document Generator</h1>
          <p className="mt-4 text-xl text-gray-600">
            Create professional documents in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <DocumentForm
              onSubmit={handleGenerate}
              loading={loading}
              initialData={formData}
            />
            {user && <DocumentHistory />}
          </div>

          <div className="space-y-6">
            <DocumentPreview
              content={document}
              onChange={setDocument}
            />
            
            {document && (
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={handleDownload}
                  className="flex items-center gap-2"
                >
                  <Download size={20} />
                  Download PDF
                </Button>
                
                {user && (
                  <Button
                    onClick={() => {/* Save as template */}}
                    className="flex items-center gap-2"
                  >
                    <Save size={20} />
                    Save as Template
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}