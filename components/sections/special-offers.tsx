"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import products from "@/data/products.json";

const SpecialOffers = () => {
  const { specialOffers } = products;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-orange-500/5 dark:to-orange-500/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-orange-500" />
            Special Offers
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Limited time deals on our premium selections. Don't miss out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialOffers.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-8 text-white min-h-48 flex flex-col justify-between`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${offer.color} -z-10`}
              ></div>

              {/* Content */}
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  {offer.discount}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {offer.title}
                </h3>
                <p className="text-white/80 mb-4">{offer.description}</p>
              </div>

              {/* Validity */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/70">
                  {offer.validity}
                </span>
                <button className="px-6 py-2 rounded-lg bg-white text-orange-600 font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  Claim Now
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-6 text-center"
        >
          <p className="text-foreground/70">
            🎁 <span className="font-semibold">Loyalty Member?</span> Get
            exclusive early access to all our special offers. Sign up today!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;
