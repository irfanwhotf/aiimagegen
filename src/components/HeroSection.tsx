import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-900/20 to-transparent">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Genova AI Image Generator
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Effortlessly create stunning images with advanced AI technology
      </p>
      <Link href="/generate">
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
          Start Generating Images
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
