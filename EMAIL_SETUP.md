# Email Contact Form Setup Guide

## Overview
Your portfolio now has a fully functional contact form that sends emails directly to **emmanuelpbabu@gmail.com**.

## EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in the EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Click **Connect Account** and authorize with emmanuelpbabu@gmail.com
5. Copy your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template configuration:

**Template Name:** `Portfolio Contact Form`

**Email Subject:**
```
New Portfolio Contact — {{from_name}}
```

**Email Body (HTML):**
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Timestamp:</strong> {{timestamp}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p style="color: #666; font-size: 12px;">
  This email was sent from your portfolio contact form.
</p>
```

**To Email:** `emmanuelpbabu@gmail.com`

4. Click **Save** and copy your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcDEF123ghiJKL456`)

### Step 5: Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcDEF123ghiJKL456
```

**Important:** Replace the placeholder values with your actual EmailJS credentials.

### Step 6: Vercel Deployment Setup

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add these three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Make sure they're available for **Production**, **Preview**, and **Development**

## Features Included

✅ **Form Validation**
- Name (required)
- Email (required, valid format)
- Message (required, minimum 10 characters)

✅ **Spam Protection**
- Honeypot field (hidden from users)
- Rate limiting (60 seconds between submissions)

✅ **User Experience**
- Loading state with spinner while sending
- Success message: "Message transmitted successfully. I'll get back to you soon."
- Error handling with clear messages
- Auto-clear form after successful submission
- All existing styling and animations preserved

✅ **Email Format**
- Subject: "New Portfolio Contact — [Visitor Name]"
- Includes: Name, Email, Message, Timestamp
- Sent to: emmanuelpbabu@gmail.com

## Testing

### Local Testing
1. Add your EmailJS credentials to `.env`
2. Start the dev server: `pnpm dev`
3. Fill out the contact form
4. Check emmanuelpbabu@gmail.com for the test email

### Production Testing
1. Deploy to Vercel with environment variables configured
2. Visit your live site
3. Submit a test message through the contact form
4. Verify email arrives at emmanuelpbabu@gmail.com

## Troubleshooting

**Problem:** "Email service not configured" error
- **Solution:** Make sure all three environment variables are set correctly

**Problem:** Emails not arriving
- **Solution:** 
  1. Check EmailJS dashboard for failed sends
  2. Verify the "To Email" in your template is emmanuelpbabu@gmail.com
  3. Check spam folder
  4. Ensure Gmail service is properly connected

**Problem:** Form validation not working
- **Solution:** Check browser console for errors

**Problem:** Rate limiting triggers too often
- **Solution:** Adjust the timeout in `ContactForm.tsx` (line 53)

## Email Limits

EmailJS Free Tier:
- **200 emails/month**
- **2 email templates**
- **1 email service**

If you exceed this, consider:
- Upgrading to EmailJS paid plan ($7/month for 1000 emails)
- Or switching to Resend API (100 emails/day free)

## Security Notes

- Environment variables are never exposed to the client in production
- Honeypot field catches most bots
- Rate limiting prevents spam
- EmailJS handles email delivery securely
- No backend server needed

## Support

EmailJS Documentation: https://www.emailjs.com/docs/
EmailJS Support: https://www.emailjs.com/support/

---

**Status:** ✅ Production Ready
**Last Updated:** 2026-06-01
