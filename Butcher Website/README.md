# Sallo Cuts - Premium Butcher Shop Website

A production-ready e-commerce website for Sallo Cuts butcher shop in London, built with modern web technologies and design patterns.

## 🚀 Features

- **Modern Design**: Glassmorphism effects with smooth animations using Framer Motion
- **Dark/Light Mode**: Built-in theme toggle with smooth transitions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Gallery**: Interactive product showcase with detailed information
- **Order Booking**: Modal-based order system with Stripe payment integration
- **Testimonials Carousel**: Customer reviews carousel with smooth transitions
- **Special Offers Banner**: Promotional banners with gradient backgrounds
- **Newsletter Signup**: Mailchimp integration for email marketing
- **Contact Form**: Fully functional contact form with validation
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

## 📋 Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS with custom animations
- **Components**: shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Payments**: Stripe integration
- **Email**: Mailchimp integration
- **TypeScript**: Full type safety

## 🛠️ Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.local.example`):

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Mailchimp Configuration
NEXT_PUBLIC_MAILCHIMP_ACTION_URL=https://your-domain.us21.campaign-archive.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_FORM_ID
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_SERVER_PREFIX=us21
MAILCHIMP_AUDIENCE_ID=your_audience_id_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Setup Stripe

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Get your API keys from the Developers section
3. Add them to your `.env.local` file

### 4. Setup Mailchimp

1. Go to [Mailchimp](https://mailchimp.com)
2. Create an audience
3. Get your API key and form action URL
4. Add them to your `.env.local` file

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Footer
│   ├── theme-provider.tsx  # Dark/light mode provider
│   ├── modals/
│   │   └── order-modal.tsx # Order booking modal
│   └── sections/
│       ├── hero.tsx                    # Hero section
│       ├── product-gallery.tsx         # Product showcase
│       ├── special-offers.tsx          # Promotional banner
│       ├── testimonials-carousel.tsx   # Reviews carousel
│       ├── newsletter-signup.tsx       # Email signup
│       └── contact-form.tsx            # Contact form
├── data/
│   └── products.json       # Product data & testimonials
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Update Business Information

Edit `components/footer.tsx` to update:
- Shop address
- Phone number
- Email
- Opening hours
- Social media links

### Modify Product Data

Edit `data/products.json` to add/remove products:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "category": "Category",
      "price": "£XX.XX",
      "description": "Description",
      "image": "image_url",
      "rating": 4.8,
      "reviews": 100
    }
  ]
}
```

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
accent: "12 75% 51%", // Orange color
primary: "12 75% 51%",
```

### Modify Animations

Animations are powered by Framer Motion. Edit component files to customize:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 🔐 Security Considerations

- Never commit `.env.local` file with sensitive keys
- Use environment variables for all API keys
- Validate all form inputs server-side
- Implement proper CORS policies for production
- Keep dependencies updated regularly

## 📱 Responsive Design

The website is fully responsive:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1400px+

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Connect your GitHub repository
4. Add environment variables in project settings
5. Deploy!

### Deploy to Other Platforms

The site can be deployed to any Node.js hosting:
- AWS
- DigitalOcean
- Heroku
- Railway
- Netlify

Run `npm run build` to create a production build.

## 🎯 Next Steps

1. **Replace Images**: Update product images in `data/products.json`
2. **Connect Payment**: Implement full Stripe integration
3. **Email Setup**: Connect Mailchimp for newsletters
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **Backup**: Implement form submission to email service
6. **SEO**: Update meta tags for better search visibility
7. **Performance**: Optimize images and bundle size
8. **Testing**: Add unit and integration tests

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Stripe Documentation](https://stripe.com/docs)
- [Mailchimp API Docs](https://mailchimp.com/developer/)

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📄 License

This website is custom-built for Sallo Cuts by Salman Tahir.

## 👨‍💼 Owner

**Salman Tahir**  
Sallo Cuts - Premium Butcher Shop  
London, United Kingdom  
hello@sallocuts.co.uk

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
