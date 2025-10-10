import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, Phone, Zap, BarChart3 } from 'lucide-react';

const TwilioIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Smart SMS Automation',
      description: 'Send delivery updates and status notifications through voice-triggered SMS, handle appointment confirmations and rescheduling requests.'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Intelligent Voice Communications',
      description: 'Handle inbound calls with automatic routing and escalation, process outbound calls for delivery confirmations and updates.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Multi-Channel Messaging Hub',
      description: 'Route messages across SMS, voice, and email channels, handle message prioritization and delivery optimization.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Communication Analytics',
      description: 'Track message delivery and response rates through voice analytics, handle communication effectiveness analysis.'
    }
  ];

  const benefits = [
    {
      metric: '70%',
      description: 'Improvement in communication response times through automation'
    },
    {
      metric: 'Enhanced',
      description: 'Customer satisfaction with timely, personalized notifications'
    },
    {
      metric: 'Reduced',
      description: 'Communication costs through intelligent message routing'
    },
    {
      metric: 'Improved',
      description: 'Operational efficiency with automated status updates'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Twilio",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Communication Rules",
      description: "Set up messaging templates, routing protocols, and notification preferences"
    },
    {
      step: "3",
      title: "Map Contact Data",
      description: "Connect customer profiles, driver information, and communication preferences"
    },
    {
      step: "4",
      title: "Activate AI Communications",
      description: "Launch automated voice and SMS communication workflows"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Twilio's cloud communications platform?",
      answer: "Yes. Voice AI connects directly to Twilio's API, enabling seamless SMS, voice, and multi-channel communication automation."
    },
    {
      question: "Can Voice AI handle SMS notifications and voice calls automatically?",
      answer: "Absolutely. The AI can send SMS updates, make voice calls, and coordinate multi-channel communications through Twilio's platform."
    },
    {
      question: "How does Voice AI improve logistics communication efficiency?",
      answer: "Voice AI eliminates manual messaging, provides intelligent routing, and automatically optimizes communication strategies for better engagement and response rates."
    },
    {
      question: "Is the integration secure for communication data?",
      answer: "Yes. All communications are encrypted and the platform meets enterprise security standards, ensuring your messaging and voice data remains protected."
    }
  ];

  return (
    <Layout 
      title="Twilio Integration | Voice AI for Cloud Communications" 
      description="Connect Voice AI with Twilio to automate SMS notifications, handle multi-channel communications, and streamline logistics messaging. Built for freight companies that want intelligent communication automation and better customer engagement."
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
                TW
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Cloud Communications with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Twilio & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Twilio's cloud communications platform to create an intelligent 
              multi-channel communication system for freight and logistics operations. Transform your communication 
              workflows with AI-powered SMS, voice calls, and intelligent message routing.
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
              Why Integrate Voice AI with Twilio?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Twilio provides powerful cloud communications, but adding Voice AI transforms messaging into an 
              intelligent, automated experience that improves customer engagement and streamlines logistics communications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated SMS Notifications',
                description: 'Voice AI handles delivery updates, appointment confirmations, and status notifications through intelligent SMS automation powered by Twilio\'s messaging platform.'
              },
              {
                title: 'Intelligent Message Routing',
                description: 'The AI can route messages to the right recipients, handle escalation protocols, and coordinate multi-channel communications based on urgency and context.'
              },
              {
                title: 'Real-time Communication Analytics',
                description: 'Voice AI provides insights into message delivery, response rates, and communication effectiveness while automatically optimizing messaging strategies.'
              },
              {
                title: 'Smart Notification Management',
                description: 'Carriers, customers, and dispatchers receive personalized notifications based on their preferences, location, and role in the logistics process.'
              },
              {
                title: 'Enhanced Customer Engagement',
                description: 'Voice AI creates personalized communication experiences that improve customer satisfaction and reduce communication gaps in logistics operations.'
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
              Everything you need to transform your communication operations.
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
              Real improvements from integrating Voice AI with Twilio.
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
              Get started with Voice AI and Twilio integration in minutes.
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
            Ready to Transform Your Communications?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your messaging and voice communications with Voice AI and Twilio integration.
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

export default TwilioIntegrationPage;

