import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, ArrowRight, Users, Globe, FileText, Award } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'End-to-End Encryption',
      description: 'All voice data and communications are encrypted using industry-standard AES-256 encryption'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure Authentication',
      description: 'Multi-factor authentication and OAuth 2.0 for secure access to your VoiceAI account'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Access Controls',
      description: 'Role-based access controls and permission management for team collaboration'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Data Residency',
      description: 'Choose where your data is stored and processed to meet compliance requirements'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Audit Logging',
      description: 'Comprehensive audit trails and logging for all system activities and access'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Compliance Certifications',
      description: 'SOC 2 Type II, HIPAA, GDPR, and other industry-standard compliance certifications'
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified'
    },
    {
      name: 'HIPAA',
      description: 'Healthcare data protection and privacy',
      status: 'Compliant'
    },
    {
      name: 'GDPR',
      description: 'European data protection regulation',
      status: 'Compliant'
    },
    {
      name: 'CCPA',
      description: 'California consumer privacy act',
      status: 'Compliant'
    }
  ];

  return (
    <Layout 
      title="Security - VoiceAI Data Protection & Compliance"
      description="Learn about VoiceAI's security measures, data protection, and compliance certifications. Enterprise-grade security for your Voice AI operations."
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
                Security & Compliance
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Enterprise-grade security and compliance for your Voice AI operations. 
                Your data is protected with industry-leading security measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  Download Security Report
                </button>
                <button className="btn-secondary-light">
                  Contact Security Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Security Features
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Comprehensive security measures to protect your data and operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="text-[var(--accent-1)] mb-4">
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

        {/* Compliance Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Meeting the highest standards for data protection and privacy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[var(--text)]">
                      {standard.name}
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-[var(--muted)]">
                    {standard.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                  Data Protection
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  Your data is protected with industry-leading security measures and 
                  privacy controls designed for enterprise use.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Data encryption at rest and in transit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Regular security audits and penetration testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">24/7 security monitoring and incident response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Data backup and disaster recovery</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] p-8 rounded-lg text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Security First</h3>
                <p className="text-white/90 mb-6">
                  Security is built into every aspect of our platform, from infrastructure 
                  to application design and data handling.
                </p>
                <button className="btn-secondary-light w-full">
                  Download Security Whitepaper
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Security?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our security team is available to answer your questions and provide detailed security information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Contact Security Team</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download Security Report
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SecurityPage;
