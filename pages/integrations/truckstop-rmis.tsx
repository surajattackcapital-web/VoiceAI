import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, BarChart3, Target, Zap } from 'lucide-react';

const TruckstopRMISIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Smart Risk Management',
      description: 'Automatically manage risk assessment and compliance through voice interactions, handle safety monitoring and reporting with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Risk Analytics',
      description: 'Access risk metrics and safety trends through voice commands, handle risk analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Compliance Management',
      description: 'Process compliance checks and handle safety reporting through voice interactions, handle risk assessment and monitoring automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Risk Hub',
      description: 'Build and manage risk management workflows through voice-driven interactions, handle safety compliance and risk tracking.'
    }
  ];

  const benefits = [
    {
      metric: '50%',
      description: 'Faster risk assessment through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Safety compliance with intelligent risk management'
    },
    {
      metric: 'Enhanced',
      description: 'Risk visibility through automated safety monitoring'
    },
    {
      metric: 'Reduced',
      description: 'Manual risk coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Truckstop RMIS",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Risk Rules",
      description: "Set up risk criteria, safety preferences, and compliance parameters"
    },
    {
      step: "3",
      title: "Map Safety Data",
      description: "Connect safety profiles, compliance information, and risk preferences"
    },
    {
      step: "4",
      title: "Activate AI Risk Management",
      description: "Launch automated voice risk management and compliance"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Truckstop RMIS's risk management platform?",
      answer: "Yes. Voice AI connects directly to Truckstop RMIS's API, enabling seamless risk management, compliance monitoring, and real-time safety data access."
    },
    {
      question: "Can Voice AI handle risk assessment and compliance management automatically?",
      answer: "Absolutely. The AI can assess risks, manage compliance, handle safety reporting, and automatically update all risk information in Truckstop RMIS's system through voice interactions."
    },
    {
      question: "How does Voice AI improve risk management efficiency?",
      answer: "Voice AI eliminates manual risk assessment, provides intelligent compliance monitoring, and automatically optimizes risk strategies for better safety and operational efficiency."
    },
    {
      question: "Is the integration secure for risk and safety data?",
      answer: "Yes. All risk and safety communications are encrypted and the platform meets enterprise security standards, ensuring your safety data remains protected."
    }
  ];

  return (
    <Layout 
      title="Truckstop RMIS Integration | Voice AI for Risk Management" 
      description="Connect Voice AI with Truckstop RMIS to automate risk assessment, handle intelligent compliance management, and streamline risk operations. Built for logistics companies that want intelligent risk automation and better safety management."
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
                TR
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Risk Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Truckstop RMIS & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Truckstop RMIS to create an intelligent risk management 
              system for logistics and freight operations. Transform your risk operations with AI-powered compliance management, 
              real-time analytics, and automated safety workflows.
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
              Why Integrate Voice AI with Truckstop RMIS?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Truckstop RMIS provides comprehensive risk management, but adding Voice AI transforms risk operations into an 
              intelligent, automated experience that improves safety and streamlines compliance management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Risk Assessment',
                description: 'Voice AI handles risk evaluation, compliance monitoring, and safety reporting through intelligent automation powered by Truckstop RMIS\'s platform.'
              },
              {
                title: 'Intelligent Compliance Management',
                description: 'The AI can monitor compliance, handle safety assessments, and coordinate multi-risk operations based on safety criteria and regulatory requirements.'
              },
              {
                title: 'Real-time Risk Intelligence',
                description: 'Voice AI provides insights into risk trends, safety performance, and compliance efficiency while automatically optimizing risk strategies.'
              },
              {
                title: 'Smart Safety Optimization',
                description: 'Risk managers and safety teams receive personalized risk recommendations and compliance insights based on their safety requirements and regulatory goals.'
              },
              {
                title: 'Enhanced Risk Efficiency',
                description: 'Voice AI creates seamless risk experiences that improve safety compliance and reduce operational risks in logistics operations.'
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
              Everything you need to transform your risk management.
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
              Results Risk Teams See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with Truckstop RMIS.
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
              Get started with Voice AI and Truckstop RMIS integration in minutes.
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
            Ready to Transform Your Risk Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your risk assessment and compliance management with Voice AI and Truckstop RMIS integration.
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

export default TruckstopRMISIntegrationPage;
