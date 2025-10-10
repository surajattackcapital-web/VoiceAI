import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star, Users, Zap, Shield, Globe, Clock, BarChart3, Settings, Mic, Phone, MessageSquare, Award, Mail, MapPin, Truck, Package, Warehouse, Car } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Call Routing',
      description: 'Advanced AI routing ensures calls reach the right department instantly, reducing wait times and improving customer satisfaction.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Communicate with drivers, customers, and partners in 25+ languages, breaking down language barriers in global operations.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Real-Time Integration',
      description: 'Seamlessly integrate with your existing TMS, WMS, and ERP systems for unified data management and streamlined operations.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance & Security',
      description: 'Enterprise-grade security with SOC 2, HIPAA, and GDPR compliance, ensuring your logistics data remains protected.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics dashboard providing insights into call performance, customer satisfaction, and efficiency.'
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Voice Cloning',
      description: 'Create custom voice profiles that match your brand identity. Professional voice options or clone your own voice.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Logistics Companies' },
    { number: '2M+', label: 'Automated Calls Monthly' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '40+', label: 'Integrations' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Director, Global Freight Solutions',
      content: 'VoiceAI reduced our dispatch response time by 65% and improved driver satisfaction significantly.',
      rating: 5,
      results: '65% faster dispatch response, 40% improvement in driver satisfaction, $1.2M annual savings'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Express Logistics',
      content: 'The AI voice agents handle 80% of our customer inquiries without human intervention, saving us $2M annually.',
      rating: 5,
      results: '80% automation rate, $2M annual cost savings, 90% customer satisfaction score'
    },
    {
      name: 'Elena Rodriguez',
      role: 'VP International Operations, TransGlobal',
      content: 'VoiceAI\'s multilingual support helped us expand into 15 new markets seamlessly.',
      rating: 5,
      results: '15 new markets, 300% increase in international call volume, 50% faster market entry'
    },
    {
      name: 'David Park',
      role: 'CEO, Metro Freight Services',
      content: 'We\'ve seen a 45% increase in load booking efficiency since implementing VoiceAI\'s freight automation.',
      rating: 5,
      results: '45% booking efficiency improvement, 200% increase in daily call capacity, 30% revenue growth'
    }
  ];

  return (
    <Layout title="VoiceAI - Revolutionary Voice AI Solutions for Logistics & Transportation">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] mb-6">
                Revolutionary Voice AI Solutions for
                <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                  Logistics & Transportation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-4xl mx-auto">
                Transform your logistics operations with VoiceAI's cutting-edge voice automation technology. 
                Automate calls, improve efficiency, and scale your freight, dispatch, and supply chain operations 
                with industry-leading AI voice agents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
                <span>Contact Sales</span>
              </button>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent-1)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Powerful Features for Modern Logistics
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Everything you need to automate and optimize your logistics operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--muted)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-[var(--muted)]">
              See what our customers are saying about VoiceAI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[var(--muted)] mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="bg-[var(--bg-2)] p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-[var(--accent-1)]">
                    Results: {testimonial.results}
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-[var(--text)]">
                    {testimonial.name}
                  </div>
                  <div className="text-[var(--muted)] text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Tailored voice AI solutions for every aspect of logistics operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                Freight Forwarding
              </h3>
              <p className="text-[var(--muted)]">
                Automate booking confirmations, shipment tracking, and customer service with AI voice agents.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                Last-Mile Delivery
              </h3>
              <p className="text-[var(--muted)]">
                Optimize last-mile operations with voice AI that coordinates with drivers and customers.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Warehouse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                Warehouse Operations
              </h3>
              <p className="text-[var(--muted)]">
                Streamline warehouse communications with AI agents for inventory and order management.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                Fleet Management
              </h3>
              <p className="text-[var(--muted)]">
                Enhance fleet operations with voice AI for driver support and real-time monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Connect VoiceAI with your existing logistics technology stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">TMS Systems</h3>
              <div className="space-y-2 text-[var(--muted)]">
                <p>Oracle Transportation</p>
                <p>SAP Transportation</p>
                <p>Manhattan Associates</p>
                <p>JDA Transportation</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Fleet Management</h3>
              <div className="space-y-2 text-[var(--muted)]">
                <p>Samsara</p>
                <p>Geotab</p>
                <p>Verizon Connect</p>
                <p>Fleet Complete</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Load Boards</h3>
              <div className="space-y-2 text-[var(--muted)]">
                <p>DAT Load Board</p>
                <p>Truckstop</p>
                <p>123Loadboard</p>
                <p>Sylectus</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">CRM Systems</h3>
              <div className="space-y-2 text-[var(--muted)]">
                <p>Salesforce</p>
                <p>HubSpot</p>
                <p>Pipedrive</p>
                <p>Zoho CRM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Get answers to common questions about VoiceAI for logistics.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                How quickly can I get started with VoiceAI?
              </h3>
              <p className="text-[var(--muted)]">
                Most customers are up and running within 15 minutes. Our guided setup wizard makes it easy to configure your first voice AI agent.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                Does VoiceAI work with my existing systems?
              </h3>
              <p className="text-[var(--muted)]">
                Yes! VoiceAI integrates with 40+ popular logistics software platforms including TMS, CRM, and fleet management systems.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                What languages does VoiceAI support?
              </h3>
              <p className="text-[var(--muted)]">
                VoiceAI supports 25+ languages including English, Spanish, French, German, Mandarin, Japanese, and many more.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                Is VoiceAI secure and compliant?
              </h3>
              <p className="text-[var(--muted)]">
                Absolutely. VoiceAI is SOC 2, HIPAA, and GDPR compliant with enterprise-grade security and encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Logistics Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of logistics companies already using VoiceAI to automate their voice communications and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--accent-1)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

