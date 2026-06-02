# GitHub & Vercel Deployment Guide

Complete step-by-step guide to deploy your Sallo Cuts website to GitHub and Vercel.

## 🚀 Part 1: Initialize Git & Commit Locally

### Step 1: Open Your Project in Terminal

```bash
cd /path/to/Butcher\ Website
# Or on Windows:
cd "C:\Users\MustafaShah\OneDrive\DEVELOPMENT\Butcher website\Butcher Website"
```

### Step 2: Initialize Git Repository

```bash
# Initialize git with main as default branch
git init -b main

# Configure git with your details
git config user.email "syedmustafashah@gmail.com"
git config user.name "Salman Tahir"

# Verify configuration
git config user.email
git config user.name
```

### Step 3: Add All Files to Git

```bash
# Add all files to git staging
git add .

# Check what will be committed
git status
```

### Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Production-ready Sallo Cuts website

Features:
- Next.js 15 with React 19
- Tailwind CSS with glassmorphism effects
- Dark/Light mode toggle
- Framer Motion animations
- Product gallery with order modal
- Stripe payment integration
- Mailchimp newsletter integration
- Responsive design
- Complete API routes
- Full documentation"
```

### Step 5: Verify Commit

```bash
# Check git log
git log

# Check branches
git branch -a
```

---

## 📦 Part 2: Create GitHub Repository & Push Code

### Step 1: Create Repository on GitHub

1. Go to **[github.com](https://github.com)**
2. Click **"+ New"** in top left corner (or go to **github.com/new**)
3. Fill in details:
   - **Repository name**: `sallo-cuts` (or your preferred name)
   - **Description**: `Premium butcher shop website built with Next.js 15, Tailwind CSS, and Stripe integration`
   - **Visibility**: Select "Public" (for portfolio) or "Private" (for business only)
   - **Initialize repository**: DO NOT check any boxes (we're pushing existing code)
4. Click **"Create repository"**

### Step 2: Add Remote & Push Code

After creating the repo, GitHub shows you the push commands. Run these:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/sallo-cuts.git

# Rename branch to main if needed (usually already is)
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

### Step 3: Verify on GitHub

1. Go to your new repository: `github.com/YOUR_USERNAME/sallo-cuts`
2. You should see all your files uploaded
3. Check commits: Click **"Commits"** to see your commit history

---

## 🚀 Part 3: Deploy to Vercel

### Step 1: Go to Vercel Dashboard

1. Visit **[vercel.com](https://vercel.com)**
2. Sign up (or log in) with GitHub
3. You'll see your GitHub account connected

### Step 2: Import Project from GitHub

1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Search for your repository: `sallo-cuts`
4. Click **"Import"**

### Step 3: Configure Project Settings

**Framework Preset**: Should automatically detect Next.js
- If not, select **"Next.js"** from dropdown

**Build and Output Settings**:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Leave these as defaults (auto-detected).

### Step 4: Add Environment Variables

This is **CRITICAL** for production!

1. In Vercel dashboard, go to **"Environment Variables"**
2. Add each variable (for development, we'll use test keys):

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY = sk_test_YOUR_SECRET_KEY_HERE
NEXT_PUBLIC_MAILCHIMP_ACTION_URL = https://your-domain.us21.campaign-archive.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_FORM_ID
MAILCHIMP_API_KEY = your_mailchimp_api_key
MAILCHIMP_SERVER_PREFIX = us21
MAILCHIMP_AUDIENCE_ID = your_audience_id
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

**Note**: Leave empty for now if you don't have these yet. You can add them later.

### Step 5: Deploy

1. Click **"Deploy"**
2. Vercel will:
   - Install dependencies
   - Build your project
   - Deploy to CDN
3. Wait for it to finish (usually 1-3 minutes)

### Step 6: Get Your Live URL

After deployment succeeds:
- You'll see a URL like: `https://sallo-cuts-abc123.vercel.app`
- This is your live website! 🎉

---

## 🎯 Part 4: Setup Custom Domain

### Step 1: Add Domain in Vercel

1. In Vercel dashboard → **"Domains"**
2. Enter your domain: `sallocuts.co.uk` (or your domain)
3. Click **"Add"**

### Step 2: Configure DNS

Vercel shows DNS records you need to add. Options:

**Option A: Nameserver Change (Recommended)**
- Update your domain registrar's nameservers to Vercel's:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`
  - `ns3.vercel-dns.com`
  - `ns4.vercel-dns.com`

**Option B: Add DNS Records Manually**
If your registrar doesn't support nameserver changes:
1. Add A record: `sallo-cuts-abc123.vercel.app` to your domain IP
2. Add CNAME record for www subdomain

### Step 3: SSL Certificate

- Vercel automatically generates and renews SSL certificates
- HTTPS is automatic ✅

### Step 4: Verify Domain

- After DNS propagates (5 minutes to 48 hours):
  - Your domain will work: `https://sallocuts.co.uk`
  - Automatic HTTPS redirect

