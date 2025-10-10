import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { Phone, Users, Clock, BarChart3, CheckCircle, ArrowRight, Zap, Shield, Globe, Settings } from 'lucide-react';

const CallRoutingQueuesPage: React.FC = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Intelligent Call Routing',
      description: 'AI-powered routing that directs calls to the most appropriate agent or department based on caller intent and context'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Queue Management',
      description: 'Advanced queue management with priority handling, estimated wait times, and overflow protection'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Monitoring',
      description: 'Live dashboard showing queue status, agent availability, and call volume metrics'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics on call routing efficiency, queue performance, and customer satisfaction'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Auto-Scaling',
      description: 'Automatic scaling of voice AI agents based on call volume and queue length'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Failover Protection',
      description: 'Built-in redundancy and failover mechanisms to ensure continuous service availability'
    }
  ];

  const benefits = [
    {
      metric: '85%',
      description: 'Reduction in call wait times'
    },
    {
      metric: '90%',
      description: 'Improvement in first-call resolution'
    },
    {
      metric: '70%',
      description: 'Increase in agent productivity'
    },
    {
      metric: '95%',
      description: 'Customer satisfaction rate'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Routing',
      description: 'Route customer inquiries to specialized agents based on issue type and customer history',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Sales Lead Qualification',
      description: 'Automatically route qualified leads to sales teams while handling general inquiries with AI',
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: 'Technical Support',
      description: 'Route technical issues to appropriate support tiers based on complexity and urgency',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Emergency Handling',
      description: 'Priority routing for urgent calls with immediate escalation to human agents',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Call Routing & Queues - Voice AI Feature | VoiceAI"
      description="Optimize call routing and queue management with Voice AI. Intelligent routing, queue management, and real-time monitoring for improved customer experience."
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
                Call Routing & Queues
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Optimize your call center operations with intelligent routing and advanced queue management. 
                Ensure every call reaches the right agent at the right time.
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
                Performance Improvements
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                See the measurable impact of intelligent call routing on your operations.
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
                Advanced Features
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Comprehensive call routing and queue management capabilities.
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
                How businesses use intelligent call routing to improve customer experience.
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

        {/* Routing Flow Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Intelligent Routing Process
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                See how our AI-powered routing system works to optimize call handling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Call Analysis', description: 'AI analyzes caller intent and context' },
                { step: '2', title: 'Queue Assignment', description: 'Call is routed to appropriate queue or agent' },
                { step: '3', title: 'Priority Handling', description: 'Priority calls are escalated immediately' },
                { step: '4', title: 'Performance Tracking', description: 'System tracks and optimizes routing performance' }
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
                  Seamless Integration
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  VoiceAI integrates with your existing call center infrastructure and 
                  CRM systems for a unified customer experience.
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
                    <span className="text-[var(--text)]">Call Center Software</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Analytics Platforms</span>
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
                  Join companies who have transformed their call center operations with intelligent routing.
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
              Optimize Your Call Center Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Transform your call routing and queue management with intelligent Voice AI.
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

export default CallRoutingQueuesPage;
