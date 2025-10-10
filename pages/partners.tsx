import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Handshake, Users, Award, ArrowRight, CheckCircle, Star, Globe, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnerTypes = [
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'Technology Partners',
      description: 'Integrate with leading logistics and communication platforms',
      benefits: ['API Access', 'Technical Support', 'Co-marketing Opportunities']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Channel Partners',
      description: 'Resell VoiceAI solutions to your customers',
      benefits: ['Revenue Sharing', 'Sales Training', 'Marketing Support']
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Solution Partners',
      description: 'Build custom solutions using our Voice AI platform',
      benefits: ['Development Resources', 'Certification Program', 'Go-to-Market Support']
    }
  ];

  const currentPartners = [
    { name: 'Salesforce', logo: 'SF', category: 'CRM Integration' },
    { name: 'Twilio', logo: 'TW', category: 'Communication Platform' },
    { name: 'HubSpot', logo: 'HS', category: 'Marketing Automation' },
    { name: 'DAT', logo: 'DAT', category: 'Load Board' },
    { name: 'Truckstop', logo: 'TS', category: 'Freight Matching' },
    { name: 'Slack', logo: 'SL', category: 'Team Communication' },
    { name: 'Microsoft Teams', logo: 'MT', category: 'Collaboration' },
    { name: 'RingCentral', logo: 'RC', category: 'Phone System' }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Faster Time to Market',
      description: 'Leverage our proven Voice AI technology to accelerate your product development'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Access our worldwide customer base and expand your market presence'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Revenue Growth',
      description: 'Generate new revenue streams through our partnership programs'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dedicated Support',
      description: 'Get dedicated partner success managers and technical resources'
    }
  ];

  return (
    <Layout 
      title="Partners - Join Our Ecosystem | VoiceAI"
      description="Join the VoiceAI partner ecosystem. Technology, channel, and solution partnerships to help you grow your business with Voice AI solutions."
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
                Join Our Partner Ecosystem
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Partner with VoiceAI to deliver cutting-edge Voice AI solutions to the logistics industry. 
                Together, we can transform how businesses communicate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  Become a Partner
                </button>
                <button className="btn-secondary-light">
                  View Partner Portal
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Choose the partnership model that best fits your business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3 text-center">
                    {type.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-6 text-center">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[var(--accent-1)]" />
                        <span className="text-[var(--text)] text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Join industry leaders who have already partnered with VoiceAI.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] text-center hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {partner.logo}
                  </div>
                  <h3 className="font-semibold text-[var(--text)] text-sm mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-[var(--muted)] text-xs">
                    {partner.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Why Partner with VoiceAI?
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Discover the benefits of joining our growing partner ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
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

        {/* Partnership Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                How to Become a Partner
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Getting started is easy. Follow these simple steps to join our partner program.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Apply', description: 'Submit your partnership application' },
                { step: '2', title: 'Review', description: 'We review your application and capabilities' },
                { step: '3', title: 'Onboard', description: 'Complete our partner onboarding process' },
                { step: '4', title: 'Launch', description: 'Start selling and growing together' }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted)]">
                    {step.description}
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our partner ecosystem and help transform the logistics industry with Voice AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download Partner Kit
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PartnersPage;
