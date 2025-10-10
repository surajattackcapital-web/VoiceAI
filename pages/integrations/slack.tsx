import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, Users, Zap, BarChart3 } from 'lucide-react';

const SlackIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Smart Team Communication',
      description: 'Automatically share logistics updates and status notifications through voice-triggered Slack messages, handle team coordination and task assignments.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Intelligent Channel Management',
      description: 'Route messages to appropriate channels based on context, handle team notifications and escalation protocols automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Workflow Integration',
      description: 'Trigger Slack workflows and notifications through voice commands, handle task creation and team coordination seamlessly.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Team Analytics & Insights',
      description: 'Track team communication patterns through voice analytics, handle performance monitoring and collaboration optimization.'
    }
  ];

  const benefits = [
    {
      metric: '75%',
      description: 'Improvement in team communication efficiency through automation'
    },
    {
      metric: 'Enhanced',
      description: 'Team collaboration with intelligent message routing'
    },
    {
      metric: 'Reduced',
      description: 'Communication gaps with automated status updates'
    },
    {
      metric: 'Improved',
      description: 'Operational visibility with real-time team coordination'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Slack",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Team Rules",
      description: "Set up channel routing, notification preferences, and team workflows"
    },
    {
      step: "3",
      title: "Map Team Data",
      description: "Connect team members, channels, and communication preferences"
    },
    {
      step: "4",
      title: "Activate AI Team Hub",
      description: "Launch automated voice team communication and coordination"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Slack's team communication platform?",
      answer: "Yes. Voice AI connects directly to Slack's API, enabling seamless message posting, channel management, and team coordination automation."
    },
    {
      question: "Can Voice AI handle team notifications and channel management automatically?",
      answer: "Absolutely. The AI can post messages, manage channels, handle team notifications, and coordinate workflows through Slack's platform via voice interactions."
    },
    {
      question: "How does Voice AI improve team communication efficiency?",
      answer: "Voice AI eliminates manual messaging, provides intelligent channel routing, and automatically optimizes team communication strategies for better collaboration and productivity."
    },
    {
      question: "Is the integration secure for team communication data?",
      answer: "Yes. All team communications are encrypted and the platform meets enterprise security standards, ensuring your team data remains protected."
    }
  ];

  return (
    <Layout 
      title="Slack Integration | Voice AI for Team Communication" 
      description="Connect Voice AI with Slack to automate team notifications, handle channel management, and streamline logistics team coordination. Built for freight companies that want intelligent team communication automation and better collaboration."
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
                SL
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Team Communication with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Slack & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Slack's team communication platform to create an intelligent 
              collaboration system for logistics teams. Transform your team coordination with AI-powered messaging, 
              intelligent channel management, and automated workflow integration.
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
              Why Integrate Voice AI with Slack?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Slack provides powerful team communication, but adding Voice AI transforms messaging into an 
              intelligent, automated experience that improves team collaboration and streamlines logistics coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Team Notifications',
                description: 'Voice AI handles delivery updates, status notifications, and team alerts through intelligent automation powered by Slack\'s messaging platform.'
              },
              {
                title: 'Intelligent Channel Management',
                description: 'The AI can route messages to appropriate channels, handle team coordination, and manage communication workflows based on context and urgency.'
              },
              {
                title: 'Real-time Team Coordination',
                description: 'Voice AI provides instant team updates, handles task assignments, and coordinates logistics operations while automatically optimizing team communication.'
              },
              {
                title: 'Smart Workflow Integration',
                description: 'Teams receive personalized notifications and updates based on their roles, responsibilities, and involvement in logistics processes.'
              },
              {
                title: 'Enhanced Team Collaboration',
                description: 'Voice AI creates seamless communication experiences that improve team productivity and reduce coordination gaps in logistics operations.'
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
              Everything you need to transform your team communication.
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
              Results Logistics Teams See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with Slack.
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
              Get started with Voice AI and Slack integration in minutes.
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
            Ready to Transform Your Team Communication?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your team notifications and coordination with Voice AI and Slack integration.
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

export default SlackIntegrationPage;