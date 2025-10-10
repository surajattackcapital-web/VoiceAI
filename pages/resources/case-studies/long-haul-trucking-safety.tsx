import React from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, CheckCircle, TrendingUp, Users, Truck, Shield, MapPin } from 'lucide-react';
import Link from 'next/link';

const LongHaulTruckingSafety: React.FC = () => {
  return (
    <Layout 
      title="Long-Haul Trucking Safety Case Study | VoiceAI"
      description="Discover how a major trucking company improved driver safety and compliance with Voice AI, achieving 85% reduction in safety incidents and 95% compliance rate."
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
                Long-Haul Trucking Safety Enhancement
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                How a major trucking company improved driver safety and compliance with Voice AI, 
                achieving 85% reduction in safety incidents and 95% compliance rate.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-blue-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Published: January 2025</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <User className="w-5 h-5 mr-2" />
                  <span>Industry: Long-Haul Trucking</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>6 min read</span>
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
                <strong>TransContinental Logistics</strong> is a major long-haul trucking company operating 
                a fleet of 2,500 trucks across North America. With over 3,000 drivers covering 50 million 
                miles annually, they specialize in cross-country freight transportation for major retailers 
                and manufacturers.
              </p>

              <h2>The Challenge</h2>
              <p>
                TransContinental faced significant safety and compliance challenges:
              </p>
              <ul>
                <li><strong>Driver Safety Incidents:</strong> 15% increase in safety incidents over the previous year</li>
                <li><strong>Compliance Violations:</strong> Frequent DOT violations due to manual logbook errors</li>
                <li><strong>Driver Fatigue:</strong> Difficulty monitoring and managing driver hours of service</li>
                <li><strong>Communication Gaps:</strong> Limited real-time communication with drivers on the road</li>
                <li><strong>Emergency Response:</strong> Slow response times for driver emergencies and breakdowns</li>
                <li><strong>Training Compliance:</strong> Challenges ensuring all drivers complete required safety training</li>
              </ul>

              <h2>The Solution</h2>
              <p>
                TransContinental implemented VoiceAI's comprehensive safety and compliance platform:
              </p>

              <h3>1. Voice-Activated Safety Monitoring</h3>
              <ul>
                <li>AI-powered voice commands for hands-free operation</li>
                <li>Real-time fatigue detection through voice analysis</li>
                <li>Automated safety checklists and reminders</li>
                <li>Voice-activated emergency response system</li>
              </ul>

              <h3>2. Automated Compliance Management</h3>
              <ul>
                <li>Voice-activated electronic logging device (ELD) integration</li>
                <li>Automated hours of service tracking and alerts</li>
                <li>Voice-guided pre-trip and post-trip inspections</li>
                <li>Real-time compliance status monitoring</li>
              </ul>

              <h3>3. Enhanced Driver Communication</h3>
              <ul>
                <li>Voice-activated dispatch communication</li>
                <li>Automated route updates and traffic alerts</li>
                <li>Voice-guided navigation and safety instructions</li>
                <li>Emergency communication protocols</li>
              </ul>

              <h2>Implementation Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-green-500 mr-3" />
                    <h3 className="text-xl font-bold">Safety Improvements</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>85% reduction in safety incidents</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>90% reduction in fatigue-related incidents</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>75% faster emergency response times</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>100% driver safety training completion</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-bold">Compliance & Operations</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>95% DOT compliance rate</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>80% reduction in logbook violations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>60% improvement in driver satisfaction</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>$1.8M reduction in insurance costs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Key Features Implemented</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Truck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Fleet Management</h3>
                  <p className="text-gray-600">Real-time fleet monitoring and management</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Safety Monitoring</h3>
                  <p className="text-gray-600">AI-powered safety and compliance tracking</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Route Optimization</h3>
                  <p className="text-gray-600">Voice-guided navigation and route management</p>
                </div>
              </div>

              <h2>Driver Experience</h2>
              <p>
                The VoiceAI implementation significantly improved the driver experience:
              </p>
              <ul>
                <li><strong>Hands-Free Operation:</strong> Drivers can operate the system without taking their hands off the wheel</li>
                <li><strong>Reduced Distraction:</strong> Voice commands minimize visual distractions while driving</li>
                <li><strong>Proactive Alerts:</strong> Early warning system for fatigue, weather, and traffic conditions</li>
                <li><strong>Simplified Compliance:</strong> Automated logging reduces administrative burden</li>
                <li><strong>Better Communication:</strong> Clear, consistent communication with dispatch and management</li>
              </ul>

              <h2>ROI Analysis</h2>
              <p>
                The safety and compliance improvements resulted in significant financial benefits:
              </p>
              <ul>
                <li><strong>Initial Investment:</strong> $800,000 for platform implementation and driver training</li>
                <li><strong>Insurance Savings:</strong> $1.8 million reduction in insurance premiums</li>
                <li><strong>Compliance Savings:</strong> $500,000 reduction in DOT fines and violations</li>
                <li><strong>Operational Efficiency:</strong> $1.2 million in improved operational efficiency</li>
                <li><strong>Total Annual Savings:</strong> $3.5 million</li>
                <li><strong>ROI:</strong> 337% return on investment in the first year</li>
              </ul>

              <h2>Customer Testimonial</h2>
              <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-lg italic mb-4">
                  "VoiceAI has revolutionized our safety program. The voice-activated system makes it easy 
                  for drivers to stay compliant while keeping their focus on the road. We've seen dramatic 
                  improvements in safety metrics and driver satisfaction."
                </p>
                <footer className="text-sm text-gray-600">
                  <strong>Mike Rodriguez</strong>, Safety Director, TransContinental Logistics
                </footer>
              </blockquote>

              <h2>Implementation Challenges & Solutions</h2>
              <h3>Challenge: Driver Adoption</h3>
              <p>
                <strong>Solution:</strong> Comprehensive training program with hands-on demonstrations and 
                gradual rollout to build confidence and familiarity.
              </p>

              <h3>Challenge: Technology Integration</h3>
              <p>
                <strong>Solution:</strong> Seamless integration with existing ELD systems and fleet management 
                software to minimize disruption.
              </p>

              <h3>Challenge: Regulatory Compliance</h3>
              <p>
                <strong>Solution:</strong> Built-in compliance features that automatically ensure adherence 
                to DOT regulations and hours of service requirements.
              </p>

              <h2>Lessons Learned</h2>
              <ul>
                <li><strong>Driver Training is Critical:</strong> Invest heavily in comprehensive training for successful adoption</li>
                <li><strong>Gradual Implementation:</strong> Roll out features gradually to allow drivers to adapt</li>
                <li><strong>Feedback Integration:</strong> Continuously gather and incorporate driver feedback</li>
                <li><strong>Compliance First:</strong> Ensure all features meet regulatory requirements from day one</li>
                <li><strong>Safety Culture:</strong> Use technology to reinforce, not replace, safety culture</li>
              </ul>

              <h2>Future Enhancements</h2>
              <p>
                Building on their success, TransContinental plans to expand VoiceAI capabilities:
              </p>
              <ul>
                <li>Advanced predictive analytics for maintenance scheduling</li>
                <li>Integration with weather and traffic data for route optimization</li>
                <li>Enhanced driver wellness monitoring and support</li>
                <li>Automated cargo monitoring and security features</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                TransContinental Logistics' implementation of VoiceAI demonstrates the transformative impact 
                of Voice AI technology on trucking safety and compliance. By providing hands-free, voice-activated 
                safety monitoring and compliance management, they achieved remarkable improvements in safety metrics, 
                regulatory compliance, and operational efficiency.
              </p>
              <p>
                The success of this implementation showcases how Voice AI can enhance driver safety while improving 
                operational efficiency and reducing costs. This case study serves as a model for other trucking 
                companies looking to modernize their safety and compliance programs.
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
                Ready to Enhance Your Fleet Safety?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Learn how VoiceAI can help your trucking company achieve similar safety and compliance improvements.
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

export default LongHaulTruckingSafety;
