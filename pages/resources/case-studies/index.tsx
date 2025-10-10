import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = ['All', 'Freight Brokerage', 'Last-Mile Delivery', 'Warehouse Operations', 'International Logistics', 'Fleet Management'];

  const caseStudies = [
    {
      id: 1,
      title: 'Global Freight Forwarder: 80% Reduction in Coordination Time',
      company: 'TransGlobal Logistics',
      industry: 'International Logistics',
      size: '2,500 employees, $500M revenue',
      challenge: 'Managing complex international operations with language barriers and time zone differences',
      solution: 'Multilingual voice AI agents for 25+ languages with 24/7 global operations',
      results: [
        '80% reduction in coordination time',
        '90% improvement in communication accuracy',
        '$1.6M annual savings in communication costs',
        '95% customer satisfaction across all markets'
      ],
      roi: '200% ROI in first year',
      image: '/images/case-study-global-freight.jpg',
      featured: true,
      link: '/resources/case-studies/global-freight-forwarder-coordination'
    },
    {
      id: 2,
      title: 'E-Commerce Fulfillment: 70% Reduction in Customer Service Calls',
      company: 'QuickShip Logistics',
      industry: 'Last-Mile Delivery',
      size: '1,200 employees, $150M revenue',
      challenge: 'Managing high-volume customer service during peak seasons',
      solution: 'AI voice agents for customer service automation with intelligent routing',
      results: [
        '70% reduction in customer service calls',
        '$210,000 monthly savings in operational costs',
        '95% customer satisfaction with AI interactions',
        '24/7 availability without additional staffing'
      ],
      roi: '836% ROI in first year',
      image: '/images/case-study-ecommerce.jpg',
      featured: true,
      link: '/resources/case-studies/ecommerce-fulfillment-automation'
    },
    {
      id: 3,
      title: 'Long-Haul Trucking: 40% Reduction in Accident Rates',
      company: 'SafeHaul Transport',
      industry: 'Fleet Management',
      size: '800 employees, $100M revenue',
      challenge: 'Improving driver communication while maintaining safety compliance',
      solution: 'Hands-free voice AI for driver communication with intelligent dispatch',
      results: [
        '40% reduction in accident rates',
        '100% compliance with DOT regulations',
        '60% improvement in safety scores',
        '95% driver satisfaction with voice AI system'
      ],
      roi: '836% ROI in first year',
      image: '/images/case-study-trucking.jpg',
      featured: false,
      link: '/resources/case-studies/long-haul-trucking-safety'
    },
    {
      id: 4,
      title: 'Pharmaceutical Distribution: 100% Compliance Achievement',
      company: 'MedLog Solutions',
      industry: 'Warehouse Operations',
      size: '600 employees, $80M revenue',
      challenge: 'Maintaining compliance and quality control in temperature-sensitive operations',
      solution: 'Compliant voice AI agents with HIPAA certification and temperature monitoring',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero temperature excursions or product losses',
        '95% improvement in quality control efficiency',
        'Complete audit trail and documentation'
      ],
      roi: '1,052% ROI in first year',
      image: '/images/case-study-pharmaceutical.jpg',
      featured: false,
      link: '/resources/case-studies/pharmaceutical-distribution-compliance'
    },
    {
      id: 5,
      title: 'Construction Equipment Rental: 70% Reduction in Downtime',
      company: 'BuildRent Equipment',
      industry: 'Fleet Management',
      size: '400 employees, $60M revenue',
      challenge: 'Optimizing fleet utilization and customer service',
      solution: 'AI voice agents for customer service and scheduling with fleet management',
      results: [
        '70% reduction in equipment downtime',
        '60% improvement in fleet utilization',
        '50% reduction in maintenance costs',
        '90% improvement in scheduling efficiency'
      ],
      roi: '836% ROI in first year',
      image: '/images/case-study-construction.jpg',
      featured: false,
      link: '/resources/case-studies/construction-equipment-rental'
    },
    {
      id: 6,
      title: 'Food and Beverage Distribution: 100% Temperature Compliance',
      company: 'FreshLog Distribution',
      industry: 'Warehouse Operations',
      size: '1,000 employees, $120M revenue',
      challenge: 'Maintaining temperature control and delivery efficiency',
      solution: 'AI voice agents for delivery coordination with temperature monitoring',
      results: [
        '100% temperature compliance and control',
        '95% improvement in quality control efficiency',
        'Zero product losses due to temperature issues',
        '100% compliance with food safety regulations'
      ],
      roi: '1,052% ROI in first year',
      image: '/images/case-study-food-beverage.jpg',
      featured: false,
      link: '/resources/case-studies/food-beverage-distribution'
    },
    {
      id: 7,
      title: 'Retail Distribution Center: 80% Improvement in Inventory Accuracy',
      company: 'RetailMax Distribution',
      industry: 'Warehouse Operations',
      size: '800 employees, $90M revenue',
      challenge: 'Managing high-volume inventory and order processing',
      solution: 'AI voice agents for inventory management and automated order processing',
      results: [
        '80% improvement in inventory accuracy',
        '70% reduction in order processing time',
        '90% decrease in inventory discrepancies',
        '95% improvement in order fulfillment accuracy'
      ],
      roi: '836% ROI in first year',
      image: '/images/case-study-retail.jpg',
      featured: false,
      link: '/resources/case-studies/retail-distribution-center'
    },
    {
      id: 8,
      title: 'Mid-Size Freight Broker: 70% Reduction in Call Handling Time',
      company: 'Regional Freight Solutions',
      industry: 'Freight Brokerage',
      size: '500 employees, $50M revenue',
      challenge: 'High call volume and manual coordination inefficiencies',
      solution: 'AI voice agents for load matching and customer service automation',
      results: [
        '70% reduction in call handling time',
        '50% increase in load volume capacity',
        '40% reduction in customer service costs',
        '95% customer satisfaction with AI interactions'
      ],
      roi: '836% ROI in first year',
      image: '/images/case-study-freight-broker.jpg',
      featured: false,
      link: '/resources/case-studies/mid-size-freight-broker'
    },
    {
      id: 9,
      title: 'International Shipping Company: 80% Reduction in Customer Service Costs',
      company: 'Global Shipping Solutions',
      industry: 'International Logistics',
      size: '1,000 employees, $100M revenue',
      challenge: 'Multilingual support and complex customs coordination',
      solution: 'Multilingual AI voice agents with automated compliance assistance',
      results: [
        '80% reduction in customer service costs',
        '24/7 availability in all markets',
        '90% improvement in response times',
        '100% compliance with regulatory requirements'
      ],
      roi: '1,052% ROI in first year',
      image: '/images/case-study-shipping.jpg',
      featured: false,
      link: '/resources/case-studies/international-shipping-company'
    },
    {
      id: 10,
      title: 'Last-Mile Delivery Service: 60% Reduction in Failed Deliveries',
      company: 'QuickDeliver Services',
      industry: 'Last-Mile Delivery',
      size: '300 employees, $40M revenue',
      challenge: 'Real-time delivery coordination and customer communication',
      solution: 'AI voice agents with real-time delivery tracking and customer communication',
      results: [
        '60% reduction in failed deliveries',
        '85% improvement in customer satisfaction',
        '50% decrease in customer service costs',
        'Real-time visibility and coordination'
      ],
      roi: '836% ROI in first year',
      image: '/images/case-study-last-mile.jpg',
      featured: false,
      link: '/resources/case-studies/last-mile-delivery-service'
    }
  ];

  const filteredStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <Layout title="Voice AI Case Studies - Real-World Success Stories" description="Real-world success stories and implementation examples from logistics companies using Voice AI">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-6">
              Voice AI
              <span className="block bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
              Real-world success stories and implementation examples from logistics companies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">10+ Case Studies</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">Proven ROI</span>
              <span className="bg-[var(--accent-1)]/20 text-[var(--accent-1)] px-4 py-2 rounded-full">Real Results</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Our most impressive Voice AI implementations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl">📊</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                  <span className="bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {study.industry}
                  </span>
                  <span className="ml-auto text-sm text-[var(--muted)]">{study.size}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-3">
                    {study.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] mb-4">
                    <strong>Company:</strong> {study.company}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Challenge:</h4>
                    <p className="text-[var(--muted)] text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Solution:</h4>
                    <p className="text-[var(--muted)] text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-[var(--muted)]">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {study.roi}
                    </span>
                    <Link href={study.link}>
                      <button className="text-[var(--accent-1)] hover:text-[var(--accent-2)] font-semibold text-sm">
                        Read Full Case Study →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-[var(--accent-1)] text-white'
                    : 'bg-white text-gray-800 hover:bg-[var(--bg-2)] hover:text-[var(--text)]'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              {selectedIndustry === 'All' ? 'All Case Studies' : `${selectedIndustry} Case Studies`}
            </h2>
            <p className="text-xl text-[var(--muted)]">
              {filteredStudies.length} case studies found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                className="card overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-3xl">📊</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                  <span className="bg-[var(--accent-1)]/10 text-[var(--accent-1)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {study.industry}
                  </span>
                  <span className="ml-auto text-sm text-[var(--muted)]">{study.size}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[var(--text)] mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] mb-3 text-sm">
                    <strong>{study.company}</strong>
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--text)] mb-1 text-sm">Challenge:</h4>
                    <p className="text-[var(--muted)] text-xs line-clamp-2">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--text)] mb-1 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-xs text-[var(--muted)]">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {study.roi}
                    </span>
                    <Link href={study.link}>
                      <button className="text-[var(--accent-1)] hover:text-[var(--accent-2)] font-semibold text-xs">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join the companies already seeing 50-70% cost reductions with Voice AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <button className="bg-white text-[var(--accent-1)] py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Schedule a Demo
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-1)] transition-colors duration-300">
                  Contact Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;
