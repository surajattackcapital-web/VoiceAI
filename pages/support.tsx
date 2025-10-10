import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Phone, Mail, Clock, CheckCircle, ArrowRight, Users, BookOpen, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      action: 'Start Chat'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM PST',
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us your questions and get detailed responses',
      availability: 'Response within 4 hours',
      action: 'Send Email'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      questions: [
        'How do I set up my first voice AI agent?',
        'What are the system requirements?',
        'How long does it take to get started?'
      ]
    },
    {
      title: 'Technical Issues',
      questions: [
        'Why is my voice AI agent not responding?',
        'How do I troubleshoot call quality issues?',
        'What should I do if integration fails?'
      ]
    },
    {
      title: 'Billing & Plans',
      questions: [
        'How does billing work?',
        'Can I change my plan anytime?',
        'What payment methods do you accept?'
      ]
    }
  ];

  return (
    <Layout 
      title="Support - VoiceAI Help Center"
      description="Get help with VoiceAI. 24/7 support, documentation, FAQs, and technical assistance for implementing Voice AI in your logistics operations."
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed with VoiceAI. Get support, 
                find answers, and connect with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  Contact Support
                </button>
                <button className="btn-secondary-light">
                  Browse FAQs
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Options Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                How Can We Help?
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Choose the support option that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors text-center"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {option.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-4">
                    {option.description}
                  </p>
                  <p className="text-sm text-[var(--accent-1)] font-medium mb-6">
                    {option.availability}
                  </p>
                  <button className="btn-primary w-full">
                    {option.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Find quick answers to common questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.questions.map((question, qIndex) => (
                      <div key={qIndex} className="flex items-start space-x-3">
                        <HelpCircle className="w-4 h-4 text-[var(--accent-1)] mt-1" />
                        <p className="text-[var(--muted)] text-sm">
                          {question}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Additional Resources
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Explore our comprehensive resource library.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: 'Documentation',
                  description: 'Complete guides and API references',
                  action: 'View Docs'
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Community Forum',
                  description: 'Connect with other VoiceAI users',
                  action: 'Join Community'
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Status Page',
                  description: 'Check system status and uptime',
                  action: 'View Status'
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] text-center hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-6">
                    {resource.description}
                  </p>
                  <button className="btn-primary w-full">
                    {resource.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--line)]"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--bg)] text-[var(--text)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--bg)] text-[var(--text)]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--bg)] text-[var(--text)]"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--bg)] text-[var(--text)]"
                    placeholder="Please describe your issue or question in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies using VoiceAI to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SupportPage;
