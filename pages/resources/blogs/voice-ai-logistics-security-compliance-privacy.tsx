import React, { useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Users, Zap, Globe, Shield } from 'lucide-react';

const VoiceAILogisticsSecurityCompliance: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contentRef.current?.querySelectorAll('h2, h3, p, ul, ol, blockquote');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout 
      title="Voice AI in Logistics: Security, Compliance, and Privacy - Protecting Your Operations"
      description="Discover how Voice AI in logistics ensures security, compliance, and privacy protection for transportation companies, including regulatory requirements and best practices."
    >
      <div className="min-h-screen bg-[var(--bg)]">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <a 
                  href="/resources/blogs" 
                  className="flex items-center text-[var(--muted)] hover:text-[var(--accent-1)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </a>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-6">
                Voice AI in Logistics:
                <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                  Security & Compliance
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                Protecting Your Operations with Enterprise-Grade Security and Privacy
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--muted)] mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>14 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>VoiceAI Team</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--line)] rounded-lg hover:border-[var(--accent-1)] transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                <button className="flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--line)] rounded-lg hover:border-[var(--accent-1)] transition-colors">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Save
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={contentRef} className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Introduction</h2>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Security, compliance, and privacy are critical considerations for logistics companies implementing Voice AI solutions. With sensitive customer data, financial information, and operational details being processed through voice interactions, ensuring robust security measures is essential for maintaining trust and regulatory compliance.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  This comprehensive guide examines the security, compliance, and privacy aspects of Voice AI in logistics, providing insights into best practices, regulatory requirements, and implementation strategies for protecting your operations.
                </p>
              </motion.div>

              {/* Security Framework */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Enterprise-Grade Security Framework</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">1. Data Protection and Encryption</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">End-to-End Encryption</h4>
                        <p className="text-[var(--muted)] text-sm">All voice data is encrypted in transit and at rest using industry-standard encryption protocols to protect sensitive information.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Secure Data Storage</h4>
                        <p className="text-[var(--muted)] text-sm">Voice recordings and transcripts are stored in secure, encrypted databases with access controls and audit trails.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Data Anonymization</h4>
                        <p className="text-[var(--muted)] text-sm">Personal and sensitive information is automatically anonymized or pseudonymized to protect customer privacy.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">2. Access Control and Authentication</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Multi-Factor Authentication</h4>
                        <p className="text-[var(--muted)] text-sm">Strong authentication mechanisms ensure only authorized personnel can access sensitive voice data and system controls.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Role-Based Access Control</h4>
                        <p className="text-[var(--muted)] text-sm">Granular permissions based on user roles ensure employees only access the data and functions necessary for their job.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Session Management</h4>
                        <p className="text-[var(--muted)] text-sm">Automatic session timeouts and secure session management protect against unauthorized access and session hijacking.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mr-4">
                        <Globe className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text)]">3. Network and Infrastructure Security</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Secure Cloud Infrastructure</h4>
                        <p className="text-[var(--muted)] text-sm">Voice AI systems run on secure, compliant cloud infrastructure with regular security updates and monitoring.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Network Security</h4>
                        <p className="text-[var(--muted)] text-sm">Advanced firewall protection, intrusion detection, and network segmentation protect against external threats.</p>
                      </div>
                      <div className="bg-[var(--bg-2)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Regular Security Audits</h4>
                        <p className="text-[var(--muted)] text-sm">Continuous security monitoring, vulnerability assessments, and penetration testing ensure ongoing protection.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Compliance Standards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Compliance Standards and Certifications</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Industry Certifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">SOC 2 Type II Compliance</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">ISO 27001 Information Security</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">HIPAA Compliance (Healthcare)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">PCI DSS (Payment Processing)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">GDPR Compliance (EU)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-4">Logistics-Specific Compliance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">DOT Regulations (Transportation)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">FMCSA Compliance (Trucking)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">TSA Security Requirements</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">Customs and Border Protection</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[var(--accent-1)] rounded-full mr-3"></div>
                        <span className="text-[var(--muted)]">International Trade Regulations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Privacy Protection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Privacy Protection and Data Governance</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Data Minimization</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Collect only necessary data</li>
                      <li>• Automatic data purging</li>
                      <li>• Purpose limitation</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">User Rights</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Right to access data</li>
                      <li>• Right to deletion</li>
                      <li>• Data portability</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Consent Management</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Explicit consent collection</li>
                      <li>• Granular permissions</li>
                      <li>• Easy opt-out options</li>
                    </ul>
                  </div>
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Transparency</h3>
                    <ul className="text-[var(--muted)] text-sm space-y-1">
                      <li>• Clear privacy policies</li>
                      <li>• Data usage disclosure</li>
                      <li>• Regular audits</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion</h2>
                <div className="bg-gradient-to-r from-[var(--accent-1)]/10 to-[var(--accent-2)]/10 border border-[var(--accent-1)]/20 rounded-lg p-8">
                  <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
                    Security, compliance, and privacy are fundamental to successful Voice AI implementation in logistics. By implementing robust security measures, maintaining regulatory compliance, and protecting customer privacy, logistics companies can confidently adopt Voice AI technology while maintaining trust and meeting legal requirements.
                  </p>
                  <p className="text-[var(--text)] text-lg leading-relaxed font-semibold">
                    Companies that prioritize security and compliance in their Voice AI implementation will have a significant competitive advantage in the evolving logistics landscape.
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Voice AI Implementation?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us to learn how our enterprise-grade security and compliance features can protect your logistics operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-[var(--accent-1)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Contact Sales
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors">
                      Request Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VoiceAILogisticsSecurityCompliance;
