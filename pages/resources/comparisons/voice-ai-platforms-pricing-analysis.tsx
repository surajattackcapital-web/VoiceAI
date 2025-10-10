import React from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, CheckCircle, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const VoiceAIPlatformsPricingAnalysis: React.FC = () => {
  return (
    <Layout 
      title="Voice AI Platforms Pricing Analysis | VoiceAI Comparison"
      description="Comprehensive pricing analysis of leading Voice AI platforms. Compare costs, features, and ROI to make the best decision for your logistics operations."
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
                Voice AI Platforms Pricing Analysis
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive pricing analysis of leading Voice AI platforms. Compare costs, features, 
                and ROI to make the best decision for your logistics operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-blue-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Published: January 2025</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <User className="w-5 h-5 mr-2" />
                  <span>Category: Pricing Analysis</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>8 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Analysis Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <h2>Executive Summary</h2>
              <p>
                This comprehensive pricing analysis compares the top Voice AI platforms in the market, 
                focusing on cost structures, feature sets, and return on investment for logistics companies. 
                Our analysis covers pricing models, hidden costs, and total cost of ownership considerations.
              </p>

              <h2>Platform Comparison Overview</h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Platform</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Starting Price</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Pricing Model</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Free Trial</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">VoiceAI</td>
                      <td className="border border-gray-300 px-4 py-2">$0.02/min</td>
                      <td className="border border-gray-300 px-4 py-2">Pay-per-use</td>
                      <td className="border border-gray-300 px-4 py-2">14 days</td>
                      <td className="border border-gray-300 px-4 py-2">Custom</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Vapi</td>
                      <td className="border border-gray-300 px-4 py-2">$0.03/min</td>
                      <td className="border border-gray-300 px-4 py-2">Pay-per-use</td>
                      <td className="border border-gray-300 px-4 py-2">7 days</td>
                      <td className="border border-gray-300 px-4 py-2">Custom</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Retell AI</td>
                      <td className="border border-gray-300 px-4 py-2">$0.025/min</td>
                      <td className="border border-gray-300 px-4 py-2">Pay-per-use</td>
                      <td className="border border-gray-300 px-4 py-2">14 days</td>
                      <td className="border border-gray-300 px-4 py-2">Custom</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ElevenLabs</td>
                      <td className="border border-gray-300 px-4 py-2">$0.18/min</td>
                      <td className="border border-gray-300 px-4 py-2">Subscription + Usage</td>
                      <td className="border border-gray-300 px-4 py-2">Free tier</td>
                      <td className="border border-gray-300 px-4 py-2">Custom</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Murf AI</td>
                      <td className="border border-gray-300 px-4 py-2">$19/month</td>
                      <td className="border border-gray-300 px-4 py-2">Subscription</td>
                      <td className="border border-gray-300 px-4 py-2">10 min free</td>
                      <td className="border border-gray-300 px-4 py-2">$99/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Detailed Pricing Analysis</h2>
              
              <h3>VoiceAI - Best Value for Logistics</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h4 className="font-bold text-lg mb-2">Pricing Structure</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Pay-per-use:</strong> $0.02 per minute of conversation</li>
                  <li><strong>Volume discounts:</strong> Up to 40% off for high-volume users</li>
                  <li><strong>No setup fees:</strong> Zero upfront costs</li>
                  <li><strong>No monthly minimums:</strong> Pay only for what you use</li>
                </ul>
              </div>

              <h3>Vapi - Premium Pricing</h3>
              <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-6">
                <h4 className="font-bold text-lg mb-2">Pricing Structure</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Pay-per-use:</strong> $0.03 per minute of conversation</li>
                  <li><strong>Setup fees:</strong> $500-$2,000 for enterprise</li>
                  <li><strong>Monthly minimums:</strong> $1,000 for enterprise plans</li>
                  <li><strong>Additional costs:</strong> Integration and training fees</li>
                </ul>
              </div>

              <h3>Retell AI - Mid-Market Focus</h3>
              <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-6">
                <h4 className="font-bold text-lg mb-2">Pricing Structure</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Pay-per-use:</strong> $0.025 per minute of conversation</li>
                  <li><strong>Setup fees:</strong> $300-$1,500 for enterprise</li>
                  <li><strong>Monthly minimums:</strong> $500 for enterprise plans</li>
                  <li><strong>Integration costs:</strong> $200-$800 per integration</li>
                </ul>
              </div>

              <h2>Total Cost of Ownership (TCO) Analysis</h2>
              <p>
                For a logistics company processing 10,000 calls per month (average 3 minutes per call):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Monthly Costs (10K calls)</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>VoiceAI:</span>
                      <span className="font-semibold text-green-600">$600</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vapi:</span>
                      <span className="font-semibold">$900</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Retell AI:</span>
                      <span className="font-semibold">$750</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ElevenLabs:</span>
                      <span className="font-semibold">$5,400</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Murf AI:</span>
                      <span className="font-semibold">$99</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Annual TCO (Including Setup)</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>VoiceAI:</span>
                      <span className="font-semibold text-green-600">$7,200</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vapi:</span>
                      <span className="font-semibold">$12,800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Retell AI:</span>
                      <span className="font-semibold">$10,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ElevenLabs:</span>
                      <span className="font-semibold">$64,800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Murf AI:</span>
                      <span className="font-semibold">$1,188</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Feature Comparison</h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">VoiceAI</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Vapi</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Retell AI</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">ElevenLabs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Logistics Integrations</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ 40+</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ 15+</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ 20+</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">❌ Limited</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Multi-language Support</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ 25+</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ 20+</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ 15+</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ 30+</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Real-time Analytics</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Advanced</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Basic</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Basic</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">❌ No</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Custom Voice Cloning</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Included</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Extra Cost</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Extra Cost</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Included</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">24/7 Support</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Included</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Enterprise</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">✅ Enterprise</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">❌ Business Hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>ROI Analysis</h2>
              <p>
                Based on typical logistics operations, here's the ROI comparison for a company processing 
                10,000 calls per month:
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
                <h3 className="font-bold text-lg mb-2">VoiceAI ROI (Best Value)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Annual Cost:</strong> $7,200</li>
                  <li><strong>Cost Savings:</strong> $45,000 (reduced agent costs)</li>
                  <li><strong>ROI:</strong> 525% in first year</li>
                  <li><strong>Payback Period:</strong> 2.3 months</li>
                </ul>
              </div>

              <h2>Hidden Costs to Consider</h2>
              <ul>
                <li><strong>Integration Costs:</strong> Custom development and API integration fees</li>
                <li><strong>Training Costs:</strong> Staff training and onboarding expenses</li>
                <li><strong>Data Migration:</strong> Moving existing data and workflows</li>
                <li><strong>Compliance:</strong> Ensuring regulatory compliance and security</li>
                <li><strong>Maintenance:</strong> Ongoing platform maintenance and updates</li>
              </ul>

              <h2>Recommendations</h2>
              <h3>For Small to Medium Logistics Companies</h3>
              <p>
                <strong>VoiceAI</strong> offers the best value with its low per-minute pricing, 
                comprehensive logistics integrations, and no setup fees. The pay-per-use model 
                allows for predictable scaling as your business grows.
              </p>

              <h3>For Large Enterprise Operations</h3>
              <p>
                <strong>VoiceAI</strong> remains the top choice due to its enterprise features, 
                volume discounts, and dedicated support. The platform's logistics-specific 
                features provide significant competitive advantages.
              </p>

              <h3>For Budget-Conscious Startups</h3>
              <p>
                <strong>Murf AI</strong> offers the lowest entry cost, but limited functionality 
                may require upgrading as your needs grow. Consider starting with VoiceAI's 
                free trial for better long-term value.
              </p>

              <h2>Conclusion</h2>
              <p>
                While pricing is an important factor, the total cost of ownership and ROI should 
                be the primary considerations when choosing a Voice AI platform. VoiceAI offers 
                the best combination of competitive pricing, comprehensive features, and logistics-specific 
                capabilities, making it the recommended choice for most logistics companies.
              </p>
              <p>
                The platform's pay-per-use model, extensive integrations, and proven ROI make it 
                the most cost-effective solution for transforming logistics operations with Voice AI technology.
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
                Ready to Get Started with VoiceAI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the best value in Voice AI with our 14-day free trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Get Custom Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VoiceAIPlatformsPricingAnalysis;
