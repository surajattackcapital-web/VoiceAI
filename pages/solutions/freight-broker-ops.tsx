import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { Truck, Phone, Clock, DollarSign, Users, BarChart3, CheckCircle, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const FreightBrokerOpsPage: React.FC = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Automated Load Matching',
      description: 'AI-powered system matches loads with carriers based on capacity, location, and preferences'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Communication',
      description: 'Instant voice communication between brokers, shippers, and carriers'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Dynamic Pricing',
      description: 'Automated rate negotiations and pricing based on market conditions'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Carrier Management',
      description: 'Comprehensive carrier onboarding, verification, and relationship management'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Detailed insights into broker performance, carrier utilization, and profitability'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance Tracking',
      description: 'Automated compliance monitoring and documentation for regulatory requirements'
    }
  ];

  const benefits = [
    {
      metric: '60%',
      description: 'Reduction in load matching time'
    },
    {
      metric: '40%',
      description: 'Increase in carrier utilization'
    },
    {
      metric: '25%',
      description: 'Improvement in profit margins'
    },
    {
      metric: '80%',
      description: 'Reduction in manual phone calls'
    }
  ];

  const useCases = [
    {
      title: 'Load Posting & Matching',
      description: 'Automatically post loads to multiple boards and match with qualified carriers',
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: 'Rate Negotiations',
      description: 'AI-powered rate negotiations with carriers based on market data',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: 'Carrier Onboarding',
      description: 'Streamlined carrier registration and verification process',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Dispatch Coordination',
      description: 'Automated dispatch notifications and real-time tracking updates',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Freight Broker Operations - Voice AI Solution | VoiceAI"
      description="Streamline freight broker operations with Voice AI. Automate load matching, carrier communication, and rate negotiations for improved efficiency and profitability."
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
                Freight Broker Operations
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Transform your freight brokerage with Voice AI automation. 
                Streamline load matching, carrier communication, and operations for maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  Request Demo
                </button>
                <button className="btn-secondary-light">
                  View Case Study
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
                Measurable Results
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                See the impact Voice AI has on freight broker operations.
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
                Key Features
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Comprehensive Voice AI features designed specifically for freight brokers.
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
                How freight brokers use Voice AI to streamline their operations.
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

        {/* Integration Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                  Seamless Integration
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  VoiceAI integrates with your existing freight broker systems and load boards 
                  for a unified workflow experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">DAT Load Board Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Truckstop.com Connectivity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">TMS System Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Carrier Management Systems</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] p-8 rounded-lg text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Join hundreds of freight brokers who have already transformed their operations with Voice AI.
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
              Transform Your Freight Brokerage Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how Voice AI can streamline your operations and increase profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FreightBrokerOpsPage;
