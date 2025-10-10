import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Clock, Shield, Users, BarChart3, ArrowRight, Zap, Globe, Truck } from 'lucide-react';

const PodBolAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Automated POD Generation',
      description: 'Generate proof of delivery documents automatically through voice commands and digital signatures'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'BOL Processing',
      description: 'Automated bill of lading creation, validation, and processing for seamless documentation'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Updates',
      description: 'Instant delivery confirmations and status updates sent to all stakeholders'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Digital Signatures',
      description: 'Secure digital signature capture and verification for legal compliance'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Stakeholder Notifications',
      description: 'Automated notifications to shippers, receivers, and brokers upon delivery completion'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Compliance Tracking',
      description: 'Automated compliance monitoring and audit trail generation for regulatory requirements'
    }
  ];

  const benefits = [
    {
      metric: '95%',
      description: 'Reduction in paperwork errors'
    },
    {
      metric: '80%',
      description: 'Faster document processing'
    },
    {
      metric: '100%',
      description: 'Digital compliance tracking'
    },
    {
      metric: '60%',
      description: 'Reduction in administrative costs'
    }
  ];

  const useCases = [
    {
      title: 'Delivery Confirmation',
      description: 'Automated POD generation with digital signatures and photo capture',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'BOL Management',
      description: 'Automated bill of lading creation and processing throughout the shipment lifecycle',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Exception Handling',
      description: 'Automated handling of delivery exceptions and documentation requirements',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Audit Trail',
      description: 'Complete digital audit trail for compliance and dispute resolution',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="POD/BOL Automation - Voice AI Solution | VoiceAI"
      description="Automate proof of delivery and bill of lading processes with Voice AI. Streamline documentation, reduce errors, and ensure compliance with automated POD/BOL management."
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
                POD/BOL Automation
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Eliminate paperwork and streamline documentation with automated 
                Proof of Delivery and Bill of Lading processes powered by Voice AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  Request Demo
                </button>
                <button className="btn-secondary-light">
                  View Case Study
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Documentation Excellence
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Transform your documentation process with measurable improvements.
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
                  <div className="text-4xl md:text-5xl font-bold text-[var(--accent-1)] mb-2">
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

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Automation Features
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Comprehensive POD/BOL automation capabilities for seamless documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
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

        {/* Use Cases Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Documentation Use Cases
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                How logistics companies automate their POD/BOL processes with Voice AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-[var(--accent-1)] mt-1">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Automated Process Flow
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                See how Voice AI streamlines your entire POD/BOL workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Delivery Arrival', description: 'Driver arrives and initiates delivery process' },
                { step: '2', title: 'Voice Confirmation', description: 'Voice AI captures delivery details and recipient information' },
                { step: '3', title: 'Digital Signature', description: 'Recipient provides digital signature for POD' },
                { step: '4', title: 'Auto Processing', description: 'System automatically generates and distributes documents' }
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

        {/* Integration Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                  System Integration
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  VoiceAI integrates with your existing documentation systems and 
                  compliance platforms for seamless workflow automation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">TMS Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Document Management Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Compliance Platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-1)]" />
                    <span className="text-[var(--text)]">Digital Signature Services</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] p-8 rounded-lg text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Automate?</h3>
                <p className="text-white/90 mb-6">
                  Join logistics companies who have eliminated paperwork and streamlined their documentation processes.
                </p>
                <button className="btn-secondary-light w-full">
                  Schedule Demo
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Eliminate Paperwork Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Transform your documentation process with automated POD/BOL management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                Download Solution Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PodBolAutomationPage;
