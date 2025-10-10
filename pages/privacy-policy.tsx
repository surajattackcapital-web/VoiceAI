import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Layout title="Privacy Policy - Voice AI for Logistics" description="Learn how VoiceAI protects your privacy and handles your data.">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-8">
            Privacy Policy
          </h1>
          
          <div className="text-[var(--muted)] mb-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[var(--text)]">
              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">1. Introduction</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  VoiceAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our 
                  voice AI services for logistics operations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">2.1 Personal Information</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      We may collect personal information such as your name, email address, phone number, 
                      company information, and billing details when you register for our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">2.2 Call Data</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      We process voice calls, transcriptions, and related metadata to provide our AI services. 
                      This includes call recordings, transcripts, and call analytics.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">2.3 Usage Data</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      We collect information about how you use our services, including API usage, 
                      feature utilization, and performance metrics.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">3. How We Use Your Information</h2>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--muted)] ml-4">
                  <li>Provide and maintain our voice AI services</li>
                  <li>Process and analyze voice calls and communications</li>
                  <li>Improve our AI models and service quality</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Send important service updates and notifications</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">4. Data Security</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  We implement industry-standard security measures to protect your data, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--muted)] ml-4 mt-4">
                  <li>End-to-end encryption for all voice communications</li>
                  <li>Secure data storage with regular backups</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Regular security audits and compliance assessments</li>
                  <li>SOC 2 Type II certification</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--muted)] ml-4 mt-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>To protect our rights, property, or safety</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">6. Your Rights</h2>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--muted)] ml-4">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to delete your personal data</li>
                  <li>Right to restrict processing of your data</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">7. Data Retention</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  We retain your personal data only as long as necessary to provide our services and 
                  comply with legal obligations. Call recordings and transcripts are typically retained 
                  for the duration of your service agreement plus applicable legal retention periods.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">8. International Data Transfers</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  Your data may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data in accordance 
                  with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">9. Changes to This Policy</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new policy on our website and updating the 
                  "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">10. Contact Us</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div className="mt-4 p-4 bg-[var(--surface)] border border-[var(--line)] rounded-lg">
                  <p className="text-[var(--text)]">
                    <strong>Email:</strong> privacy@voiceai.com<br />
                    <strong>Address:</strong> VoiceAI Inc., 123 Tech Street, San Francisco, CA 94105<br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;

