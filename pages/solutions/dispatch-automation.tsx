import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, Zap, BarChart3, Users } from 'lucide-react';

const DispatchAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Intelligent Load Assignment',
      description: 'Smart matching based on driver location, capacity, and availability with automated driver notifications and load acceptance through natural conversation.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-Time Communication',
      description: 'Automated driver check-ins, exception management, and proactive customer updates with smart rerouting when delays or issues occur.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Route optimization, capacity utilization, and deadhead reduction with predictive analytics and compliance monitoring.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Scale Operations',
      description: 'Handle 10x more loads without proportional staff increases with 24/7 dispatch coverage and multi-language support.'
    }
  ];

  const benefits = [
    {
      metric: '80%',
      description: 'Reduction in manual dispatch work'
    },
    {
      metric: '40%',
      description: 'Improvement in load assignment accuracy'
    },
    {
      metric: '2 min',
      description: 'Average dispatch response time (down from 15 minutes)'
    },
    {
      metric: '70%',
      description: 'Of routine dispatch tasks now automated'
    }
  ];

  const testimonials = [
    {
      quote: "Our dispatch team was overwhelmed with 200+ calls daily. The AI agent now handles 70% of routine dispatch tasks, allowing our team to focus on complex routing and customer service.",
      author: "Maria Rodriguez",
      role: "Dispatch Manager",
      company: "TransLogistics Inc."
    },
    {
      quote: "Load assignment accuracy improved by 40% since implementing AI dispatch automation. Drivers get their assignments faster and with fewer errors.",
      author: "James Chen",
      role: "Operations Director",
      company: "FleetMax"
    },
    {
      quote: "We reduced dispatch response time from 15 minutes to under 2 minutes. Our drivers love the instant updates and clear communication.",
      author: "Sarah Thompson",
      role: "VP Operations",
      company: "RoadRunner Transport"
    }
  ];

  const integrations = [
    { name: 'Fleet Management', tools: 'Samsara, Motive, KeepTruckin, Geotab, Verizon Connect' },
    { name: 'TMS Systems', tools: 'McLeod, TMW, MercuryGate, Oracle Transportation Management' },
    { name: 'Load Boards', tools: 'DAT, Truckstop, 123Loadboard, Sylectus' },
    { name: 'Communication', tools: 'Slack, Microsoft Teams, WhatsApp, SMS platforms' }
  ];

  const faqs = [
    {
      question: "How does AI dispatch automation work?",
      answer: "The AI agent calls drivers with load assignments, handles check-ins, manages exceptions, and provides real-time updates. It learns your dispatch patterns and improves over time."
    },
    {
      question: "Can it integrate with our existing TMS?",
      answer: "Yes. We integrate with all major TMS systems including McLeod, TMW, MercuryGate, and custom systems. Data flows seamlessly between platforms."
    },
    {
      question: "What about driver acceptance and negotiation?",
      answer: "Drivers can accept, decline, or negotiate loads through natural conversation. The AI understands context and can escalate complex negotiations to human dispatchers."
    },
    {
      question: "How accurate is the load assignment?",
      answer: "Our customers report 40% improvement in assignment accuracy. The AI considers location, equipment, hours of service, preferences, and historical performance."
    }
  ];

  return (
    <Layout 
      title="AI Dispatch Automation | Streamline Load Assignment & Driver Management" 
      description="Automate dispatch operations with AI voice agents. Reduce manual work by 80%, improve load assignment accuracy, and enhance driver communication. Scale your dispatch center without hiring more staff."
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
              AI Dispatch Automation
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Streamline Load Assignment & Driver Management
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Transform your dispatch operations with intelligent AI voice agents that automate load assignment, 
              driver communication, and reduce manual work by 80%. Scale your dispatch center without hiring more staff.
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
            {['Fleet Operators', 'Dispatch Centers', 'Transportation Companies', 'Logistics Coordinators'].map((role, index) => (
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
              Everything you need to automate your dispatch operations.
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
              Real improvements from implementing AI dispatch automation.
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
              Connect with your existing dispatch and fleet management tools.
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
            Ready to Automate Your Dispatch?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Transform your dispatch operations with AI voice agents that work 24/7.
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

export default DispatchAutomationPage;

