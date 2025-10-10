import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Code, BookOpen, Download, ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/voice/create-agent',
      description: 'Create a new voice AI agent',
      category: 'Agents'
    },
    {
      method: 'GET',
      endpoint: '/api/voice/agents',
      description: 'List all voice AI agents',
      category: 'Agents'
    },
    {
      method: 'POST',
      endpoint: '/api/voice/start-call',
      description: 'Initiate a voice call',
      category: 'Calls'
    },
    {
      method: 'GET',
      endpoint: '/api/voice/call-status',
      description: 'Get call status and analytics',
      category: 'Calls'
    },
    {
      method: 'POST',
      endpoint: '/api/integrations/webhook',
      description: 'Configure webhook integrations',
      category: 'Integrations'
    },
    {
      method: 'GET',
      endpoint: '/api/analytics/metrics',
      description: 'Retrieve performance metrics',
      category: 'Analytics'
    }
  ];

  return (
    <Layout 
      title="API Documentation - VoiceAI Developer Guide"
      description="Complete API documentation for VoiceAI. RESTful APIs, authentication, endpoints, and code examples for integrating Voice AI into your applications."
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
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Build powerful Voice AI applications with our comprehensive REST API. 
                Integrate voice capabilities into your logistics and business applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary-light">
                  Get API Key
                </button>
                <button className="btn-secondary-light">
                  View Examples
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Quick Start
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Get started with the VoiceAI API in minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-[var(--text)] mb-6">
                  Authentication
                </h3>
                <div className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]">
                  <pre className="text-sm text-[var(--text)] overflow-x-auto">
{`curl -X POST https://api.voiceai.com/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Customer Service Agent",
    "voice": "professional-female",
    "language": "en-US"
  }'`}
                  </pre>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-[var(--text)] mb-6">
                  Response
                </h3>
                <div className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]">
                  <pre className="text-sm text-[var(--text)] overflow-x-auto">
{`{
  "id": "agent_123",
  "name": "Customer Service Agent",
  "status": "active",
  "created_at": "2025-01-15T10:30:00Z"
}`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Complete reference for all VoiceAI API endpoints.
              </p>
            </div>

            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] hover:border-[var(--accent-1)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-[var(--text)] font-mono">
                        {endpoint.endpoint}
                      </code>
                    </div>
                    <div className="text-right">
                      <p className="text-[var(--text)] font-medium">
                        {endpoint.description}
                      </p>
                      <p className="text-sm text-[var(--muted)]">
                        {endpoint.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                SDKs & Libraries
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Official SDKs and libraries for popular programming languages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'JavaScript/Node.js', version: 'v2.1.0', description: 'Official SDK for JavaScript and Node.js applications' },
                { name: 'Python', version: 'v1.8.0', description: 'Python SDK for server-side applications' },
                { name: 'PHP', version: 'v1.5.0', description: 'PHP SDK for web applications' }
              ].map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)] text-center"
                >
                  <Code className="w-12 h-12 text-[var(--accent-1)] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                    {sdk.name}
                  </h3>
                  <p className="text-[var(--accent-1)] font-medium mb-3">
                    {sdk.version}
                  </p>
                  <p className="text-[var(--muted)] mb-4">
                    {sdk.description}
                  </p>
                  <button className="btn-primary w-full">
                    Download SDK
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start building with the VoiceAI API today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Get API Key</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                View Examples
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ApiDocsPage;
