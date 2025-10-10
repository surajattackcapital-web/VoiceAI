import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Partners', href: '/partners' },
        { name: 'Press', href: '/press' },
        { name: 'Investors', href: '/investors' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Dispatch Automation', href: '/solutions/dispatch-automation' },
        { name: 'Driver Communications', href: '/solutions/driver-communications' },
        { name: 'Freight Broker Ops', href: '/solutions/freight-broker-ops' },
        { name: 'Logistics Ops', href: '/solutions/logistics-ops' },
        { name: 'POD/BOL Automation', href: '/solutions/pod-bol-automation' },
      ]
    },
    {
      title: 'Features',
      links: [
        { name: 'Agent Assist', href: '/features/agent-assist' },
        { name: 'AI Voicemail', href: '/features/ai-voicemail' },
        { name: 'Batch Dialing', href: '/features/batch-dialing' },
        { name: 'Call Routing & Queues', href: '/features/call-routing-queues' },
        { name: 'Smart IVR', href: '/features/smart-ivr' },
        { name: 'QA & Analytics', href: '/features/qa-analytics' },
      ]
    },
    {
      title: 'Integrations',
      links: [
        { name: 'Salesforce', href: '/integrations/salesforce' },
        { name: 'HubSpot', href: '/integrations/hubspot' },
        { name: 'Truckstop', href: '/integrations/truckstop' },
        { name: 'DAT', href: '/integrations/dat' },
        { name: 'Twilio', href: '/integrations/twilio' },
        { name: 'View All', href: '/integrations' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/resources/blogs' },
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Comparisons', href: '/resources/comparisons' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api-docs' },
        { name: 'Support', href: '/support' },
      ]
    },
  ];

  return (
    <footer className="bg-[var(--bg-2)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Left Side */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold text-[var(--text)]">VoiceAI</span>
              </Link>
              <p className="text-[var(--muted)] max-w-md leading-relaxed">
                Revolutionary voice AI solutions for logistics and transportation. 
                Automate calls, improve efficiency, and scale your operations.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[var(--muted)]">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@voiceai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--muted)]">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--muted)]">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--muted)] hover:text-[var(--accent-1)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--accent-1)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--accent-1)] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links - Right Side */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-[var(--text)] font-semibold text-base">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm leading-relaxed"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-[var(--line)]">
          <div className="max-w-md">
            <h3 className="text-[var(--text)] font-semibold mb-3 text-lg">Stay Updated</h3>
            <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">
              Get the latest updates on new features and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--surface)] border border-[var(--line)] rounded-lg text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent-1)] transition-colors"
              />
              <button className="btn-primary whitespace-nowrap px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--line)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted)] text-sm">
            © {currentYear} VoiceAI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/privacy-policy" className="text-[var(--muted)] hover:text-[var(--text)] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[var(--muted)] hover:text-[var(--text)] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-[var(--muted)] hover:text-[var(--text)] text-sm transition-colors">
              Security
            </Link>
            <Link href="/status" className="text-[var(--muted)] hover:text-[var(--text)] text-sm transition-colors">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

