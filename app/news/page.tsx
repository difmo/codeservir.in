'use client';
import React from 'react';

export default function NewsletterPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Join Our Newsletter</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Get the latest tech updates, AI tool reviews, and coding resources in your inbox weekly.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded bg-gray-100 dark:bg-[#1e1e1e] w-full sm:w-auto"
          />
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
