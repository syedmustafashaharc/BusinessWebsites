"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface OrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const price = parseFloat(product.price.replace("£", ""));
  const total = (price * quantity).toFixed(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order submission
    setTimeout(() => {
      alert(
        `Order confirmed!\n\n${quantity}x ${product.name}\nTotal: £${total}\n\nWe'll send you a confirmation email shortly.`
      );
      setIsSubmitting(false);
      onClose();
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
      });
      setQuantity(1);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-white/10 shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-card">
                <h2 className="text-2xl font-bold">Book Order</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Product Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-foreground/60 mb-6">
                      {product.description}
                    </p>

                    {/* Quantity Selector */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-3">
                        Quantity
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() =>
                            setQuantity(Math.max(1, quantity - 1))
                          }
                          className="p-2 rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-2xl font-bold w-8 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-2 rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price Summary */}
                    <div className="space-y-2 p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Unit Price:</span>
                        <span>{product.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Quantity:</span>
                        <span>{quantity}x</span>
                      </div>
                      <div className="h-px bg-white/10 my-2"></div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="gradient-text">£{total}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Order Form */}
                  <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="Street address"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Postal Code *
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="Postal code"
                        />
                      </div>
                    </div>

                    {/* Payment Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {isSubmitting
                        ? "Processing..."
                        : `Pay £${total} (Stripe)`}
                    </button>

                    <p className="text-xs text-foreground/50 text-center">
                      Secure payment powered by Stripe
                    </p>
                  </motion.form>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
