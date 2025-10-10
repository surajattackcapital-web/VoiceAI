import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';

const ComparisonsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Platform Comparisons', 'Feature Analysis', 'Pricing Comparison', 'Integration Analysis'];

  const comparisons = [
    {
      id: 1,
      title: 'Retell AI vs Vapi: Complete Platform Comparison',
      description: 'Detailed comparison of two leading Voice AI platforms for logistics applications',
      category: 'Platform Comparisons',
      platforms: ['Retell AI', 'Vapi'],
      keyFeatures: [
        'Voice quality and natural conversation',
        'Integration capabilities',
        'Pricing and scalability',
        'Customer support and documentation'
      ],
      winner: 'Retell AI',
      readTime: '10 min read',
      image: '/images/comparison-retell-vs-vapi.jpg',
      featured: true,
      link: '/resources/comparisons/retell-ai-vs-vapi-comparison'
    },
    {
      id: 2,
      title: 'Voice AI Platforms: Pricing Analysis for Logistics',
      description: 'Comprehensive pricing comparison of major Voice AI platforms for logistics companies',
      category: 'Pricing Comparison',
      platforms: ['Retell AI', 'Vapi', 'ElevenLabs', 'Bland AI'],
      keyFeatures: [
        'Pricing models and structures',
        'Cost per minute analysis',
        'Enterprise pricing options',
        'ROI and value comparison'
      ],
      winner: 'Retell AI',
      readTime: '8 min read',
      image: '/images/comparison-pricing-analysis.jpg',
      featured: true,
      link: '/resources/comparisons/voice-ai-platforms-pricing-analysis'
    },
    {
      id: 3,
      title: 'Integration Capabilities: Voice AI Platform Analysis',
      description: 'Deep dive into integration capabilities of leading Voice AI platforms',
      category: 'Integration Analysis',
      platforms: ['Retell AI', 'Vapi', 'ElevenLabs', 'Synthflow'],
      keyFeatures: [
        'API connectivity and documentation',
        'CRM and ERP integration',
        'Third-party app support',
        'Custom development options'
      ],
      winner: 'Retell AI',
      readTime: '12 min read',
      image: '/images/comparison-integration-analysis.jpg',
      featured: false,
      link: '/resources/comparisons/integration-capabilities-analysis'
    },
    {
      id: 4,
      title: 'Voice Quality Comparison: Natural Conversation Analysis',
      description: 'Comprehensive analysis of voice quality and natural conversation capabilities',
      category: 'Feature Analysis',
      platforms: ['Retell AI', 'Vapi', 'ElevenLabs', 'Bland AI'],
      keyFeatures: [
        'Voice naturalness and quality',
        'Conversation flow and context',
        'Emotional intelligence',
        'Multilingual support'
      ],
      winner: 'Retell AI',
      readTime: '9 min read',
      image: '/images/comparison-voice-quality.jpg',
      featured: false,
      link: '/resources/comparisons/voice-quality-natural-conversation'
    },
    {
      id: 5,
      title: 'Enterprise Features: Voice AI Platform Comparison',
      description: 'Comparison of enterprise features and capabilities across Voice AI platforms',
      category: 'Feature Analysis',
      platforms: ['Retell AI', 'Vapi', 'ElevenLabs', 'Synthflow'],
      keyFeatures: [
        'Security and compliance',
        'Scalability and performance',
        'Enterprise support',
        'Customization options'
      ],
      winner: 'Retell AI',
      readTime: '11 min read',
      image: '/images/comparison-enterprise-features.jpg',
      featured: false,
      link: '/resources/comparisons/enterprise-features-comparison'
    },
    {
      id: 6,
      title: 'Developer Experience: Voice AI Platform Analysis',
      description: 'Analysis of developer experience and ease of implementation',
      category: 'Platform Comparisons',
      platforms: ['Retell AI', 'Vapi', 'ElevenLabs', 'Bland AI'],
      keyFeatures: [
        'Documentation quality',
        'SDK and API design',
        'Developer tools and resources',
        'Community and support'
      ],
      winner: 'Vapi',
      readTime: '8 min read',
      image: '/images/comparison-developer-experience.jpg',
      featured: false,
      link: '/resources/comparisons/developer-experience-analysis'
    },
    {
      id: 7,
      title: 'Multilingual Support: Voice AI Platform Comparison',
      description: 'Comparison of multilingual capabilities across Voice AI platforms',
      category: 'Feature Analysis',
      platforms: ['Retell AI', 'Vapi', 'ElevenLabs', 'Synthflow'],
      keyFeatures: [
        'Language support coverage',
        'Cultural adaptation',
        'Accent recognition',
        'Translation quality'
      ],
      winner: 'Retell AI',
      readTime: '7 min read',
      image: '/images/comparison-multilingual.jpg',
      featured: false,
      link: '/resources/comparisons/multilingual-support-comparison'
    },
    {
      id: 8,
      title: 'Analytics and Reporting: Voice AI Platform Analysis',
      description: 'Analysis of analytics and reporting capabilities across platforms',
      category: 'Feature Analysis',
      platforms: ['Retell AI', 'Vapi', 'ElevenLabs', 'Bland AI'],
      keyFeatures: [
        'Call analytics and insights',
        'Performance metrics',
        'Custom reporting',
        'Data export options'
      ],
      winner: 'Retell AI',
      readTime: '6 min read',
      image: '/images/comparison-analytics.jpg',
      featured: false,
      link: '/resources/comparisons/analytics-reporting-analysis'
    }
  ];

  const filteredComparisons = selectedCategory === 'All' 
    ? comparisons 
    : comparisons.filter(comparison => comparison.category === selectedCategory);

  const featuredComparisons = comparisons.filter(comparison => comparison.featured);

  return (
    <Layout title="Voice AI Platform Comparisons - Detailed Analysis" description="Detailed comparisons of Voice AI platforms and solutions for logistics operations">
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
              Voice AI Platform
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Comparisons
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
              Detailed comparisons of Voice AI platforms and solutions for logistics
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">8+ Comparisons</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">Unbiased Analysis</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">Real Data</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Comparisons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Featured Comparisons
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Our most comprehensive platform analyses
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredComparisons.map((comparison, index) => (
              <motion.div
                key={comparison.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl">⚖️</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                  <span className="bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {comparison.category}
                  </span>
                  <span className="ml-auto text-sm text-[var(--muted)]">{comparison.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-3">
                    {comparison.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] mb-4">
                    {comparison.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Platforms Compared:</h4>
                    <div className="flex flex-wrap gap-2">
                      {comparison.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="bg-[var(--bg-2)] text-[var(--text)] text-sm px-3 py-1 rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Key Analysis Areas:</h4>
                    <ul className="space-y-1">
                      {comparison.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-[var(--muted)]">
                          <span className="w-2 h-2 bg-[var(--accent-1)] rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Winner: {comparison.winner}
                    </span>
                    <Link href={comparison.link}>
                      <button className="text-[var(--accent-1)] hover:text-[var(--accent-2)] font-semibold text-sm">
                        Read Full Comparison →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-[var(--accent-1)] text-white'
                    : 'bg-white text-gray-800 hover:bg-[var(--bg-2)] hover:text-[var(--text)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Comparisons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              {selectedCategory === 'All' ? 'All Comparisons' : `${selectedCategory} Comparisons`}
            </h2>
            <p className="text-xl text-[var(--muted)]">
              {filteredComparisons.length} comparisons found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredComparisons.map((comparison, index) => (
              <motion.div
                key={comparison.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                className="card overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-3xl">⚖️</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                  <span className="bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {comparison.category}
                  </span>
                  <span className="ml-auto text-sm text-[var(--muted)]">{comparison.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[var(--text)] mb-3 line-clamp-2">
                    {comparison.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] mb-3 text-sm line-clamp-2">
                    {comparison.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--text)] mb-1 text-sm">Platforms:</h4>
                    <div className="flex flex-wrap gap-1">
                      {comparison.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="bg-[var(--bg-2)] text-[var(--text)] text-xs px-2 py-1 rounded">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--text)] mb-1 text-sm">Key Areas:</h4>
                    <ul className="space-y-1">
                      {comparison.keyFeatures.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-[var(--muted)]">
                          <span className="w-1.5 h-1.5 bg-[var(--accent-1)] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {comparison.winner}
                    </span>
                    <Link href={comparison.link}>
                      <button className="text-[var(--accent-1)] hover:text-[var(--accent-2)] font-semibold text-xs">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Methodology */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Our Comparison Methodology
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              We use a comprehensive, unbiased approach to evaluate Voice AI platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Technical Testing',
                description: 'Hands-on testing of voice quality, conversation flow, and technical capabilities',
                icon: '🔬'
              },
              {
                title: 'Feature Analysis',
                description: 'Comprehensive analysis of features, integrations, and platform capabilities',
                icon: '⚙️'
              },
              {
                title: 'Pricing Evaluation',
                description: 'Detailed cost analysis and value assessment for different use cases',
                icon: '💰'
              },
              {
                title: 'User Experience',
                description: 'Evaluation of ease of use, documentation, and developer experience',
                icon: '👥'
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">{method.title}</h3>
                <p className="text-[var(--muted)]">{method.description}</p>
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing the Right Platform?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our experts can help you select the perfect Voice AI solution for your logistics operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <button className="bg-white text-[var(--accent-1)] py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Schedule a Demo
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors duration-300">
                  Get Expert Advice
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ComparisonsPage;
