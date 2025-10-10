import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Search, Filter } from 'lucide-react';

const IntegrationsPage: React.FC = () => {
  const integrations = [
    // Loadboards
    { name: '123 Loadboard', category: 'Loadboards', description: 'Access freight opportunities from 123 Loadboard' },
    { name: 'DAT', category: 'Loadboards', description: 'Connect with DAT load board for freight matching' },
    { name: 'Truckstop', category: 'Loadboards', description: 'Integrate with Truckstop load board platform' },
    { name: 'Truckstop RMIS', category: 'Loadboards', description: 'Risk management integration with Truckstop' },
    
    // Communication
    { name: 'Twilio', category: 'Communication', description: 'Voice and SMS communication platform' },
    { name: '8x8', category: 'Communication', description: 'Cloud-based phone system integration' },
    { name: 'RingCentral', category: 'Communication', description: 'Unified communications platform' },
    { name: 'Microsoft Teams', category: 'Communication', description: 'Team collaboration and communication' },
    { name: 'Slack', category: 'Communication', description: 'Team messaging and collaboration' },
    { name: 'Telegram', category: 'Communication', description: 'Secure messaging platform' },
    { name: 'WhatsApp', category: 'Communication', description: 'Business messaging integration' },
    
    // CRM & Sales
    { name: 'Salesforce', category: 'CRM & Sales', description: 'Customer relationship management' },
    { name: 'HubSpot', category: 'CRM & Sales', description: 'Inbound marketing and sales platform' },
    { name: 'Revenova', category: 'CRM & Sales', description: 'Transportation management system' },
    
    // Email & Productivity
    { name: 'Gmail', category: 'Email & Productivity', description: 'Google email integration' },
    { name: 'Outlook', category: 'Email & Productivity', description: 'Microsoft email platform' },
    { name: 'Google Sheets', category: 'Email & Productivity', description: 'Spreadsheet automation and data sync' },
    
    // Fleet Management
    { name: 'Motive', category: 'Fleet Management', description: 'Fleet tracking and management' },
    { name: 'Samsara', category: 'Fleet Management', description: 'IoT fleet management platform' },
    { name: 'MyCarrierPortal', category: 'Fleet Management', description: 'Carrier management system' },
    
    // Carriers & Brokers
    { name: 'JB Hunt', category: 'Carriers & Brokers', description: 'Major carrier integration' },
    { name: 'Schneider', category: 'Carriers & Brokers', description: 'Schneider National integration' },
    { name: 'Triumph', category: 'Carriers & Brokers', description: 'Triumph Business Capital integration' },
    
    // 3PL & Systems
    { name: '3PL Systems', category: '3PL & Systems', description: 'Third-party logistics systems' },
    { name: 'RTS', category: '3PL & Systems', description: 'Real-time tracking system' },
    { name: 'WEX', category: '3PL & Systems', description: 'Fuel card and fleet management' }
  ];

  const categories = ['All', 'Loadboards', 'Communication', 'CRM & Sales', 'Email & Productivity', 'Fleet Management', 'Carriers & Brokers', '3PL & Systems'];

  return (
    <Layout title="Integrations - Voice AI for Logistics" description="Connect VoiceAI with your existing tools and workflows. 500+ integrations available.">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Seamless
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Integrations
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              Connect VoiceAI with your existing tools and workflows. 
              Choose from 500+ pre-built integrations or build custom connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
              <input
                type="text"
                placeholder="Search integrations..."
                className="w-full pl-10 pr-4 py-3 bg-[var(--surface)] border border-[var(--line)] rounded-lg text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent-1)]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-[var(--muted)]" />
              <select className="px-4 py-3 bg-[var(--surface)] border border-[var(--line)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--accent-1)]">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card group hover:border-[var(--accent-1)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {integration.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                  <span className="px-2 py-1 bg-[var(--surface)] text-[var(--accent-1)] text-xs font-medium rounded-full">
                    {integration.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-[var(--text)] mb-2">
                  {integration.name}
                </h3>
                
                <p className="text-[var(--muted)] text-sm mb-4">
                  {integration.description}
                </p>

                <Link 
                  href={`/integrations/${integration.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  className="inline-flex items-center space-x-2 text-[var(--accent-1)] hover:text-[var(--accent-2)] transition-colors group-hover:translate-x-1 transform duration-300 text-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                Need a Custom Integration?
              </h2>
              <p className="text-lg text-[var(--muted)] mb-6">
                Don't see the integration you need? Our team can build custom 
                connections to any system or API. We've helped hundreds of 
                companies integrate with their unique tech stacks.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span className="text-[var(--text)]">Custom API development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span className="text-[var(--text)]">Dedicated integration specialist</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span className="text-[var(--text)]">Testing and quality assurance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span className="text-[var(--text)]">Ongoing support and maintenance</span>
                </li>
              </ul>
              <button className="btn-primary">
                Request Custom Integration
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Integration Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-white/80">Pre-built Integrations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-white/80">Integration Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-white/80">Integration Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">2-5 days</div>
                  <div className="text-white/80">Average Setup Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-xl text-[var(--muted)] mb-8">
            Start integrating VoiceAI with your existing tools today.
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

export default IntegrationsPage;

