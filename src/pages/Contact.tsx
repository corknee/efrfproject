import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions about ContentForge AI? We're here to help.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Mail className="text-blue-600" size={24} />
                <span className="ml-4 text-gray-600">support@contentforge.ai</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600" size={24} />
                <span className="ml-4 text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600" size={24} />
                <span className="ml-4 text-gray-600">123 AI Street, San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}