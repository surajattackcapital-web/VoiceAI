import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Industry Trends', 'Implementation', 'ROI Analysis', 'Technology', 'Case Studies'];

  const blogPosts = [
    {
      id: 1,
      title: 'Voice AI is Transforming the Logistics Industry in 2025',
      excerpt: 'Discover how Voice AI is revolutionizing logistics operations with real-world examples and ROI analysis.',
      category: 'Industry Trends',
      date: 'January 2025',
      readTime: '8 min read',
      image: '/images/blog-voice-ai-transforming-logistics.jpg',
      featured: true,
      link: '/resources/blogs/voice-ai-transforming-logistics-industry-2025'
    },
    {
      id: 2,
      title: 'AI Voice Agents for Freight Brokerage: Automating Load Matching',
      excerpt: 'Learn how freight brokers are using AI voice agents to automate load matching and improve customer service.',
      category: 'Implementation',
      date: 'January 2025',
      readTime: '6 min read',
      image: '/images/blog-freight-brokerage-automation.jpg',
      featured: false,
      link: '/resources/blogs/ai-voice-agents-freight-brokerage-automation'
    },
    {
      id: 3,
      title: 'Voice AI for Last-Mile Delivery: Optimizing Customer Communication',
      excerpt: 'Explore how voice AI is transforming last-mile delivery operations and customer communication.',
      category: 'Implementation',
      date: 'January 2025',
      readTime: '7 min read',
      image: '/images/blog-last-mile-delivery.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-last-mile-delivery-optimization'
    },
    {
      id: 4,
      title: 'Voice AI for Warehouse Operations: Automating Inventory Management',
      excerpt: 'Discover how voice AI is streamlining warehouse operations and inventory management processes.',
      category: 'Implementation',
      date: 'January 2025',
      readTime: '6 min read',
      image: '/images/blog-warehouse-operations.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-warehouse-operations-automation'
    },
    {
      id: 5,
      title: 'Voice AI for Supply Chain Visibility: Creating Transparency',
      excerpt: 'Learn how voice AI is creating end-to-end supply chain visibility and real-time communication.',
      category: 'Technology',
      date: 'January 2025',
      readTime: '8 min read',
      image: '/images/blog-supply-chain-visibility.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-supply-chain-visibility-transparency'
    },
    {
      id: 6,
      title: 'Voice AI for Customer Service in Logistics: 24/7 Support Excellence',
      excerpt: 'Explore how voice AI is revolutionizing customer service in logistics operations.',
      category: 'Implementation',
      date: 'January 2025',
      readTime: '7 min read',
      image: '/images/blog-customer-service.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-customer-service-logistics-companies'
    },
    {
      id: 7,
      title: 'Voice AI for Driver Communication and Fleet Management',
      excerpt: 'Discover how voice AI is optimizing driver communication and fleet management operations.',
      category: 'Implementation',
      date: 'January 2025',
      readTime: '6 min read',
      image: '/images/blog-driver-communication.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-driver-communication-fleet-management'
    },
    {
      id: 8,
      title: 'Voice AI for International Logistics: Global Operations Management',
      excerpt: 'Learn how voice AI is managing global operations and cross-border communication.',
      category: 'Technology',
      date: 'January 2025',
      readTime: '8 min read',
      image: '/images/blog-international-logistics.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-international-logistics-global-operations'
    },
    {
      id: 9,
      title: 'Voice AI ROI Analysis for Logistics: Quantifying Cost Savings',
      excerpt: 'Comprehensive analysis of Voice AI ROI and cost savings in logistics operations.',
      category: 'ROI Analysis',
      date: 'January 2025',
      readTime: '10 min read',
      image: '/images/blog-roi-analysis.jpg',
      featured: true,
      link: '/resources/blogs/voice-ai-logistics-roi-cost-savings-analysis'
    },
    {
      id: 10,
      title: 'Voice AI Implementation Guide for Logistics Companies',
      excerpt: 'Step-by-step guide to implementing Voice AI in logistics operations.',
      category: 'Implementation',
      date: 'January 2025',
      readTime: '12 min read',
      image: '/images/blog-implementation-guide.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-implementation-guide-logistics-companies'
    },
    {
      id: 11,
      title: 'Voice AI in Logistics: 2025 Trends and Future Outlook',
      excerpt: 'Explore the latest trends and future outlook for Voice AI in logistics.',
      category: 'Industry Trends',
      date: 'January 2025',
      readTime: '9 min read',
      image: '/images/blog-trends-2025.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-logistics-trends-2025-future-outlook'
    },
    {
      id: 12,
      title: 'Voice AI Security, Compliance, and Privacy in Logistics',
      excerpt: 'Comprehensive guide to security, compliance, and privacy considerations for Voice AI.',
      category: 'Technology',
      date: 'January 2025',
      readTime: '11 min read',
      image: '/images/blog-security-compliance.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-logistics-security-compliance-privacy'
    },
    {
      id: 13,
      title: 'Voice AI in Logistics: Real-World Case Studies and Success Stories',
      excerpt: 'Real-world case studies and success stories from Voice AI implementations.',
      category: 'Case Studies',
      date: 'January 2025',
      readTime: '13 min read',
      image: '/images/blog-case-studies.jpg',
      featured: true,
      link: '/resources/blogs/voice-ai-logistics-case-studies-success-stories'
    },
    {
      id: 14,
      title: 'Voice AI Vendor Selection Guide for Logistics Companies',
      excerpt: 'Complete guide to selecting the right Voice AI vendor for your logistics operations.',
      category: 'Implementation',
      date: 'January 2025',
      readTime: '10 min read',
      image: '/images/blog-vendor-selection.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-logistics-vendor-selection-guide'
    },
    {
      id: 15,
      title: 'Voice AI in Logistics: Future Roadmap and Strategic Planning',
      excerpt: 'Strategic planning and future roadmap for Voice AI adoption in logistics.',
      category: 'Industry Trends',
      date: 'January 2025',
      readTime: '11 min read',
      image: '/images/blog-future-roadmap.jpg',
      featured: false,
      link: '/resources/blogs/voice-ai-logistics-future-roadmap-strategic-planning'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <Layout title="Voice AI Blog - Latest Insights & Best Practices" description="Latest insights, trends, and best practices in Voice AI for logistics operations">
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
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
              Latest insights, trends, and best practices in Voice AI for logistics
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">15+ Articles</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">Industry Experts</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">Real-World Examples</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Our most popular and comprehensive guides
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl">📝</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                  <span className="bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="ml-auto text-sm text-[var(--muted)]">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text)] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--muted)]">{post.readTime}</span>
                    <Link href={post.link}>
                      <button className="text-[var(--accent-1)] hover:text-[var(--accent-2)] font-semibold text-sm">
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

      {/* All Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-[var(--muted)]">
              {filteredPosts.length} articles found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                className="card overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-3xl">📝</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                  <span className="bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="ml-auto text-sm text-[var(--muted)]">{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[var(--text)] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--muted)]">{post.readTime}</span>
                    <Link href={post.link}>
                      <button className="text-[var(--accent-1)] hover:text-[var(--accent-2)] font-semibold text-sm">
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Voice AI Insights
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get the latest articles, case studies, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-[var(--text)] placeholder-[var(--muted)]"
              />
              <button className="bg-white text-[var(--accent-1)] py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogsPage;
