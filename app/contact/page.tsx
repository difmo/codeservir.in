'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-100 dark:bg-[#1e1e1e]" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-100 dark:bg-[#1e1e1e]" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded bg-gray-100 dark:bg-[#1e1e1e]" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
