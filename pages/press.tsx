import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Download, Mail, FileText, Award, Users, TrendingUp } from 'lucide-react';

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      date: '2025-01-15',
      title: 'VoiceAI Raises $50M Series B to Accelerate Voice AI Adoption in Logistics',
      summary: 'Funding will be used to expand platform capabilities and enter new markets',
      category: 'Funding'
    },
    {
      date: '2025-01-10',
      title: 'VoiceAI Partners with Leading Freight Brokers to Automate Customer Communications',
      summary: 'New partnerships will help streamline operations for 500+ logistics companies',
      category: 'Partnerships'
    },
    {
      date: '2025-01-05',
      title: 'VoiceAI Launches Multilingual Voice AI Platform for Global Logistics',
      summary: 'Support for 25+ languages enables seamless international operations',
      category: 'Product'
    },
    {
      date: '2024-12-20',
      title: 'VoiceAI Named "Best Voice AI Solution" by Logistics Technology Awards',
      summary: 'Recognition for innovation in automated customer communications',
      category: 'Awards'
    }
  ];

  const mediaCoverage = [
    {
      outlet: 'TechCrunch',
      title: 'Voice AI is transforming logistics operations',
      date: '2025-01-12',
      type: 'Article'
    },
    {
      outlet: 'Logistics Management',
      title: 'How AI is revolutionizing freight brokerage',
      date: '2025-01-08',
      type: 'Feature'
    },
    {
      outlet: 'Supply Chain Dive',
      title: 'VoiceAI automates 80% of customer calls',
      date: '2025-01-03',
      type: 'News'
    },
    {
      outlet: 'FreightWaves',
      title: 'The future of logistics communication',
      date: '2024-12-28',
      type: 'Interview'
    }
  ];

  const companyStats = [
    { icon: <Users className="w-6 h-6" />, label: 'Customers', value: '500+' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Growth Rate', value: '300%' },
    { icon: <Award className="w-6 h-6" />, label: 'Awards Won', value: '12' },
    { icon: <FileText className="w-6 h-6" />, label: 'Press Mentions', value: '150+' }
  ];

  return (
    <Layout 
      title="Press - News & Media | VoiceAI"
      description="Latest news, press releases, and media coverage about VoiceAI. Stay updated on our company milestones, product launches, and industry recognition."
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
                Press & Media
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest news, press releases, and media coverage 
                about VoiceAI's mission to transform logistics with Voice AI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Stats Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                VoiceAI by the Numbers
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Key metrics that showcase our growth and impact in the logistics industry.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[var(--muted)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Latest Press Releases
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Official announcements and company updates.
              </p>
            </div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="flex items-center text-sm text-[var(--muted)]">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(release.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="px-3 py-1 bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-sm rounded-full">
                          {release.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                        {release.title}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {release.summary}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button className="btn-primary flex items-center space-x-2">
                        <span>Read More</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Media Coverage
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                What the media is saying about VoiceAI and our impact on logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaCoverage.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-[var(--accent-1)]">
                      {article.outlet}
                    </span>
                    <span className="text-sm text-[var(--muted)]">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-[var(--bg-2)] text-[var(--muted)] text-sm rounded">
                      {article.type}
                    </span>
                    <button className="text-[var(--accent-1)] hover:text-[var(--accent-2)] transition-colors flex items-center space-x-1">
                      <span className="text-sm">Read Article</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Media Kit
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Download our media kit for logos, images, and company information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Download className="w-6 h-6" />,
                  title: 'Company Logos',
                  description: 'High-resolution logos in various formats',
                  download: 'Download Logos'
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: 'Press Kit',
                  description: 'Company overview, key facts, and executive bios',
                  download: 'Download Press Kit'
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: 'Product Images',
                  description: 'Screenshots and product imagery',
                  download: 'Download Images'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] text-center hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-6">
                    {item.description}
                  </p>
                  <button className="btn-primary w-full">
                    {item.download}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Press Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Media Inquiries
            </h2>
            <p className="text-xl text-white/90 mb-8">
              For press inquiries, interviews, or media kit requests, please contact our press team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Contact Press Team</span>
              </button>
              <button className="btn-secondary-light">
                Download Media Kit
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PressPage;
