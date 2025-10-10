import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { Phone, Brain, Clock, Users, BarChart3, CheckCircle, ArrowRight, Zap, Shield, Globe, Mic } from 'lucide-react';

const SmartIVRPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP understands caller intent and context for intelligent call routing and handling'
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Voice Recognition',
      description: 'High-accuracy voice recognition that works in noisy environments and supports multiple languages'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Dynamic Menu Options',
      description: 'Intelligent menu options that adapt based on caller history, time of day, and business context'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Personalized Experience',
      description: 'Customized interactions based on caller identity, preferences, and previous interactions'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Resolution',
      description: 'Handle common inquiries automatically without transferring to human agents'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Authentication',
      description: 'Secure voice-based authentication and fraud detection for sensitive transactions'
    }
  ];

  const benefits = [
    {
      metric: '75%',
      description: 'Reduction in call transfers'
    },
    {
      metric: '60%',
      description: 'Faster call resolution'
    },
    {
      metric: '85%',
      description: 'Customer satisfaction rate'
    },
    {
      metric: '50%',
      description: 'Reduction in agent workload'
    }
  ];

  const useCases = [
    {
      title: 'Account Inquiries',
      description: 'Handle balance checks, transaction history, and account updates automatically',
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: 'Appointment Scheduling',
      description: 'Automated scheduling with calendar integration and confirmation notifications',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Order Status',
      description: 'Provide real-time order tracking and delivery updates through voice interaction',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Technical Support',
      description: 'Tier 1 support with automated troubleshooting and escalation to human agents',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Smart IVR - Voice AI Feature | VoiceAI"
      description="Transform your IVR system with Smart IVR powered by Voice AI. Natural language processing, voice recognition, and intelligent call routing for better customer experience."
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Smart IVR
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Transform your traditional IVR into an intelligent voice assistant that understands 
                natural language and provides personalized customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  Request Demo
                </button>
                <button className="btn-secondary-light">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Performance Metrics
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                See the measurable impact of Smart IVR on your customer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[var(--accent-1)] mb-2">
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

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Smart IVR Features
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Advanced capabilities that make your IVR system truly intelligent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="text-[var(--accent-1)] mb-4">
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

        {/* Use Cases Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Common Use Cases
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                How businesses use Smart IVR to improve customer interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-[var(--accent-1)] mt-1">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversation Flow Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Intelligent Conversation Flow
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                See how Smart IVR handles natural conversations and provides intelligent responses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Call Reception', description: 'Greet caller and understand their intent' },
                { step: '2', title: 'Intent Recognition', description: 'AI analyzes what the caller wants to accomplish' },
                { step: '3', title: 'Smart Routing', description: 'Route to appropriate solution or human agent' },
                { step: '4', title: 'Resolution', description: 'Complete the interaction with satisfaction' }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted)]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                  Easy Integration
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  Smart IVR integrates seamlessly with your existing phone systems and 
                  business applications for a unified customer experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">PBX System Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">CRM Connectivity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Database Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">API Connectivity</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] p-8 rounded-lg text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Upgrade?</h3>
                <p className="text-white/90 mb-6">
                  Transform your traditional IVR into an intelligent voice assistant that customers love.
                </p>
                <button className="btn-secondary-light w-full">
                  Schedule Demo
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upgrade to Smart IVR Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Provide intelligent, personalized customer experiences with Smart IVR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download Feature Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SmartIVRPage;
