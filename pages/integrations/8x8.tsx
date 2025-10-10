import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, BarChart3, Target, Zap } from 'lucide-react';

const EightByEightIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Smart Call Management',
      description: 'Automatically handle inbound and outbound calls through voice interactions, manage call routing and escalation with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Communication Analytics',
      description: 'Access call metrics and communication trends through voice commands, handle performance analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Call Routing',
      description: 'Process calls and route to appropriate agents through voice interactions, handle call queuing and distribution automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Contact Center',
      description: 'Build and manage customer service operations through voice-driven interactions, handle agent training and performance tracking.'
    }
  ];

  const benefits = [
    {
      metric: '65%',
      description: 'Faster call resolution through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Customer satisfaction with intelligent call routing'
    },
    {
      metric: 'Enhanced',
      description: 'Agent productivity through automated call management'
    },
    {
      metric: 'Reduced',
      description: 'Call handling time with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect 8x8",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Call Rules",
      description: "Set up call routing criteria, agent preferences, and communication parameters"
    },
    {
      step: "3",
      title: "Map Contact Data",
      description: "Connect customer profiles, agent information, and communication preferences"
    },
    {
      step: "4",
      title: "Activate AI Contact Center",
      description: "Launch automated voice call management and routing"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with 8x8's cloud phone system?",
      answer: "Yes. Voice AI connects directly to 8x8's API, enabling seamless call management, routing, and real-time communication data access."
    },
    {
      question: "Can Voice AI handle call routing and customer service automatically?",
      answer: "Absolutely. The AI can route calls, manage queues, handle customer inquiries, and automatically update all call information in 8x8's system through voice interactions."
    },
    {
      question: "How does Voice AI improve contact center efficiency?",
      answer: "Voice AI eliminates manual call routing, provides intelligent agent matching, and automatically optimizes call management strategies for better customer service and agent productivity."
    },
    {
      question: "Is the integration secure for call and customer data?",
      answer: "Yes. All call and customer communications are encrypted and the platform meets enterprise security standards, ensuring your communication data remains protected."
    }
  ];

  return (
    <Layout 
      title="8x8 Integration | Voice AI for Cloud Phone Systems" 
      description="Connect Voice AI with 8x8 to automate call management, handle intelligent routing, and streamline contact center operations. Built for logistics companies that want intelligent phone system automation and better customer communication."
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
                8x8
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Contact Center with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                8x8 & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with 8x8's cloud phone system to create an intelligent contact center 
              for logistics and freight operations. Transform your customer communication with AI-powered call routing, 
              real-time analytics, and automated contact center management.
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
              Why Integrate Voice AI with 8x8?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              8x8 provides powerful cloud phone systems, but adding Voice AI transforms call management into an 
              intelligent, automated experience that improves customer service and streamlines contact center operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Call Routing',
                description: 'Voice AI handles call routing, queue management, and agent assignment through intelligent automation powered by 8x8\'s cloud phone system.'
              },
              {
                title: 'Intelligent Customer Service',
                description: 'The AI can route calls to qualified agents, handle customer inquiries, and coordinate multi-agent operations based on expertise and availability.'
              },
              {
                title: 'Real-time Call Analytics',
                description: 'Voice AI provides insights into call volume, agent performance, and customer satisfaction while automatically optimizing call management strategies.'
              },
              {
                title: 'Smart Agent Management',
                description: 'Agents and supervisors receive personalized call routing and performance insights based on their skills, workload, and customer service areas.'
              },
              {
                title: 'Enhanced Customer Experience',
                description: 'Voice AI creates seamless call experiences that improve customer satisfaction and reduce wait times in logistics operations.'
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
              Everything you need to transform your contact center operations.
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
              Results Contact Centers See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with 8x8.
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
              Get started with Voice AI and 8x8 integration in minutes.
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
            Ready to Transform Your Contact Center?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your call management and customer service with Voice AI and 8x8 integration.
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

export default EightByEightIntegrationPage;
