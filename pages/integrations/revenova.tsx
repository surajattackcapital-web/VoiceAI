import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, BarChart3, Target, Zap } from 'lucide-react';

const RevenovaIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Smart Transportation Management',
      description: 'Automatically manage transportation operations and logistics through voice interactions, handle load coordination and tracking with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Logistics Analytics',
      description: 'Access transportation metrics and performance trends through voice commands, handle logistics analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Load Management',
      description: 'Process load assignments and track shipments through voice interactions, handle transportation coordination and routing automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Logistics Network',
      description: 'Build and manage logistics partnerships through voice-driven interactions, handle carrier onboarding and performance tracking.'
    }
  ];

  const benefits = [
    {
      metric: '55%',
      description: 'Faster logistics coordination through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Transportation efficiency with intelligent load management'
    },
    {
      metric: 'Enhanced',
      description: 'Carrier relationships through automated communication'
    },
    {
      metric: 'Reduced',
      description: 'Manual logistics coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Revenova",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Logistics Rules",
      description: "Set up transportation criteria, carrier preferences, and routing parameters"
    },
    {
      step: "3",
      title: "Map Carrier Data",
      description: "Connect carrier profiles, equipment types, and service areas"
    },
    {
      step: "4",
      title: "Activate AI Logistics Management",
      description: "Launch automated voice transportation coordination and management"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Revenova's transportation management platform?",
      answer: "Yes. Voice AI connects directly to Revenova's API, enabling seamless transportation management, load coordination, and real-time logistics data access."
    },
    {
      question: "Can Voice AI handle load coordination and transportation management automatically?",
      answer: "Absolutely. The AI can coordinate loads, manage transportation, handle carrier communications, and automatically update all logistics information in Revenova's system through voice interactions."
    },
    {
      question: "How does Voice AI improve transportation management efficiency?",
      answer: "Voice AI eliminates manual coordination, provides intelligent load matching, and automatically optimizes transportation strategies for better efficiency and customer satisfaction."
    },
    {
      question: "Is the integration secure for transportation and logistics data?",
      answer: "Yes. All transportation and logistics communications are encrypted and the platform meets enterprise security standards, ensuring your logistics data remains protected."
    }
  ];

  return (
    <Layout 
      title="Revenova Integration | Voice AI for Transportation Management" 
      description="Connect Voice AI with Revenova to automate transportation coordination, handle load management, and streamline logistics operations. Built for freight companies that want intelligent transportation automation and better logistics management."
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
                RV
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Transportation Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Revenova & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Revenova's transportation management platform to create an intelligent logistics 
              system for freight and transportation operations. Transform your logistics coordination with AI-powered load management, 
              real-time analytics, and automated transportation operations.
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
              Why Integrate Voice AI with Revenova?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Revenova provides comprehensive transportation management, but adding Voice AI transforms logistics coordination into an 
              intelligent, automated experience that improves efficiency and streamlines freight operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Transportation Coordination',
                description: 'Voice AI handles load management, carrier coordination, and transportation assignment through intelligent automation powered by Revenova\'s platform.'
              },
              {
                title: 'Intelligent Load Management',
                description: 'The AI can match loads with available capacity, handle transportation optimization, and coordinate multi-carrier operations based on equipment and location.'
              },
              {
                title: 'Real-time Logistics Intelligence',
                description: 'Voice AI provides insights into transportation performance, load trends, and logistics efficiency while automatically optimizing coordination strategies.'
              },
              {
                title: 'Smart Transportation Optimization',
                description: 'Transportation managers and dispatchers receive personalized load recommendations and routing suggestions based on their equipment, routes, and service areas.'
              },
              {
                title: 'Enhanced Logistics Efficiency',
                description: 'Voice AI creates seamless coordination experiences that improve transportation utilization and reduce operational gaps in logistics operations.'
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
              Everything you need to transform your transportation management.
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
              Results Transportation Companies See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with Revenova.
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
              Get started with Voice AI and Revenova integration in minutes.
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
            Ready to Transform Your Transportation Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your transportation coordination and load management with Voice AI and Revenova integration.
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

export default RevenovaIntegrationPage;
