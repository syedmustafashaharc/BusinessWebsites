"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-600/10"></div>
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ top: "20%", right: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ bottom: "20%", left: "10%" }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="glass px-4 py-2 rounded-full">
            <span className="text-sm font-medium gradient-text">
              ✨ Premium Butcher in London
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Exceptional Meats,{" "}
          <span className="gradient-text">Uncompromising Quality</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8"
        >
          Hand-selected cuts from the finest suppliers. Every piece is chosen for
          excellence, prepared with precision, and delivered fresh to your door.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Browse Our Products
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-8 py-4 rounded-lg border border-white/20 text-foreground font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur"
          >
            Place an Order
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 max-w-2xl mx-auto"
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "500+", label: "Happy Customers" },
            { number: "30+", label: "Premium Cuts" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass px-6 py-4 rounded-xl"
            >
              <div className="text-2xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-foreground/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