---

## 🔄 Automatic Deployments

After setup, every time you:

```bash
git push origin main
```

Vercel automatically:
1. Detects the push
2. Rebuilds your site
3. Deploys new version
4. Sends you notification

No manual deployment needed!

---

## 📝 Update Environment Variables Later

If you set them up later:

1. Go to Vercel Dashboard
2. Project → **"Settings"** → **"Environment Variables"**
3. Add/update variables
4. Redeploy: Click **"Deployments"** → **"Redeploy"** on latest

---

## 🛠️ Common Issues & Solutions

### Issue: Build Fails on Vercel

**Solution:**
```bash
# Try building locally first
npm run build

# Check for errors, fix them locally
# Then push to GitHub
git add .
git commit -m "Fix build errors"
git push origin main
```

### Issue: Environment Variables Not Working

**Solution:**
1. Verify variable names match exactly in code
2. Check for typos in variable keys
3. Redeploy after adding variables:
   - Deployments → "..." menu → "Redeploy"

### Issue: Custom Domain Not Working

**Solution:**
1. Wait up to 48 hours for DNS propagation
2. Check DNS records are correct:
   - `nslookup sallocuts.co.uk` (Mac/Linux)
   - `nslookup sallocuts.co.uk` (Windows)
3. Try clearing browser cache
4. Contact Vercel support if still issues

### Issue: Stripe Webhooks Not Working

**Solution:**
1. In Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe`
3. Add signing secret to environment: `STRIPE_WEBHOOK_SECRET`

---

## 📊 Monitor Your Deployment

### View Logs

1. Go to Vercel Dashboard
2. Click **"Deployments"** tab
3. Click on a deployment
4. Click **"Logs"** to see build/runtime logs

### Check Performance

1. Click **"Analytics"** tab
2. View:
   - Web Core Vitals
   - Traffic statistics
   - Error rates

### Enable Monitoring

1. Settings → **"Analytics"** → Enable
2. Get insights into performance
3. Set up alerts for errors

---

## 🔐 Security Checklist

Before going live with real data:

- [ ] Use production Stripe keys (not test keys)
- [ ] Use production Mailchimp credentials
- [ ] Enable HTTPS (automatic)
- [ ] Set strong environment variables
- [ ] Never commit `.env.local` to GitHub
- [ ] Review security headers in `next.config.js`
- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Enable CORS properly
- [ ] Test all forms thoroughly

---

## 📚 Next Steps After Deployment

1. **Setup Custom Domain**
   - Follow Part 4 above
   - Point domain DNS to Vercel

2. **Add Real API Keys**
   - Get Stripe production keys
   - Get Mailchimp production credentials
   - Update environment variables

3. **Configure Webhooks**
   - Stripe webhooks for payments
   - Test payment flow end-to-end

4. **Setup Email Service**
   - Configure contact form email delivery
   - Setup order confirmation emails
   - Configure newsletter emails

5. **Monitor & Maintain**
   - Check deployment logs regularly
   - Monitor errors and performance
   - Keep dependencies updated

6. **Analytics & SEO**
   - Add Google Analytics
   - Submit to Google Search Console
   - Add structured data/schema

---

## 🆘 Get Help

### Vercel Support
- **Docs**: https://vercel.com/docs
- **Community**: https://vercel.com/discussions
- **Support**: Contact from dashboard

### GitHub Support
- **Docs**: https://docs.github.com
- **Support**: https://support.github.com

### Your Project Guides
- **README.md** - Setup & customization
- **QUICK_START.md** - Quick reference
- **PROJECT_SUMMARY.md** - What's included

---

## ✅ Deployment Complete Checklist

Once deployed to Vercel:

- [ ] Website is live at Vercel URL
- [ ] Custom domain working (if configured)
- [ ] HTTPS is enabled
- [ ] All pages load correctly
- [ ] Dark/light mode works
- [ ] Product gallery displays properly
- [ ] Contact form works
- [ ] Newsletter signup works
- [ ] Order modal opens and functions
- [ ] Mobile responsive design works
- [ ] Images load correctly
- [ ] Animations are smooth
- [ ] No console errors

---

## 🎉 You're Live!

Your Sallo Cuts website is now:
- ✅ On GitHub (version controlled)
- ✅ Deployed on Vercel (live for the world)
- ✅ Auto-deploys on every push
- ✅ Has custom domain (optional)
- ✅ HTTPS secured
- ✅ Ready for business!

**Enjoy your new website! 🚀**

---

**Questions?** See the main README.md or QUICK_START.md for more help.
