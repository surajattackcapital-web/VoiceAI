import React from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, CheckCircle, TrendingUp, Users, Package, Truck } from 'lucide-react';
import Link from 'next/link';

const EcommerceFulfillmentAutomation: React.FC = () => {
  return (
    <Layout 
      title="E-commerce Fulfillment Automation Case Study | VoiceAI"
      description="Learn how a leading e-commerce company automated their fulfillment operations with Voice AI, achieving 70% faster order processing and 90% reduction in customer service calls."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center mb-4">
                <Link href="/resources/case-studies" className="text-blue-200 hover:text-white transition-colors">
                  ← Back to Case Studies
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                E-commerce Fulfillment Automation
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                How a leading e-commerce company transformed their fulfillment operations 
                with Voice AI, achieving 70% faster order processing and 90% reduction in customer service calls.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-blue-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Published: January 2025</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <User className="w-5 h-5 mr-2" />
                  <span>Industry: E-commerce</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>5 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <h2>Company Overview</h2>
              <p>
                <strong>TechStyle Fulfillment</strong> is a leading e-commerce fulfillment company serving 
                over 500 online retailers with their warehousing, picking, packing, and shipping operations. 
                With a network of 15 fulfillment centers across North America, they process over 2 million 
                orders monthly.
              </p>

              <h2>The Challenge</h2>
              <p>
                As their business grew rapidly, TechStyle faced several critical challenges:
              </p>
              <ul>
                <li><strong>Manual Order Processing:</strong> Staff spent 60% of their time on phone calls for order confirmations and updates</li>
                <li><strong>Customer Service Overload:</strong> 80% of customer calls were routine inquiries about order status</li>
                <li><strong>Inventory Management:</strong> Real-time inventory updates required constant manual communication</li>
                <li><strong>Scalability Issues:</strong> Peak season volumes overwhelmed their existing processes</li>
                <li><strong>Error Rates:</strong> Manual processes led to 5% order processing errors</li>
              </ul>

              <h2>The Solution</h2>
              <p>
                TechStyle implemented VoiceAI's comprehensive fulfillment automation platform, including:
              </p>

              <h3>1. Automated Order Processing</h3>
              <ul>
                <li>Voice AI agents handle order confirmations and updates automatically</li>
                <li>Real-time inventory checking and allocation</li>
                <li>Automated customer notifications for order status changes</li>
              </ul>

              <h3>2. Intelligent Customer Service</h3>
              <ul>
                <li>AI-powered customer service for order inquiries</li>
                <li>Automated tracking number delivery</li>
                <li>Proactive delivery notifications and updates</li>
              </ul>

              <h3>3. Warehouse Operations</h3>
              <ul>
                <li>Voice-guided picking and packing processes</li>
                <li>Automated quality control checks</li>
                <li>Real-time inventory updates and alerts</li>
              </ul>

              <h2>Implementation Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
                    <h3 className="text-xl font-bold">Performance Improvements</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>70% faster order processing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>90% reduction in customer service calls</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>95% order accuracy rate</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>60% reduction in manual errors</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-bold">Business Impact</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>$2.5M annual cost savings</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>300% increase in order capacity</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>98% customer satisfaction rate</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>24/7 automated operations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Key Features Implemented</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Package className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Order Management</h3>
                  <p className="text-gray-600">Automated order processing and tracking</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Truck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Shipping Automation</h3>
                  <p className="text-gray-600">Intelligent shipping and delivery coordination</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Customer Service</h3>
                  <p className="text-gray-600">AI-powered customer support</p>
                </div>
              </div>

              <h2>ROI Analysis</h2>
              <p>
                The implementation of VoiceAI resulted in significant return on investment:
              </p>
              <ul>
                <li><strong>Initial Investment:</strong> $500,000 for platform setup and integration</li>
                <li><strong>Annual Savings:</strong> $2.5 million in operational costs</li>
                <li><strong>ROI:</strong> 400% return on investment in the first year</li>
                <li><strong>Payback Period:</strong> 2.4 months</li>
              </ul>

              <h2>Customer Testimonial</h2>
              <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-lg italic mb-4">
                  "VoiceAI transformed our fulfillment operations completely. We went from struggling 
                  to keep up with order volume to being able to handle 300% more orders with the same staff. 
                  The automation has been a game-changer for our business."
                </p>
                <footer className="text-sm text-gray-600">
                  <strong>Sarah Chen</strong>, VP of Operations, TechStyle Fulfillment
                </footer>
              </blockquote>

              <h2>Lessons Learned</h2>
              <ul>
                <li><strong>Start Small:</strong> Begin with high-volume, routine processes for quick wins</li>
                <li><strong>Staff Training:</strong> Invest in comprehensive training for smooth adoption</li>
                <li><strong>Gradual Rollout:</strong> Implement in phases to minimize disruption</li>
                <li><strong>Continuous Monitoring:</strong> Regular performance reviews and optimization</li>
                <li><strong>Customer Communication:</strong> Keep customers informed about new automated processes</li>
              </ul>

              <h2>Future Plans</h2>
              <p>
                Building on their success, TechStyle plans to expand VoiceAI implementation to:
              </p>
              <ul>
                <li>International fulfillment centers</li>
                <li>Advanced predictive analytics for demand forecasting</li>
                <li>Integration with additional e-commerce platforms</li>
                <li>Enhanced customer personalization features</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                TechStyle Fulfillment's implementation of VoiceAI demonstrates the transformative power 
                of Voice AI in e-commerce fulfillment operations. By automating routine processes and 
                enhancing customer service, they achieved significant operational improvements and cost savings 
                while scaling their business capabilities.
              </p>
              <p>
                The success of this implementation serves as a model for other e-commerce companies looking 
                to modernize their fulfillment operations and improve customer experience through Voice AI technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Fulfillment Operations?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Learn how VoiceAI can help your e-commerce business achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Download Case Study
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EcommerceFulfillmentAutomation;
