import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Search, Download, ArrowRight, CheckCircle, Users, Clock, FileText } from 'lucide-react';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      count: '5 guides'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Guides',
      description: 'Comprehensive guides for end users',
      count: '12 guides'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      count: '25 endpoints'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Best Practices',
      description: 'Recommended practices and tips',
      count: '8 articles'
    }
  ];

  return (
    <Layout 
      title="Documentation - VoiceAI Help Center"
      description="Comprehensive documentation for VoiceAI. Get started guides, API references, user manuals, and best practices for implementing Voice AI in your logistics operations."
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
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Everything you need to get started with VoiceAI and implement 
                Voice AI solutions in your logistics operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  Get Started
                </button>
                <button className="btn-secondary-light">
                  API Reference
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-[var(--bg-2)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--muted)] w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--surface)] text-[var(--text)]"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Documentation Categories
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Find the information you need quickly and easily.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {docCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors cursor-pointer"
                >
                  <div className="text-[var(--accent-1)] mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-4">
                    {category.description}
                  </p>
                  <p className="text-sm text-[var(--accent-1)] font-medium">
                    {category.count}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Popular Articles
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Most frequently accessed documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Quick Start Guide', description: 'Get up and running with VoiceAI in 5 minutes' },
                { title: 'API Authentication', description: 'Learn how to authenticate with our API' },
                { title: 'Voice AI Configuration', description: 'Configure your voice AI agents for optimal performance' },
                { title: 'Integration Examples', description: 'Code examples for common integrations' },
                { title: 'Troubleshooting Guide', description: 'Common issues and their solutions' },
                { title: 'Best Practices', description: 'Recommended practices for Voice AI implementation' }
              ].map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                        {article.title}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {article.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[var(--accent-1)]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Contact Support</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download PDF Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;
