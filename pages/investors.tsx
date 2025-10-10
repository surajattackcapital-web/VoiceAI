import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, BarChart3, FileText, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const keyMetrics = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Revenue Growth',
      value: '300%',
      description: 'Year-over-year growth'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Base',
      value: '500+',
      description: 'Active logistics companies'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Market Expansion',
      value: '15+',
      description: 'Countries served'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Platform Usage',
      value: '2M+',
      description: 'Monthly automated calls'
    }
  ];

  const investors = [
    {
      name: 'Sequoia Capital',
      type: 'Series B Lead',
      logo: 'SC',
      description: 'Leading venture capital firm with expertise in enterprise software'
    },
    {
      name: 'Andreessen Horowitz',
      type: 'Series A Lead',
      logo: 'AH',
      description: 'Premier venture capital firm focused on technology companies'
    },
    {
      name: 'General Catalyst',
      type: 'Seed Investor',
      logo: 'GC',
      description: 'Venture capital firm investing in transformative technology'
    },
    {
      name: 'Kleiner Perkins',
      type: 'Strategic Investor',
      logo: 'KP',
      description: 'Early-stage venture capital firm with logistics expertise'
    }
  ];

  const milestones = [
    {
      date: '2025-01-15',
      title: 'Series B Funding',
      description: 'Raised $50M to accelerate platform development and market expansion',
      amount: '$50M'
    },
    {
      date: '2024-06-20',
      title: 'Series A Funding',
      description: 'Secured $20M to scale operations and expand team',
      amount: '$20M'
    },
    {
      date: '2024-01-10',
      title: 'Seed Funding',
      description: 'Initial $5M funding to launch VoiceAI platform',
      amount: '$5M'
    },
    {
      date: '2023-09-15',
      title: 'Company Founded',
      description: 'VoiceAI founded with vision to transform logistics communication',
      amount: 'Founded'
    }
  ];

  return (
    <Layout 
      title="Investors - Investment Information | VoiceAI"
      description="Learn about VoiceAI's investment opportunities, financial performance, and growth metrics. Access investor resources and company information."
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
                Investor Relations
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                VoiceAI is transforming the logistics industry with cutting-edge Voice AI technology. 
                Learn about our growth, financial performance, and investment opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Key Performance Metrics
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Track our growth and success in the Voice AI logistics market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] text-center"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding Milestones Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Funding Milestones
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Our journey from startup to industry leader.
              </p>
            </div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="flex items-center text-sm text-[var(--muted)]">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(milestone.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="px-3 py-1 bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-sm rounded-full">
                          {milestone.amount}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investors Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Our Investors
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Backed by leading venture capital firms and strategic investors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {investors.map((investor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {investor.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[var(--text)] mb-1">
                        {investor.name}
                      </h3>
                      <p className="text-[var(--accent-1)] font-medium mb-3">
                        {investor.type}
                      </p>
                      <p className="text-[var(--muted)]">
                        {investor.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Highlights Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Why Invest in VoiceAI?
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Key factors that make VoiceAI an attractive investment opportunity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Large Market Opportunity',
                  description: 'The global logistics market is valued at $8.1 trillion with significant automation potential'
                },
                {
                  title: 'Proven Technology',
                  description: 'Our Voice AI platform has demonstrated 80% reduction in coordination time for customers'
                },
                {
                  title: 'Strong Customer Traction',
                  description: '500+ logistics companies trust VoiceAI with their communication needs'
                },
                {
                  title: 'Experienced Team',
                  description: 'Leadership team with deep expertise in AI, logistics, and enterprise software'
                },
                {
                  title: 'Scalable Platform',
                  description: 'Cloud-native architecture supports rapid growth and global expansion'
                },
                {
                  title: 'Competitive Advantage',
                  description: 'First-mover advantage in Voice AI for logistics with strong IP portfolio'
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[var(--text)] mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Resources Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Investor Resources
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Access our latest financial reports, presentations, and investor materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: 'Financial Reports',
                  description: 'Quarterly and annual financial statements',
                  action: 'Download Reports'
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: 'Investor Presentation',
                  description: 'Latest investor deck and company overview',
                  action: 'View Presentation'
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: 'Earnings Calendar',
                  description: 'Upcoming earnings calls and investor events',
                  action: 'View Calendar'
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] text-center hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-6">
                    {resource.description}
                  </p>
                  <button className="btn-primary w-full">
                    {resource.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Investing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our investor relations team to learn more about investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Contact IR Team</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download Investor Kit
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InvestorsPage;
