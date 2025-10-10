import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, BarChart3, Target, Zap } from 'lucide-react';

const MotiveIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Smart Fleet Tracking',
      description: 'Automatically monitor fleet location and performance through voice interactions, handle driver management and route optimization with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Fleet Analytics',
      description: 'Access fleet metrics and performance trends through voice commands, handle safety analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Driver Management',
      description: 'Process driver assignments and track performance through voice interactions, handle compliance monitoring and safety management automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Fleet Operations',
      description: 'Build and manage fleet operations through voice-driven interactions, handle maintenance scheduling and performance tracking.'
    }
  ];

  const benefits = [
    {
      metric: '45%',
      description: 'Faster fleet management through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Driver safety with intelligent monitoring and alerts'
    },
    {
      metric: 'Enhanced',
      description: 'Fleet efficiency through automated route optimization'
    },
    {
      metric: 'Reduced',
      description: 'Manual fleet coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Motive",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Fleet Rules",
      description: "Set up tracking criteria, safety preferences, and performance parameters"
    },
    {
      step: "3",
      title: "Map Driver Data",
      description: "Connect driver profiles, vehicle information, and safety preferences"
    },
    {
      step: "4",
      title: "Activate AI Fleet Management",
      description: "Launch automated voice fleet tracking and management"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Motive's fleet management platform?",
      answer: "Yes. Voice AI connects directly to Motive's API, enabling seamless fleet tracking, driver management, and real-time safety monitoring."
    },
    {
      question: "Can Voice AI handle fleet tracking and driver management automatically?",
      answer: "Absolutely. The AI can track vehicles, manage drivers, handle safety monitoring, and automatically update all fleet information in Motive's system through voice interactions."
    },
    {
      question: "How does Voice AI improve fleet management efficiency?",
      answer: "Voice AI eliminates manual tracking, provides intelligent route optimization, and automatically optimizes fleet operations for better safety and efficiency."
    },
    {
      question: "Is the integration secure for fleet and driver data?",
      answer: "Yes. All fleet and driver communications are encrypted and the platform meets enterprise security standards, ensuring your fleet data remains protected."
    }
  ];

  return (
    <Layout 
      title="Motive Integration | Voice AI for Fleet Management" 
      description="Connect Voice AI with Motive to automate fleet tracking, handle driver management, and streamline fleet operations. Built for logistics companies that want intelligent fleet automation and better driver safety management."
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
                MT
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Fleet Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Motive & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Motive's fleet management platform to create an intelligent fleet tracking 
              system for logistics and transportation operations. Transform your fleet operations with AI-powered driver management, 
              real-time safety monitoring, and automated fleet coordination.
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
              Why Integrate Voice AI with Motive?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Motive provides comprehensive fleet management, but adding Voice AI transforms fleet operations into an 
              intelligent, automated experience that improves safety and streamlines fleet coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Fleet Tracking',
                description: 'Voice AI handles vehicle monitoring, driver management, and safety alerts through intelligent automation powered by Motive\'s platform.'
              },
              {
                title: 'Intelligent Driver Management',
                description: 'The AI can monitor driver performance, handle safety compliance, and coordinate multi-driver operations based on location and performance data.'
              },
              {
                title: 'Real-time Safety Monitoring',
                description: 'Voice AI provides insights into driver behavior, safety metrics, and fleet performance while automatically optimizing safety strategies.'
              },
              {
                title: 'Smart Route Optimization',
                description: 'Fleet managers and drivers receive personalized route recommendations and safety alerts based on their location, performance, and safety history.'
              },
              {
                title: 'Enhanced Fleet Safety',
                description: 'Voice AI creates seamless fleet experiences that improve driver safety and reduce operational risks in logistics operations.'
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
              Everything you need to transform your fleet management.
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
              Real improvements from integrating Voice AI with Motive.
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
              Get started with Voice AI and Motive integration in minutes.
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
            Ready to Transform Your Fleet Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your fleet tracking and driver management with Voice AI and Motive integration.
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

export default MotiveIntegrationPage;
