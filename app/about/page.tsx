'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">About Codeservir.in</h1>
        <p className="text-gray-700 dark:text-gray-300">
          We are a tech-first platform focused on Indian creators and developers. From AI innovations to productivity tools, we share tutorials, reviews, and tools that empower learners and builders alike.
        </p>
      </div>
    </section>
  );
}
