import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      description: 'Get in touch via email for general inquiries',
      contact: 'hello@voiceai.com',
      action: 'Send Email'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      description: 'Speak directly with our sales team',
      contact: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available 24/7',
      action: 'Start Chat'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 400',
      location: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567'
    },
    {
      city: 'New York',
      address: '456 Broadway, Floor 12',
      location: 'New York, NY 10013',
      phone: '+1 (555) 234-5678'
    },
    {
      city: 'London',
      address: '789 Canary Wharf, Level 15',
      location: 'London E14 5AB, UK',
      phone: '+44 20 7123 4567'
    }
  ];

  return (
    <Layout 
      title="Contact Us - Get in Touch | VoiceAI"
      description="Contact VoiceAI for sales inquiries, support, or partnerships. Get in touch with our team to learn how Voice AI can transform your logistics operations."
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
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Ready to transform your logistics operations with Voice AI? 
                Our team is here to help you get started.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                How Can We Help?
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Choose the best way to reach us based on your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--line)] text-center hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {method.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-4">
                    {method.description}
                  </p>
                  <p className="text-[var(--text)] font-medium mb-6">
                    {method.contact}
                  </p>
                  <button className="btn-primary w-full">
                    {method.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                  Send Us a Message
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  Have a specific question or want to discuss your logistics needs? 
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--surface)] text-[var(--text)]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--surface)] text-[var(--text)]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--surface)] text-[var(--text)]"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--surface)] text-[var(--text)]"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      How can we help? *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--surface)] text-[var(--text)]"
                    >
                      <option value="">Select an option</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="demo">Request Demo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--surface)] text-[var(--text)]"
                      placeholder="Tell us about your logistics challenges and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-6">
                    Our Offices
                  </h3>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-[var(--accent-1)] mt-1" />
                        <div>
                          <h4 className="font-semibold text-[var(--text)] mb-1">
                            {office.city}
                          </h4>
                          <p className="text-[var(--muted)] mb-1">
                            {office.address}
                          </p>
                          <p className="text-[var(--muted)] mb-2">
                            {office.location}
                          </p>
                          <p className="text-[var(--text)] font-medium">
                            {office.phone}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Response Times</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Sales inquiries: Within 2 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Support requests: Within 4 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>General questions: Within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[var(--muted)]">Monday - Friday</span>
                      <span className="text-[var(--text)]">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--muted)]">Saturday</span>
                      <span className="text-[var(--text)]">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--muted)]">Sunday</span>
                      <span className="text-[var(--text)]">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of logistics companies already using Voice AI to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light">
                Schedule a Demo
              </button>
              <button className="btn-secondary-light">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
