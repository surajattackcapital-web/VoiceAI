import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Users, Zap, Globe, DollarSign } from 'lucide-react';

const VoiceAILogisticsROI: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contentRef.current?.querySelectorAll('h2, h3, p, ul, ol, blockquote');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout 
      title="Voice AI in Logistics: ROI and Cost Savings Analysis - Maximizing Your Investment"
      description="Discover the comprehensive ROI and cost savings analysis for Voice AI in logistics operations, including real-world case studies and financial impact assessments."
    >
      <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <a 
                  href="/resources/blogs" 
                  className="flex items-center text-[var(--muted)] hover:text-[var(--accent-1)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </a>
            </div>
              
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-6">
                Voice AI in Logistics:
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                  ROI & Cost Savings Analysis
              </span>
            </h1>
              
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                Maximizing Your Investment with Comprehensive Financial Impact Assessment
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--muted)] mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>19 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>VoiceAI Team</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--line)] rounded-lg hover:border-[var(--accent-1)] transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                <button className="flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--line)] rounded-lg hover:border-[var(--accent-1)] transition-colors">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Save
                </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={contentRef} className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Introduction</h2>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Implementing Voice AI in logistics operations represents a significant investment, but the potential returns are substantial. Understanding the ROI and cost savings is crucial for making informed decisions about Voice AI adoption. This comprehensive analysis examines the financial impact of Voice AI implementation across various logistics operations.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Based on real-world implementations and industry data, Voice AI can deliver significant cost savings, operational efficiency improvements, and revenue growth opportunities. The key is understanding where and how to implement the technology for maximum impact.
                </p>
              </motion.div>

              {/* Cost Savings Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Comprehensive Cost Savings Analysis</h2>
                  
                  <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">1. Labor Cost Reduction</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Customer Service</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average savings: <strong className="text-[var(--accent-1)]">60-80%</strong></p>
                        <p className="text-[var(--muted)] text-sm">Elimination of manual call handling, reduced agent requirements, and automated response systems.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Dispatch Operations</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average savings: <strong className="text-[var(--accent-1)]">40-60%</strong></p>
                        <p className="text-[var(--muted)] text-sm">Automated load assignment, driver coordination, and real-time communication management.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Administrative Tasks</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average savings: <strong className="text-[var(--accent-1)]">50-70%</strong></p>
                        <p className="text-[var(--muted)] text-sm">Automated data entry, documentation, and routine administrative processes.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">2. Operational Efficiency Gains</h3>
                      </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Response Time Improvement</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average improvement: <strong className="text-[var(--accent-1)]">75-90%</strong></p>
                        <p className="text-[var(--muted)] text-sm">Instant response to customer inquiries, reducing wait times and improving satisfaction.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Error Reduction</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average reduction: <strong className="text-[var(--accent-1)]">60-80%</strong></p>
                        <p className="text-[var(--muted)] text-sm">Automated data entry and validation reduces human errors and associated costs.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Scalability</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Capacity increase: <strong className="text-[var(--accent-1)]">200-500%</strong></p>
                        <p className="text-[var(--muted)] text-sm">Handle peak volumes without proportional cost increases or additional staffing.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">3. Revenue Growth Opportunities</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Increased Capacity</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Revenue growth: <strong className="text-[var(--accent-1)]">25-40%</strong></p>
                        <p className="text-[var(--muted)] text-sm">Handle more customers and orders with the same resources, driving revenue growth.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Customer Retention</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Retention improvement: <strong className="text-[var(--accent-1)]">15-30%</strong></p>
                        <p className="text-[var(--muted)] text-sm">Better customer service leads to higher satisfaction and retention rates.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">New Market Entry</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Market expansion: <strong className="text-[var(--accent-1)]">Unlimited</strong></p>
                        <p className="text-[var(--muted)] text-sm">24/7 multilingual support enables rapid expansion into new markets.</p>
                    </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ROI Calculation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">ROI Calculation Framework</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Investment Costs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Initial setup and integration:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$10,000 - $50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Monthly platform fees:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$500 - $5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Training and onboarding:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$2,000 - $10,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Ongoing maintenance:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$1,000 - $3,000/month</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Annual Savings</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Labor cost reduction:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$100,000 - $500,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Operational efficiency:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$50,000 - $200,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Error reduction:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$20,000 - $100,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Revenue growth:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$100,000 - $1,000,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[var(--accent-1)]/10 to-[var(--accent-2)]/10 border border-[var(--accent-1)]/20 rounded-lg">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-4">Typical ROI Results</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[var(--accent-1)] mb-2">200-400%</div>
                      <div className="text-[var(--muted)]">First Year ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[var(--accent-1)] mb-2">6-12</div>
                      <div className="text-[var(--muted)]">Months Payback Period</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[var(--accent-1)] mb-2">300-600%</div>
                      <div className="text-[var(--muted)]">3-Year ROI</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion</h2>
                <div className="bg-gradient-to-r from-[var(--accent-1)]/10 to-[var(--accent-2)]/10 border border-[var(--accent-1)]/20 rounded-lg p-8">
                  <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
                    Voice AI in logistics delivers substantial ROI through significant cost savings, operational efficiency improvements, and revenue growth opportunities. The technology typically pays for itself within 6-12 months and continues to deliver value over the long term.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed font-semibold">
                    Companies that invest in Voice AI for logistics operations can expect to see 200-400% ROI in the first year, with even greater returns over time as the technology scales and optimizes.
                  </p>
                </div>
          </motion.div>
          
              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Calculate Your ROI?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us to learn how Voice AI can deliver significant cost savings and ROI for your logistics operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-[var(--accent-1)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Contact Sales
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors">
                      Request Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        </div>
    </Layout>
  );
};

export default VoiceAILogisticsROI;