import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';

const ResourcesPage = () => {
  const resourceCategories = [
    {
      title: 'Blogs',
      description: 'Latest insights, trends, and best practices in Voice AI for logistics',
      icon: '📝',
      link: '/resources/blogs',
      count: '15+ Articles',
      features: [
        'Industry trends and analysis',
        'Implementation guides',
        'ROI and cost analysis',
        'Technology deep dives'
      ]
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementation examples',
      icon: '📊',
      link: '/resources/case-studies',
      count: '10+ Studies',
      features: [
        'Freight brokerage automation',
        'Last-mile delivery optimization',
        'Warehouse operations',
        'International logistics'
      ]
    },
    {
      title: 'Comparisons',
      description: 'Detailed comparisons of Voice AI platforms and solutions',
      icon: '⚖️',
      link: '/resources/comparisons',
      count: '8+ Comparisons',
      features: [
        'Platform feature comparisons',
        'Pricing analysis',
        'Integration capabilities',
        'Performance benchmarks'
      ]
    }
  ];

  const latestContent = [
    {
      type: 'Blog',
      title: 'Voice AI is Transforming the Logistics Industry in 2025',
      excerpt: 'Discover how Voice AI is revolutionizing logistics operations with real-world examples and ROI analysis.',
      date: 'January 2025',
      readTime: '8 min read',
      link: '/resources/blogs/voice-ai-transforming-logistics-industry-2025'
    },
    {
      type: 'Case Study',
      title: 'Global Freight Forwarder: 80% Reduction in Coordination Time',
      excerpt: 'How TransGlobal Logistics achieved massive efficiency gains with Voice AI implementation.',
      date: 'January 2025',
      readTime: '6 min read',
      link: '/resources/case-studies/global-freight-forwarder-coordination'
    },
    {
      type: 'Comparison',
      title: 'Retell AI vs Vapi: Complete Platform Comparison',
      excerpt: 'Detailed comparison of two leading Voice AI platforms for logistics applications.',
      date: 'January 2025',
      readTime: '10 min read',
      link: '/resources/comparisons/retell-ai-vs-vapi-comparison'
    }
  ];

  return (
    <Layout title="Voice AI Resources - Insights, Case Studies & Comparisons" description="Comprehensive resources for Voice AI implementation in logistics including blogs, case studies, and platform comparisons">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-6">
              Voice AI
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
              Everything you need to know about implementing Voice AI in your logistics operations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">15+ Blog Articles</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">10+ Case Studies</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">8+ Platform Comparisons</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Explore Our Resources
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Comprehensive guides, real-world examples, and detailed comparisons to help you make informed decisions about Voice AI implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-[var(--text)] mb-3">{category.title}</h3>
                <p className="text-[var(--muted)] mb-4">{category.description}</p>
                <div className="text-sm text-[var(--accent-1)] font-semibold mb-4">{category.count}</div>
                
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[var(--muted)]">
                      <span className="w-2 h-2 bg-[var(--accent-1)] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={category.link}>
                  <button className="btn-primary w-full">
                    Explore {category.title}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Latest Content
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Stay updated with our newest resources and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="card p-4"
              >
                <div className="flex items-center mb-3">
                  <span className="bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {content.type}
                  </span>
                  <span className="ml-auto text-sm text-[var(--muted)]">{content.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text)] mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-[var(--muted)] mb-4 line-clamp-3">
                  {content.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted)]">{content.readTime}</span>
                  <Link href={content.link}>
                    <button className="text-[var(--accent-1)] hover:text-[var(--accent-2)] font-semibold text-sm">
                      Read More →
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Logistics Operations?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get started with Voice AI implementation today and join the companies already seeing 50-70% cost reductions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <button className="bg-white text-[var(--accent-1)] py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Schedule a Demo
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors duration-300">
                  Contact Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
