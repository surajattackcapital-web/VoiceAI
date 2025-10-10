import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';

const BlogPost = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = [
      'case1',
      'case2', 
      'case3',
      'patterns'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <Layout title="Voice AI in Logistics: Real-World Case Studies and Success Stories" description="Real-world case studies and success stories from Voice AI implementations">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-4">
              <Link href="/resources/blogs" className="text-[var(--accent-1)] hover:text-[var(--accent-2)] transition-colors">
                ← Back to Blog
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-6">
              Voice AI in Logistics:
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Real-World Success Stories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
              Real-world case studies and success stories from Voice AI implementations
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">Case Studies</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">13 min read</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">January 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-8 md:p-12"
              >
                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-xl text-[var(--text)] leading-relaxed mb-6">
                    Real-world implementations of Voice AI in logistics are delivering remarkable results across 
                    different industry segments. These case studies showcase how companies are transforming their 
                    operations, reducing costs, and improving customer satisfaction through intelligent voice automation.
                  </p>
                  <p className="text-lg text-[var(--muted)] leading-relaxed">
                    From freight brokerage to last-mile delivery, these success stories demonstrate the tangible 
                    benefits and ROI that Voice AI delivers in logistics operations.
                  </p>
                </div>

                {/* Case Study 1 */}
                <section id="case1" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Case Study 1: Major Freight Brokerage</h2>
                  
                  <div className="bg-[var(--bg-2)] rounded-lg p-8 mb-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">Company Overview</h3>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                          <li><strong>Size:</strong> 500+ employees, $2B+ annual revenue</li>
                          <li><strong>Operations:</strong> National freight brokerage</li>
                          <li><strong>Challenge:</strong> High call volume, seasonal spikes</li>
                          <li><strong>Implementation:</strong> 6-month phased rollout</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">Results</h3>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                          <li><strong>Cost Reduction:</strong> 65% in customer service</li>
                          <li><strong>Call Volume:</strong> 80% handled by AI</li>
                          <li><strong>Response Time:</strong> 90% faster</li>
                          <li><strong>ROI:</strong> 320% in first year</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Implementation Details</h3>
                      <p className="text-lg text-[var(--text)] mb-4">
                        The company implemented Voice AI to handle high-volume customer inquiries during peak seasons. 
                        The system was trained on their specific freight terminology and integrated with their TMS platform.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Use Cases:</strong> Load tracking, rate quotes, pickup scheduling</li>
                        <li><strong>Integration:</strong> TMS, CRM, and carrier management systems</li>
                        <li><strong>Training:</strong> 3 months of conversation design and testing</li>
                        <li><strong>Deployment:</strong> Phased rollout starting with 20% of calls</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Key Success Factors</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-900/20 border-l-4 border-green-500 p-6">
                          <h4 className="font-bold text-green-400 mb-3">What Worked Well</h4>
                          <ul className="space-y-2 text-green-300">
                            <li>• Comprehensive training on freight terminology</li>
                            <li>• Strong integration with existing systems</li>
                            <li>• Gradual rollout with continuous monitoring</li>
                            <li>• Excellent change management</li>
                          </ul>
                        </div>
                        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6">
                          <h4 className="font-bold text-blue-400 mb-3">Lessons Learned</h4>
                          <ul className="space-y-2 text-blue-300">
                            <li>• Start with simpler use cases first</li>
                            <li>• Invest heavily in initial training</li>
                            <li>• Maintain human oversight initially</li>
                            <li>• Regular performance monitoring crucial</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Case Study 2 */}
                <section id="case2" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Case Study 2: Last-Mile Delivery Company</h2>
                  
                  <div className="bg-[var(--bg-2)] rounded-lg p-8 mb-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">Company Overview</h3>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                          <li><strong>Size:</strong> 200+ drivers, $500M+ annual revenue</li>
                          <li><strong>Operations:</strong> Urban last-mile delivery</li>
                          <li><strong>Challenge:</strong> Customer communication complexity</li>
                          <li><strong>Implementation:</strong> 4-month rapid deployment</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">Results</h3>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                          <li><strong>Customer Satisfaction:</strong> 25% improvement</li>
                          <li><strong>Delivery Success:</strong> 15% increase</li>
                          <li><strong>Driver Efficiency:</strong> 20% improvement</li>
                          <li><strong>ROI:</strong> 280% in first year</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Implementation Details</h3>
                      <p className="text-lg text-[var(--text)] mb-4">
                        The company deployed Voice AI to handle customer delivery coordination, address updates, 
                        and delivery exception management. The system integrated with their driver app and GPS tracking.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Use Cases:</strong> Delivery scheduling, address updates, exception handling</li>
                        <li><strong>Integration:</strong> Driver app, GPS tracking, customer database</li>
                        <li><strong>Training:</strong> 2 months focused on delivery scenarios</li>
                        <li><strong>Deployment:</strong> City-by-city rollout</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Impact on Operations</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[var(--accent-1)] mb-2">25%</div>
                          <div className="text-sm text-[var(--muted)]">Reduction in failed deliveries</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[var(--accent-1)] mb-2">40%</div>
                          <div className="text-sm text-[var(--muted)]">Faster delivery coordination</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[var(--accent-1)] mb-2">60%</div>
                          <div className="text-sm text-[var(--muted)]">Reduction in customer service calls</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Case Study 3 */}
                <section id="case3" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Case Study 3: International Logistics Provider</h2>
                  
                  <div className="bg-[var(--bg-2)] rounded-lg p-8 mb-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">Company Overview</h3>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                          <li><strong>Size:</strong> 1,000+ employees, $5B+ annual revenue</li>
                          <li><strong>Operations:</strong> Global logistics and customs</li>
                          <li><strong>Challenge:</strong> Multilingual customer support</li>
                          <li><strong>Implementation:</strong> 8-month comprehensive rollout</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">Results</h3>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                          <li><strong>Language Support:</strong> 12 languages automated</li>
                          <li><strong>Global Coverage:</strong> 24/7 in all time zones</li>
                          <li><strong>Cost Savings:</strong> $2M+ annually</li>
                          <li><strong>ROI:</strong> 250% in first year</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Implementation Details</h3>
                      <p className="text-lg text-[var(--text)] mb-4">
                        The company implemented multilingual Voice AI to handle customs documentation, 
                        international shipping inquiries, and cross-border logistics coordination across multiple languages and time zones.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Use Cases:</strong> Customs documentation, shipping status, international regulations</li>
                        <li><strong>Integration:</strong> Customs systems, international databases, translation services</li>
                        <li><strong>Training:</strong> 4 months with native speakers for each language</li>
                        <li><strong>Deployment:</strong> Regional rollout with local compliance</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Global Impact</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[var(--bg-2)] rounded-lg p-6">
                          <h4 className="text-lg font-bold text-[var(--text)] mb-3">Operational Benefits</h4>
                          <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                            <li>24/7 customer support in all regions</li>
                            <li>Consistent service quality across languages</li>
                            <li>Reduced dependency on local staff</li>
                            <li>Faster resolution of international issues</li>
                          </ul>
                        </div>
                        <div className="bg-[var(--bg-2)] rounded-lg p-6">
                          <h4 className="text-lg font-bold text-[var(--text)] mb-3">Business Benefits</h4>
                          <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                            <li>Expanded market reach</li>
                            <li>Improved customer retention</li>
                            <li>Reduced operational complexity</li>
                            <li>Enhanced competitive advantage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Key Success Patterns */}
                <section id="patterns" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Key Success Patterns</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text)] mb-4">Common Success Factors</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Strong Leadership Support:</strong> Executive sponsorship and clear vision</li>
                        <li><strong>Comprehensive Training:</strong> Industry-specific terminology and scenarios</li>
                        <li><strong>Robust Integration:</strong> Seamless connection with existing systems</li>
                        <li><strong>Phased Rollout:</strong> Gradual implementation with continuous monitoring</li>
                        <li><strong>Change Management:</strong> Effective staff training and communication</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[var(--text)] mb-4">ROI Patterns</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Payback Period:</strong> 3-6 months for most implementations</li>
                        <li><strong>Cost Reduction:</strong> 50-80% in customer service operations</li>
                        <li><strong>Efficiency Gains:</strong> 20-40% improvement in response times</li>
                        <li><strong>Scalability:</strong> Unlimited growth without proportional cost increases</li>
                        <li><strong>Customer Satisfaction:</strong> 15-30% improvement in service quality</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion</h2>
                  <p className="text-lg text-[var(--text)] mb-6">
                    These case studies demonstrate that Voice AI delivers consistent, measurable results across 
                    different logistics segments. Companies that invest in proper implementation, training, and 
                    change management see significant ROI and operational improvements.
                  </p>
                  <p className="text-lg text-[var(--text)] mb-6">
                    The key to success is not just the technology, but the strategic approach to implementation, 
                    integration, and ongoing optimization based on real-world performance data.
                  </p>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
                  <p className="text-xl mb-6 text-blue-100">
                    Learn how Voice AI can transform your logistics operations with proven results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/demo">
                      <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                        Schedule a Demo
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                        Get Case Study Analysis
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-4 right-4 space-y-6"
              >
                {/* Table of Contents */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-4">Case Studies</h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="#case1" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'case1' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        Freight Brokerage
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#case2" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'case2' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        Last-Mile Delivery
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#case3" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'case3' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        International Logistics
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#patterns" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'patterns' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        Success Patterns
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Key Stats */}
                <div className="card p-6">
                  <h3 className="text-lg font-bold text-[var(--text)] mb-4">Average Results</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-[var(--muted)]">ROI:</span>
                      <span className="text-sm text-[var(--text)] ml-2">280%</span>
                    </div>
                    <div>
                      <span className="text-sm text-[var(--muted)]">Cost Reduction:</span>
                      <span className="text-sm text-[var(--text)] ml-2">65%</span>
                    </div>
                    <div>
                      <span className="text-sm text-[var(--muted)]">Payback Period:</span>
                      <span className="text-sm text-[var(--text)] ml-2">4.5 months</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Related Articles</h2>
            <p className="text-xl text-[var(--muted)]">Continue exploring Voice AI in logistics</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Voice AI ROI Analysis',
                excerpt: 'Comprehensive analysis of Voice AI ROI and cost savings in logistics operations.',
                link: '/resources/blogs/voice-ai-logistics-roi-cost-savings-analysis',
                category: 'ROI Analysis',
                readTime: '10 min'
              },
              {
                title: 'Voice AI Implementation Guide',
                excerpt: 'Step-by-step guide to implementing Voice AI in logistics operations.',
                link: '/resources/blogs/voice-ai-implementation-guide-logistics-companies',
                category: 'Implementation',
                readTime: '12 min'
              },
              {
                title: 'Voice AI Transforming Logistics',
                excerpt: 'Discover how Voice AI is revolutionizing logistics operations with real-world examples.',
                link: '/resources/blogs/voice-ai-transforming-logistics-industry-2025',
                category: 'Industry Trends',
                readTime: '8 min'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link href={article.link}>
                  <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-3xl group-hover:scale-110 transition-transform duration-300">📝</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {article.category}
                        </span>
                        <span className="ml-auto text-sm text-[var(--muted)]">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text)] mb-3 line-clamp-2 group-hover:text-[var(--accent-1)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[var(--muted)] mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-[var(--accent-1)] font-semibold group-hover:text-[var(--accent-2)] transition-colors">
                        Read More →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
