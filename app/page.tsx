import Hero from "@/components/sections/hero";
import ProductGallery from "@/components/sections/product-gallery";
import SpecialOffers from "@/components/sections/special-offers";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialOffers />
      <ProductGallery />
      <TestimonialsCarousel />
      <NewsletterSignup />
      <ContactForm />
    </>
  );
}
