import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Users, Zap, Globe, CheckCircle, Shield } from 'lucide-react';

const VoiceAILogisticsVendorSelection: React.FC = () => {
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
      title="Voice AI Logistics Vendor Selection Guide: Choosing the Right Platform for Your Operations"
      description="Discover the comprehensive guide to selecting the right Voice AI vendor for your logistics operations, including evaluation criteria, comparison frameworks, and implementation strategies."
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
                Voice AI Logistics
                <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                  Vendor Selection Guide
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                Choosing the Right Platform for Your Logistics Operations
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--muted)] mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>18 min read</span>
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
                  Selecting the right Voice AI vendor for your logistics operations is a critical decision that can significantly impact your business success. With numerous vendors offering different capabilities, pricing models, and implementation approaches, making the right choice requires careful evaluation and strategic planning.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  This comprehensive guide provides a structured approach to vendor selection, including evaluation criteria, comparison frameworks, and implementation strategies to help you choose the Voice AI platform that best fits your logistics operations.
                </p>
              </motion.div>

              {/* Evaluation Criteria */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Key Evaluation Criteria</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">1. Technical Capabilities</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Voice Quality</h4>
                        <p className="text-[var(--muted)] text-sm">Natural conversation flow, clear audio quality, and human-like responses that maintain customer engagement.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Integration Options</h4>
                        <p className="text-[var(--muted)] text-sm">Seamless integration with existing TMS, CRM, and logistics systems through APIs and connectors.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Scalability</h4>
                        <p className="text-[var(--muted)] text-sm">Ability to handle growing call volumes and expand to new markets without performance degradation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">2. Security and Compliance</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Data Protection</h4>
                        <p className="text-[var(--muted)] text-sm">Enterprise-grade encryption, secure data storage, and comprehensive privacy protection measures.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Regulatory Compliance</h4>
                        <p className="text-[var(--muted)] text-sm">SOC 2, HIPAA, GDPR, and industry-specific compliance certifications and audit trails.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Access Controls</h4>
                        <p className="text-[var(--muted)] text-sm">Role-based permissions, multi-factor authentication, and comprehensive audit logging.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">3. Support and Service</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Implementation Support</h4>
                        <p className="text-[var(--muted)] text-sm">Dedicated implementation team, training resources, and ongoing support for successful deployment.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Customer Success</h4>
                        <p className="text-[var(--muted)] text-sm">Account management, performance monitoring, and proactive optimization recommendations.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Documentation</h4>
                        <p className="text-[var(--muted)] text-sm">Comprehensive documentation, API references, and best practices guides for easy adoption.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Comparison Framework */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Vendor Comparison Framework</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Evaluation Matrix</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Technical capabilities:</span>
                        <span className="text-[var(--accent-1)] font-semibold">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Security and compliance:</span>
                        <span className="text-[var(--accent-1)] font-semibold">20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Pricing and value:</span>
                        <span className="text-[var(--accent-1)] font-semibold">20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Support and service:</span>
                        <span className="text-[var(--accent-1)] font-semibold">15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Industry experience:</span>
                        <span className="text-[var(--accent-1)] font-semibold">10%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Innovation and roadmap:</span>
                        <span className="text-[var(--accent-1)] font-semibold">10%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Key Questions to Ask</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">What is your experience with logistics companies?</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">Can you provide references from similar companies?</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">What integrations do you support?</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">How do you handle data security and compliance?</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">What is your implementation timeline?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Implementation Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Implementation Strategy</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Pilot Program</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Start with limited scope</li>
                      <li>• Test with specific use cases</li>
                      <li>• Measure performance metrics</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Gradual Rollout</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Expand successful pilots</li>
                      <li>• Train staff gradually</li>
                      <li>• Monitor and optimize</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Change Management</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Employee training</li>
                      <li>• Process documentation</li>
                      <li>• Continuous support</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Full Deployment</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Complete system integration</li>
                      <li>• Global rollout</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion</h2>
                <div className="bg-gradient-to-r from-[var(--accent-1)]/10 to-[var(--accent-2)]/10 border border-[var(--accent-1)]/20 rounded-lg p-8">
                  <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
                    Selecting the right Voice AI vendor for your logistics operations requires careful evaluation of technical capabilities, security measures, support quality, and implementation approach. By following a structured evaluation process and considering your specific business needs, you can choose a vendor that will deliver long-term value and success.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed font-semibold">
                    The right vendor partnership will be a key factor in your Voice AI implementation success and long-term business growth.
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Choose Your Voice AI Vendor?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us to learn how our Voice AI platform can meet your logistics operations needs and evaluation criteria.
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

export default VoiceAILogisticsVendorSelection;
