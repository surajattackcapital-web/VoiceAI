import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Clock, CheckCircle, ArrowRight, Zap, Shield, Globe, Mic, Phone } from 'lucide-react';

const QaAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-Time Analytics',
      description: 'Live dashboards showing call volume, performance metrics, and customer satisfaction scores'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Tracking',
      description: 'Comprehensive tracking of agent performance, call resolution times, and quality scores'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Insights',
      description: 'Deep insights into customer behavior, preferences, and satisfaction patterns'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Call Monitoring',
      description: 'Automated call monitoring and quality assurance with AI-powered analysis'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions for call volume, staffing needs, and customer trends'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance Reporting',
      description: 'Automated compliance reporting and audit trails for regulatory requirements'
    }
  ];

  const benefits = [
    {
      metric: '40%',
      description: 'Improvement in agent performance'
    },
    {
      metric: '85%',
      description: 'Reduction in QA review time'
    },
    {
      metric: '95%',
      description: 'Accuracy in compliance tracking'
    },
    {
      metric: '60%',
      description: 'Increase in customer satisfaction'
    }
  ];

  const analyticsTypes = [
    {
      title: 'Call Volume Analytics',
      description: 'Track call patterns, peak hours, and volume trends to optimize staffing',
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: 'Agent Performance',
      description: 'Monitor individual and team performance with detailed metrics and insights',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Customer Satisfaction',
      description: 'Measure and analyze customer satisfaction scores and feedback patterns',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Quality Assurance',
      description: 'Automated QA scoring and compliance monitoring for all interactions',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="QA & Analytics - Voice AI Feature | VoiceAI"
      description="Comprehensive QA and analytics for Voice AI operations. Real-time monitoring, performance tracking, and customer insights for data-driven decision making."
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
                QA & Analytics
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Make data-driven decisions with comprehensive QA and analytics. 
                Monitor performance, track quality, and gain insights to optimize your Voice AI operations.
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
                Measurable Impact
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                See the measurable improvements from comprehensive QA and analytics.
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
                Analytics Features
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Comprehensive analytics and QA capabilities for Voice AI operations.
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

        {/* Analytics Types Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Analytics Categories
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Comprehensive analytics across all aspects of your Voice AI operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-[var(--accent-1)] mt-1">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                        {type.title}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Real-Time Dashboard
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Monitor your Voice AI operations with comprehensive real-time dashboards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Live Metrics', description: 'Real-time call volume, queue status, and performance indicators' },
                { title: 'Quality Scores', description: 'Automated QA scoring and compliance monitoring' },
                { title: 'Trend Analysis', description: 'Historical trends and predictive analytics for planning' }
              ].map((dashboard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] text-center"
                >
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {dashboard.title}
                  </h3>
                  <p className="text-[var(--muted)]">
                    {dashboard.description}
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
                  Data Integration
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  VoiceAI analytics integrates with your existing business intelligence tools 
                  and data platforms for comprehensive insights.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Business Intelligence Tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">CRM Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Data Warehouses</span>
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
                <h3 className="text-2xl font-bold mb-4">Ready to Analyze?</h3>
                <p className="text-white/90 mb-6">
                  Start making data-driven decisions with comprehensive Voice AI analytics.
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
              Start Analyzing Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Transform your Voice AI operations with comprehensive QA and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download Analytics Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QaAnalyticsPage;
