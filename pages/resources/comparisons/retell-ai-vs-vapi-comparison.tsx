import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';

const RetellVsVapiComparison = () => {
  return (
    <Layout 
      title="Retell AI vs Vapi Comparison: Which Voice AI Platform is Right for Your Logistics Operations?"
      description="Comprehensive comparison of Retell AI vs Vapi for logistics companies. Compare features, pricing, integrations, and performance to choose the right Voice AI platform."
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
              <Link href="/resources/comparisons" className="text-blue-200 hover:text-white transition-colors">
                ← Back to Comparisons
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Retell AI vs Vapi: Complete Platform Comparison
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Detailed comparison of two leading Voice AI platforms for logistics applications
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Platform Comparisons</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">10 min read</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Winner: Retell AI</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Content */}
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
                    This comprehensive comparison evaluates Retell AI and Vapi across key criteria for logistics 
                    applications. While both platforms offer strong Voice AI capabilities, Retell AI emerges as 
                    the winner for logistics companies due to superior integration capabilities, enterprise features, 
                    and logistics-specific optimizations.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">Retell AI</div>
                      <div className="text-green-700 text-sm">Overall Winner</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">8.5/10</div>
                      <div className="text-blue-700 text-sm">Retell AI Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">7.2/10</div>
                      <div className="text-purple-700 text-sm">Vapi Score</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Overview</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Retell AI</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li><strong>Founded:</strong> 2023</li>
                      <li><strong>Focus:</strong> Enterprise Voice AI with logistics specialization</li>
                      <li><strong>Key Strength:</strong> Advanced integration and enterprise features</li>
                      <li><strong>Target Market:</strong> Mid to large enterprises, logistics companies</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-4">Vapi</h3>
                    <ul className="space-y-2 text-purple-800">
                      <li><strong>Founded:</strong> 2022</li>
                      <li><strong>Focus:</strong> Developer-friendly Voice AI platform</li>
                      <li><strong>Key Strength:</strong> Ease of use and developer experience</li>
                      <li><strong>Target Market:</strong> Developers, startups, SMBs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Detailed Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Comparison</h2>
                
                {/* Voice Quality */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Voice Quality and Natural Conversation</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Criteria</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Retell AI</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Vapi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Voice Naturalness</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Very Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Conversation Flow</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Context Retention</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Fair</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Emotional Intelligence</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800"><strong>Winner:</strong> Retell AI - Superior voice quality and conversation management</p>
                  </div>
                </div>

                {/* Integration Capabilities */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Integration Capabilities</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Criteria</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Retell AI</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Vapi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">API Quality</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">CRM Integration</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">TMS/WMS Integration</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Fair</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Third-party Apps</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800"><strong>Winner:</strong> Retell AI - Superior logistics-specific integrations</p>
                  </div>
                </div>

                {/* Pricing Comparison */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Value</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Criteria</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Retell AI</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Vapi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Starting Price</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">$0.10/min</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">$0.08/min</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Enterprise Pricing</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Competitive</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Value for Money</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">ROI Potential</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">High</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Medium</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800"><strong>Winner:</strong> Retell AI - Better value for enterprise use cases</p>
                  </div>
                </div>

                {/* Enterprise Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Features</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Criteria</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Retell AI</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Vapi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Security & Compliance</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Scalability</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Support Quality</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Customization</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excellent</span>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Good</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800"><strong>Winner:</strong> Retell AI - Superior enterprise-grade features</p>
                  </div>
                </div>
              </section>

              {/* Use Case Analysis */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Case Analysis</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Freight Brokerage</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-blue-800 mb-2">Retell AI</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Excellent load matching automation</li>
                          <li>• Superior rate negotiation capabilities</li>
                          <li>• Advanced compliance features</li>
                          <li>• Seamless TMS integration</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-800 mb-2">Vapi</h4>
                        <ul className="text-purple-700 text-sm space-y-1">
                          <li>• Good basic automation</li>
                          <li>• Limited logistics-specific features</li>
                          <li>• Basic integration capabilities</li>
                          <li>• Requires more customization</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 rounded">
                      <p className="text-green-800 text-sm"><strong>Winner:</strong> Retell AI - Purpose-built for logistics operations</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Last-Mile Delivery</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-blue-800 mb-2">Retell AI</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Advanced customer communication</li>
                          <li>• Real-time delivery coordination</li>
                          <li>• Exception handling automation</li>
                          <li>• Driver communication optimization</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-800 mb-2">Vapi</h4>
                        <ul className="text-purple-700 text-sm space-y-1">
                          <li>• Good customer service automation</li>
                          <li>• Basic delivery updates</li>
                          <li>• Limited exception handling</li>
                          <li>• Standard communication features</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 rounded">
                      <p className="text-green-800 text-sm"><strong>Winner:</strong> Retell AI - Superior delivery optimization</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Warehouse Operations</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-blue-800 mb-2">Retell AI</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Advanced inventory management</li>
                          <li>• Order processing automation</li>
                          <li>• Quality control coordination</li>
                          <li>• Vendor communication optimization</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-800 mb-2">Vapi</h4>
                        <ul className="text-purple-700 text-sm space-y-1">
                          <li>• Basic inventory inquiries</li>
                          <li>• Simple order processing</li>
                          <li>• Limited quality control features</li>
                          <li>• Standard vendor communication</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 rounded">
                      <p className="text-green-800 text-sm"><strong>Winner:</strong> Retell AI - Comprehensive warehouse optimization</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pros and Cons */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros and Cons</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Retell AI</h3>
                    <div className="mb-4">
                      <h4 className="font-bold text-green-800 mb-2">Pros:</h4>
                      <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                        <li>Superior voice quality and natural conversation</li>
                        <li>Excellent logistics-specific integrations</li>
                        <li>Advanced enterprise features and security</li>
                        <li>Comprehensive compliance and audit capabilities</li>
                        <li>Superior customer support and documentation</li>
                        <li>Better ROI for enterprise use cases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">Cons:</h4>
                      <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                        <li>Slightly higher starting price</li>
                        <li>More complex setup for simple use cases</li>
                        <li>Requires more technical expertise</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-purple-900 mb-4">Vapi</h3>
                    <div className="mb-4">
                      <h4 className="font-bold text-green-800 mb-2">Pros:</h4>
                      <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                        <li>Lower starting price</li>
                        <li>Excellent developer experience</li>
                        <li>Easy to get started quickly</li>
                        <li>Good for simple use cases</li>
                        <li>Strong API and documentation</li>
                        <li>Good for startups and SMBs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">Cons:</h4>
                      <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                        <li>Limited logistics-specific features</li>
                        <li>Weaker enterprise capabilities</li>
                        <li>Less advanced voice quality</li>
                        <li>Limited integration options</li>
                        <li>Requires more customization for complex use cases</li>
                        <li>Less comprehensive support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recommendation */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommendation</h2>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Retell AI If:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>You're a mid to large enterprise with complex logistics operations</li>
                    <li>You need advanced integrations with TMS, WMS, and CRM systems</li>
                    <li>You require enterprise-grade security and compliance features</li>
                    <li>You want logistics-specific optimizations and features</li>
                    <li>You need superior voice quality and conversation management</li>
                    <li>You're looking for maximum ROI and operational efficiency</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Vapi If:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>You're a startup or small business with simple use cases</li>
                    <li>You have strong technical expertise and want to customize heavily</li>
                    <li>You need to get started quickly with minimal setup</li>
                    <li>You have basic voice AI requirements</li>
                    <li>You're price-sensitive and don't need enterprise features</li>
                    <li>You're building a custom solution from scratch</li>
                  </ul>

                  <div className="bg-green-100 border-l-4 border-green-500 p-4">
                    <p className="text-green-800 font-semibold">
                      <strong>Overall Winner:</strong> Retell AI is the better choice for logistics companies due to 
                      superior enterprise features, logistics-specific optimizations, and better long-term ROI.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Both Retell AI and Vapi are capable Voice AI platforms, but they serve different market segments. 
                  Retell AI excels in enterprise environments with complex logistics operations, offering superior 
                  integration capabilities, enterprise features, and logistics-specific optimizations.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Vapi is better suited for developers and smaller companies that need a quick start with basic 
                  voice AI capabilities. However, for logistics companies looking to maximize ROI and operational 
                  efficiency, Retell AI is the clear winner.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The choice ultimately depends on your specific needs, technical requirements, and long-term 
                  strategic goals. For most logistics companies, Retell AI's superior enterprise features and 
                  logistics-specific capabilities make it the better investment.
                </p>
              </section>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Choose the Right Platform?</h3>
                <p className="text-xl mb-6 text-blue-100">
                  Get expert guidance on selecting the perfect Voice AI solution for your logistics operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/demo">
                    <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Schedule a Demo
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                      Get Expert Advice
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

export default RetellVsVapiComparison;
