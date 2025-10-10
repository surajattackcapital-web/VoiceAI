import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible with voice AI technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional results.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from product to support.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Making logistics more efficient and sustainable worldwide.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Mike Rodriguez',
      role: 'VP of Engineering',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Product',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <Layout title="About Us - Voice AI for Logistics" description="Learn about our mission to revolutionize logistics with voice AI technology.">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              About VoiceAI
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              We're on a mission to revolutionize the logistics industry through 
              innovative voice AI technology that automates operations, improves 
              efficiency, and scales businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[var(--muted)] mb-6">
                Founded in 2020, VoiceAI was born from a simple observation: 
                the logistics industry was drowning in manual processes and 
                inefficient communication systems.
              </p>
              <p className="text-lg text-[var(--muted)] mb-6">
                We set out to change that by creating intelligent voice AI 
                solutions that automate routine tasks, improve customer 
                experiences, and help businesses scale efficiently.
              </p>
              <p className="text-lg text-[var(--muted)]">
                Today, we serve over 500 enterprise clients worldwide, 
                processing millions of calls and helping companies save 
                thousands of hours every month.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Companies Served</span>
                  <span className="font-bold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span>Calls Processed</span>
                  <span className="font-bold">50M+</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Saved</span>
                  <span className="font-bold">10K+ hrs/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Satisfaction</span>
                  <span className="font-bold">98%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[var(--muted)]">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--muted)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-[var(--muted)]">
              The passionate people behind VoiceAI's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--muted)]">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-[var(--muted)] mb-8">
            Whether you're a customer, partner, or potential team member, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

