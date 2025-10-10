import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Users, Zap, Globe, Package, Truck } from 'lucide-react';

const VoiceAILastMileDelivery: React.FC = () => {
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
      title="Voice AI for Last-Mile Delivery: Optimizing Customer Communication and Driver Coordination"
      description="Discover how Voice AI is transforming last-mile delivery operations through intelligent customer communication, driver coordination, and exception handling."
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
                  Last-Mile Delivery
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                Optimizing Customer Communication and Driver Coordination for Maximum Efficiency
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
                  Last-mile delivery represents the final and most critical stage of the supply chain, where packages transition from distribution centers to customers' doorsteps. This phase accounts for <strong className="text-[var(--accent-1)]">53% of total shipping costs</strong> and is often the most challenging part of the delivery process, involving complex coordination between drivers, customers, and logistics systems.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  The rise of e-commerce has exponentially increased last-mile delivery complexity, with customers expecting real-time updates, flexible delivery windows, and seamless communication. Traditional phone-based coordination is no longer scalable or efficient enough to meet these demands.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Voice AI is emerging as the game-changing solution for last-mile delivery optimization, enabling intelligent automation of customer communication, driver coordination, and exception handling while maintaining the personal touch that customers value.
                </p>
              </motion.div>

              {/* Current Pain Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Last-Mile Delivery Challenge</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Current Pain Points</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-3">Customer Communication Overload</h4>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• High call volumes for delivery inquiries and updates</li>
                          <li>• Repetitive questions about delivery status and timing</li>
                          <li>• Language barriers in diverse urban markets</li>
                          <li>• 24/7 customer expectations for support and updates</li>
                        </ul>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-3">Driver Coordination Complexity</h4>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• Manual dispatch and route optimization</li>
                          <li>• Real-time schedule changes and rerouting</li>
                          <li>• Exception handling for failed deliveries</li>
                          <li>• Communication gaps between drivers and customers</li>
                        </ul>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-3">Operational Inefficiencies</h4>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• Failed delivery attempts due to poor communication</li>
                          <li>• Customer complaints about lack of updates</li>
                          <li>• Driver productivity impacted by coordination tasks</li>
                          <li>• High operational costs for customer service</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-4">The Cost of Inefficiency</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">Failed Deliveries</h4>
                        <p className="text-[var(--muted)] mb-3">Each failed delivery attempt costs:</p>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• <strong className="text-[var(--accent-1)]">$10-15</strong> in additional fuel and time</li>
                          <li>• Customer dissatisfaction and potential churn</li>
                          <li>• Driver productivity loss and overtime costs</li>
                          <li>• Warehouse space for returned packages</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">Customer Service Costs</h4>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• <strong className="text-[var(--accent-1)]">$5-8 per call</strong> for delivery inquiries</li>
                          <li>• High agent turnover due to repetitive tasks</li>
                          <li>• Peak hour staffing challenges and overtime</li>
                          <li>• Multilingual support requirements and costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* How Voice AI Transforms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">How Voice AI Transforms Last-Mile Delivery</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">1. Intelligent Customer Communication</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Proactive Delivery Updates</h4>
                        <p className="text-[var(--muted)] text-sm">AI voice agents can automatically call customers with delivery confirmations, provide real-time updates, and notify of delays.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Dynamic Delivery Scheduling</h4>
                        <p className="text-[var(--muted)] text-sm">Reschedule deliveries based on customer preferences, handle delivery window changes, and coordinate special requirements.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Exception Management</h4>
                        <p className="text-[var(--muted)] text-sm">Handle delivery failures and rescheduling, manage address corrections, and coordinate alternative delivery options.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Truck className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">2. Enhanced Driver Coordination</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Intelligent Dispatch</h4>
                        <p className="text-[var(--muted)] text-sm">AI voice agents can assign optimal routes, coordinate with drivers for schedule changes, and handle dynamic rerouting.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Real-Time Communication</h4>
                        <p className="text-[var(--muted)] text-sm">Provide driver updates to customers automatically, handle driver-customer direct communication, and manage delivery confirmations.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Performance Optimization</h4>
                        <p className="text-[var(--muted)] text-sm">Track delivery metrics, provide driver feedback and coaching, optimize routes based on historical data.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Package className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">3. Seamless Integration</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">TMS and WMS Integration</h4>
                        <p className="text-[var(--muted)] text-sm">Real-time inventory and order status, automated dispatch and routing, dynamic scheduling and optimization.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Customer Relationship Management</h4>
                        <p className="text-[var(--muted)] text-sm">Personalized communication based on history, preference management, feedback collection and analysis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Case Studies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Real-World Implementation Examples</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Case Study 1: Urban E-Commerce Delivery</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">Challenge</h4>
                        <p className="text-[var(--muted)] mb-3">A major e-commerce company was struggling with:</p>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• 5,000+ daily delivery calls for status updates</li>
                          <li>• 25% failed delivery rate due to poor communication</li>
                          <li>• High customer service costs ($40,000+ monthly)</li>
                          <li>• Driver coordination inefficiencies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">Results</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Failed deliveries reduction:</span>
                            <span className="text-[var(--accent-1)] font-semibold">60%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Customer service calls decrease:</span>
                            <span className="text-[var(--accent-1)] font-semibold">70%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Monthly savings:</span>
                            <span className="text-[var(--accent-1)] font-semibold">$25,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Customer satisfaction:</span>
                            <span className="text-[var(--accent-1)] font-semibold">95%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Case Study 2: Grocery Delivery Service</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">Challenge</h4>
                        <p className="text-[var(--muted)] mb-3">A grocery delivery service needed:</p>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• Real-time inventory coordination with stores</li>
                          <li>• Flexible delivery windows for customers</li>
                          <li>• Substitution management for out-of-stock items</li>
                          <li>• Temperature-sensitive delivery coordination</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">Results</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Delivery success rate improvement:</span>
                            <span className="text-[var(--accent-1)] font-semibold">40%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Customer complaints reduction:</span>
                            <span className="text-[var(--accent-1)] font-semibold">50%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Driver productivity increase:</span>
                            <span className="text-[var(--accent-1)] font-semibold">30%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Customer retention improvement:</span>
                            <span className="text-[var(--accent-1)] font-semibold">85%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Case Study 3: Pharmaceutical Delivery</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">Challenge</h4>
                        <p className="text-[var(--muted)] mb-3">A pharmaceutical delivery service required:</p>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• HIPAA compliance for patient communication</li>
                          <li>• Prescription verification and delivery confirmation</li>
                          <li>• Temperature monitoring for sensitive medications</li>
                          <li>• Patient education and medication instructions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">Results</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">HIPAA compliance:</span>
                            <span className="text-[var(--accent-1)] font-semibold">100%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Delivery errors reduction:</span>
                            <span className="text-[var(--accent-1)] font-semibold">90%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Patient satisfaction improvement:</span>
                            <span className="text-[var(--accent-1)] font-semibold">75%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--muted)]">Operational costs decrease:</span>
                            <span className="text-[var(--accent-1)] font-semibold">50%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ROI and Business Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">ROI and Business Impact</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Cost Savings</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-2">Operational Efficiency</h4>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• 50-70% reduction in customer service costs</li>
                          <li>• 30-50% decrease in failed deliveries</li>
                          <li>• 25-40% improvement in driver productivity</li>
                          <li>• Elimination of overtime during peak periods</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-2">Customer Satisfaction</h4>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• Improved delivery experience and satisfaction</li>
                          <li>• Reduced customer complaints and disputes</li>
                          <li>• Higher customer retention and loyalty</li>
                          <li>• Positive brand reputation and word-of-mouth</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Revenue Growth</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-2">Increased Capacity</h4>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• Handle more deliveries with same resources</li>
                          <li>• Faster response times improve customer satisfaction</li>
                          <li>• Better exception handling reduces disputes</li>
                          <li>• New service opportunities through automation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-2">Market Expansion</h4>
                        <ul className="space-y-1 text-[var(--muted)] text-sm">
                          <li>• Enter new markets with automated support</li>
                          <li>• Offer new services like same-day delivery</li>
                          <li>• Scale operations without proportional cost increases</li>
                          <li>• Competitive advantage through superior service</li>
                        </ul>
                      </div>
                    </div>
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
                    Voice AI is transforming last-mile delivery operations by automating customer communication, optimizing driver coordination, and handling exceptions intelligently. The technology enables logistics companies to provide superior customer service while reducing costs and improving efficiency.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
                    The benefits are clear: reduced failed deliveries, improved customer satisfaction, lower operational costs, and unlimited scalability. Companies that embrace voice AI for last-mile delivery will have a significant competitive advantage in the evolving e-commerce landscape.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed font-semibold">
                    The future of last-mile delivery is intelligent, automated, and customer-centric. Voice AI is the key to unlocking this future and delivering exceptional experiences that keep customers coming back.
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
                    <li>• Voice AI can reduce last-mile delivery customer service costs by 50-70%</li>
                    <li>• The technology enables 24/7 customer communication and driver coordination</li>
                    <li>• Real-world implementations show significant improvements in delivery success rates</li>
                    <li>• Implementation should start with high-volume, low-risk use cases</li>
                    <li>• Early adopters will have a competitive advantage in the growing e-commerce market</li>
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Last-Mile Delivery Operations?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us to learn how our intelligent voice agents can streamline customer communication, improve driver coordination, and reduce delivery failures.
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

export default VoiceAILastMileDelivery;
