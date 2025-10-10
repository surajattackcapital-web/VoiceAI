import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const TermsOfServicePage: React.FC = () => {
  return (
    <Layout title="Terms of Service - Voice AI for Logistics" description="Read our terms of service for using VoiceAI's voice automation platform.">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-8">
            Terms of Service
          </h1>
          
          <div className="text-[var(--muted)] mb-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[var(--text)]">
              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">1. Acceptance of Terms</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  By accessing and using VoiceAI's services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">2. Description of Service</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  VoiceAI provides voice artificial intelligence services for logistics and transportation 
                  companies, including but not limited to automated call handling, voice transcription, 
                  intelligent routing, and analytics. Our services are designed to help businesses 
                  automate and optimize their communication workflows.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">3. User Accounts</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">3.1 Account Creation</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      To use our services, you must create an account and provide accurate, complete, 
                      and current information. You are responsible for maintaining the confidentiality 
                      of your account credentials.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">3.2 Account Security</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      You are responsible for all activities that occur under your account. You must 
                      notify us immediately of any unauthorized use of your account or any other 
                      breach of security.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">4. Acceptable Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">4.1 Permitted Uses</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      You may use our services only for lawful business purposes related to logistics, 
                      transportation, and related industries. You must comply with all applicable laws 
                      and regulations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">4.2 Prohibited Uses</h3>
                    <p className="text-[var(--muted)] leading-relaxed mb-4">
                      You may not use our services to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[var(--muted)] ml-4">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Transmit spam, unsolicited communications, or harassment</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with or disrupt our services</li>
                      <li>Use our services for fraudulent or deceptive purposes</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">5. Payment Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">5.1 Fees and Billing</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      Service fees are billed in advance on a monthly or annual basis. All fees are 
                      non-refundable except as required by law. You are responsible for all applicable 
                      taxes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">5.2 Payment Methods</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      We accept major credit cards and other payment methods as specified on our website. 
                      You must provide current, complete, and accurate billing information.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">6. Data and Privacy</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information is 
                  governed by our Privacy Policy, which is incorporated into these Terms by reference. 
                  By using our services, you consent to the collection and use of information as 
                  described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">7. Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">7.1 Our Rights</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      VoiceAI and its licensors own all rights, title, and interest in and to our 
                      services, including all intellectual property rights. You may not copy, modify, 
                      or create derivative works of our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">7.2 Your Content</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      You retain ownership of your content. By using our services, you grant us a 
                      limited license to use your content to provide and improve our services.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">8. Service Availability</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  We strive to maintain high service availability but cannot guarantee uninterrupted 
                  service. We may perform maintenance, updates, or modifications that temporarily 
                  affect service availability. We will provide reasonable notice of planned maintenance 
                  when possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">9. Limitation of Liability</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  To the maximum extent permitted by law, VoiceAI shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to 
                  loss of profits, data, or business opportunities, arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">10. Termination</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">10.1 Termination by You</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      You may terminate your account at any time by contacting our support team. 
                      Termination will be effective at the end of your current billing period.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">10.2 Termination by Us</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      We may terminate or suspend your account immediately if you violate these Terms 
                      or engage in activities that harm our services or other users.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">11. Changes to Terms</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  We may modify these Terms at any time. We will notify you of material changes by 
                  email or through our service. Your continued use of our services after such changes 
                  constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">12. Governing Law</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  State of California, without regard to its conflict of law provisions. Any disputes 
                  arising from these Terms shall be resolved in the courts of San Francisco, California.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">13. Contact Information</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-[var(--surface)] border border-[var(--line)] rounded-lg">
                  <p className="text-[var(--text)]">
                    <strong>Email:</strong> legal@voiceai.com<br />
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

export default TermsOfServicePage;

