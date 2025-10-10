import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';

const BlogPost = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = [
      'phase1',
      'phase2', 
      'phase3',
      'phase4',
      'phase5'
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
    <Layout title="Voice AI Implementation Guide for Logistics Companies" description="Step-by-step guide to implementing Voice AI in logistics operations">
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
              Voice AI Implementation
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Guide for Logistics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
              Step-by-step guide to implementing Voice AI in logistics operations
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">Implementation</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">12 min read</span>
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
                    Implementing Voice AI in logistics operations requires careful planning, strategic execution, and 
                    change management. This comprehensive guide walks you through every step of the implementation 
                    process, from initial assessment to full deployment and optimization.
                  </p>
                  <p className="text-lg text-[var(--muted)] leading-relaxed">
                    Following this structured approach can reduce implementation time by <strong>40%</strong> and 
                    increase success rates by <strong>60%</strong> compared to ad-hoc implementations.
                  </p>
                </div>

                {/* Phase 1: Assessment */}
                <section id="phase1" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Phase 1: Assessment & Planning</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">1.1 Current State Analysis</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)] mb-4">
                        <li><strong>Call Volume Analysis:</strong> Identify peak hours, call types, and seasonal patterns</li>
                        <li><strong>Process Mapping:</strong> Document current workflows and pain points</li>
                        <li><strong>Technology Audit:</strong> Assess existing systems and integration requirements</li>
                        <li><strong>Staff Assessment:</strong> Evaluate current team skills and training needs</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">1.2 Use Case Prioritization</h3>
                      <div className="bg-[var(--bg-2)] rounded-lg p-6">
                        <h4 className="text-lg font-bold text-[var(--text)] mb-3">High-Priority Use Cases</h4>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                          <li><strong>Shipment Tracking:</strong> High volume, low complexity, immediate ROI</li>
                          <li><strong>Basic Inquiries:</strong> Frequently asked questions and general information</li>
                          <li><strong>Appointment Scheduling:</strong> Delivery and pickup coordination</li>
                          <li><strong>Status Updates:</strong> Automated notifications and confirmations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Phase 2: Platform Selection */}
                <section id="phase2" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Phase 2: Platform Selection</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">2.1 Evaluation Criteria</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[var(--bg-2)] rounded-lg p-6">
                          <h4 className="text-lg font-bold text-[var(--text)] mb-3">Technical Requirements</h4>
                          <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                            <li>Voice quality and natural conversation</li>
                            <li>Integration capabilities with existing systems</li>
                            <li>Scalability and performance</li>
                            <li>Security and compliance features</li>
                          </ul>
                        </div>
                        <div className="bg-[var(--bg-2)] rounded-lg p-6">
                          <h4 className="text-lg font-bold text-[var(--text)] mb-3">Business Requirements</h4>
                          <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                            <li>Cost structure and pricing model</li>
                            <li>Implementation timeline and support</li>
                            <li>Industry-specific features</li>
                            <li>Vendor stability and roadmap</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">2.2 Proof of Concept</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Pilot Program:</strong> Test with 2-3 high-volume use cases</li>
                        <li><strong>Performance Metrics:</strong> Measure accuracy, response time, and user satisfaction</li>
                        <li><strong>Integration Testing:</strong> Verify compatibility with existing systems</li>
                        <li><strong>Cost Analysis:</strong> Calculate projected ROI and total cost of ownership</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Phase 3: Implementation */}
                <section id="phase3" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Phase 3: Implementation</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">3.1 System Integration</h3>
                      <div className="bg-green-900/20 border-l-4 border-green-500 p-6">
                        <h4 className="font-bold text-green-400 mb-3">Integration Checklist</h4>
                        <ul className="space-y-2 text-green-300">
                          <li>• <strong>CRM Integration:</strong> Connect with customer databases and history</li>
                          <li>• <strong>TMS Integration:</strong> Link with transportation management systems</li>
                          <li>• <strong>WMS Integration:</strong> Connect with warehouse management systems</li>
                          <li>• <strong>API Development:</strong> Create custom integrations for unique requirements</li>
                          <li>• <strong>Data Migration:</strong> Transfer existing customer and operational data</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">3.2 Voice AI Training</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Conversation Design:</strong> Create natural dialogue flows for each use case</li>
                        <li><strong>Intent Recognition:</strong> Train the AI to understand customer requests accurately</li>
                        <li><strong>Response Optimization:</strong> Refine responses based on industry terminology</li>
                        <li><strong>Escalation Rules:</strong> Define when to transfer to human agents</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Phase 4: Deployment */}
                <section id="phase4" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Phase 4: Deployment & Rollout</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">4.1 Phased Rollout Strategy</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[var(--bg-2)] rounded-lg p-6">
                          <h4 className="text-lg font-bold text-[var(--text)] mb-3">Phase 1 (Weeks 1-2)</h4>
                          <ul className="list-disc list-inside space-y-2 text-[var(--text)] text-sm">
                            <li>Deploy to 10% of call volume</li>
                            <li>Monitor performance closely</li>
                            <li>Gather initial feedback</li>
                            <li>Make quick adjustments</li>
                          </ul>
                        </div>
                        <div className="bg-[var(--bg-2)] rounded-lg p-6">
                          <h4 className="text-lg font-bold text-[var(--text)] mb-3">Phase 2 (Weeks 3-4)</h4>
                          <ul className="list-disc list-inside space-y-2 text-[var(--text)] text-sm">
                            <li>Expand to 50% of call volume</li>
                            <li>Add more use cases</li>
                            <li>Train additional staff</li>
                            <li>Optimize performance</li>
                          </ul>
                        </div>
                        <div className="bg-[var(--bg-2)] rounded-lg p-6">
                          <h4 className="text-lg font-bold text-[var(--text)] mb-3">Phase 3 (Weeks 5-6)</h4>
                          <ul className="list-disc list-inside space-y-2 text-[var(--text)] text-sm">
                            <li>Full deployment</li>
                            <li>All use cases active</li>
                            <li>24/7 operation</li>
                            <li>Continuous monitoring</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">4.2 Change Management</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Staff Training:</strong> Educate employees on new workflows and procedures</li>
                        <li><strong>Communication Plan:</strong> Keep all stakeholders informed of progress and changes</li>
                        <li><strong>Support Structure:</strong> Provide ongoing support during transition period</li>
                        <li><strong>Feedback Collection:</strong> Gather input from staff and customers for improvements</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Phase 5: Optimization */}
                <section id="phase5" className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Phase 5: Optimization & Scaling</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">5.1 Performance Monitoring</h3>
                      <div className="bg-[var(--bg-2)] rounded-lg p-6">
                        <h4 className="text-lg font-bold text-[var(--text)] mb-3">Key Performance Indicators</h4>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                          <li><strong>Call Resolution Rate:</strong> Percentage of calls resolved without human intervention</li>
                          <li><strong>Customer Satisfaction:</strong> Post-call surveys and feedback scores</li>
                          <li><strong>Response Time:</strong> Average time to resolve customer inquiries</li>
                          <li><strong>Cost per Call:</strong> Operational cost reduction metrics</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-4">5.2 Continuous Improvement</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li><strong>Regular Reviews:</strong> Monthly performance assessments and optimization</li>
                        <li><strong>AI Training Updates:</strong> Continuous learning from customer interactions</li>
                        <li><strong>Feature Expansion:</strong> Adding new capabilities based on business needs</li>
                        <li><strong>Integration Enhancements:</strong> Improving connections with other systems</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Best Practices */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Best Practices for Success</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text)] mb-4">Do's</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li>Start with high-volume, low-complexity use cases</li>
                        <li>Invest in comprehensive staff training</li>
                        <li>Monitor performance metrics closely</li>
                        <li>Maintain human oversight and escalation paths</li>
                        <li>Gather continuous feedback from users</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[var(--text)] mb-4">Don'ts</h3>
                      <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
                        <li>Don't try to automate everything at once</li>
                        <li>Don't ignore change management</li>
                        <li>Don't skip the pilot phase</li>
                        <li>Don't neglect security and compliance</li>
                        <li>Don't forget to measure ROI regularly</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion</h2>
                  <p className="text-lg text-[var(--text)] mb-6">
                    Successful Voice AI implementation in logistics requires a structured approach, careful planning, 
                    and ongoing optimization. By following this guide, companies can minimize risks, maximize ROI, 
                    and achieve sustainable competitive advantages.
                  </p>
                  <p className="text-lg text-[var(--text)] mb-6">
                    The key to success is starting small, measuring everything, and continuously improving based on 
                    real-world performance data and user feedback.
                  </p>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Your Implementation?</h3>
                  <p className="text-xl mb-6 text-blue-100">
                    Get expert guidance for your Voice AI implementation project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/demo">
                      <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                        Schedule a Demo
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                        Get Implementation Support
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
                  <h3 className="text-xl font-bold text-[var(--text)] mb-4">Implementation Phases</h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="#phase1" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'phase1' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        Phase 1: Assessment
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#phase2" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'phase2' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        Phase 2: Platform Selection
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#phase3" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'phase3' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        Phase 3: Implementation
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#phase4" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'phase4' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        Phase 4: Deployment
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#phase5" 
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === 'phase5' 
                            ? 'text-[var(--accent-1)] font-semibold' 
                            : 'text-[var(--muted)] hover:text-[var(--accent-1)]'
                        }`}
                      >
                        Phase 5: Optimization
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Timeline */}
                <div className="card p-6">
                  <h3 className="text-lg font-bold text-[var(--text)] mb-4">Implementation Timeline</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-[var(--muted)]">Assessment:</span>
                      <span className="text-sm text-[var(--text)] ml-2">2-3 weeks</span>
                    </div>
                    <div>
                      <span className="text-sm text-[var(--muted)]">Platform Selection:</span>
                      <span className="text-sm text-[var(--text)] ml-2">2-4 weeks</span>
                    </div>
                    <div>
                      <span className="text-sm text-[var(--muted)]">Implementation:</span>
                      <span className="text-sm text-[var(--text)] ml-2">4-6 weeks</span>
                    </div>
                    <div>
                      <span className="text-sm text-[var(--muted)]">Deployment:</span>
                      <span className="text-sm text-[var(--text)] ml-2">2-3 weeks</span>
                    </div>
                    <div>
                      <span className="text-sm text-[var(--muted)]">Total:</span>
                      <span className="text-sm text-[var(--text)] ml-2">10-16 weeks</span>
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
                title: 'Voice AI Case Studies',
                excerpt: 'Real-world case studies and success stories from Voice AI implementations.',
                link: '/resources/blogs/voice-ai-logistics-case-studies-success-stories',
                category: 'Case Studies',
                readTime: '13 min'
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
