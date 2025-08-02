// ✅ Modern Home Page UI (Next.js + Tailwind CSS)
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-white dark:bg-[#0f0f0f] text-black dark:text-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="space-y-8 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
          >
            Build the Future with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Codeservir.in
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto md:mx-0"
          >
            Explore AI, coding tutorials, tech tools, startup guides, and career tips all tailored for the Indian tech ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Link
              href="/public-note"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Explore Public Notes
            </Link>
            <Link
              href="/newsletter"
              className="border border-blue-600 text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition"
            >
              Subscribe to Newsletter
            </Link>
          </motion.div>
        </div>

        {/* Right-side Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["AI News in India", "Coding & Careers", "How-To Guides", "Tech Reviews"].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 + idx * 0.2 }}
              className="p-6 bg-gray-100 dark:bg-[#1e1e1e] rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold">{feature}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Get the latest, curated for developers and creators in India.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
