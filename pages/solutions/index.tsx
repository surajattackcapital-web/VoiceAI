import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Users, Truck, FileText, BarChart3 } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Dispatch Automation',
      description: 'Automate dispatch operations with intelligent voice AI that handles driver assignments, route optimization, and real-time updates.',
      href: '/solutions/dispatch-automation',
      features: ['Driver Assignment', 'Route Optimization', 'Real-time Updates', 'Exception Handling']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Driver Communications',
      description: 'Streamline driver check-ins, delivery confirmations, and status updates with automated voice interactions.',
      href: '/solutions/driver-communications',
      features: ['Check-in Automation', 'Delivery Confirmations', 'Status Updates', 'Emergency Alerts']
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Freight Broker Operations',
      description: 'Optimize freight broker workflows with AI-powered call handling, load matching, and customer service automation.',
      href: '/solutions/freight-broker-ops',
      features: ['Load Matching', 'Customer Service', 'Carrier Relations', 'Documentation']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Logistics Operations',
      description: 'Enhance overall logistics operations with comprehensive voice AI solutions for end-to-end process automation.',
      href: '/solutions/logistics-ops',
      features: ['Process Automation', 'Performance Analytics', 'Quality Control', 'Compliance']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'POD/BOL Automation',
      description: 'Automate proof of delivery and bill of lading processes with voice-activated documentation and verification.',
      href: '/solutions/pod-bol-automation',
      features: ['Digital POD', 'BOL Generation', 'Signature Capture', 'Document Verification']
    }
  ];

  return (
    <Layout title="Solutions - Voice AI for Logistics" description="Discover how VoiceAI solutions can transform your logistics operations.">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Voice AI Solutions for
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Every Logistics Challenge
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              From dispatch automation to driver communications, our comprehensive 
              voice AI solutions are designed to streamline every aspect of your 
              logistics operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:border-[var(--accent-1)] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl flex items-center justify-center text-white mb-6">
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-[var(--muted)] mb-6">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--text)] mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-[var(--muted)]">
                        <div className="w-1.5 h-1.5 bg-[var(--accent-1)] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={solution.href}
                  className="inline-flex items-center space-x-2 text-[var(--accent-1)] hover:text-[var(--accent-2)] transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-[var(--muted)] mb-8">
            Let our experts show you how VoiceAI can solve your specific logistics challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn-primary">
              Schedule Demo
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;

