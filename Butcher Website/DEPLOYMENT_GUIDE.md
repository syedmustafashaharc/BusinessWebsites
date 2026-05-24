# Deployment Guide - Sallo Cuts Website

Complete guide to deploy your Sallo Cuts website to production.

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

Vercel is optimized for Next.js and offers the easiest deployment experience.

#### Prerequisites
- GitHub account
- Vercel account (free tier available)

#### Steps

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sallo-cuts.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "Next.js" framework (auto-detected)
   - Click "Deploy"

3. **Configure Environment Variables**
   - In Vercel Dashboard: Settings → Environment Variables
   - Add all variables from `.env.local`:
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `STRIPE_SECRET_KEY`
     - `NEXT_PUBLIC_MAILCHIMP_ACTION_URL`
     - `MAILCHIMP_API_KEY`
     - `MAILCHIMP_SERVER_PREFIX`
     - `MAILCHIMP_AUDIENCE_ID`
     - `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
     - `STRIPE_WEBHOOK_SECRET` (for webhooks)

4. **Set Custom Domain**
   - In Vercel Dashboard: Settings → Domains
   - Add your domain (e.g., sallocuts.co.uk)
   - Follow DNS configuration steps
   - SSL certificate is automatic

5. **Automatic Deployments**
   - Every push to main branch triggers automatic deployment
   - Preview deployments for pull requests

### Option 2: Deploy to AWS (EC2)

For more control and scalability.

#### Prerequisites
- AWS Account
- EC2 instance (Ubuntu 22.04)
- Domain name

#### Steps

1. **Launch EC2 Instance**
   - Go to AWS EC2 Dashboard
   - Create new instance
   - Select Ubuntu 22.04 LTS
   - Choose `t3.micro` (free tier eligible)
   - Configure security group (allow ports 80, 443, 22)
   - Download key pair (.pem file)

2. **SSH into Instance**
   ```bash
   chmod 400 your-key.pem
   ssh -i your-key.pem ubuntu@your-ec2-public-ip
   ```

3. **Install Dependencies**
   ```bash
   sudo apt update
   sudo apt install nodejs npm nginx
   ```

4. **Clone Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/sallo-cuts.git
   cd sallo-cuts
   ```

5. **Install & Build**
   ```bash
   npm install
   npm run build
   ```

6. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```
   
   Add:
   ```nginx
   server {
     listen 80 default_server;
     listen [::]:80 default_server;
     server_name yourdomain.com www.yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

7. **Install SSL (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

8. **Start Application**
   ```bash
   npm start
   ```
   
   Or use PM2 for production:
   ```bash
   sudo npm install -g pm2
   pm2 start "npm start" --name "sallo-cuts"
   pm2 startup
   pm2 save
   ```

9. **Point DNS to EC2 Instance**
   - Update your domain DNS A record to EC2 public IP

### Option 3: Deploy to DigitalOcean

Budget-friendly option with app platform.

#### Steps

1. **Create App on App Platform**
   - Go to DigitalOcean → Apps
   - Click "Create App"
   - Connect GitHub repository
   - Select main branch
   - Environment: Node.js
   - Build command: `npm run build`
   - Run command: `npm start`

2. **Configure Environment Variables**
   - In App settings, add all `.env` variables
   - Add Stripe webhook secret

3. **Deploy**
   - Click "Deploy App"
   - DigitalOcean handles SSL and domain

4. **Custom Domain**
   - After deployment, go to settings
   - Add custom domain
   - Update DNS records

### Option 4: Deploy to Railway

Simple and affordable platform.

#### Steps

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub"
   - Authorize GitHub
   - Select your repository

2. **Configure Environment**
   - Add all environment variables
   - Railway will detect Next.js automatically

3. **Deploy**
   - Click "Deploy"
   - Your app is live in seconds

4. **Custom Domain**
   - In project settings → Domains
   - Add custom domain
   - Update DNS records

## 🔧 Post-Deployment Checklist

### Monitoring & Logging
- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Configure analytics (Google Analytics, Vercel Analytics)
- [ ] Set up uptime monitoring (Uptime Robot)
- [ ] Enable logging for Stripe webhooks

### Security
- [ ] Enable HTTPS (automatic on most platforms)
- [ ] Set up WAF (Web Application Firewall)
- [ ] Configure CORS properly
- [ ] Add security headers via next.config.js
- [ ] Set up environment variable encryption

### Performance
- [ ] Enable caching headers
- [ ] Optimize images
- [ ] Set up CDN (Cloudflare recommended)
- [ ] Monitor Core Web Vitals
- [ ] Test with Lighthouse

### Stripe Integration
- [ ] Add production Stripe keys to environment
- [ ] Set up webhook endpoint in Stripe Dashboard
- [ ] Webhook URL: `https://yourdomain.com/api/stripe`
- [ ] Test payment flow in production

### Mailchimp Integration
- [ ] Verify Mailchimp API credentials
- [ ] Test newsletter signup
- [ ] Set up double opt-in
- [ ] Configure automation emails

### Email Notifications
- [ ] Set up email service for contact form
- [ ] Configure order confirmation emails
- [ ] Set up admin notification emails
- [ ] Test all email flows

### Backups
- [ ] Set up database backups (if using DB)
- [ ] Configure automatic backups
- [ ] Test restore process
- [ ] Document backup procedure

## 🛡️ Security Hardening

### Add Security Headers
Update `next.config.js`:

```js
const nextConfig = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
};
```

### Environment Variables
- Never commit `.env.local`
- Use platform-specific secrets management
- Rotate keys regularly
- Use strong random keys

### HTTPS Enforcement
All platforms handle this automatically, but verify:
- Redirects HTTP to HTTPS
- HSTS headers enabled
- SSL certificates valid

## 📊 Monitoring & Maintenance

### Performance Monitoring
```bash
# Check bundle size
npm run build
npm run analyze  # (add to scripts)
```

### Health Checks
- Set up regular health checks
- Monitor API response times
- Track error rates
- Monitor database performance

### Updates
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update major versions carefully
npm install @latest next
```

## 🆘 Troubleshooting

### Build Failures
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Stripe Not Working
- Verify API keys are correct
- Check webhook endpoint is accessible
- Review Stripe Dashboard logs
- Test with Stripe test cards

### Emails Not Sending
- Verify Mailchimp API key
- Check email validation logic
- Review email service logs
- Test with test email address

### Performance Issues
- Check bundle size
- Enable caching headers
- Optimize images
- Use CDN for assets
- Check database queries

## 📈 Scaling

When you need to scale:

1. **Database**: Move to managed database service
2. **Static Assets**: Use CDN (Cloudflare, Bunny)
3. **Caching**: Implement Redis for sessions
4. **Load Balancing**: Use platform load balancing
5. **Auto-scaling**: Enable auto-scaling on platform

## 🔗 Useful Links

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Mailchimp API Documentation](https://mailchimp.com/developer/)
- [Vercel Documentation](https://vercel.com/docs)
- [AWS EC2 Guide](https://docs.aws.amazon.com/ec2/)

---

**Questions?** Check platform-specific documentation or contact platform support.
