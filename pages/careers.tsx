import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Heart, ArrowRight, CheckCircle, Star } from 'lucide-react';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Building',
      description: 'Regular team events, conferences, and professional development opportunities'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Growth Opportunities',
      description: 'Clear career paths, mentorship programs, and learning budgets'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Voice AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of our next-generation voice AI platform for logistics applications.'
    },
    {
      title: 'Product Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Drive go-to-market strategy for our Voice AI solutions in the logistics industry.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help logistics companies maximize value from our Voice AI platform.'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Technical sales role focusing on enterprise logistics customers.'
    }
  ];

  return (
    <Layout 
      title="Careers - Join Our Voice AI Revolution | VoiceAI"
      description="Join our team and help revolutionize logistics with Voice AI technology. Explore open positions and discover why VoiceAI is the best place to grow your career."
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
                Join Our Voice AI Revolution
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Help us transform the logistics industry with cutting-edge Voice AI technology. 
                Be part of a team that's building the future of automated communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  View Open Positions
                </button>
                <button className="btn-secondary-light">
                  Learn About Our Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Why Join VoiceAI?
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                We're building the future of logistics communication, and we need passionate people to help us get there.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] text-center"
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

        {/* Open Positions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Join our growing team and help shape the future of Voice AI in logistics.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)] mb-3">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                      </div>
                      <p className="text-[var(--muted)]">
                        {position.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button className="btn-primary flex items-center space-x-2">
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                  Our Culture & Values
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[var(--text)]">Innovation First</h3>
                      <p className="text-[var(--muted)]">We push boundaries and embrace cutting-edge technology to solve real-world problems.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[var(--text)]">Customer Obsessed</h3>
                      <p className="text-[var(--muted)]">Every decision we make is guided by what's best for our customers and their success.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[var(--text)]">Collaborative Spirit</h3>
                      <p className="text-[var(--muted)]">We believe the best solutions come from diverse teams working together.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[var(--text)]">Growth Mindset</h3>
                      <p className="text-[var(--muted)]">We're always learning, adapting, and improving both as individuals and as a company.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] p-8 rounded-lg text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
                <p className="text-white/90 mb-6">
                  Don't see a position that fits? We're always looking for exceptional talent. 
                  Send us your resume and tell us how you'd like to contribute to our mission.
                </p>
                <button className="btn-secondary-light">
                  Send Your Resume
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Logistics with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our team and help build the future of Voice AI in logistics. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light">
                View All Positions
              </button>
              <button className="btn-secondary-light">
                Contact Our Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;
