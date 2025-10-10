import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, BarChart3, Target, Zap } from 'lucide-react';

const MyCarrierPortalIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Smart Carrier Management',
      description: 'Automatically manage carrier relationships and capacity through voice interactions, handle load assignments and tracking with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Carrier Analytics',
      description: 'Access carrier metrics and performance trends through voice commands, handle capacity analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Load Coordination',
      description: 'Process load assignments and track shipments through voice interactions, handle capacity management and routing automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Carrier Network',
      description: 'Build and manage carrier partnerships through voice-driven interactions, handle carrier onboarding and performance tracking.'
    }
  ];

  const benefits = [
    {
      metric: '50%',
      description: 'Faster carrier coordination through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Carrier utilization with intelligent capacity management'
    },
    {
      metric: 'Enhanced',
      description: 'Carrier relationships through automated communication'
    },
    {
      metric: 'Reduced',
      description: 'Manual carrier coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect MyCarrierPortal",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Carrier Rules",
      description: "Set up capacity management criteria, carrier preferences, and routing parameters"
    },
    {
      step: "3",
      title: "Map Carrier Data",
      description: "Connect carrier profiles, equipment types, and service areas"
    },
    {
      step: "4",
      title: "Activate AI Carrier Management",
      description: "Launch automated voice carrier coordination and management"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with MyCarrierPortal's platform?",
      answer: "Yes. Voice AI connects directly to MyCarrierPortal's API, enabling seamless carrier management, capacity coordination, and real-time logistics data access."
    },
    {
      question: "Can Voice AI handle carrier coordination and load management automatically?",
      answer: "Absolutely. The AI can coordinate carriers, manage capacity, handle load assignments, and automatically update all carrier information in MyCarrierPortal's system through voice interactions."
    },
    {
      question: "How does Voice AI improve carrier management efficiency?",
      answer: "Voice AI eliminates manual coordination, provides intelligent capacity matching, and automatically optimizes carrier strategies for better utilization and customer satisfaction."
    },
    {
      question: "Is the integration secure for carrier and logistics data?",
      answer: "Yes. All carrier and logistics communications are encrypted and the platform meets enterprise security standards, ensuring your carrier data remains protected."
    }
  ];

  return (
    <Layout 
      title="MyCarrierPortal Integration | Voice AI for Carrier Management" 
      description="Connect Voice AI with MyCarrierPortal to automate carrier coordination, handle capacity management, and streamline carrier operations. Built for logistics companies that want intelligent carrier automation and better capacity management."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-4">
                MCP
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Carrier Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                MyCarrierPortal & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with MyCarrierPortal to create an intelligent carrier management 
              system for logistics and freight operations. Transform your carrier coordination with AI-powered capacity management, 
              real-time analytics, and automated carrier operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Free Demo
              </button>
              <button className="btn-secondary">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Integrate Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Why Integrate Voice AI with MyCarrierPortal?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              MyCarrierPortal provides comprehensive carrier management, but adding Voice AI transforms carrier coordination into an 
              intelligent, automated experience that improves capacity utilization and streamlines freight operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Carrier Coordination',
                description: 'Voice AI handles capacity management, load coordination, and carrier assignment through intelligent automation powered by MyCarrierPortal\'s platform.'
              },
              {
                title: 'Intelligent Capacity Management',
                description: 'The AI can match loads with available capacity, handle carrier optimization, and coordinate multi-carrier operations based on equipment and location.'
              },
              {
                title: 'Real-time Carrier Intelligence',
                description: 'Voice AI provides insights into carrier performance, capacity trends, and logistics efficiency while automatically optimizing coordination strategies.'
              },
              {
                title: 'Smart Load Coordination',
                description: 'Carrier managers and dispatchers receive personalized capacity updates and recommendations based on their equipment, routes, and service areas.'
              },
              {
                title: 'Enhanced Carrier Efficiency',
                description: 'Voice AI creates seamless coordination experiences that improve carrier utilization and reduce operational gaps in logistics operations.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--muted)]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Core Features
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Everything you need to transform your carrier management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mb-4">
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

      {/* Results Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Results Carrier Companies See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with MyCarrierPortal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[var(--accent-1)] mb-2">
                  {benefit.metric}
                </div>
                <p className="text-[var(--muted)]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Guide Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Setup Guide
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Get started with Voice AI and MyCarrierPortal integration in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[var(--muted)]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Carrier Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your carrier coordination and capacity management with Voice AI and MyCarrierPortal integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--accent-1)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MyCarrierPortalIntegrationPage;
