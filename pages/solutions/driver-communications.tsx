import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Heart, BarChart3, Zap } from 'lucide-react';

const DriverCommunicationsPage: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: '24/7 Driver Support & Assistance',
      description: 'Instant answers to pay, benefits, and policy questions with route assistance, emergency contact, and multilingual support for diverse driver teams.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Personalized Driver Engagement',
      description: 'Birthday and milestone recognition, performance feedback, wellness check-ins, and career development guidance with personalized messages.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Reduce Driver Turnover',
      description: 'Proactive retention through regular check-ins, issue resolution before problems escalate, and recognition programs that celebrate achievements.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Advanced Driver Features',
      description: 'Predictive retention, personalized communication, multi-channel support, and integration with HR systems for comprehensive driver management.'
    }
  ];

  const benefits = [
    {
      metric: '35%',
      description: 'Reduction in driver turnover'
    },
    {
      metric: '45%',
      description: 'Increase in driver satisfaction scores'
    },
    {
      metric: '24/7',
      description: 'Availability for driver support and assistance'
    },
    {
      metric: '20+',
      description: 'Languages supported for diverse driver teams'
    }
  ];

  const testimonials = [
    {
      quote: "Driver satisfaction scores increased by 45% since implementing AI communications. Drivers appreciate having instant access to information without waiting on hold.",
      author: "David Park",
      role: "Fleet Manager",
      company: "Interstate Logistics"
    },
    {
      quote: "We reduced driver turnover from 65% to 30% in just 6 months. The AI agent makes drivers feel supported and valued.",
      author: "Lisa Martinez",
      role: "HR Director",
      company: "CrossCountry Transport"
    },
    {
      quote: "Our drivers love the 24/7 availability. They can get answers about pay, routes, and policies anytime, even on weekends.",
      author: "Mike Johnson",
      role: "Operations Manager",
      company: "Eagle Fleet"
    }
  ];

  const integrations = [
    { name: 'HR Systems', tools: 'Workday, BambooHR, ADP, Paychex, Kronos' },
    { name: 'Fleet Management', tools: 'Samsara, Motive, KeepTruckin, Geotab, Verizon Connect' },
    { name: 'Communication', tools: 'Slack, Microsoft Teams, WhatsApp, SMS platforms' },
    { name: 'Learning Management', tools: 'Cornerstone, Saba, Docebo, custom training platforms' }
  ];

  const faqs = [
    {
      question: "How does AI driver communication work?",
      answer: "The AI agent calls drivers for check-ins, answers their questions, provides support, and collects feedback. It builds relationships and identifies issues before they become problems."
    },
    {
      question: "Can it handle sensitive topics like pay and benefits?",
      answer: "Yes. The AI is trained to handle confidential information securely and can escalate complex issues to appropriate HR personnel when needed."
    },
    {
      question: "What languages are supported?",
      answer: "We support 20+ languages including Spanish, French, Portuguese, and others commonly spoken by commercial drivers."
    },
    {
      question: "How does it improve driver retention?",
      answer: "By providing 24/7 support, recognizing achievements, addressing concerns proactively, and making drivers feel valued and connected to the company."
    }
  ];

  return (
    <Layout 
      title="AI Driver Communications | Enhance Driver Engagement & Reduce Turnover" 
      description="Improve driver satisfaction with AI voice agents that provide 24/7 support, handle routine inquiries, and deliver personalized communication. Reduce driver turnover by 35% with better engagement."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
              AI Driver Communications
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Enhance Driver Engagement & Reduce Turnover
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Boost driver satisfaction and retention with AI voice agents that provide 24/7 support, 
              handle routine inquiries, and deliver personalized communication that drivers actually want to engage with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Try for Free
              </button>
              <button className="btn-secondary">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Who We Serve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Fleet Managers', 'Driver Recruiters', 'Safety Coordinators', 'HR Departments'].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {role.split(' ').map(word => word[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {role}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              What Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                <p className="text-[var(--muted)] mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-[var(--text)]">
                    {testimonial.author}
                  </div>
                  <div className="text-[var(--muted)] text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Key Features
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Everything you need to enhance driver engagement and reduce turnover.
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
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real improvements from implementing AI driver communications.
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

      {/* Integrations Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Connect with your existing driver management and HR systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {integration.name}
                </h3>
                <p className="text-[var(--muted)]">
                  {integration.tools}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
            Ready to Improve Driver Engagement?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Transform your driver communication and reduce turnover with AI voice agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--accent-1)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Try for Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DriverCommunicationsPage;

