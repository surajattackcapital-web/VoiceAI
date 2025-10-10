import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, CreditCard, BarChart3, Target, Zap } from 'lucide-react';

const TriumphIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Smart Financial Management',
      description: 'Automatically manage financial operations and payments through voice interactions, handle transaction processing and reconciliation with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Financial Analytics',
      description: 'Access financial metrics and payment trends through voice commands, handle financial analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Payment Processing',
      description: 'Process payments and handle financial transactions through voice interactions, handle payment coordination and reconciliation automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Financial Hub',
      description: 'Build and manage financial workflows through voice-driven interactions, handle payment processing and financial tracking.'
    }
  ];

  const benefits = [
    {
      metric: '60%',
      description: 'Faster payment processing through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Financial visibility with intelligent payment management'
    },
    {
      metric: 'Enhanced',
      description: 'Cash flow management through automated financial operations'
    },
    {
      metric: 'Reduced',
      description: 'Manual financial coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Triumph",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Financial Rules",
      description: "Set up payment criteria, financial preferences, and transaction parameters"
    },
    {
      step: "3",
      title: "Map Financial Data",
      description: "Connect payment profiles, transaction types, and financial preferences"
    },
    {
      step: "4",
      title: "Activate AI Financial Hub",
      description: "Launch automated voice financial management and processing"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Triumph's financial platform?",
      answer: "Yes. Voice AI connects directly to Triumph's API, enabling seamless financial management, payment processing, and real-time financial data access."
    },
    {
      question: "Can Voice AI handle payment processing and financial management automatically?",
      answer: "Absolutely. The AI can process payments, manage financial transactions, handle reconciliation, and automatically update all financial information in Triumph's system through voice interactions."
    },
    {
      question: "How does Voice AI improve financial management efficiency?",
      answer: "Voice AI eliminates manual financial processing, provides intelligent payment routing, and automatically optimizes financial strategies for better cash flow and operational efficiency."
    },
    {
      question: "Is the integration secure for financial and payment data?",
      answer: "Yes. All financial and payment communications are encrypted and the platform meets enterprise security standards, ensuring your financial data remains protected."
    }
  ];

  return (
    <Layout 
      title="Triumph Integration | Voice AI for Financial Management" 
      description="Connect Voice AI with Triumph to automate payment processing, handle intelligent financial management, and streamline financial operations. Built for logistics companies that want intelligent financial automation and better payment management."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-4">
                TR
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Financial Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Triumph & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Triumph's financial platform to create an intelligent financial management 
              system for logistics and freight operations. Transform your financial operations with AI-powered payment processing, 
              real-time analytics, and automated financial workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Free Demo
              </button>
              <button className="btn-secondary">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Integrate Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Why Integrate Voice AI with Triumph?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Triumph provides comprehensive financial management, but adding Voice AI transforms financial operations into an 
              intelligent, automated experience that improves efficiency and streamlines payment processing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Payment Processing',
                description: 'Voice AI handles payment processing, transaction management, and financial reconciliation through intelligent automation powered by Triumph\'s platform.'
              },
              {
                title: 'Intelligent Financial Management',
                description: 'The AI can manage cash flow, handle payment routing, and coordinate multi-transaction operations based on financial criteria and business rules.'
              },
              {
                title: 'Real-time Financial Intelligence',
                description: 'Voice AI provides insights into payment trends, financial performance, and cash flow optimization while automatically optimizing financial strategies.'
              },
              {
                title: 'Smart Financial Optimization',
                description: 'Financial managers and accounting teams receive personalized payment recommendations and financial insights based on their business requirements and financial goals.'
              },
              {
                title: 'Enhanced Financial Efficiency',
                description: 'Voice AI creates seamless financial experiences that improve payment processing speed and reduce operational gaps in financial operations.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--muted)]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Core Features
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Everything you need to transform your financial management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--muted)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Results Financial Teams See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with Triumph.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[var(--accent-1)] mb-2">
                  {benefit.metric}
                </div>
                <p className="text-[var(--muted)]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Guide Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Setup Guide
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Get started with Voice AI and Triumph integration in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  {step.description}
                </p>
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
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
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
      <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your payment processing and financial operations with Voice AI and Triumph integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--accent-1)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TriumphIntegrationPage;
