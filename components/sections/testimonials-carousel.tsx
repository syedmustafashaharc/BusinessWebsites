"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import products from "@/data/products.json";

const TestimonialsCarousel = () => {
  const { testimonials } = products;
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIdx((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIdx];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-foreground/60">
            Real testimonials from real happy customers
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 sm:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl mb-8 text-foreground/80 italic">
                "{currentTestimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-foreground/60 text-sm">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIdx
                      ? "bg-orange-500 w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-8 text-foreground/60 text-sm">
            {currentIdx + 1} of {testimonials.length}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {[
            { label: "4.9★", text: "Avg Rating" },
            { label: "500+", text: "Happy Customers" },
            { label: "15y+", text: "Experience" },
          ].map((badge, idx) => (
            <div key={idx} className="glass rounded-xl p-6 text-center">
              <div className="text-2xl font-bold gradient-text mb-2">
                {badge.label}
              </div>
              <div className="text-sm text-foreground/60">{badge.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
