"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

const Counter = ({
  to,
  suffix,
}: {
  to: number;
  suffix: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, to, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const MagneticButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 20 });
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const STATS = [
  { to: 15, suffix: "+", label: "Years Experience" },
  { to: 500, suffix: "+", label: "Happy Customers" },
  { to: 30, suffix: "+", label: "Premium Cuts" },
];

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-600/10" />

        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute w-[28rem] h-[28rem] bg-orange-500/20 rounded-full blur-3xl"
              animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.12, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "12%", right: "6%" }}
            />
            <motion.div
              className="absolute w-80 h-80 bg-red-600/15 rounded-full blur-3xl"
              animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: "18%", left: "6%" }}
            />
            <motion.div
              className="absolute w-64 h-64 bg-amber-500/10 rounded-full blur-2xl"
              animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "55%", left: "42%" }}
            />
          </>
        )}
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <motion.div
            className="glass px-4 py-2 rounded-full"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span className="text-sm font-medium gradient-text">
              Premium Butcher in London
            </span>
          </motion.div>
        </motion.div>

        {/* Heading */}
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
          Hand-selected cuts from the finest suppliers. Every piece is chosen
          for excellence, prepared with precision, and delivered fresh to your
          door.
        </motion.p>

        {/* Magnetic CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <MagneticButton
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-shadow duration-300 cursor-pointer"
          >
            Browse Our Products
          </MagneticButton>
          <MagneticButton
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-lg border border-white/20 text-foreground font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur cursor-pointer"
          >
            Place an Order
          </MagneticButton>
        </motion.div>

        {/* Animated stat counters */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 max-w-2xl mx-auto"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass px-6 py-4 rounded-xl"
              whileHover={
                prefersReducedMotion ? {} : { scale: 1.06, y: -3 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <div className="text-2xl font-bold gradient-text">
                <Counter to={stat.to} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-foreground/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
