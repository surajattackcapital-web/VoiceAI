import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, CreditCard, BarChart3, Target, Zap } from 'lucide-react';

const WEXIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Smart Fuel Card Management',
      description: 'Automatically manage fuel card operations and payments through voice interactions, handle transaction processing and reconciliation with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Fuel Analytics',
      description: 'Access fuel metrics and spending trends through voice commands, handle fuel analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Fuel Management',
      description: 'Process fuel transactions and handle fleet fuel management through voice interactions, handle fuel coordination and reporting automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Fleet Fuel Hub',
      description: 'Build and manage fuel workflows through voice-driven interactions, handle fuel card processing and fleet fuel tracking.'
    }
  ];

  const benefits = [
    {
      metric: '55%',
      description: 'Faster fuel management through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Fuel visibility with intelligent spending management'
    },
    {
      metric: 'Enhanced',
      description: 'Fleet fuel efficiency through automated fuel operations'
    },
    {
      metric: 'Reduced',
      description: 'Manual fuel coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect WEX",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Fuel Rules",
      description: "Set up fuel criteria, spending preferences, and transaction parameters"
    },
    {
      step: "3",
      title: "Map Fleet Data",
      description: "Connect fleet profiles, fuel card information, and spending preferences"
    },
    {
      step: "4",
      title: "Activate AI Fuel Management",
      description: "Launch automated voice fuel management and processing"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with WEX's fuel card platform?",
      answer: "Yes. Voice AI connects directly to WEX's API, enabling seamless fuel card management, transaction processing, and real-time fuel data access."
    },
    {
      question: "Can Voice AI handle fuel card processing and fleet fuel management automatically?",
      answer: "Absolutely. The AI can process fuel transactions, manage fleet fuel, handle fuel reporting, and automatically update all fuel information in WEX's system through voice interactions."
    },
    {
      question: "How does Voice AI improve fuel management efficiency?",
      answer: "Voice AI eliminates manual fuel processing, provides intelligent fuel routing, and automatically optimizes fuel strategies for better fleet efficiency and cost management."
    },
    {
      question: "Is the integration secure for fuel and fleet data?",
      answer: "Yes. All fuel and fleet communications are encrypted and the platform meets enterprise security standards, ensuring your fuel data remains protected."
    }
  ];

  return (
    <Layout 
      title="WEX Integration | Voice AI for Fuel Card Management" 
      description="Connect Voice AI with WEX to automate fuel card processing, handle intelligent fleet fuel management, and streamline fuel operations. Built for logistics companies that want intelligent fuel automation and better fleet fuel management."
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
                WX
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Fuel Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                WEX & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with WEX's fuel card platform to create an intelligent fuel management 
              system for logistics and fleet operations. Transform your fuel operations with AI-powered fuel card processing, 
              real-time analytics, and automated fleet fuel workflows.
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
              Why Integrate Voice AI with WEX?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              WEX provides comprehensive fuel card management, but adding Voice AI transforms fuel operations into an 
              intelligent, automated experience that improves efficiency and streamlines fleet fuel management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Fuel Card Processing',
                description: 'Voice AI handles fuel transactions, card management, and fleet fuel coordination through intelligent automation powered by WEX\'s platform.'
              },
              {
                title: 'Intelligent Fleet Fuel Management',
                description: 'The AI can manage fuel spending, handle fuel routing, and coordinate multi-fleet operations based on fuel efficiency and cost optimization.'
              },
              {
                title: 'Real-time Fuel Intelligence',
                description: 'Voice AI provides insights into fuel trends, spending performance, and fleet efficiency while automatically optimizing fuel strategies.'
              },
              {
                title: 'Smart Fuel Optimization',
                description: 'Fleet managers and drivers receive personalized fuel recommendations and spending insights based on their routes, efficiency, and fuel goals.'
              },
              {
                title: 'Enhanced Fuel Efficiency',
                description: 'Voice AI creates seamless fuel experiences that improve fleet fuel efficiency and reduce operational costs in logistics operations.'
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
              Everything you need to transform your fuel management.
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
              Results Fleet Companies See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with WEX.
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
              Get started with Voice AI and WEX integration in minutes.
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
            Ready to Transform Your Fuel Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your fuel card processing and fleet fuel management with Voice AI and WEX integration.
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

export default WEXIntegrationPage;
