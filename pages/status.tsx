import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Clock, ArrowRight, Activity, Server, Globe, Database } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'Voice AI API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms'
    },
    {
      name: 'Web Dashboard',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms'
    },
    {
      name: 'Call Processing',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '200ms'
    },
    {
      name: 'Analytics Service',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '150ms'
    },
    {
      name: 'Integration APIs',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '100ms'
    },
    {
      name: 'Documentation',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '50ms'
    }
  ];

  const recentIncidents = [
    {
      date: '2025-01-14',
      title: 'Scheduled Maintenance',
      status: 'resolved',
      description: 'Planned maintenance window completed successfully'
    },
    {
      date: '2025-01-10',
      title: 'API Performance Issue',
      status: 'resolved',
      description: 'Temporary API slowdown resolved within 15 minutes'
    },
    {
      date: '2025-01-05',
      title: 'Database Optimization',
      status: 'resolved',
      description: 'Database performance improvements deployed'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Layout 
      title="System Status - VoiceAI Service Status"
      description="Real-time status of VoiceAI services. Monitor uptime, performance, and any ongoing incidents affecting our Voice AI platform."
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
                System Status
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Real-time status of all VoiceAI services. Monitor uptime, performance, 
                and stay informed about any service disruptions.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90">All Systems Operational</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overall Status Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Service Status
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Current status of all VoiceAI services and components.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[var(--text)]">
                      {service.name}
                    </h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[var(--muted)]">Status:</span>
                      <span className={`font-medium ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--muted)]">Uptime:</span>
                      <span className="text-[var(--text)] font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--muted)]">Response Time:</span>
                      <span className="text-[var(--text)] font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Performance Metrics
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                Key performance indicators for the last 30 days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: '99.9%', label: 'Overall Uptime', icon: <Activity className="w-6 h-6" /> },
                { metric: '125ms', label: 'Average Response Time', icon: <Server className="w-6 h-6" /> },
                { metric: '99.8%', label: 'API Availability', icon: <Globe className="w-6 h-6" /> },
                { metric: '99.9%', label: 'Database Uptime', icon: <Database className="w-6 h-6" /> }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[var(--accent-1)] mb-4 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
                    {metric.metric}
                  </div>
                  <p className="text-[var(--muted)]">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents Section */}
        <section className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                Recent Incidents
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                History of recent service incidents and maintenance windows.
              </p>
            </div>

            <div className="space-y-6">
              {recentIncidents.map((incident, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--line)]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-[var(--text)]">
                      {incident.title}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {incident.status}
                      </span>
                      <span className="text-[var(--muted)] text-sm">
                        {new Date(incident.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <p className="text-[var(--muted)]">
                    {incident.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--line)] text-center"
            >
              <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-[var(--muted)] mb-8">
                Subscribe to status updates and get notified about service incidents and maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent bg-[var(--bg)] text-[var(--text)]"
                />
                <button className="btn-primary flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Service Status?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our support team if you have questions about service status or need assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-light flex items-center space-x-2">
                <span>Contact Support</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary-light">
                View Status API
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StatusPage;
