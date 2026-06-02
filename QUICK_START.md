# Quick Start Guide - Sallo Cuts Website

Get up and running in 5 minutes!

## 📦 Installation

### 1. Install Node Dependencies
```bash
npm install
```

### 2. Create Environment File
```bash
# Copy the example environment file
cp .env.local.example .env.local

# Edit with your keys (optional for development)
# nano .env.local
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Quick Customization

### Change Shop Name/Owner
Edit `components/navbar.tsx` and `components/footer.tsx`:
- Search for "Sallo Cuts" and replace with your shop name
- Update "Salman Tahir" with owner name

### Update Products
Edit `data/products.json`:
```json
{
  "id": 1,
  "name": "Your Product Name",
  "price": "£XX.XX",
  "description": "Your product description",
  "category": "Category Name"
}
```

### Change Contact Info
Edit `components/footer.tsx`:
- Address
- Phone number
- Email
- Opening hours

### Update Colors
Edit `tailwind.config.ts`:
```ts
accent: "12 75% 51%", // Change RGB values
primary: "12 75% 51%"
```

## 🚀 Deploy (Free)

### Option 1: Deploy to Vercel (Recommended)
1. Push to GitHub: `git push`
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variables
6. Click "Deploy"
✅ Live in 2 minutes!

### Option 2: Deploy to Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repo
5. Build command: `npm run build`
6. Deploy folder: `.next`
✅ Live in 2 minutes!

## 💳 Enable Payments (Stripe)

### 1. Get Stripe Keys
- Go to [stripe.com](https://stripe.com)
- Create account
- Get API keys from Dashboard

### 2. Add to Environment
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 3. Test Payments
Use Stripe test cards:
- `4242 4242 4242 4242` - Success
- `4000 0000 0000 0002` - Decline

## 📧 Enable Email Signup (Mailchimp)

### 1. Setup Mailchimp
- Go to [mailchimp.com](https://mailchimp.com)
- Create account & audience
- Get API key from Admin

### 2. Add to Environment
```env
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_AUDIENCE_ID=your_list_id
MAILCHIMP_SERVER_PREFIX=us21
```

### 3. Test Newsletter
Try subscribing from the website!

## 📱 Preview

The site includes:
- ✅ Responsive mobile design
- ✅ Dark/light mode toggle
- ✅ Product gallery
- ✅ Order booking modal
- ✅ Smooth animations
- ✅ Testimonials carousel
- ✅ Special offers banner
- ✅ Contact form
- ✅ Newsletter signup

## 🔧 Common Tasks

### Add a New Product
1. Open `data/products.json`
2. Add new object to `products` array
3. Fill in: id, name, category, price, description, image
4. Save and refresh

### Change Hero Text
Open `components/sections/hero.tsx`:
- Line 40: Main heading
- Line 50: Subheading
- Line 57: CTA buttons

### Update Opening Hours
Open `components/footer.tsx`:
- Find "Opening Hours" section
- Update days and times

### Change Theme Color
Edit `tailwind.config.ts`:
```ts
accent: "12 75% 51%"  // Orange (HSL format)
// Change 12 (hue), 75 (saturation), 51 (lightness)
```

## 🎨 Image Handling

### Product Images
- Currently using Unsplash URLs
- Replace with your own images:
  1. Upload to image hosting (Cloudinary, Imgix, etc.)
  2. Update URLs in `data/products.json`

### Hero Images
- Background gradients are CSS-based (no images needed)
- Edit `components/sections/hero.tsx` for visual changes

### Testimonial Images
- Update image URLs in `data/products.json` testimonials section

## 📋 Deployment Checklist

Before going live:
- [ ] Update all business info (address, phone, hours)
- [ ] Replace all product images
- [ ] Get Stripe production keys
- [ ] Get Mailchimp API key
- [ ] Test contact form
- [ ] Test order modal
- [ ] Test newsletter signup
- [ ] Test dark/light mode
- [ ] Test on mobile devices
- [ ] Check Google PageSpeed
- [ ] Add Google Analytics

## 🆘 Common Issues

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Dependencies error?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images not loading?
- Check URL is valid and public
- Ensure image URL is HTTPS
- Add domain to `next.config.js` if needed

### Animations stuttering?
- Check on modern browser (Chrome, Firefox, Safari)
- Disable browser extensions
- Clear browser cache

## 📚 Next Steps

1. **Customize**: Update business info and products
2. **Test**: Run locally and test all features
3. **Deploy**: Push to Vercel or Netlify
4. **Monitor**: Set up analytics and error tracking
5. **Maintain**: Keep dependencies updated

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Stripe Docs](https://stripe.com/docs)

## 💬 Support

Need help?
1. Check the main [README.md](./README.md)
2. Check the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
3. Check platform documentation:
   - [Vercel Docs](https://vercel.com/docs)
   - [Netlify Docs](https://docs.netlify.com)

---

**Ready to launch?** You're just 3 steps away from a live website!
