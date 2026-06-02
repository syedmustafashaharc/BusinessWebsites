"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { Star, ShoppingCart, Flame, Award, Trophy } from "lucide-react";
import products from "@/data/products.json";
import OrderModal from "@/components/modals/order-modal";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(products.products.map((p) => p.category))),
];

const BADGES: Record<number, { label: string; Icon: React.ElementType; color: string }> = {
  1: { label: "Popular", Icon: Flame, color: "bg-orange-500" },
  3: { label: "Top Rated", Icon: Trophy, color: "bg-red-600" },
  6: { label: "Premium", Icon: Award, color: "bg-amber-600" },
};

const ProductCard = ({
  product,
  variants,
  onSelect,
  prefersReducedMotion,
}: {
  product: (typeof products.products)[number];
  variants: Variants;
  onSelect: (p: (typeof products.products)[number]) => void;
  prefersReducedMotion: boolean | null;
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const badge = BADGES[product.id];

  return (
    <motion.div
      variants={variants}
      layout
      whileHover={prefersReducedMotion ? {} : { y: -6 }}
      transition={{ type: "spring", damping: 20, stiffness: 200 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-white/10 hover:border-orange-500/50 transition-colors duration-300 cursor-pointer shadow-md hover:shadow-xl hover:shadow-orange-500/10"
      onClick={() => onSelect(product)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        {/* Skeleton */}
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 bg-[length:200%_100%]" />
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          unoptimized
          onLoad={() => setImgLoaded(true)}
        />

        {/* Slide-up description overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-end p-4 pointer-events-none">
          <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Category pill */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/10">
          {product.category}
        </div>

        {/* Product badge */}
        {badge && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
            className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 ${badge.color} text-white text-xs font-semibold rounded-full shadow-lg`}
          >
            <badge.Icon className="w-3 h-3" />
            {badge.label}
          </motion.div>
        )}
      </div>

      {/* Card content */}
      <div className="p-4">
        <h3 className="font-bold text-base mb-2 line-clamp-1">{product.name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-orange-500 text-orange-500"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-foreground/60">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">{product.price}</span>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-colors duration-200 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Order
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products.products)[number] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const INITIAL_COUNT = 4;

  const filtered =
    activeCategory === "All"
      ? products.products
      : products.products.filter((p) => p.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 22, stiffness: 160 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.15 },
    },
  };

  const handleSelect = (product: (typeof products.products)[number]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section
      id="products"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Carefully curated selection of premium meats, hand-cut to perfection
            and delivered fresh to your table.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "text-white"
                  : "text-foreground/60 hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-600"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variants={itemVariants}
                onSelect={handleSelect}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all / Show less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 rounded-full border border-orange-500/50 text-orange-500 font-semibold hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300 cursor-pointer"
            >
              {showAll ? "Show Less" : `View All Products (${filtered.length})`}
            </button>
          </motion.div>
        )}
      </div>

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default ProductGallery;
