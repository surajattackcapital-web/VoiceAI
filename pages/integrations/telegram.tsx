import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, BarChart3, Target, Zap } from 'lucide-react';

const TelegramIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Smart Messaging Automation',
      description: 'Automatically handle messaging and notifications through voice interactions, manage chat coordination and updates with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Communication Analytics',
      description: 'Access messaging metrics and communication trends through voice commands, handle response analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Chat Management',
      description: 'Process messages and coordinate responses through voice interactions, handle chat routing and notifications automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Communication Hub',
      description: 'Build and manage messaging workflows through voice-driven interactions, handle team coordination and communication tracking.'
    }
  ];

  const benefits = [
    {
      metric: '65%',
      description: 'Faster messaging response through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Team communication with intelligent chat management'
    },
    {
      metric: 'Enhanced',
      description: 'Notification delivery through automated messaging'
    },
    {
      metric: 'Reduced',
      description: 'Manual messaging coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Telegram",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Chat Rules",
      description: "Set up messaging criteria, notification preferences, and communication parameters"
    },
    {
      step: "3",
      title: "Map Contact Data",
      description: "Connect team members, chat groups, and communication preferences"
    },
    {
      step: "4",
      title: "Activate AI Messaging Hub",
      description: "Launch automated voice messaging and communication"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Telegram's messaging platform?",
      answer: "Yes. Voice AI connects directly to Telegram's API, enabling seamless messaging automation, chat management, and real-time communication data access."
    },
    {
      question: "Can Voice AI handle messaging and team communication automatically?",
      answer: "Absolutely. The AI can send messages, manage chats, handle team notifications, and automatically update all communication information in Telegram through voice interactions."
    },
    {
      question: "How does Voice AI improve messaging efficiency?",
      answer: "Voice AI eliminates manual messaging, provides intelligent chat routing, and automatically optimizes communication strategies for better team coordination and productivity."
    },
    {
      question: "Is the integration secure for messaging and team data?",
      answer: "Yes. All messaging and team communications are encrypted and the platform meets enterprise security standards, ensuring your communication data remains protected."
    }
  ];

  return (
    <Layout 
      title="Telegram Integration | Voice AI for Team Messaging" 
      description="Connect Voice AI with Telegram to automate team messaging, handle intelligent notifications, and streamline communication workflows. Built for logistics companies that want intelligent messaging automation and better team coordination."
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
                TG
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Team Messaging with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Telegram & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Telegram to create an intelligent messaging 
              system for logistics and freight operations. Transform your team communication with AI-powered messaging automation, 
              real-time analytics, and automated communication workflows.
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
              Why Integrate Voice AI with Telegram?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Telegram provides powerful messaging capabilities, but adding Voice AI transforms team communication into an 
              intelligent, automated experience that improves coordination and streamlines logistics operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Team Messaging',
                description: 'Voice AI handles message sending, chat management, and team notifications through intelligent automation powered by Telegram\'s platform.'
              },
              {
                title: 'Intelligent Chat Coordination',
                description: 'The AI can manage group chats, handle message routing, and coordinate multi-team communications based on context and urgency.'
              },
              {
                title: 'Real-time Communication Analytics',
                description: 'Voice AI provides insights into messaging patterns, team engagement, and communication efficiency while automatically optimizing messaging strategies.'
              },
              {
                title: 'Smart Notification Management',
                description: 'Teams receive personalized messaging and notification updates based on their roles, responsibilities, and communication preferences.'
              },
              {
                title: 'Enhanced Team Coordination',
                description: 'Voice AI creates seamless messaging experiences that improve team productivity and reduce communication gaps in logistics operations.'
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
              Everything you need to transform your team messaging.
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
              Results Teams See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with Telegram.
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
              Get started with Voice AI and Telegram integration in minutes.
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
            Ready to Transform Your Team Messaging?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your team messaging and communication with Voice AI and Telegram integration.
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

export default TelegramIntegrationPage;
