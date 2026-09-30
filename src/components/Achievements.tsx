import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  "President at Green Club Committee (UNICEF)",
  "Poster Presentation — 2nd Rank",
  "Profound Edutech Full Stack Java Certified",
  "Python for Data Analysis Certified",
  "College Event Anchoring",
  "400+ LeetCode Problems Solved",
  "Myntra WeForShe HackerRamp 2026 — Top 100 Team",
  "Internshala Student Partner"
];

const Achievements = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-5xl font-editorial font-medium text-foreground text-center">
          Milestones & Achievements
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...achievements, ...achievements].map((item, index) => (
            <div key={index} className="mx-4 md:mx-8 px-6 py-3 border border-gray-200 rounded-full bg-white shadow-sm hover:border-gray-400 hover:shadow-md transition-all text-sm md:text-base font-medium text-gray-700">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
