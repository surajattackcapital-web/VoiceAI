import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';

const GlobalFreightForwarderCaseStudy = () => {
  return (
    <Layout 
      title="Global Freight Forwarder Case Study: 80% Reduction in Coordination Time"
      description="Discover how TransGlobal Logistics achieved 80% reduction in coordination time using Voice AI for international freight forwarding operations across 25+ languages."
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
              Global Freight Forwarder: 80% Reduction in Coordination Time
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              How TransGlobal Logistics achieved massive efficiency gains with Voice AI implementation
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">International Logistics</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">2,500 employees</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">$500M revenue</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">200% ROI</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              {/* Executive Summary */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-lg text-blue-800 mb-4">
                    TransGlobal Logistics, a leading international freight forwarder, implemented Voice AI technology 
                    to address communication challenges across 60+ countries and 25+ languages. The implementation 
                    resulted in an 80% reduction in coordination time, 90% improvement in communication accuracy, 
                    and $1.6M in annual cost savings.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">80%</div>
                      <div className="text-blue-700 text-sm">Reduction in Coordination Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">$1.6M</div>
                      <div className="text-blue-700 text-sm">Annual Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">200%</div>
                      <div className="text-blue-700 text-sm">ROI in First Year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Background */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">About TransGlobal Logistics</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Size:</strong> 2,500 employees, $500M annual revenue</li>
                      <li><strong>Operations:</strong> International freight forwarding across 60+ countries</li>
                      <li><strong>Services:</strong> Air freight, ocean freight, customs clearance, warehousing</li>
                      <li><strong>Markets:</strong> North America, Europe, Asia-Pacific, Latin America</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Business Challenges</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Complex international operations with multiple stakeholders</li>
                      <li>• Language barriers across 25+ languages</li>
                      <li>• Time zone coordination challenges</li>
                      <li>• High communication costs and complexity</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* The Challenge */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Communication Complexity</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      TransGlobal Logistics was struggling with managing complex international operations across 
                      60+ countries with significant communication challenges:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Language barriers:</strong> Operations in 25+ languages with translation delays and accuracy issues</li>
                      <li><strong>Time zone complexity:</strong> 24-hour operations across multiple time zones</li>
                      <li><strong>Cultural differences:</strong> Varying business practices and communication styles</li>
                      <li><strong>Manual coordination:</strong> 80+ hours per week spent on manual coordination tasks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Impact</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 border-l-4 border-red-500 p-6">
                        <h4 className="font-bold text-red-800 mb-2">High Communication Costs</h4>
                        <p className="text-red-700">$2M+ annually in communication and coordination costs</p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6">
                        <h4 className="font-bold text-red-800 mb-2">Delayed Responses</h4>
                        <p className="text-red-700">Average 4-6 hour response times for international inquiries</p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6">
                        <h4 className="font-bold text-red-800 mb-2">Error Rates</h4>
                        <p className="text-red-700">15-20% of communications required clarification or correction</p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6">
                        <h4 className="font-bold text-red-800 mb-2">Customer Satisfaction</h4>
                        <p className="text-red-700">Below industry average due to communication delays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Solution */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Voice AI Implementation</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      TransGlobal Logistics implemented a comprehensive Voice AI solution to address their 
                      international communication challenges:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Multilingual voice AI agents</strong> for 25+ languages with cultural adaptation</li>
                      <li><strong>24/7 global operations</strong> and support across all time zones</li>
                      <li><strong>Automated compliance</strong> and documentation assistance</li>
                      <li><strong>Cultural adaptation</strong> and local market expertise</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features Implemented</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-bold text-blue-800 mb-3">Multilingual Communication</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Real-time translation and language switching</li>
                          <li>• Cultural adaptation of communication styles</li>
                          <li>• Local terminology and industry-specific language</li>
                          <li>• Accent recognition and regional dialect support</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-bold text-green-800 mb-3">Global Coordination</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Seamless communication across language barriers</li>
                          <li>• Consistent service quality in all markets</li>
                          <li>• Local market knowledge and expertise</li>
                          <li>• Cultural sensitivity and business etiquette</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h4 className="font-bold text-purple-800 mb-3">24/7 Operations</h4>
                        <ul className="text-purple-700 text-sm space-y-1">
                          <li>• Round-the-clock support across all time zones</li>
                          <li>• Emergency communication and coordination</li>
                          <li>• Global operations and logistics management</li>
                          <li>• International partner and supplier coordination</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-6">
                        <h4 className="font-bold text-orange-800 mb-3">Compliance & Documentation</h4>
                        <ul className="text-orange-700 text-sm space-y-1">
                          <li>• Automated compliance monitoring and updates</li>
                          <li>• Compliance documentation and reporting</li>
                          <li>• Customs and trade regulation assistance</li>
                          <li>• Audit trail maintenance and documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Implementation Process */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Process</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 1: Planning and Assessment (Months 1-2)</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Comprehensive assessment of current communication flows and pain points</li>
                      <li>Identification of high-volume, high-impact use cases for automation</li>
                      <li>Stakeholder engagement and change management planning</li>
                      <li>Vendor selection and solution design</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 2: Pilot Implementation (Months 3-4)</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Deployment of Voice AI agents for key markets and languages</li>
                      <li>Integration with existing systems and workflows</li>
                      <li>Staff training and change management</li>
                      <li>Performance monitoring and optimization</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 3: Full Deployment (Months 5-6)</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Expansion to all markets and languages</li>
                      <li>Full integration with all business processes</li>
                      <li>Continuous monitoring and optimization</li>
                      <li>Performance measurement and reporting</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Results and Impact */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Results and Impact</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Improvements</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border-l-4 border-green-500 p-6">
                        <h4 className="font-bold text-green-800 mb-2">80% Reduction in Coordination Time</h4>
                        <p className="text-green-700">From 80 hours to 16 hours weekly coordination time</p>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-6">
                        <h4 className="font-bold text-green-800 mb-2">90% Improvement in Communication Accuracy</h4>
                        <p className="text-green-700">Significant reduction in errors and misunderstandings</p>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-6">
                        <h4 className="font-bold text-green-800 mb-2">$1.6M Annual Savings</h4>
                        <p className="text-green-700">In communication costs and operational efficiency</p>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-6">
                        <h4 className="font-bold text-green-800 mb-2">95% Customer Satisfaction</h4>
                        <p className="text-green-700">Across all markets and customer segments</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Business Impact</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Revenue Growth</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 40% increase in international shipment volume</li>
                          <li>• 60% reduction in delivery delays</li>
                          <li>• 85% improvement in supplier coordination</li>
                          <li>• 100% compliance with international regulations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Operational Excellence</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 24/7 availability across all markets</li>
                          <li>• Consistent service quality globally</li>
                          <li>• Reduced operational complexity</li>
                          <li>• Improved scalability and growth capacity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ROI Analysis */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Analysis</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Breakdown</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Initial Investment</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Software licensing: $400,000</li>
                          <li>• Implementation services: $200,000</li>
                          <li>• Integration costs: $100,000</li>
                          <li>• Training and change management: $100,000</li>
                          <li><strong>Total Initial Investment: $800,000</strong></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Ongoing Costs (Annual)</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Monthly licensing: $120,000</li>
                          <li>• Support and maintenance: $60,000</li>
                          <li>• Updates and enhancements: $20,000</li>
                          <li>• Monitoring and optimization: $20,000</li>
                          <li><strong>Total Annual Costs: $220,000</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Savings and Returns</h3>
                    <div className="bg-green-50 rounded-lg p-6">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">$1,600,000</div>
                          <div className="text-green-700 text-sm">Annual Savings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">200%</div>
                          <div className="text-green-700 text-sm">ROI in First Year</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">6</div>
                          <div className="text-green-700 text-sm">Months Payback Period</div>
                        </div>
                      </div>
                      <p className="text-green-800 text-sm">
                        <strong>Net Annual Benefit:</strong> $1,600,000 - $220,000 = $1,380,000
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Lessons Learned */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Success Factors</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Comprehensive planning:</strong> Thorough assessment and stakeholder engagement were critical</li>
                      <li><strong>Cultural sensitivity:</strong> Local market adaptation and cultural awareness were essential</li>
                      <li><strong>Gradual rollout:</strong> Phased implementation minimized disruption and allowed for optimization</li>
                      <li><strong>Strong vendor partnership:</strong> Close collaboration with the Voice AI vendor ensured success</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges Overcome</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Language complexity:</strong> Required extensive testing and optimization for each language</li>
                      <li><strong>Cultural differences:</strong> Needed careful adaptation of communication styles and business practices</li>
                      <li><strong>Change management:</strong> Required comprehensive training and support for global teams</li>
                      <li><strong>System integration:</strong> Complex integration with existing systems and workflows</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Future Plans */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Plans</h2>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    Based on the success of the initial implementation, TransGlobal Logistics plans to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Expand Voice AI capabilities to additional business processes and workflows</li>
                    <li>Integrate advanced analytics and predictive capabilities for better decision making</li>
                    <li>Develop custom industry-specific solutions for freight forwarding operations</li>
                    <li>Explore integration with emerging technologies like IoT and blockchain</li>
                    <li>Share best practices and lessons learned with industry partners</li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The Voice AI implementation at TransGlobal Logistics demonstrates the transformative potential 
                  of intelligent voice automation in international logistics operations. By addressing language 
                  barriers, cultural differences, and operational complexity, the company achieved significant 
                  improvements in efficiency, cost savings, and customer satisfaction.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The 80% reduction in coordination time, 90% improvement in communication accuracy, and $1.6M 
                  in annual savings represent a compelling ROI that validates the strategic value of Voice AI 
                  technology in complex, global logistics operations.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  This case study serves as a blueprint for other international logistics companies looking to 
                  leverage Voice AI technology to improve their operations and competitive position in the 
                  global marketplace.
                </p>
              </section>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
                <p className="text-xl mb-6 text-blue-100">
                  Learn how Voice AI can transform your international logistics operations and deliver significant ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/demo">
                    <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Schedule a Demo
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                      Contact Sales
                    </button>
                  </Link>
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

export default GlobalFreightForwarderCaseStudy;
