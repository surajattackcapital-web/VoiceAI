import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileSpreadsheet, BarChart3, Target, Zap } from 'lucide-react';

const GoogleSheetsIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <FileSpreadsheet className="w-6 h-6" />,
      title: 'Smart Data Management',
      description: 'Automatically manage spreadsheet data and calculations through voice interactions, handle data entry and analysis with AI-powered recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Data Analytics',
      description: 'Access spreadsheet metrics and data trends through voice commands, handle data analysis and reporting with AI-powered insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Data Workflows',
      description: 'Process data and generate reports through voice interactions, handle data synchronization and updates automatically.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Data Hub',
      description: 'Build and manage data dashboards through voice-driven interactions, handle data visualization and business intelligence.'
    }
  ];

  const benefits = [
    {
      metric: '70%',
      description: 'Faster data processing through AI-powered automation'
    },
    {
      metric: 'Improved',
      description: 'Data accuracy with intelligent validation and entry'
    },
    {
      metric: 'Enhanced',
      description: 'Business intelligence through automated reporting'
    },
    {
      metric: 'Reduced',
      description: 'Manual data management with voice automation'
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Google Sheets",
      description: "Authorize Voice AI with secure API credentials"
    },
    {
      step: "2",
      title: "Configure Data Rules",
      description: "Set up data validation criteria, reporting preferences, and analysis parameters"
    },
    {
      step: "3",
      title: "Map Data Sources",
      description: "Connect data sources, spreadsheet templates, and reporting preferences"
    },
    {
      step: "4",
      title: "Activate AI Data Hub",
      description: "Launch automated voice data management and analytics"
    }
  ];

  const faqs = [
    {
      question: "Does Voice AI integrate natively with Google Sheets' platform?",
      answer: "Yes. Voice AI connects directly to Google Sheets' API, enabling seamless data management, analysis, and real-time spreadsheet automation."
    },
    {
      question: "Can Voice AI handle data entry and spreadsheet management automatically?",
      answer: "Absolutely. The AI can enter data, perform calculations, generate reports, and automatically update all spreadsheet information through voice interactions."
    },
    {
      question: "How does Voice AI improve spreadsheet efficiency?",
      answer: "Voice AI eliminates manual data entry, provides intelligent data analysis, and automatically optimizes spreadsheet workflows for better business intelligence and productivity."
    },
    {
      question: "Is the integration secure for business data?",
      answer: "Yes. All spreadsheet and business data are encrypted and the platform meets enterprise security standards, ensuring your data remains protected."
    }
  ];

  return (
    <Layout 
      title="Google Sheets Integration | Voice AI for Data Management" 
      description="Connect Voice AI with Google Sheets to automate data entry, handle intelligent analysis, and streamline business reporting. Built for logistics companies that want intelligent spreadsheet automation and better data management."
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
                GS
              </div>
              <div className="text-4xl font-bold text-[var(--text)]">+</div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-3)] to-[var(--accent-4)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold ml-4">
                VAI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              Intelligent Data Management with
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Google Sheets & Voice AI
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Voice AI integrates seamlessly with Google Sheets to create an intelligent data management 
              system for logistics and freight operations. Transform your business reporting with AI-powered data entry, 
              real-time analytics, and automated spreadsheet workflows.
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
              Why Integrate Voice AI with Google Sheets?
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Google Sheets provides powerful spreadsheet management, but adding Voice AI transforms data handling into an 
              intelligent, automated experience that improves accuracy and streamlines business reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Data Entry',
                description: 'Voice AI handles data input, calculations, and spreadsheet updates through intelligent automation powered by Google Sheets\' platform.'
              },
              {
                title: 'Intelligent Data Analysis',
                description: 'The AI can analyze data, generate insights, and create reports based on business metrics and performance indicators.'
              },
              {
                title: 'Real-time Business Intelligence',
                description: 'Voice AI provides insights into data trends, performance metrics, and business analytics while automatically optimizing reporting strategies.'
              },
              {
                title: 'Smart Reporting Automation',
                description: 'Teams receive personalized data insights and automated reports based on their roles, responsibilities, and business requirements.'
              },
              {
                title: 'Enhanced Data Productivity',
                description: 'Voice AI creates seamless data experiences that improve reporting speed and reduce manual data management in logistics operations.'
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
              Everything you need to transform your data management.
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
              Results Businesses See
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from integrating Voice AI with Google Sheets.
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
              Get started with Voice AI and Google Sheets integration in minutes.
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
            Ready to Transform Your Data Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your data entry and business reporting with Voice AI and Google Sheets integration.
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

export default GoogleSheetsIntegrationPage;
