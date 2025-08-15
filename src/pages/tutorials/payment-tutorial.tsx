import React from "react";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const content = `# Making a Payment with TypeScript

TypeScript is a powerful language that allows developers to write more structured and error-free code. In this tutorial, we'll explore how to use TypeScript to make a payment using a payment processing service.

## Prerequisites

- Basic knowledge of TypeScript
- A payment processing service account (Stripe)
- Understanding of payment processing

## Setting Up the Project

First, let's create a new project and install the necessary dependencies:

\`\`\`bash
mkdir payment-processing && cd payment-processing
npm init -y
npm install --save stripe @types/stripe
npm install --save-dev typescript @types/node
\`\`\`

## Configuring Stripe

Create a new file called \`stripe-config.ts\` and add the following configuration:

\`\`\`typescript
import * as dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});
\`\`\`

## Creating a Payment Intent

Now let's create a function to create a payment intent:

\`\`\`typescript
import { stripe } from './stripe-config';

interface PaymentData {
  amount: number;
  currency: string;
  description?: string;
}

export async function createPaymentIntent(paymentData: PaymentData) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: paymentData.currency,
      description: paymentData.description,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      success: true,
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id,
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
\`\`\`

## Processing the Payment

Here's how you can process the payment on the client side:

\`\`\`typescript
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export async function processPayment(clientSecret: string) {
  const stripe = await stripePromise;
  
  if (!stripe) {
    throw new Error('Stripe failed to initialize');
  }

  const { error } = await stripe.confirmPayment({
    clientSecret,
    confirmParams: {
      return_url: window.location.origin + '/payment-success',
    },
  });

  if (error) {
    throw new Error(error.message);
  }
}
\`\`\`

## Error Handling

Always implement proper error handling for payment processing:

\`\`\`typescript
export class PaymentError extends Error {
  constructor(
    message: string,
    public code?: string,
    public type?: string
  ) {
    super(message);
    this.name = 'PaymentError';
  }
}

export function handleStripeError(error: any): PaymentError {
  switch (error.type) {
    case 'card_error':
      return new PaymentError(
        error.message,
        error.code,
        'card_error'
      );
    case 'rate_limit_error':
      return new PaymentError(
        'Too many requests made to the API too quickly',
        error.code,
        'rate_limit_error'
      );
    case 'invalid_request_error':
      return new PaymentError(
        'Invalid parameters were supplied to Stripe\\'s API',
        error.code,
        'invalid_request_error'
      );
    default:
      return new PaymentError(
        'An unexpected error occurred',
        error.code,
        'api_error'
      );
  }
}
\`\`\`

## Best Practices

When working with payments in TypeScript, keep these best practices in mind:

1. **Never expose secret keys**: Always use environment variables for sensitive data
2. **Validate input**: Always validate payment amounts and other input data
3. **Handle errors gracefully**: Provide meaningful error messages to users
4. **Use TypeScript interfaces**: Define clear interfaces for payment data
5. **Test thoroughly**: Test both successful and failed payment scenarios

## Conclusion

TypeScript provides excellent type safety when working with payment processing APIs. By following these patterns, you can build robust payment systems that are both maintainable and secure.

Remember to always test your payment integration in a sandbox environment before going live!`;

const PaymentTutorial: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-8 py-6">
            <div className="flex items-center space-x-4 mb-6">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Intermediate
              </span>
              <span className="text-sm text-gray-500">15 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  code: ({ node, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code
                        className="bg-gray-100 px-1 py-0.5 rounded text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Was this tutorial helpful?
          </h3>
          <p className="text-gray-600 mb-4">
            Let us know if you found this tutorial useful or if you have
            suggestions for improvement.
          </p>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              👍 Helpful
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
              👎 Not helpful
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentTutorial;
