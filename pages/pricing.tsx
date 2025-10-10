import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small logistics companies',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Up to 1,000 calls/month',
        'Basic AI voice features',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        'Mobile app access'
      ],
      limitations: [
        'No custom branding',
        'Limited API access',
        'No priority support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        'Up to 10,000 calls/month',
        'Advanced AI features',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Custom workflows',
        'API access',
        'Team collaboration'
      ],
      limitations: [
        'No white-label option',
        'Limited custom development'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        'Unlimited calls',
        'Full AI customization',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'Custom development',
        'Dedicated account manager'
      ],
      limitations: [],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What happens if I exceed my call limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or purchase additional calls.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise customers with specific requirements.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features.'
    }
  ];

  return (
    <Layout title="Pricing - Voice AI for Logistics" description="Choose the perfect plan for your logistics business. Transparent pricing with no hidden fees.">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-[var(--muted)] mb-8">
              Choose the plan that fits your business needs. No hidden fees, 
              no surprises. Cancel anytime.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <span className={`text-lg ${!isAnnual ? 'text-[var(--text)]' : 'text-[var(--muted)]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isAnnual ? 'bg-[var(--accent-1)]' : 'bg-[var(--line-strong)]'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-[var(--text)]' : 'text-[var(--muted)]'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-[var(--accent-3)] text-black px-2 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative card ${plan.popular ? 'border-[var(--accent-1)] ring-2 ring-[var(--accent-1)]' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[var(--accent-1)] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[var(--muted)] mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[var(--text)]">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[var(--muted)]">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-[var(--accent-3)]">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[var(--accent-3)] flex-shrink-0" />
                      <span className="text-[var(--text)]">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-[var(--muted)] flex-shrink-0" />
                      <span className="text-[var(--muted)]">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Everything you need to know about our pricing.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[var(--muted)]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[var(--muted)] mb-8">
            Start your free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Free Trial
            </button>
            <button className="btn-secondary">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;

