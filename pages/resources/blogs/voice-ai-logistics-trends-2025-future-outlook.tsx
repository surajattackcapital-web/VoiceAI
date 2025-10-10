import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Users, Zap, Globe, Target } from 'lucide-react';

const VoiceAILogisticsTrends2025: React.FC = () => {
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
      title="Voice AI Logistics Trends 2025: Future Outlook and Strategic Planning"
      description="Discover the latest Voice AI trends in logistics for 2025, including future outlook, emerging technologies, and strategic planning for transportation companies."
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
                Voice AI Logistics Trends
                <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                  2025: Future Outlook
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                Strategic Planning and Emerging Technologies for Transportation Companies
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--muted)] mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>16 min read</span>
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
                  The logistics industry is experiencing unprecedented transformation driven by Voice AI technology. As we look ahead to 2025, several key trends are emerging that will shape the future of logistics operations, customer service, and supply chain management.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Understanding these trends is crucial for logistics companies planning their digital transformation strategies. This comprehensive analysis examines the key Voice AI trends for 2025 and their implications for the logistics industry.
                </p>
              </motion.div>

              {/* Key Trends */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Key Voice AI Trends for 2025</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Target className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">1. Hyper-Personalization</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Customer-Specific AI</h4>
                        <p className="text-[var(--muted)] text-sm">AI agents that learn individual customer preferences, communication styles, and business requirements for highly personalized service.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Predictive Communication</h4>
                        <p className="text-[var(--muted)] text-sm">AI systems that anticipate customer needs and proactively reach out with relevant information and solutions.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Contextual Intelligence</h4>
                        <p className="text-[var(--muted)] text-sm">AI agents that understand business context, seasonal patterns, and industry-specific requirements for more relevant interactions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Globe className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">2. Global Integration</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Seamless Cross-Border Operations</h4>
                        <p className="text-[var(--muted)] text-sm">AI agents that handle complex international logistics, customs, and regulatory requirements across multiple countries.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Real-Time Global Coordination</h4>
                        <p className="text-[var(--muted)] text-sm">24/7 coordination across time zones with intelligent scheduling and communication management.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Cultural Intelligence</h4>
                        <p className="text-[var(--muted)] text-sm">AI systems that adapt communication styles, business practices, and cultural nuances for different global markets.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">3. Advanced Automation</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">End-to-End Process Automation</h4>
                        <p className="text-[var(--muted)] text-sm">Complete automation of logistics processes from order placement to delivery confirmation with minimal human intervention.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Intelligent Decision Making</h4>
                        <p className="text-[var(--muted)] text-sm">AI systems that make complex decisions about routing, pricing, and resource allocation based on real-time data and historical patterns.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Self-Optimizing Systems</h4>
                        <p className="text-[var(--muted)] text-sm">AI platforms that continuously learn and optimize their performance without human intervention or manual updates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Future Outlook */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Future Outlook and Strategic Implications</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Market Growth Projections</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Voice AI market size by 2025:</span>
                        <span className="text-[var(--accent-1)] font-semibold">$15.2 billion</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Logistics AI adoption rate:</span>
                        <span className="text-[var(--accent-1)] font-semibold">65-80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Average ROI for early adopters:</span>
                        <span className="text-[var(--accent-1)] font-semibold">300-500%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--muted)]">Cost reduction potential:</span>
                        <span className="text-[var(--accent-1)] font-semibold">40-70%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Strategic Recommendations</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">Start with high-impact, low-risk use cases to build confidence and demonstrate value</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">Invest in employee training and change management to ensure successful adoption</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">Focus on data quality and integration to maximize AI effectiveness</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full mt-2 mr-3"></div>
                        <p className="text-[var(--muted)] text-sm">Plan for scalability and global expansion from the beginning</p>
                      </div>
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
                    The Voice AI landscape in logistics is rapidly evolving, with 2025 marking a pivotal year for industry transformation. Companies that embrace these trends and invest in Voice AI technology will have a significant competitive advantage in the evolving logistics landscape.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed font-semibold">
                    The future belongs to companies that can combine the efficiency of AI with the relationship-building power of human interaction, creating a new paradigm for logistics excellence.
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Embrace the Future of Logistics?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us to learn how Voice AI can help you stay ahead of the trends and transform your logistics operations.
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

export default VoiceAILogisticsTrends2025;
