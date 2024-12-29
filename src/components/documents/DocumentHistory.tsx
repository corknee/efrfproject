import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../Button';
import { Clock } from 'lucide-react';

interface DocumentRecord {
  id: string;
  type: string;
  created_at: string;
  content: string;
  metadata: {
    tone: string;
    style: string;
    details: Record<string, string>;
  };
}

export function DocumentHistory() {
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error loading documents:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="mt-8">Loading history...</div>;
  }

  if (documents.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Documents</h3>
      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-gray-50 p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-gray-900">{doc.type}</p>
              <p className="text-sm text-gray-500">
                {new Date(doc.created_at).toLocaleDateString()}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {/* Load document */}}
              className="flex items-center gap-2"
            >
              <Clock size={16} />
              Load
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}