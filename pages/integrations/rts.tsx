import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, BarChart3, Target, Zap } from 'lucide-react';

const RTSIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Smart Real-time Tracking',
      description: 'Automatically monitor shipments and deliveries through voice interactions, handle tracking updates and notifications with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Logistics Analytics',
      description: 'Access tracking metrics and delivery trends through voice commands, handle performance analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Delivery Management',
      description: 'Process delivery updates and track shipments through voice interactions, handle delivery coordination and routing automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Tracking Network',
      description: 'Build and manage delivery partnerships through voice-driven interactions, handle carrier onboarding and performance tracking.'
    }
  ];

  const benefits = [
    {
      metric: '70%',
      description: 'Faster delivery tracking through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Delivery visibility with intelligent tracking management'
    },
    {
      metric: 'Enhanced',
      description: 'Customer satisfaction through automated delivery updates'
    },
    {
      metric: 'Reduced',
      description: 'Manual tracking coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect RTS",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Tracking Rules",
      description: "Set up tracking criteria, notification preferences, and delivery parameters"
    },
    {
      step: "3",
      title: "Map Delivery Data",
      description: "Connect delivery profiles, tracking information, and notification preferences"
    },
    {
      step: "4",
      title: "Activate AI Tracking System",
      description: "Launch automated voice delivery tracking and management"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with RTS's real-time tracking platform?",
      answer: "Yes. Voice AI connects directly to RTS's API, enabling seamless delivery tracking, real-time updates, and automated notification management."
    },
    {
      question: "Can Voice AI handle delivery tracking and customer notifications automatically?",
      answer: "Absolutely. The AI can track deliveries, manage notifications, handle customer updates, and automatically update all tracking information in RTS's system through voice interactions."
    },
    {
      question: "How does Voice AI improve delivery tracking efficiency?",
      answer: "Voice AI eliminates manual tracking, provides intelligent delivery updates, and automatically optimizes tracking strategies for better customer satisfaction and delivery visibility."
    },
    {
      question: "Is the integration secure for delivery and tracking data?",
      answer: "Yes. All delivery and tracking communications are encrypted and the platform meets enterprise security standards, ensuring your tracking data remains protected."
    }
  ];

  return (
    <Layout 
      title="RTS Integration | Voice AI for Real-time Tracking" 
      description="Connect Voice AI with RTS to automate delivery tracking, handle intelligent notifications, and streamline real-time tracking operations. Built for logistics companies that want intelligent tracking automation and better delivery visibility."
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
                RTS
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Real-time Tracking with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                RTS & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with RTS's real-time tracking platform to create an intelligent delivery tracking 
              system for logistics and freight operations. Transform your delivery management with AI-powered tracking updates, 
              real-time analytics, and automated delivery notifications.
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
              Why Integrate Voice AI with RTS?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              RTS provides comprehensive real-time tracking, but adding Voice AI transforms delivery tracking into an 
              intelligent, automated experience that improves visibility and streamlines delivery operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Delivery Tracking',
                description: 'Voice AI handles delivery monitoring, status updates, and customer notifications through intelligent automation powered by RTS\'s tracking platform.'
              },
              {
                title: 'Intelligent Delivery Management',
                description: 'The AI can track deliveries, manage notifications, and coordinate multi-delivery operations based on location and delivery status.'
              },
              {
                title: 'Real-time Delivery Intelligence',
                description: 'Voice AI provides insights into delivery performance, tracking trends, and customer satisfaction while automatically optimizing tracking strategies.'
              },
              {
                title: 'Smart Delivery Notifications',
                description: 'Customers and delivery teams receive personalized tracking updates and delivery notifications based on their preferences and delivery status.'
              },
              {
                title: 'Enhanced Delivery Visibility',
                description: 'Voice AI creates seamless tracking experiences that improve delivery transparency and reduce customer inquiries in logistics operations.'
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
              Everything you need to transform your delivery tracking.
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
              Results Delivery Companies See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with RTS.
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
              Get started with Voice AI and RTS integration in minutes.
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
            Ready to Transform Your Delivery Tracking?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your delivery tracking and customer notifications with Voice AI and RTS integration.
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

export default RTSIntegrationPage;
