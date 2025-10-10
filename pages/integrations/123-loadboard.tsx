import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, BarChart3, Target, Zap } from 'lucide-react';

const Loadboard123IntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Smart Load Matching',
      description: 'Automatically match available loads with carriers through voice interactions, handle load posting and carrier qualification with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Market Intelligence',
      description: 'Access current market rates and trends through voice commands, handle rate negotiations and market analysis with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Load Management',
      description: 'Process load bookings and confirmations through voice interactions, handle load tracking and status updates automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Carrier Network',
      description: 'Build and manage carrier relationships through voice-driven interactions, handle carrier onboarding and performance tracking.'
    }
  ];

  const benefits = [
    {
      metric: '45%',
      description: 'Faster load matching through AI-powered recommendations'
    },
    {
      metric: 'Improved',
      description: 'Market visibility with real-time rate intelligence'
    },
    {
      metric: 'Enhanced',
      description: 'Carrier relationships through automated communication'
    },
    {
      metric: 'Reduced',
      description: 'Manual load management with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect 123 Loadboard",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Load Rules",
      description: "Set up load matching criteria, carrier preferences, and rate parameters"
    },
    {
      step: "3",
      title: "Map Carrier Data",
      description: "Connect carrier profiles, equipment types, and service areas"
    },
    {
      step: "4",
      title: "Activate AI Load Board",
      description: "Launch automated voice load management and matching"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with 123 Loadboard's platform?",
      answer: "Yes. Voice AI connects directly to 123 Loadboard's API, enabling seamless load posting, carrier matching, and real-time market data access."
    },
    {
      question: "Can Voice AI handle load matching and carrier communication automatically?",
      answer: "Absolutely. The AI can post loads, match carriers, handle negotiations, and automatically update all load information in 123 Loadboard's system through voice interactions."
    },
    {
      question: "How does Voice AI improve load board efficiency?",
      answer: "Voice AI eliminates manual load posting, provides intelligent carrier matching, and automatically optimizes load management strategies for better utilization and profitability."
    },
    {
      question: "Is the integration secure for load and carrier data?",
      answer: "Yes. All load and carrier communications are encrypted and the platform meets enterprise security standards, ensuring your freight data remains protected."
    }
  ];

  return (
    <Layout 
      title="123 Loadboard Integration | Voice AI for Load Board Management" 
      description="Connect Voice AI with 123 Loadboard to automate load posting, handle carrier matching, and streamline freight brokerage operations. Built for freight brokers and logistics companies that want intelligent load board automation and better carrier management."
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
                123
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Load Board Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                123 Loadboard & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with 123 Loadboard to create an intelligent freight matching 
              system for brokers and carriers. Transform your load management with AI-powered carrier matching, 
              real-time market intelligence, and automated load board operations.
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
              Why Integrate Voice AI with 123 Loadboard?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              123 Loadboard provides comprehensive load board services, but adding Voice AI transforms load management into an 
              intelligent, automated experience that improves carrier matching and streamlines freight operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Load Posting',
                description: 'Voice AI handles load posting, carrier matching, and rate negotiations through intelligent automation powered by 123 Loadboard\'s platform.'
              },
              {
                title: 'Intelligent Carrier Matching',
                description: 'The AI can match loads with qualified carriers, handle capacity requests, and coordinate multi-carrier operations based on equipment and location.'
              },
              {
                title: 'Real-time Market Intelligence',
                description: 'Voice AI provides insights into market rates, capacity trends, and carrier performance while automatically optimizing load strategies.'
              },
              {
                title: 'Smart Load Management',
                description: 'Brokers and carriers receive personalized load recommendations based on their preferences, equipment, and service areas.'
              },
              {
                title: 'Enhanced Carrier Relationships',
                description: 'Voice AI creates personalized communication experiences that improve carrier satisfaction and reduce load management gaps.'
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
              Everything you need to transform your load board operations.
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
              Results Freight Companies See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with 123 Loadboard.
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
              Get started with Voice AI and 123 Loadboard integration in minutes.
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
            Ready to Transform Your Load Board?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your load management and carrier matching with Voice AI and 123 Loadboard integration.
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

export default Loadboard123IntegrationPage;
