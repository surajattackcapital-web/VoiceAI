import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Voicemail, Zap, Globe, Mic } from 'lucide-react';

const AIVoicemailPage: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Real-time Message Transcription',
      description: 'Instantly convert voicemails to text with 99% accuracy using advanced speech recognition and logistics-specific terminology through voice assistant technology.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Intelligent Message Prioritization',
      description: 'Automatically identify urgent requests, emergency situations, and time-sensitive inquiries using keyword recognition and context analysis through conversational AI.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Automated Response Capabilities',
      description: 'Provide instant acknowledgments, initial responses, and routing to appropriate departments through voice agent technology to improve customer experience.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Comprehensive Message Management',
      description: 'Track message status, response times, and follow-up requirements with advanced voice AI analytics to ensure every voicemail gets proper handling.'
    }
  ];

  const useCases = [
    {
      title: 'Intelligent Voice Message Transcription',
      description: 'Build a voicemail system that automatically transcribes messages with high accuracy, identifies key information like pickup locations and delivery requirements, and extracts actionable data through natural conversation.'
    },
    {
      title: 'Voice Urgent Request Prioritization',
      description: 'Handle emergency situations with a voicemail system that recognizes urgent keywords, prioritizes critical messages, and immediately notifies appropriate staff about time-sensitive requests.'
    },
    {
      title: 'Voice Automated Response Management',
      description: 'Provide instant acknowledgments and initial responses to common inquiries while routing complex messages to appropriate departments through conversational AI.'
    },
    {
      title: 'Voice Multi-Language Communication',
      description: 'Handle voicemails in multiple languages with a voice assistant that provides accurate transcription, translation, and appropriate responses based on language preferences.'
    }
  ];

  const testimonials = [
    {
      quote: "Our voice assistant AI voicemail system reduced missed urgent requests by 92%. We now respond to emergency pickups within 5 minutes instead of hours, and our customer satisfaction increased by 67%.",
      author: "Jennifer Martinez",
      role: "Dispatch Manager",
      company: "Emergency Freight Solutions"
    },
    {
      quote: "The voice AI transcription feature is incredibly accurate. We never miss important details from carrier calls, and our response time to capacity inquiries improved by 78%.",
      author: "David Thompson",
      role: "Operations Director",
      company: "Regional Carrier Network"
    }
  ];

  return (
    <Layout 
      title="AI Voice Assistant Voicemail for Trucking & Logistics Companies" 
      description="Never miss important messages with AI voice assistant voicemail for trucking and logistics. Transcribe, prioritize, and respond to voicemails automatically with intelligent voice AI technology."
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
                Voicemail
              </span>
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Never miss critical messages or urgent requests with intelligent voice voicemail management. 
              Transform your voicemail handling with smart AI that transcribes messages, prioritizes urgent requests, 
              and provides instant responses through natural conversation.
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
              The Voicemail Crisis Every Logistics Company Faces
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-4xl mx-auto">
              Trucking and logistics companies face the constant challenge of managing high volumes of voicemails 
              while ensuring urgent requests get immediate attention. When critical messages sit unread or emergency 
              dispatch requests go unnoticed, customer satisfaction drops and business opportunities are lost.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-2xl text-white">
              <p className="text-2xl font-bold mb-2">Research shows 84% of logistics companies miss urgent voicemails</p>
              <p className="text-white/90">That's exactly where our intelligent voice AI voicemail system changes the game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Features That Capture Every Message
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Everything you need to never miss important communications.
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
              Use Cases That Never Miss Important Messages
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Real-world scenarios where our AI voicemail system makes the difference.
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
              Logistics companies use our platform to build voice AI voicemail systems that ensure no important message is ever missed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Configure Voice Transcription Rules",
                description: "Set up transcription accuracy settings, industry terminology recognition, and language preferences specific to your logistics operations."
              },
              {
                step: "2",
                title: "Set Up Voice Priority Keywords",
                description: "Input urgent keywords, emergency phrases, and priority indicators to enable intelligent message prioritization."
              },
              {
                step: "3",
                title: "Design Voice Response Templates",
                description: "Create automated response templates for common inquiries, acknowledgment messages, and routing protocols."
              },
              {
                step: "4",
                title: "Launch & Monitor Voice Voicemail System",
                description: "Deploy your voice assistant AI voicemail system and continuously monitor transcription accuracy and response times."
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
                question: "How does voice AI voicemail improve logistics communication efficiency?",
                answer: "Voice AI voicemail significantly improves logistics communication efficiency by providing accurate transcription, intelligent prioritization, and automated responses through natural conversation. These voice agents ensure every important message gets captured and handled appropriately while reducing response times."
              },
              {
                question: "Can voice AI voicemail handle multiple languages and accents?",
                answer: "Yes, voice AI voicemail systems can manage multiple languages and regional accents by using advanced speech recognition, language detection, and cultural adaptation through conversational AI and multi-language processing technology."
              },
              {
                question: "What's the ROI of implementing voice AI voicemail for logistics companies?",
                answer: "Most logistics companies see immediate ROI through reduced missed messages, improved response times, and increased customer satisfaction with voice AI technology. The typical investment ranges from $100–400 per month, compared to $25,000+ annually for dedicated voicemail management staff."
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
            Ready to Never Miss Another Message?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stop losing business to missed voicemails. Start capturing every important message with voice assistant AI voicemail that works 24/7.
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

export default AIVoicemailPage;

