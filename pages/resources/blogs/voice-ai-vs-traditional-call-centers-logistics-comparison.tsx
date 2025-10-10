import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Users, Zap, Globe, Phone } from 'lucide-react';

const VoiceAIVsTraditionalCallCenters: React.FC = () => {
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
      title="Voice AI vs Traditional Call Centers in Logistics: A Comprehensive Comparison"
      description="Discover the comprehensive comparison between Voice AI and traditional call centers in logistics, including cost analysis, performance metrics, and implementation strategies."
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
                Voice AI vs
                <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                  Traditional Call Centers
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                A Comprehensive Comparison for Logistics Companies
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--muted)] mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>20 min read</span>
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
                  The logistics industry is at a crossroads, with companies choosing between traditional call centers and Voice AI solutions for customer service and operational communication. This comprehensive comparison examines the key differences, benefits, and considerations for logistics companies making this critical decision.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Understanding the trade-offs between Voice AI and traditional call centers is essential for making informed decisions about customer service strategy, operational efficiency, and long-term business growth in the logistics sector.
                </p>
              </motion.div>

              {/* Cost Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Cost Comparison Analysis</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Phone className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">Traditional Call Centers</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Labor Costs</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average: <strong className="text-[var(--accent-1)]">$15-25/hour</strong></p>
                        <p className="text-[var(--muted)] text-sm">Includes salaries, benefits, training, and management overhead for human agents.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Infrastructure Costs</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average: <strong className="text-[var(--accent-1)]">$5,000-15,000/month</strong></p>
                        <p className="text-[var(--muted)] text-sm">Office space, equipment, phone systems, and technology infrastructure.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Training & Turnover</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average: <strong className="text-[var(--accent-1)]">$3,000-8,000/agent</strong></p>
                        <p className="text-[var(--muted)] text-sm">Initial training, ongoing education, and costs associated with high turnover rates.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">Voice AI Solutions</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Platform Costs</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average: <strong className="text-[var(--accent-1)]">$0.10-0.50/call</strong></p>
                        <p className="text-[var(--muted)] text-sm">Pay-per-use pricing model with no upfront infrastructure investment required.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Implementation</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average: <strong className="text-[var(--accent-1)]">$10,000-50,000</strong></p>
                        <p className="text-[var(--muted)] text-sm">One-time setup, integration, and configuration costs for the AI platform.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Maintenance</h4>
                        <p className="text-[var(--muted)] text-sm mb-2">Average: <strong className="text-[var(--accent-1)]">$1,000-5,000/month</strong></p>
                        <p className="text-[var(--muted)] text-sm">Ongoing platform maintenance, updates, and optimization services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Performance Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Performance Comparison</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Traditional Call Centers</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Response time:</span>
                        <span className="text-[var(--accent-1)] font-semibold">2-5 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Availability:</span>
                        <span className="text-[var(--accent-1)] font-semibold">8-12 hours/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Consistency:</span>
                        <span className="text-[var(--accent-1)] font-semibold">Variable</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Scalability:</span>
                        <span className="text-[var(--accent-1)] font-semibold">Limited</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Multilingual support:</span>
                        <span className="text-[var(--accent-1)] font-semibold">Expensive</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Voice AI Solutions</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Response time:</span>
                        <span className="text-[var(--accent-1)] font-semibold">Instant</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Availability:</span>
                        <span className="text-[var(--accent-1)] font-semibold">24/7/365</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Consistency:</span>
                        <span className="text-[var(--accent-1)] font-semibold">High</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Scalability:</span>
                        <span className="text-[var(--accent-1)] font-semibold">Unlimited</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Multilingual support:</span>
                        <span className="text-[var(--accent-1)] font-semibold">Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Use Case Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Use Case Analysis for Logistics</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Best Use Cases for Voice AI</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Shipment Tracking</h4>
                        <p className="text-[var(--muted)] text-sm">Automated responses to tracking inquiries with real-time data integration and instant updates.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Basic Customer Service</h4>
                        <p className="text-[var(--muted)] text-sm">Handling routine inquiries, address changes, and delivery scheduling with consistent quality.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Driver Coordination</h4>
                        <p className="text-[var(--muted)] text-sm">Automated dispatch communication, route updates, and exception handling for fleet management.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Best Use Cases for Traditional Call Centers</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Complex Problem Resolution</h4>
                        <p className="text-[var(--muted)] text-sm">Handling complex logistics issues that require human judgment, negotiation, and creative problem-solving.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">High-Value Customer Service</h4>
                        <p className="text-[var(--muted)] text-sm">Personalized service for premium customers and strategic accounts requiring relationship management.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Sales and Negotiations</h4>
                        <p className="text-[var(--muted)] text-sm">Complex sales processes, contract negotiations, and relationship building with new customers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ROI Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">ROI Analysis and Business Impact</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Cost Savings</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• 60-80% reduction in operational costs</li>
                      <li>• Elimination of overtime expenses</li>
                      <li>• Reduced training and turnover costs</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Efficiency Gains</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• 24/7 availability and support</li>
                      <li>• Instant response times</li>
                      <li>• Unlimited scalability</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Customer Experience</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Consistent service quality</li>
                      <li>• Multilingual support</li>
                      <li>• Personalized interactions</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Business Growth</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Increased capacity</li>
                      <li>• Global market reach</li>
                      <li>• Competitive advantage</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion</h2>
                <div className="bg-gradient-to-r from-[var(--accent-1)]/10 to-[var(--accent-2)]/10 border border-[var(--accent-1)]/20 rounded-lg p-8">
                  <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
                    The choice between Voice AI and traditional call centers in logistics depends on your specific business needs, customer requirements, and strategic objectives. Voice AI offers significant advantages in cost, scalability, and availability, while traditional call centers excel in complex problem-solving and relationship management.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed font-semibold">
                    The optimal approach is often a hybrid solution that combines the efficiency of Voice AI with the personal touch of human agents for maximum business impact.
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Compare Voice AI vs Traditional Call Centers?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us to learn how Voice AI can transform your logistics operations and provide a detailed comparison for your specific use case.
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

export default VoiceAIVsTraditionalCallCenters;
