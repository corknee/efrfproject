import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../Button';
import { useAuth } from '../../hooks/useAuth';
import { createCheckoutSession, stripePlans, STRIPE_PAYMENT_LINKS } from '../../lib/stripe';
import { LoadingSpinner } from '../LoadingSpinner';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  isAnnual: boolean;
  planId: 'starter' | 'professional' | 'enterprise';
}

export function PricingCard({ 
  name, 
  monthlyPrice, 
  annualPrice, 
  description, 
  features, 
  highlighted = false,
  isAnnual,
  planId
}: PricingCardProps) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const price = isAnnual ? annualPrice : monthlyPrice;
  
  const handleSubscribe = async () => {
    setIsLoading(true);
    
    if (!user) {
      window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`;
      return;
    }

    const paymentLink = STRIPE_PAYMENT_LINKS[planId][isAnnual ? 'annual' : 'monthly'];
    
    if (!paymentLink) {
      console.error('Payment link not found');
      setIsLoading(false);
      return;
    }

    window.location.href = paymentLink;
  };

  return (
    <div className={`p-8 rounded-lg ${highlighted ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-2' : 'bg-white'}`}>
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="mt-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className={`${highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
          /{isAnnual ? 'year' : 'month'}
        </span>
      </div>
      <p className={`mt-4 ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check size={20} className={feature.included ? 'text-green-500' : 'text-gray-300'} />
            <span className={`ml-3 ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Button
        className="w-full mt-8"
        variant={highlighted ? 'secondary' : 'primary'}
        onClick={handleSubscribe}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <LoadingSpinner size="small" />
            <span>Loading...</span>
          </div>
        ) : (
          user ? 'Subscribe Now' : 'Sign Up'
        )}
      </Button>
    </div>
  );
}