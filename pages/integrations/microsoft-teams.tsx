import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, BarChart3, Target, Zap } from 'lucide-react';

const MicrosoftTeamsIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Smart Team Collaboration',
      description: 'Automatically manage team meetings and collaboration through voice interactions, handle project coordination and task assignments with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Team Analytics',
      description: 'Access team performance metrics and collaboration trends through voice commands, handle productivity analysis and optimization with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Meeting Management',
      description: 'Process meetings and coordinate schedules through voice interactions, handle meeting scheduling and follow-up automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Team Hub',
      description: 'Build and manage team workflows through voice-driven interactions, handle project management and team coordination.'
    }
  ];

  const benefits = [
    {
      metric: '55%',
      description: 'Faster team coordination through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Team productivity with intelligent collaboration tools'
    },
    {
      metric: 'Enhanced',
      description: 'Meeting efficiency through automated scheduling and management'
    },
    {
      metric: 'Reduced',
      description: 'Manual team coordination with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Microsoft Teams",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Team Rules",
      description: "Set up collaboration criteria, meeting preferences, and workflow parameters"
    },
    {
      step: "3",
      title: "Map Team Data",
      description: "Connect team members, project information, and collaboration preferences"
    },
    {
      step: "4",
      title: "Activate AI Team Hub",
      description: "Launch automated voice team collaboration and management"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Microsoft Teams' collaboration platform?",
      answer: "Yes. Voice AI connects directly to Microsoft Teams' API, enabling seamless team collaboration, meeting management, and real-time communication automation."
    },
    {
      question: "Can Voice AI handle meeting scheduling and team coordination automatically?",
      answer: "Absolutely. The AI can schedule meetings, coordinate teams, handle project management, and automatically update all team information in Microsoft Teams through voice interactions."
    },
    {
      question: "How does Voice AI improve team collaboration efficiency?",
      answer: "Voice AI eliminates manual coordination, provides intelligent meeting management, and automatically optimizes team workflows for better productivity and collaboration."
    },
    {
      question: "Is the integration secure for team and project data?",
      answer: "Yes. All team communications and project data are encrypted and the platform meets enterprise security standards, ensuring your collaboration data remains protected."
    }
  ];

  return (
    <Layout 
      title="Microsoft Teams Integration | Voice AI for Team Collaboration" 
      description="Connect Voice AI with Microsoft Teams to automate team coordination, handle intelligent meeting management, and streamline collaboration workflows. Built for logistics companies that want intelligent team automation and better project coordination."
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
                MS
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Team Collaboration with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Microsoft Teams & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Microsoft Teams to create an intelligent team collaboration 
              system for logistics and freight operations. Transform your team coordination with AI-powered meeting management, 
              real-time analytics, and automated collaboration workflows.
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
              Why Integrate Voice AI with Microsoft Teams?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Microsoft Teams provides powerful collaboration tools, but adding Voice AI transforms team coordination into an 
              intelligent, automated experience that improves productivity and streamlines project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Meeting Management',
                description: 'Voice AI handles meeting scheduling, coordination, and follow-up through intelligent automation powered by Microsoft Teams\' platform.'
              },
              {
                title: 'Intelligent Team Coordination',
                description: 'The AI can coordinate team activities, manage project workflows, and facilitate multi-team operations based on availability and expertise.'
              },
              {
                title: 'Real-time Collaboration Analytics',
                description: 'Voice AI provides insights into team performance, meeting efficiency, and collaboration trends while automatically optimizing team strategies.'
              },
              {
                title: 'Smart Project Management',
                description: 'Teams receive personalized collaboration tools and project updates based on their roles, responsibilities, and project involvement.'
              },
              {
                title: 'Enhanced Team Productivity',
                description: 'Voice AI creates seamless collaboration experiences that improve meeting efficiency and reduce coordination gaps in logistics operations.'
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
              Everything you need to transform your team collaboration.
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
              Results Teams See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with Microsoft Teams.
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
              Get started with Voice AI and Microsoft Teams integration in minutes.
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
            Ready to Transform Your Team Collaboration?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your team coordination and meeting management with Voice AI and Microsoft Teams integration.
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

export default MicrosoftTeamsIntegrationPage;
