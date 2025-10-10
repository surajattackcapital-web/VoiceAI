import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, BarChart3, Target, Zap } from 'lucide-react';

const WhatsAppIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Smart Business Messaging',
      description: 'Automatically handle WhatsApp messaging and notifications through voice interactions, manage customer communication and updates with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Messaging Analytics',
      description: 'Access messaging metrics and communication trends through voice commands, handle response analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Customer Communication',
      description: 'Process customer messages and handle business communications through voice interactions, handle message routing and responses automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Business Hub',
      description: 'Build and manage customer communication workflows through voice-driven interactions, handle business messaging and customer relationship tracking.'
    }
  ];

  const benefits = [
    {
      metric: '70%',
      description: 'Faster customer response through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Customer engagement with intelligent messaging'
    },
    {
      metric: 'Enhanced',
      description: 'Business communication through automated WhatsApp workflows'
    },
    {
      metric: 'Reduced',
      description: 'Manual messaging coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect WhatsApp Business",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Messaging Rules",
      description: "Set up messaging criteria, customer preferences, and communication parameters"
    },
    {
      step: "3",
      title: "Map Customer Data",
      description: "Connect customer profiles, business contacts, and communication preferences"
    },
    {
      step: "4",
      title: "Activate AI Business Hub",
      description: "Launch automated voice WhatsApp messaging and communication"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with WhatsApp Business platform?",
      answer: "Yes. Voice AI connects directly to WhatsApp Business API, enabling seamless messaging automation, customer communication, and real-time business messaging data access."
    },
    {
      question: "Can Voice AI handle customer messaging and business communication automatically?",
      answer: "Absolutely. The AI can send messages, manage customer conversations, handle business inquiries, and automatically update all communication information in WhatsApp through voice interactions."
    },
    {
      question: "How does Voice AI improve business messaging efficiency?",
      answer: "Voice AI eliminates manual messaging, provides intelligent customer routing, and automatically optimizes communication strategies for better customer engagement and business productivity."
    },
    {
      question: "Is the integration secure for business and customer data?",
      answer: "Yes. All business and customer communications are encrypted and the platform meets enterprise security standards, ensuring your communication data remains protected."
    }
  ];

  return (
    <Layout 
      title="WhatsApp Integration | Voice AI for Business Messaging" 
      description="Connect Voice AI with WhatsApp Business to automate customer messaging, handle intelligent business communication, and streamline WhatsApp workflows. Built for logistics companies that want intelligent messaging automation and better customer engagement."
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
                WA
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Business Messaging with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                WhatsApp & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with WhatsApp Business to create an intelligent messaging 
              system for logistics and freight operations. Transform your customer communication with AI-powered messaging automation, 
              real-time analytics, and automated business messaging workflows.
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
              Why Integrate Voice AI with WhatsApp?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              WhatsApp Business provides powerful messaging capabilities, but adding Voice AI transforms customer communication into an 
              intelligent, automated experience that improves engagement and streamlines business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Customer Messaging',
                description: 'Voice AI handles customer messages, business communications, and WhatsApp notifications through intelligent automation powered by WhatsApp Business API.'
              },
              {
                title: 'Intelligent Customer Communication',
                description: 'The AI can manage customer conversations, handle business inquiries, and coordinate multi-customer communications based on context and business requirements.'
              },
              {
                title: 'Real-time Business Messaging Analytics',
                description: 'Voice AI provides insights into customer engagement, messaging patterns, and business communication efficiency while automatically optimizing messaging strategies.'
              },
              {
                title: 'Smart Customer Engagement',
                description: 'Business teams receive personalized messaging recommendations and customer insights based on customer history, preferences, and business communication goals.'
              },
              {
                title: 'Enhanced Customer Experience',
                description: 'Voice AI creates seamless messaging experiences that improve customer satisfaction and reduce response times in business operations.'
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
              Everything you need to transform your business messaging.
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
              Results Businesses See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with WhatsApp.
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
              Get started with Voice AI and WhatsApp integration in minutes.
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
            Ready to Transform Your Business Messaging?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your customer messaging and business communication with Voice AI and WhatsApp integration.
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

export default WhatsAppIntegrationPage;
