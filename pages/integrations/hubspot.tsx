import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, BarChart3, Target, Zap } from 'lucide-react';

const HubSpotIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Smart Lead Management',
      description: 'Qualify leads through voice interactions with automatic HubSpot record creation, handle lead routing and assignment based on territory and expertise.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Intelligent Customer Service',
      description: 'Access customer history and preferences through voice commands, handle service requests with automatic ticket creation and routing.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Sales Automation Hub',
      description: 'Provide real-time deal updates and pipeline management, handle contract negotiations and renewal discussions.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Marketing Intelligence',
      description: 'Track customer interaction patterns through voice analytics, handle customer segmentation and targeting.'
    }
  ];

  const benefits = [
    {
      metric: '65%',
      description: 'Increase in lead conversion through automated qualification'
    },
    {
      metric: 'Improved',
      description: 'Customer satisfaction with faster, personalized service'
    },
    {
      metric: 'Enhanced',
      description: 'Sales efficiency with AI-powered customer insights'
    },
    {
      metric: 'Reduced',
      description: 'Administrative burden through automated CRM management'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect HubSpot",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure CRM Rules",
      description: "Set up lead qualification criteria, customer segmentation, and sales processes"
    },
    {
      step: "3",
      title: "Map Customer Data",
      description: "Connect customer profiles, interaction history, and sales pipelines"
    },
    {
      step: "4",
      title: "Activate AI CRM",
      description: "Launch automated voice customer relationship management"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with HubSpot's CRM platform?",
      answer: "Yes. Voice AI connects directly to HubSpot's API, enabling seamless customer data synchronization and real-time CRM management."
    },
    {
      question: "Can Voice AI handle lead qualification and customer service automatically?",
      answer: "Absolutely. The AI can qualify leads, handle customer service requests, and automatically update all customer information in HubSpot through voice interactions."
    },
    {
      question: "How does Voice AI improve sales and customer service efficiency?",
      answer: "Voice AI eliminates manual data entry, provides instant customer insights, and automatically updates all customer interactions in HubSpot's system."
    },
    {
      question: "Can Voice AI work with HubSpot's marketing automation features?",
      answer: "Yes. Voice AI can coordinate with HubSpot's automation tools, trigger marketing campaigns, and ensure all customer interactions are properly tracked and optimized."
    }
  ];

  return (
    <Layout 
      title="HubSpot Integration | Voice AI for Logistics CRM" 
      description="Connect Voice AI with HubSpot to automate lead management, handle customer interactions, and streamline logistics sales operations. Built for freight brokers and logistics companies that want intelligent CRM automation and better customer engagement."
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
                HS
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Logistics CRM with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                HubSpot & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with HubSpot to create an intelligent customer relationship management 
              system for freight brokers and logistics companies. Transform your sales operations with AI-powered 
              customer interactions, intelligent lead qualification, and streamlined CRM management.
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
              Why Integrate Voice AI with HubSpot?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              HubSpot provides comprehensive CRM and marketing automation, but adding Voice AI transforms customer interactions 
              into a conversational, automated experience that increases sales conversion and improves customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Lead Qualification',
                description: 'Voice AI handles incoming calls, qualifies leads, and automatically creates and updates HubSpot records with detailed customer information.'
              },
              {
                title: 'Intelligent Customer Service',
                description: 'The AI can access customer history, handle service requests, and provide personalized support while automatically updating HubSpot.'
              },
              {
                title: 'Real-time Sales Support',
                description: 'Sales teams can call to get instant customer insights, update deal status, and receive AI-powered recommendations for next steps.'
              },
              {
                title: 'Smart Marketing Automation',
                description: 'Voice AI can trigger marketing campaigns, handle lead nurturing, and coordinate with HubSpot\'s automation features.'
              },
              {
                title: 'Enhanced Customer Insights',
                description: 'Sales and service teams get instant access to customer data, interaction history, and AI-powered recommendations through voice interactions.'
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
              Everything you need to transform your CRM operations.
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
              Results Logistics Companies See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with HubSpot.
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
              Get started with Voice AI and HubSpot integration in minutes.
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
            Ready to Transform Your CRM?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your customer interactions and lead management with Voice AI and HubSpot integration.
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

export default HubSpotIntegrationPage;

