import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Users, Zap, Globe } from 'lucide-react';

const VoiceAITransformingLogistics2025: React.FC = () => {
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
      title="Voice AI is Transforming the Logistics Industry in 2025: A Complete Guide"
      description="Discover how Voice AI is revolutionizing logistics operations in 2025. Learn about automated customer service, driver coordination, and cost reduction strategies for transportation companies."
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
              Voice AI is Transforming the
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Logistics Industry in 2025
              </span>
            </h1>
              
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                A Complete Guide to Revolutionary Voice AI Solutions for Transportation and Supply Chain Operations
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--muted)] mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>15 min read</span>
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
                  The logistics industry is experiencing a revolutionary transformation powered by Voice AI technology. As supply chains become increasingly complex and customer expectations rise, logistics companies are turning to intelligent voice agents to streamline operations, improve customer service, and reduce costs.
                </p>
                <div className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-6 mb-6">
                  <p className="text-[var(--text)] font-semibold mb-2">Market Growth Statistics:</p>
                  <p className="text-[var(--muted)]">
                    According to recent market research, the AI voice market is valued at <strong className="text-[var(--accent-1)]">USD 5.2 billion in 2023</strong> and is projected to grow to <strong className="text-[var(--accent-1)]">USD 26.8 billion by 2032</strong>, with a <strong className="text-[var(--accent-1)]">20.1% CAGR</strong>. This explosive growth is particularly evident in logistics, where voice AI is solving critical operational challenges.
                </p>
              </div>
              </motion.div>

              {/* Current State */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Current State of Logistics Communication</h2>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Traditional logistics operations rely heavily on phone calls for various critical functions:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Current Communication Needs</h3>
                    <ul className="space-y-2 text-[var(--muted)]">
                      <li>• Customer inquiries about shipment status</li>
                      <li>• Driver coordination and dispatch management</li>
                      <li>• Vendor communication and procurement</li>
                      <li>• Customer support for delivery issues</li>
                      <li>• Appointment scheduling for pickups and deliveries</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Current Pain Points</h3>
                    <ul className="space-y-2 text-[var(--muted)]">
                      <li>• High operational costs from human agent requirements</li>
                      <li>• Limited scalability during peak seasons</li>
                      <li>• Inconsistent service quality across different agents</li>
                      <li>• 24/7 availability challenges for global operations</li>
                      <li>• Language barriers in international logistics</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* How Voice AI is Revolutionizing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">How Voice AI is Revolutionizing Logistics</h2>

                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">1. Automated Customer Service</h3>
                    </div>
                    <p className="text-[var(--muted)] mb-4">
                      Voice AI agents can handle routine logistics inquiries with human-like conversation quality:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Shipment Tracking</h4>
                        <p className="text-[var(--muted)] text-sm">Customers can call and ask "Where is my package?" and receive real-time updates from integrated tracking systems.</p>
                  </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Delivery Scheduling</h4>
                        <p className="text-[var(--muted)] text-sm">AI agents can reschedule deliveries, update addresses, and coordinate with drivers automatically.</p>
                  </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Problem Resolution</h4>
                        <p className="text-[var(--muted)] text-sm">Common issues like delivery delays or damaged packages can be addressed through intelligent conversation flows.</p>
                  </div>
                </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">2. Driver and Fleet Management</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Dispatch Automation</h4>
                        <p className="text-[var(--muted)] text-sm">Voice AI can coordinate with drivers, assign routes, and handle real-time schedule changes.</p>
                  </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Communication Hub</h4>
                        <p className="text-[var(--muted)] text-sm">Drivers can report issues, request assistance, or update delivery status through voice commands.</p>
                  </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Compliance Monitoring</h4>
                        <p className="text-[var(--muted)] text-sm">AI agents can ensure drivers follow safety protocols and regulatory requirements.</p>
                  </div>
                </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Globe className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">3. Vendor and Supplier Relations</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Procurement Automation</h4>
                        <p className="text-[var(--muted)] text-sm">Voice AI can handle routine ordering, inventory inquiries, and supplier communications.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Quality Control</h4>
                        <p className="text-[var(--muted)] text-sm">Automated calls can verify delivery confirmations and quality standards.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Payment Processing</h4>
                        <p className="text-[var(--muted)] text-sm">AI agents can handle invoice inquiries and payment confirmations.</p>
                  </div>
                  </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Key Benefits for Logistics Companies</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Cost Reduction</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Up to 60% reduction in customer service costs</li>
                      <li>• Elimination of overtime during peak seasons</li>
                      <li>• Reduced training costs for new agents</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Zap className="w-6 h-6" />
                  </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Improved Efficiency</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• 24/7 availability without additional staffing</li>
                      <li>• Instant response times for customer inquiries</li>
                      <li>• Automated data entry and CRM updates</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Users className="w-6 h-6" />
                </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Enhanced Customer Experience</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Consistent service quality across all interactions</li>
                      <li>• Multilingual support for global operations</li>
                      <li>• Personalized communication based on customer history</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Globe className="w-6 h-6" />
                  </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Scalability</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Unlimited concurrent calls during peak periods</li>
                      <li>• Easy expansion to new markets and languages</li>
                      <li>• Rapid deployment of new services</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Real-World Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Real-World Applications in Logistics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Freight Brokerage</h3>
                    <p className="text-[var(--muted)] mb-4">Voice AI can handle:</p>
                    <ul className="space-y-2 text-[var(--muted)]">
                      <li>• Load matching between shippers and carriers</li>
                      <li>• Rate negotiations and quote generation</li>
                      <li>• Documentation management and compliance</li>
                      <li>• Customer onboarding and relationship management</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Last-Mile Delivery</h3>
                    <p className="text-[var(--muted)] mb-4">AI agents can:</p>
                    <ul className="space-y-2 text-[var(--muted)]">
                      <li>• Coordinate delivery windows with customers</li>
                      <li>• Handle delivery exceptions and rescheduling</li>
                      <li>• Provide real-time updates to customers</li>
                      <li>• Manage driver communications and routing</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Warehouse Operations</h3>
                    <p className="text-[var(--muted)] mb-4">Voice AI supports:</p>
                    <ul className="space-y-2 text-[var(--muted)]">
                      <li>• Inventory management and stock inquiries</li>
                      <li>• Order processing and fulfillment coordination</li>
                      <li>• Quality control and inspection scheduling</li>
                      <li>• Vendor communication and procurement</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">International Shipping</h3>
                    <p className="text-[var(--muted)] mb-4">AI agents can:</p>
                    <ul className="space-y-2 text-[var(--muted)]">
                      <li>• Handle customs documentation and compliance</li>
                      <li>• Provide multilingual support for global customers</li>
                      <li>• Coordinate with international partners and agents</li>
                      <li>• Manage time zone differences and scheduling</li>
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
                    Voice AI is not just a technological trend—it's a fundamental shift in how logistics companies operate and serve their customers. The benefits are clear: reduced costs, improved efficiency, enhanced customer experience, and unlimited scalability.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
                    Companies that embrace voice AI now will have a significant competitive advantage in the evolving logistics landscape. The technology is mature, the ROI is proven, and the market is ready for transformation.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed font-semibold">
                    The question isn't whether voice AI will transform logistics—it's whether your company will lead that transformation or follow it.
                  </p>
                </div>
              </motion.div>

              {/* Key Takeaways */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Key Takeaways:</h3>
                <div className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-6">
                  <ul className="space-y-3 text-[var(--muted)]">
                  <li>• Voice AI can reduce logistics customer service costs by up to 60%</li>
                  <li>• The technology enables 24/7 availability and unlimited scalability</li>
                  <li>• Real-world applications span from freight brokerage to last-mile delivery</li>
                  <li>• Implementation requires careful planning but offers significant ROI</li>
                  <li>• Early adopters will have a competitive advantage in the evolving market</li>
                </ul>
              </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Logistics Operations?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us to learn how our intelligent voice agents can streamline your operations and improve customer satisfaction.
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

export default VoiceAITransformingLogistics2025;