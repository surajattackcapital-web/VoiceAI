import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, Zap, Target, Users } from 'lucide-react';

const BatchDialingPage: React.FC = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Real-time Campaign Management',
      description: 'Instantly launch, monitor, and optimize batch dialing campaigns using advanced voice AI analytics to track response rates, conversion metrics, and campaign performance across different contact segments.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Intelligent Contact Targeting',
      description: 'Automatically segment and target contacts based on carrier capacity, shipper requirements, geographic location, and historical interaction data through conversational AI.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Compliance Automation',
      description: 'Handle TCPA compliance, do-not-call lists, and industry regulations automatically with built-in voice agent protocols and automated opt-out management through natural conversation.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-campaign Coordination',
      description: 'Manage multiple simultaneous campaigns across different markets, time zones, and contact types with predefined voice assistant workflows and automated scheduling systems.'
    }
  ];

  const useCases = [
    {
      title: 'Intelligent Voice Carrier Recruitment',
      description: 'Build a batch dialing system that automatically contacts available carriers, matches capacity to loads, and negotiates rates based on market conditions and historical data through natural conversation.'
    },
    {
      title: 'Voice Automated Load Notifications',
      description: 'Streamline load distribution with a voice agent that instantly notifies qualified carriers about new opportunities, provides load details and requirements, and tracks response rates automatically.'
    },
    {
      title: 'Voice Customer Service Follow-ups',
      description: 'Maintain customer relationships with automated voice follow-ups for delivery confirmations, payment reminders, and service updates while providing personalized attention through conversational AI.'
    },
    {
      title: 'Voice Market Expansion Campaigns',
      description: 'Scale into new territories with a voice assistant that identifies potential shippers, conducts initial outreach, and qualifies leads based on your specific criteria through natural conversation.'
    }
  ];

  const testimonials = [
    {
      quote: "Our voice assistant batch dialing system increased carrier recruitment by 340%. We now contact 500+ carriers daily and our load coverage improved from 65% to 92%.",
      author: "Jennifer Martinez",
      role: "Operations Director",
      company: "Midwest Freight Solutions"
    },
    {
      quote: "The voice AI load notification feature has transformed our business. Carriers respond 3x faster to voice calls than emails, and our load acceptance rate increased by 45%.",
      author: "David Thompson",
      role: "Carrier Relations Manager",
      company: "Coastal Logistics Group"
    }
  ];

  return (
    <Layout 
      title="AI Voice Assistant Batch Dialing for Trucking & Logistics Companies" 
      description="Scale your outreach with AI voice assistant batch dialing for trucking and logistics. Automate carrier recruitment, load notifications, and customer follow-ups with intelligent voice campaigns."
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
                Batch Dialing
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Scale your outreach and never miss a business opportunity with intelligent voice batch dialing. 
              Transform your carrier recruitment, load notifications, and customer follow-ups with smart batch dialing 
              that reaches hundreds of contacts simultaneously while maintaining personal, conversational interactions.
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
              The Outreach Crisis Every Logistics Company Faces
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Trucking and logistics companies face the constant challenge of scaling their outreach efforts 
              while maintaining personal relationships with carriers, shippers, and customers. When you need to 
              reach hundreds of contacts for carrier recruitment, load notifications, or customer follow-ups, 
              manual calling becomes impossible and opportunities are lost.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl text-white">
              <p className="text-2xl font-bold mb-2">Research shows 78% of logistics companies struggle with outreach scalability</p>
              <p className="text-white/90">That's exactly where our intelligent voice batch dialing system changes the game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Features That Drive Results
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Everything you need to scale your outreach while maintaining personal relationships.
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
              Use Cases That Scale Your Business
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real-world scenarios where our batch dialing system makes the difference.
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
              Logistics companies use our platform to build voice batch dialing systems that scale outreach while maintaining personal relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Configure Voice Campaign Templates",
                description: "Set up carrier recruitment scripts, load notification templates, and customer follow-up protocols specific to your logistics business."
              },
              {
                step: "2",
                title: "Import Voice Contact Lists",
                description: "Upload carrier databases, shipper contacts, and customer lists with segmentation and targeting criteria to enable intelligent voice campaign routing."
              },
              {
                step: "3",
                title: "Set Up Voice Campaign Schedules",
                description: "Configure optimal calling times, time zone management, and campaign frequency for different contact types and geographic regions."
              },
              {
                step: "4",
                title: "Launch & Monitor Voice Campaigns",
                description: "Deploy your voice assistant batch dialing system and continuously monitor response rates, conversion metrics, and campaign ROI."
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
                question: "How does voice batch dialing improve logistics outreach efficiency?",
                answer: "Voice batch dialing significantly improves logistics outreach efficiency by automating repetitive calling tasks, personalizing interactions at scale, and maintaining compliance with industry regulations through natural conversation. These voice agents ensure every contact receives personalized attention while allowing businesses to reach hundreds of prospects simultaneously."
              },
              {
                question: "Can voice batch dialing handle different types of logistics campaigns?",
                answer: "Yes, voice batch dialing systems can manage multiple campaign types including carrier recruitment, load notifications, customer follow-ups, and market expansion by using different voice scripts, targeting criteria, and response handling protocols through conversational AI."
              },
              {
                question: "What's the ROI of implementing voice batch dialing for logistics companies?",
                answer: "Most logistics companies see immediate ROI through increased outreach capacity, improved response rates, and higher conversion metrics with voice AI technology. The typical investment ranges from $300–800 per month, compared to $60,000+ annually for a dedicated outreach team."
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
            Ready to Scale Your Outreach?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stop losing opportunities to manual calling limitations. Start reaching more carriers and customers with voice assistant batch dialing that works 24/7.
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

export default BatchDialingPage;

