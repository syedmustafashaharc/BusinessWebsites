"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium gradient-text">
              From the Butcher&apos;s Block
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Expert guides on cuts, cooking methods, and getting the most from
            your meat.
          </p>
        </motion.div>

        {/* Blog cards */}
        <div className="space-y-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Link href={`/blog/${blog.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition-colors duration-300 bg-card shadow-md hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-56 sm:h-72 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-4 text-white/80 text-sm">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-200">
                      {blog.title}
                    </h2>
                    <p className="text-foreground/60 mb-4">{blog.summary}</p>
                    <span className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-semibold">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
