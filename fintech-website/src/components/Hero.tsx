'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4 mr-2" />
            #1 Financial Platform
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            The Future of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Finance
            </span>
            <br />
            is Here
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Experience seamless banking, smart investments, and secure transactions
            all in one revolutionary platform designed for the modern world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-semibold text-lg">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
              <p className="text-gray-600 text-center">256-bit encryption and multi-factor authentication</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-center">Instant transactions and real-time processing</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Analytics</h3>
              <p className="text-gray-600 text-center">AI-powered insights and financial planning</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 right-10 hidden lg:block"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl shadow-xl opacity-80"></div>
      </motion.div>

      <motion.div
        animate={{
          y: [10, -10, 10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-1/4 left-10 hidden lg:block"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full shadow-xl opacity-80"></div>
      </motion.div>
    </section>
  );
};

export default Hero;