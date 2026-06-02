"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, Lightbulb } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-4 text-foreground/50 text-sm mb-4"
        >
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {blog.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime}
          </span>
        </motion.div>

        {/* Title + summary */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          {blog.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-foreground/60 text-lg mb-10 leading-relaxed"
        >
          {blog.summary}
        </motion.p>

        {/* Cut sections */}
        <div className="space-y-5">
          {blog.sections.map((section, idx) => (
            <motion.div
              key={section.cut}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx + 0.3 }}
              className="rounded-xl border border-white/10 bg-card p-5"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h2 className="text-lg font-bold">{section.cut}</h2>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full text-white ${section.tagColor}`}
                >
                  {section.tag}
                </span>
              </div>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Butcher's tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-5 flex gap-4"
        >
          <Lightbulb className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-orange-500 mb-1">
              Butcher&apos;s Tip
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {blog.tip}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
          className="mt-10 text-center"
        >
          <p className="text-foreground/60 mb-4">Ready to try these cuts?</p>
          <Link
            href="/#products"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-shadow duration-300 cursor-pointer"
          >
            Shop Our Products
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
