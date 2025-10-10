'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
  isMore?: boolean;
}

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Dispatch Automation', href: '/solutions/dispatch-automation' },
        { name: 'Driver Communications', href: '/solutions/driver-communications' },
        { name: 'Freight Broker Ops', href: '/solutions/freight-broker-ops' },
        { name: 'Logistics Ops', href: '/solutions/logistics-ops' },
        { name: 'POD/BOL Automation', href: '/solutions/pod-bol-automation' },
      ]
    },
    {
      name: 'Features',
      href: '/features',
      dropdown: [
        { name: 'Agent Assist', href: '/features/agent-assist' },
        { name: 'AI Voicemail', href: '/features/ai-voicemail' },
        { name: 'Batch Dialing', href: '/features/batch-dialing' },
        { name: 'Call Routing & Queues', href: '/features/call-routing-queues' },
        { name: 'Local Presence', href: '/features/local-presence' },
        { name: 'QA & Analytics', href: '/features/qa-analytics' },
        { name: 'Smart IVR', href: '/features/smart-ivr' },
        { name: 'Transcription & Recording', href: '/features/transcription-recording' },
      ]
    },
    {
      name: 'Integrations',
      href: '/integrations',
      dropdown: [
        { name: 'Salesforce', href: '/integrations/salesforce' },
        { name: 'HubSpot', href: '/integrations/hubspot' },
        { name: 'Twilio', href: '/integrations/twilio' },
        { name: 'DAT', href: '/integrations/dat' },
        { name: 'Truckstop', href: '/integrations/truckstop' },
        { name: 'Slack', href: '/integrations/slack' },
        { name: 'View All Integrations', href: '/integrations', isMore: true },
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'Blogs', href: '/resources/blogs' },
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Comparisons', href: '/resources/comparisons' },
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-[var(--bg)] border-b border-[var(--line)] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-[var(--text)]">VoiceAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="nav-link flex items-center space-x-1">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-[var(--surface)] border border-[var(--line)] rounded-lg shadow-lg py-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                subItem.isMore 
                                  ? 'text-[var(--accent-1)] hover:text-[var(--accent-2)] font-medium border-t border-[var(--line)] mt-2 pt-3' 
                                  : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--bg-2)]'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/demo" className="btn-secondary">
              Demo
            </Link>
            <Link href="/pricing" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[var(--text)]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[var(--line)]"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <div className="px-4 py-2 text-[var(--muted)] font-medium">
                          {item.name}
                        </div>
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                subItem.isMore 
                                  ? 'text-[var(--accent-1)] hover:text-[var(--accent-2)] font-medium border-t border-[var(--line)] mt-2 pt-3' 
                                  : 'text-[var(--muted)] hover:text-[var(--text)]'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 nav-link ${isActive(item.href) ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-2">
                  <Link href="/demo" className="block w-full btn-secondary text-center">
                    Demo
                  </Link>
                  <Link href="/pricing" className="block w-full btn-primary text-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;

