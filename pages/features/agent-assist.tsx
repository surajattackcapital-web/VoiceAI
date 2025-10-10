import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Zap, BarChart3, Headphones } from 'lucide-react';

const AgentAssistPage: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Real-time Information Access',
      description: 'Instantly provide agents with shipment data, account information, system details, and compliance requirements using advanced voice assistant technology.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Guidance & Coaching',
      description: 'Automatically offer real-time coaching, call scripts, resolution steps, and best practices through conversational AI to help agents handle complex scenarios.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Monitoring',
      description: 'Monitor agent performance in real-time and provide immediate feedback, improvement suggestions, and training opportunities with voice agent technology.'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Comprehensive Support Integration',
      description: 'Integrate with existing systems and provide seamless access to information, guidance, and support through advanced voice AI technology.'
    }
  ];

  const useCases = [
    {
      title: 'Intelligent Voice Real-Time Information Access',
      description: 'Build an agent assist system that provides instant access to shipment tracking, account details, rate information, and compliance requirements while maintaining natural conversation flow.'
    },
    {
      title: 'Voice Intelligent Guidance and Coaching',
      description: 'Handle complex scenarios with a system that provides real-time guidance, call scripts, escalation procedures, and best practices based on the specific customer situation.'
    },
    {
      title: 'Voice Performance Support and Feedback',
      description: 'Improve agent performance with a system that provides immediate feedback, improvement suggestions, and training opportunities during live calls.'
    },
    {
      title: 'Voice Complex Process Assistance',
      description: 'Support agents with multi-step processes, emergency situations, and specialized inquiries using a voice assistant that provides step-by-step guidance.'
    }
  ];

  const testimonials = [
    {
      quote: "Our voice assistant agent support system improved first-call resolution by 58%. Agents now have instant access to information and real-time guidance, resulting in better customer experience and faster problem resolution.",
      author: "Jennifer Martinez",
      role: "Call Center Manager",
      company: "Customer-First Logistics"
    },
    {
      quote: "The voice AI coaching feature has transformed our agent training. New agents are productive 3x faster, and our customer satisfaction scores increased by 42% with real-time support and guidance.",
      author: "David Thompson",
      role: "Training Director",
      company: "Regional Freight Services"
    }
  ];

  return (
    <Layout 
      title="AI Voice Assistant Agent Assist for Trucking & Logistics Call Centers" 
      description="Empower your agents with AI voice assistant agent assist for trucking and logistics. Provide real-time support, instant information, and intelligent guidance during customer interactions."
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
              AI Voice Assistant
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Agent Assist
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Empower your agents with real-time support and intelligent guidance during every customer interaction. 
              Transform your call center operations with smart AI that provides instant information, real-time guidance, 
              and intelligent support to agents through natural conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Free Demo
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              The Agent Support Crisis Every Logistics Company Faces
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Trucking and logistics companies face the constant challenge of providing agents with the information 
              and support they need to handle complex customer interactions effectively. When agents lack real-time 
              guidance or instant access to information, customer satisfaction drops and resolution times increase.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl text-white">
              <p className="text-2xl font-bold mb-2">Research shows 71% of logistics agents need better support tools</p>
              <p className="text-white/90">That's exactly where our intelligent voice agent assist system changes the game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Features That Enhance Agent Performance
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Everything you need to empower your agents and improve customer experience.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Use Cases That Empower Agents
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real-world scenarios where our agent assist system makes the difference.
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  {useCase.title}
                </h3>
                <p className="text-[var(--muted)]">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Logistics companies use our platform to build voice agent assist systems that empower agents and improve customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Configure Voice Support Protocols",
                description: "Set up information access, guidance procedures, and coaching protocols specific to your logistics operations."
              },
              {
                step: "2",
                title: "Set Up Voice Information Integration",
                description: "Connect with existing systems, databases, and information sources to enable real-time data access."
              },
              {
                step: "3",
                title: "Design Voice Coaching Workflows",
                description: "Create coaching protocols, performance feedback systems, and training opportunities."
              },
              {
                step: "4",
                title: "Launch & Monitor Voice Agent Assist",
                description: "Deploy your voice assistant agent support system and continuously monitor performance."
              }
            ].map((step, index) => (
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

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--bg-2)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real results from real logistics companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How does voice agent assist improve logistics call center performance?",
                answer: "Voice agent assist significantly improves logistics call center performance by providing real-time information access, intelligent guidance, and performance coaching through natural conversation. These voice agents ensure every agent has the support they need to deliver excellent customer service while improving resolution times and satisfaction."
              },
              {
                question: "Can voice agent assist handle different types of logistics inquiries?",
                answer: "Yes, voice agent assist systems can manage different inquiry types including shipment tracking, emergency dispatch, customer service, and carrier communications by providing specialized guidance and information access through conversational AI and industry-specific protocols."
              },
              {
                question: "What's the ROI of implementing voice agent assist for logistics companies?",
                answer: "Most logistics companies see immediate ROI through improved agent performance, increased customer satisfaction, and reduced training time with voice AI technology. The typical investment ranges from $300–800 per month, compared to $70,000+ annually for additional training and support staff."
              }
            ].map((faq, index) => (
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
            Ready to Empower Your Agents?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stop leaving agents without proper support. Start providing real-time assistance with voice assistant agent support that works 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--accent-1)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Your Free Demo
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

export default AgentAssistPage;

