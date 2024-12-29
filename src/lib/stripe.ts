import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('pk_test_51QaqsWRqIO5hhW4GAnMSpWDYPkhaRLwfgG9MpTGqWHeKU7M8lYGP2wEYZ9y46Qyn5XLp9gtBJ9OqN8H6mBMPp43500BzVsHudR');

export interface PriceData {
  monthly: string;
  annual: string;
}

export interface SubscriptionPlan {
  name: string;
  prices: PriceData;
}

export const stripePlans: Record<string, SubscriptionPlan> = {
  starter: {
    name: 'Starter',
    prices: {
      monthly: 'price_monthly_starter_id',
      annual: 'price_annual_starter_id',
    },
  },
  professional: {
    name: 'Professional',
    prices: {
      monthly: 'price_monthly_professional_id',
      annual: 'price_annual_professional_id',
    },
  },
  enterprise: {
    name: 'Enterprise',
    prices: {
      monthly: 'price_monthly_enterprise_id',
      annual: 'price_annual_enterprise_id',
    },
  },
};

export const STRIPE_PAYMENT_LINKS = {
  starter: {
    monthly: 'https://buy.stripe.com/test_fZe16u6ZYfVGfVCfYY',
    annual: 'https://buy.stripe.com/test_3cs6qO842eRC10I003', // Add your annual payment link when ready
  },
  professional: {
    monthly: 'https://buy.stripe.com/test_5kAdTgcki24Q6l2aEF', // Add your monthly payment link when ready
    annual: 'https://buy.stripe.com/test_aEU6qOfwucJudNu3cg', // Add your annual payment link when ready
  },
  enterprise: {
    monthly: 'https://buy.stripe.com/test_eVa02qesqbFqfVCeUW', // Add your monthly payment link when ready
    annual: 'https://buy.stripe.com/test_7sI6qOdomdNydNu8wB', // Add your annual payment link when ready
  },
};

export async function createCheckoutSession(priceId: string, customerId?: string) {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        customerId,
      }),
    });

    const { sessionId } = await response.json();
    const stripe = await stripePromise;
    
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}