import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, Building } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    companySize: '',
    useCase: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'Personalized Demo',
      description: 'See VoiceAI in action with your specific use case and requirements.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '30-Minute Session',
      description: 'Quick but comprehensive overview that fits your schedule.'
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Expert Consultation',
      description: 'Get insights from our logistics AI specialists.'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <Layout title="Schedule a Demo - Voice AI for Logistics" description="See VoiceAI in action. Schedule a personalized demo with our experts.">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              See VoiceAI in Action
            </h1>
            <p className="text-xl text-[var(--muted)] mb-8">
              Schedule a personalized demo and discover how VoiceAI can 
              transform your logistics operations.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--text)] mb-8">
              What to Expect
            </h2>
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--muted)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                Demo Agenda
              </h3>
              <ul className="space-y-3 text-[var(--muted)]">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span>VoiceAI platform overview</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span>Live call automation demo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span>Integration capabilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span>Analytics and reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-1)] rounded-full"></div>
                  <span>Q&A and next steps</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card">
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6">
                Schedule Your Demo
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent-1)]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent-1)]"
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent-1)]"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent-1)]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent-1)]"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--accent-1)]"
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO/Founder</option>
                      <option value="cto">CTO</option>
                      <option value="vp-operations">VP Operations</option>
                      <option value="operations-manager">Operations Manager</option>
                      <option value="it-director">IT Director</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--accent-1)]"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-2">
                    Use Case
                  </label>
                  <textarea
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent-1)]"
                    placeholder="Tell us about your current challenges and how we can help..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--accent-1)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--accent-1)]"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Schedule Demo
                </button>

                <p className="text-sm text-[var(--muted)] text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll contact you within 24 hours to confirm your demo.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default DemoPage;

