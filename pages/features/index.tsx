import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Headphones, Voicemail, Phone, Route, MapPin, BarChart3, Mic, FileText } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Agent Assist',
      description: 'AI-powered assistance for your customer service agents, providing real-time suggestions and automated responses.',
      href: '/features/agent-assist',
      category: 'Customer Service'
    },
    {
      icon: <Voicemail className="w-8 h-8" />,
      title: 'AI Voicemail',
      description: 'Intelligent voicemail processing that transcribes, categorizes, and routes messages automatically.',
      href: '/features/ai-voicemail',
      category: 'Communication'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Batch Dialing',
      description: 'Efficiently manage high-volume calling campaigns with automated dialing and intelligent call routing.',
      href: '/features/batch-dialing',
      category: 'Automation'
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: 'Call Routing & Queues',
      description: 'Smart call routing that ensures every call reaches the right person at the right time.',
      href: '/features/call-routing-queues',
      category: 'Routing'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Local Presence',
      description: 'Display local phone numbers to increase answer rates and build trust with customers.',
      href: '/features/local-presence',
      category: 'Localization'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'QA & Analytics',
      description: 'Comprehensive quality assurance and analytics to monitor performance and optimize operations.',
      href: '/features/qa-analytics',
      category: 'Analytics'
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Smart IVR',
      description: 'Intelligent Interactive Voice Response systems that understand natural language and route calls efficiently.',
      href: '/features/smart-ivr',
      category: 'Automation'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Transcription & Recording',
      description: 'Advanced speech-to-text technology with high accuracy transcription and secure call recording.',
      href: '/features/transcription-recording',
      category: 'Documentation'
    }
  ];

  const categories = ['All', 'Customer Service', 'Communication', 'Automation', 'Routing', 'Localization', 'Analytics', 'Documentation'];

  return (
    <Layout title="Features - Voice AI for Logistics" description="Explore the powerful features that make VoiceAI the leading voice automation platform for logistics.">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Modern Logistics
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              Discover the comprehensive suite of voice AI features designed to 
              automate, optimize, and scale your logistics operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:border-[var(--accent-1)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-[var(--surface)] text-[var(--accent-1)] text-xs font-medium rounded-full">
                    {feature.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-[var(--text)] mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-[var(--muted)] text-sm mb-4">
                  {feature.description}
                </p>

                <Link 
                  href={feature.href}
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

      {/* Integration Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Connect VoiceAI with your existing tools and workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--surface)] border border-[var(--line)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-1)]">500+</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                Pre-built Integrations
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Connect with popular logistics and business tools out of the box.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--surface)] border border-[var(--line)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-1)]">API</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                Custom API Access
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Build custom integrations with our comprehensive REST API.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--surface)] border border-[var(--line)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--accent-1)]">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                Integration Support
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Get help from our integration specialists whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-[var(--muted)] mb-8">
            See how our features can transform your logistics operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn-primary">
              Schedule Demo
            </Link>
            <Link href="/integrations" className="btn-secondary">
              View Integrations
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesPage;

