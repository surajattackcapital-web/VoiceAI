import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail, BarChart3, Target, Zap } from 'lucide-react';

const GmailIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Smart Email Management',
      description: 'Automatically handle email composition and responses through voice interactions, manage email routing and prioritization with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Email Analytics',
      description: 'Access email metrics and communication trends through voice commands, handle response analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Email Workflows',
      description: 'Process emails and trigger responses through voice interactions, handle email categorization and follow-up automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Communication Hub',
      description: 'Build and manage email campaigns through voice-driven interactions, handle customer communication and relationship tracking.'
    }
  ];

  const benefits = [
    {
      metric: '60%',
      description: 'Faster email response through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Email organization with intelligent categorization'
    },
    {
      metric: 'Enhanced',
      description: 'Customer communication through automated workflows'
    },
    {
      metric: 'Reduced',
      description: 'Email management time with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Gmail",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Email Rules",
      description: "Set up email routing criteria, response preferences, and communication parameters"
    },
    {
      step: "3",
      title: "Map Contact Data",
      description: "Connect customer profiles, email templates, and communication preferences"
    },
    {
      step: "4",
      title: "Activate AI Email Hub",
      description: "Launch automated voice email management and communication"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Gmail's email platform?",
      answer: "Yes. Voice AI connects directly to Gmail's API, enabling seamless email management, composition, and real-time communication data access."
    },
    {
      question: "Can Voice AI handle email composition and customer communication automatically?",
      answer: "Absolutely. The AI can compose emails, manage responses, handle customer inquiries, and automatically update all email information in Gmail through voice interactions."
    },
    {
      question: "How does Voice AI improve email management efficiency?",
      answer: "Voice AI eliminates manual email composition, provides intelligent response suggestions, and automatically optimizes email workflows for better customer communication and productivity."
    },
    {
      question: "Is the integration secure for email and customer data?",
      answer: "Yes. All email and customer communications are encrypted and the platform meets enterprise security standards, ensuring your communication data remains protected."
    }
  ];

  return (
    <Layout 
      title="Gmail Integration | Voice AI for Email Management" 
      description="Connect Voice AI with Gmail to automate email composition, handle intelligent responses, and streamline business communication. Built for logistics companies that want intelligent email automation and better customer communication."
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
                GM
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Email Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Gmail & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Gmail to create an intelligent email management 
              system for logistics and freight operations. Transform your business communication with AI-powered email composition, 
              real-time analytics, and automated email workflows.
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
              Why Integrate Voice AI with Gmail?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Gmail provides powerful email management, but adding Voice AI transforms email communication into an 
              intelligent, automated experience that improves response times and streamlines business communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Email Composition',
                description: 'Voice AI handles email writing, response generation, and customer communication through intelligent automation powered by Gmail\'s platform.'
              },
              {
                title: 'Intelligent Email Routing',
                description: 'The AI can categorize emails, prioritize responses, and coordinate multi-recipient communications based on content and urgency.'
              },
              {
                title: 'Real-time Email Analytics',
                description: 'Voice AI provides insights into email performance, response rates, and communication trends while automatically optimizing email strategies.'
              },
              {
                title: 'Smart Customer Communication',
                description: 'Teams receive personalized email templates and response suggestions based on customer history, preferences, and communication context.'
              },
              {
                title: 'Enhanced Email Productivity',
                description: 'Voice AI creates seamless email experiences that improve response speed and reduce communication gaps in logistics operations.'
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
              Everything you need to transform your email management.
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
              Real improvements from integrating Voice AI with Gmail.
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
              Get started with Voice AI and Gmail integration in minutes.
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
            Ready to Transform Your Email Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your email composition and customer communication with Voice AI and Gmail integration.
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

export default GmailIntegrationPage;
