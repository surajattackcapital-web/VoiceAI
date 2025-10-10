import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Package, BarChart3, Target, Zap } from 'lucide-react';

const ThreePLSystemsIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Smart Warehouse Management',
      description: 'Automatically manage inventory and warehouse operations through voice interactions, handle order processing and fulfillment with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Supply Chain Intelligence',
      description: 'Access current inventory levels and supply chain trends through voice commands, handle demand forecasting and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Order Management',
      description: 'Process orders and track shipments through voice interactions, handle order fulfillment and delivery coordination automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Logistics Network',
      description: 'Build and manage logistics partnerships through voice-driven interactions, handle vendor onboarding and performance tracking.'
    }
  ];

  const benefits = [
    {
      metric: '40%',
      description: 'Faster order processing through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Supply chain visibility with real-time inventory intelligence'
    },
    {
      metric: 'Enhanced',
      description: 'Vendor relationships through automated communication'
    },
    {
      metric: 'Reduced',
      description: 'Manual logistics management with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect 3PL Systems",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Logistics Rules",
      description: "Set up order processing criteria, inventory preferences, and fulfillment parameters"
    },
    {
      step: "3",
      title: "Map Vendor Data",
      description: "Connect vendor profiles, inventory types, and service areas"
    },
    {
      step: "4",
      title: "Activate AI Logistics",
      description: "Launch automated voice logistics management and coordination"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with 3PL systems platforms?",
      answer: "Yes. Voice AI connects directly to 3PL systems APIs, enabling seamless order processing, inventory management, and real-time logistics data access."
    },
    {
      question: "Can Voice AI handle order management and vendor communication automatically?",
      answer: "Absolutely. The AI can process orders, manage inventory, handle vendor communications, and automatically update all logistics information in 3PL systems through voice interactions."
    },
    {
      question: "How does Voice AI improve 3PL operations efficiency?",
      answer: "Voice AI eliminates manual order processing, provides intelligent inventory management, and automatically optimizes logistics strategies for better fulfillment and customer satisfaction."
    },
    {
      question: "Is the integration secure for logistics and vendor data?",
      answer: "Yes. All logistics and vendor communications are encrypted and the platform meets enterprise security standards, ensuring your supply chain data remains protected."
    }
  ];

  return (
    <Layout 
      title="3PL Systems Integration | Voice AI for Third-Party Logistics" 
      description="Connect Voice AI with 3PL systems to automate order processing, handle inventory management, and streamline third-party logistics operations. Built for logistics companies that want intelligent 3PL automation and better supply chain management."
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
                3PL
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent 3PL Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                3PL Systems & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with 3PL systems to create an intelligent logistics management 
              system for third-party logistics providers. Transform your operations with AI-powered order processing, 
              real-time inventory intelligence, and automated logistics coordination.
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
              Why Integrate Voice AI with 3PL Systems?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              3PL systems provide comprehensive logistics management, but adding Voice AI transforms operations into an 
              intelligent, automated experience that improves order processing and streamlines supply chain operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Order Processing',
                description: 'Voice AI handles order intake, inventory allocation, and fulfillment coordination through intelligent automation powered by 3PL systems.'
              },
              {
                title: 'Intelligent Inventory Management',
                description: 'The AI can manage inventory levels, handle demand forecasting, and coordinate multi-location operations based on real-time data and trends.'
              },
              {
                title: 'Real-time Supply Chain Intelligence',
                description: 'Voice AI provides insights into inventory trends, vendor performance, and logistics efficiency while automatically optimizing supply chain strategies.'
              },
              {
                title: 'Smart Vendor Coordination',
                description: '3PL providers and vendors receive personalized updates and recommendations based on their roles, capabilities, and service areas.'
              },
              {
                title: 'Enhanced Logistics Efficiency',
                description: 'Voice AI creates seamless coordination experiences that improve fulfillment speed and reduce operational gaps in 3PL operations.'
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
              Everything you need to transform your 3PL operations.
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
              Results 3PL Companies See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with 3PL systems.
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
              Get started with Voice AI and 3PL systems integration in minutes.
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
            Ready to Transform Your 3PL Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your order processing and inventory management with Voice AI and 3PL systems integration.
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

export default ThreePLSystemsIntegrationPage;
