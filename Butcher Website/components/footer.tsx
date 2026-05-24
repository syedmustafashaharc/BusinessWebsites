"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: ["Beef Cuts", "Pork Cuts", "Lamb Cuts", "Poultry", "Specialties"],
    Company: ["About Us", "Blog", "Careers", "Press"],
    Support: ["Contact", "FAQ", "Shipping Info", "Returns"],
    Legal: ["Privacy Policy", "Terms & Conditions", "Cookies"],
  };

  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-b from-transparent to-black/20 dark:to-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold">SC</span>
              </div>
              <span className="font-bold text-xl gradient-text">Sallo Cuts</span>
            </div>
            <p className="text-foreground/60 text-sm mb-4">
              Premium butcher shop in London, curating the finest hand-cut meats
              since 2015.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <p className="text-foreground/70">
                  123 Brick Lane, London, E1 6PU
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <p className="text-foreground/70">(020) 7123 4567</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <p className="text-foreground/70">hello@sallocuts.co.uk</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map((category, idx) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{category[0]}</h4>
              <ul className="space-y-2">
                {category[1].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 py-8 border-t border-white/10"
        >
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              Opening Hours
            </h4>
            <div className="text-sm text-foreground/70 space-y-1">
              <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
              <p>Saturday: 8:00 AM - 6:00 PM</p>
              <p>Sunday: 9:00 AM - 5:00 PM</p>
              <p>Bank Holidays: Closed</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center text-foreground/50 text-sm"
        >
          <p>
            © {currentYear} Sallo Cuts. All rights reserved. Owned by Salman
            Tahir.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
