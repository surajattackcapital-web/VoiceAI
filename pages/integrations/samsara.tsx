import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, BarChart3, Shield, Zap } from 'lucide-react';

const SamsaraIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Intelligent Dispatch Management',
      description: 'Process load assignments through voice commands, check driver availability and location via Samsara GPS, automatically update delivery windows and ETAs.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Driver Communication Hub',
      description: 'Provide real-time traffic and weather updates, relay customer delivery instructions, handle driver check-ins and status reports.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Fleet Data Synchronization',
      description: 'Sync call logs with Samsara\'s driver scorecards, update delivery confirmations automatically, track communication frequency and response times.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety and Compliance',
      description: 'Monitor Hours of Service (HOS) compliance through voice interactions, handle DOT inspection calls and documentation.'
    }
  ];

  const benefits = [
    {
      metric: '40%',
      description: 'Reduction in dispatch call volume through automation'
    },
    {
      metric: 'Improved',
      description: 'Driver satisfaction with faster, clearer communications'
    },
    {
      metric: 'Enhanced',
      description: 'Fleet visibility with real-time voice data integration'
    },
    {
      metric: 'Reduced',
      description: 'Operational costs through streamlined dispatch processes'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Samsara",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Fleet Data",
      description: "Map driver profiles, routes, and vehicle information"
    },
    {
      step: "3",
      title: "Set Communication Rules",
      description: "Define dispatch protocols and emergency procedures"
    },
    {
      step: "4",
      title: "Activate AI Dispatch",
      description: "Launch automated voice communications with your fleet"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Samsara's platform?",
      answer: "Yes. Voice AI connects directly to Samsara's API, allowing seamless data flow between voice communications and fleet management systems."
    },
    {
      question: "Can Voice AI handle emergency situations with drivers?",
      answer: "Absolutely. The AI can detect emergency keywords, automatically trigger Samsara's safety alerts, and coordinate with emergency services while maintaining communication with the driver."
    },
    {
      question: "How does Voice AI improve driver communication efficiency?",
      answer: "Voice AI provides instant, clear communication without the delays of manual dispatch calls, while automatically updating all relevant information in Samsara's system."
    },
    {
      question: "Can Voice AI work with Samsara's ELD compliance features?",
      answer: "Yes. Voice AI can communicate HOS status, handle compliance check-ins, and ensure all regulatory requirements are met through voice interactions."
    }
  ];

  return (
    <Layout 
      title="Samsara Integration | Voice AI for Fleet Management" 
      description="Connect Voice AI with Samsara to automate dispatch calls, track driver communications, and sync fleet data in real-time. Built for trucking companies that want smarter fleet operations and better driver coordination."
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
                SA
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Smart Fleet Operations with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Samsara & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Samsara's fleet management platform to create an intelligent 
              dispatch and communication system. Transform your fleet operations with AI-powered dispatch, 
              real-time driver updates, and instant fleet data synchronization.
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
              Why Integrate Voice AI with Samsara?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Samsara provides comprehensive fleet management, but adding Voice AI transforms how you communicate 
              with drivers and manage operations. Every call becomes data, every conversation becomes actionable intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Dispatch Coordination',
                description: 'Voice AI handles dispatch calls 24/7, checking driver availability, route optimization, and load assignments directly through Samsara\'s platform.'
              },
              {
                title: 'Real-time Driver Communication',
                description: 'The AI communicates with drivers via voice, updating delivery status, route changes, and emergency situations while syncing everything to Samsara\'s dashboard.'
              },
              {
                title: 'Fleet Performance Insights',
                description: 'Every call interaction is logged and analyzed, providing deeper insights into driver communication patterns and operational efficiency.'
              },
              {
                title: 'Emergency Response Automation',
                description: 'Voice AI can detect urgent situations from driver calls and automatically trigger Samsara\'s safety alerts and emergency protocols.'
              },
              {
                title: 'Reduced Dispatch Workload',
                description: 'Your dispatch team focuses on strategic decisions while AI handles routine communications and status updates.'
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
              Everything you need to transform your fleet operations.
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
              Results Fleet Managers See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with Samsara.
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
              Get started with Voice AI and Samsara integration in minutes.
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
            Ready to Transform Your Fleet Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your dispatch and driver communications with Voice AI and Samsara integration.
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

export default SamsaraIntegrationPage;

