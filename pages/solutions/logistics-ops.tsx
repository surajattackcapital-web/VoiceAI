import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { Package, Truck, Warehouse, Globe, Clock, Users, BarChart3, CheckCircle, ArrowRight, Zap, Shield } from 'lucide-react';

const LogisticsOpsPage: React.FC = () => {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Inventory Management',
      description: 'Automated inventory tracking and reorder notifications through voice commands'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Fleet Coordination',
      description: 'Real-time driver communication and route optimization for maximum efficiency'
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: 'Warehouse Operations',
      description: 'Voice-guided picking, packing, and shipping processes for warehouse staff'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Operations',
      description: 'Multilingual support for international logistics and supply chain management'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Tracking',
      description: 'Live shipment tracking and delivery notifications for customers and partners'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Vendor Management',
      description: 'Automated vendor communication and procurement process management'
    }
  ];

  const benefits = [
    {
      metric: '45%',
      description: 'Reduction in operational costs'
    },
    {
      metric: '70%',
      description: 'Faster order processing'
    },
    {
      metric: '90%',
      description: 'Improvement in delivery accuracy'
    },
    {
      metric: '50%',
      description: 'Reduction in manual errors'
    }
  ];

  const useCases = [
    {
      title: 'Order Processing',
      description: 'Automated order intake, validation, and processing through voice commands',
      icon: <Package className="w-6 h-6" />
    },
    {
      title: 'Dispatch Management',
      description: 'Intelligent dispatch assignment and real-time driver coordination',
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: 'Inventory Control',
      description: 'Voice-activated inventory checks and automated reorder processes',
      icon: <Warehouse className="w-6 h-6" />
    },
    {
      title: 'Customer Service',
      description: 'Automated customer inquiries and delivery status updates',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Logistics Operations - Voice AI Solution | VoiceAI"
      description="Optimize logistics operations with Voice AI. Automate inventory management, fleet coordination, and warehouse operations for improved efficiency and accuracy."
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
                Logistics Operations
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Streamline your entire logistics operation with Voice AI. 
                From inventory management to fleet coordination, automate every aspect of your supply chain.
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
                Operational Excellence
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Transform your logistics operations with measurable improvements.
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
                Comprehensive Features
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                End-to-end Voice AI solutions for every aspect of logistics operations.
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
                Operational Use Cases
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                How logistics companies use Voice AI to optimize their operations.
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
                  System Integration
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  VoiceAI seamlessly integrates with your existing logistics systems 
                  and enterprise software for a unified operational experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">WMS Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">TMS Connectivity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">ERP System Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">IoT Device Connectivity</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] p-8 rounded-lg text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Optimize?</h3>
                <p className="text-white/90 mb-6">
                  Join leading logistics companies who have transformed their operations with Voice AI.
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
              Optimize Your Logistics Operations
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover how Voice AI can streamline your entire logistics operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download Solution Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LogisticsOpsPage;
