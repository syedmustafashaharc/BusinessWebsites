"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mailchimp Integration
      // Replace with your actual Mailchimp form action
      const formData = new FormData();
      formData.append("EMAIL", email);

      // In production, use your Mailchimp action URL
      const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_ACTION_URL;

      if (mailchimpUrl) {
        // This would be handled by your backend in production
        await fetch(mailchimpUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
      }

      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Newsletter signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 sm:p-12 text-center border border-white/20"
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive deals, new product launches,
            and expert butchering tips delivered to your inbox.
          </p>

          {/* Form */}
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-orange-500 focus:outline-none transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-green-500 text-lg font-semibold"
            >
              <CheckCircle className="w-6 h-6" />
              <span>Successfully subscribed!</span>
            </motion.div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            {[
              "📧 Weekly tips",
              "🎁 Exclusive offers",
              "🚚 Early access",
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-sm text-foreground/70"
              >
                {benefit}
              </motion.div>
            ))}
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-foreground/50 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
