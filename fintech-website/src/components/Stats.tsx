'use client';

import { motion } from 'framer-motion';
import { Users, DollarSign, Globe, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CountUpAnimationProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const CountUpAnimation = ({ end, duration = 2000, prefix = '', suffix = '' }: CountUpAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setHasAnimated(true);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, hasAnimated]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Users,
      value: 2500000,
      suffix: '+',
      label: 'Active Users',
      description: 'Trust our platform worldwide',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      value: 50,
      suffix: 'B+',
      label: 'Transaction Volume',
      description: 'Processed securely every month',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      value: 180,
      suffix: '+',
      label: 'Countries',
      description: 'Global reach and coverage',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      value: 99.9,
      suffix: '%',
      label: 'Uptime',
      description: 'Reliable service 24/7',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted by millions
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}worldwide
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our numbers speak for themselves. Join a growing community of users who have transformed
            their financial lives with our innovative platform.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: {
              duration: 0.8,
              staggerChildren: 0.2
            }
          }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {isVisible && (
                    <CountUpAnimation 
                      end={stat.value} 
                      suffix={stat.suffix}
                      duration={2000 + index * 200}
                    />
                  )}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Award-winning platform
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recognized by industry leaders for innovation, security, and user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Best Fintech App 2024</h4>
                <p className="text-gray-600 text-sm">Financial Innovation Awards</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Security Excellence</h4>
                <p className="text-gray-600 text-sm">CyberSecurity Summit 2024</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">5-Star User Rating</h4>
                <p className="text-gray-600 text-sm">App Store & Google Play</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;