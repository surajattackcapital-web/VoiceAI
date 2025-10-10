import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Users, Zap, Globe, Eye } from 'lucide-react';

const VoiceAISupplyChainVisibility: React.FC = () => {
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
      title="Voice AI for Supply Chain Visibility: Enhancing Transparency and Real-Time Communication"
      description="Discover how Voice AI is transforming supply chain visibility through real-time communication, transparency, and intelligent coordination across the entire supply chain."
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
                Voice AI for
                <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                  Supply Chain Visibility
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                Enhancing Transparency and Real-Time Communication Across the Supply Chain
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--muted)] mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>14 min read</span>
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
                  Supply chain visibility is critical for modern businesses, enabling real-time tracking, proactive problem-solving, and enhanced customer satisfaction. Traditional supply chain communication relies on fragmented systems, manual updates, and delayed information sharing, creating blind spots and inefficiencies.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Voice AI is revolutionizing supply chain visibility by providing real-time communication, intelligent coordination, and transparent information sharing across all stakeholders. This technology enables end-to-end visibility and proactive management of supply chain operations.
                </p>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">How Voice AI Enhances Supply Chain Visibility</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Eye className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">1. Real-Time Tracking and Updates</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Live Shipment Tracking</h4>
                        <p className="text-[var(--muted)] text-sm">AI voice agents provide real-time updates on shipment location, status, and estimated delivery times through natural conversation.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Proactive Notifications</h4>
                        <p className="text-[var(--muted)] text-sm">Automated alerts for delays, exceptions, and status changes keep all stakeholders informed instantly.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Multi-Stakeholder Updates</h4>
                        <p className="text-[var(--muted)] text-sm">Coordinated communication across suppliers, manufacturers, distributors, and customers for complete visibility.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Globe className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">2. Global Coordination</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Cross-Border Communication</h4>
                        <p className="text-[var(--muted)] text-sm">Multilingual AI agents coordinate with international partners, handle customs, and manage time zone differences.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Vendor Management</h4>
                        <p className="text-[var(--muted)] text-sm">Automated coordination with suppliers, quality control, and performance monitoring across the supply chain.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Compliance Tracking</h4>
                        <p className="text-[var(--muted)] text-sm">AI agents ensure regulatory compliance, document verification, and audit trail maintenance.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">3. Intelligent Exception Management</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Early Warning System</h4>
                        <p className="text-[var(--muted)] text-sm">AI agents identify potential issues before they become problems, enabling proactive resolution.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Automated Resolution</h4>
                        <p className="text-[var(--muted)] text-sm">Intelligent handling of common exceptions, rerouting, and alternative solutions without human intervention.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Stakeholder Coordination</h4>
                        <p className="text-[var(--muted)] text-sm">Seamless communication and coordination when exceptions occur, ensuring all parties are informed and aligned.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ROI and Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">ROI and Business Impact</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Cost Reduction</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• 50-70% reduction in coordination costs</li>
                      <li>• Elimination of manual tracking tasks</li>
                      <li>• Reduced exception handling costs</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Eye className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Enhanced Visibility</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Real-time end-to-end tracking</li>
                      <li>• Proactive issue identification</li>
                      <li>• Complete audit trails</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Better Service</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Improved customer satisfaction</li>
                      <li>• Faster response times</li>
                      <li>• Proactive communication</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Global Reach</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Multilingual support</li>
                      <li>• 24/7 global coordination</li>
                      <li>• Cross-border compliance</li>
                    </ul>
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
                    Voice AI is transforming supply chain visibility by providing real-time communication, intelligent coordination, and transparent information sharing. The technology enables end-to-end visibility and proactive management of supply chain operations.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed font-semibold">
                    Companies that embrace voice AI for supply chain visibility will have a significant competitive advantage in the evolving global marketplace.
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Enhance Your Supply Chain Visibility?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us to learn how our intelligent voice agents can provide real-time visibility and coordination across your entire supply chain.
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

export default VoiceAISupplyChainVisibility;
