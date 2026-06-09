# Deployment Guide - VenportAI Portfolio

## Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free)
- EmailJS account configured (see EMAIL_SETUP.md)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - VenportAI portfolio"
git branch -M main
git remote add origin https://github.com/emmanuelpbabu-1612/venportai-portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Import your GitHub repository
4. Configure environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
pnpm add -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_EMAILJS_PUBLIC_KEY

# Deploy to production
vercel --prod
```

### Step 3: Configure Custom Domain (Optional)
1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain (e.g., emmanuelbabu.com)
3. Update DNS records as instructed by Vercel

## Build Commands

### Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
```

### Preview Build Locally
```bash
pnpm build
pnpm preview
```

## Environment Variables

Ensure these are set in Vercel:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | `service_abc123` |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID | `template_xyz789` |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | `abcDEF123ghiJKL` |

## Post-Deployment Checklist

- [ ] Environment variables configured in Vercel
- [ ] EmailJS service connected to Gmail
- [ ] Contact form tested and working
- [ ] All social media links verified
- [ ] Profile image displaying correctly
- [ ] Starfield animation working
- [ ] Responsive design tested on mobile
- [ ] SEO meta tags updated (if needed)

## Performance Optimization

The site is optimized with:
- Vite for fast builds
- React lazy loading
- Optimized images
- Minimal JavaScript bundle
- Static site generation

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 90+

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally with `pnpm dev`
4. Review EMAIL_SETUP.md for EmailJS config

---

**Live URL:** Will be provided after deployment
**Repository:** https://github.com/emmanuelpbabu-1612/venportai-portfolio
