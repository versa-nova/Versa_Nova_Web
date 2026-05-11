# Contact Form Setup Guide - EmailJS Configuration

## Overview
The contact form on your website is configured to send emails to `info@versanova.de` using EmailJS, a free service that allows you to send emails directly from client-side JavaScript without needing a backend server.

## Why EmailJS?
- ✅ **Free**: Up to 200 emails/month on free plan
- ✅ **No Backend Required**: Works entirely in the browser
- ✅ **Easy Setup**: Just 5-10 minutes to configure
- ✅ **Reliable**: Professional email delivery service
- ✅ **Spam Protection**: Built-in reCAPTCHA support

## Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create a free account using your email

### Step 2: Add Email Service
1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection wizard:
   - For **Gmail**: Enter your Gmail address and App Password
   - For **Outlook**: Enter your Outlook credentials
5. Click **"Create Service"**
6. **Copy the Service ID** (e.g., `service_abc123`)

#### Gmail App Password Setup:
If using Gmail, you need an App Password:
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification (if not already enabled)
3. Search for "App passwords" in settings
4. Generate a new app password for "Mail"
5. Use this 16-character password in EmailJS

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Settings:**
```
Template Name: Contact Form
Template ID: (will be auto-generated, copy this)
```

**Email Template Content:**
```
Subject: New Contact Form Submission: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Versa Nova contact form.
Reply to: {{from_email}}
```

4. Click **"Save"**
5. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (it looks like: `abc123XYZ456`)
3. **Copy this key**

### Step 5: Update Website Configuration
1. Open `main.js` file
2. Find these lines near the top of the Contact Form section:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

3. Replace the placeholder values with your actual keys:

```javascript
const EMAILJS_PUBLIC_KEY = 'abc123XYZ456';  // Your Public Key
const EMAILJS_SERVICE_ID = 'service_abc123';  // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';  // Your Template ID
```

4. Save the file

### Step 6: Test the Contact Form
1. Open your website
2. Go to the Contact section
3. Fill in all fields:
   - Name: Test User
   - Email: your-email@example.com
   - Subject: Test Message
   - Message: (at least 50 characters)
4. Click "Send Message"
5. Check `info@versanova.de` inbox for the email

## Template Parameters Reference

These are the variables EmailJS will replace in your template:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's name | John Doe |
| `{{from_email}}` | Sender's email | john@example.com |
| `{{subject}}` | Email subject | Partnership Inquiry |
| `{{message}}` | Message content | I would like to discuss... |
| `{{to_email}}` | Recipient (hardcoded) | info@versanova.de |

## Form Validation

The contact form includes automatic validation:
- ✅ Name field is required
- ✅ Valid email address is required
- ✅ Subject is required
- ✅ Message must be **at least 50 characters**
- ✅ Real-time character counter shows progress

## Troubleshooting

### "EmailJS is not configured yet" Error
- You haven't replaced the placeholder keys in `main.js`
- Make sure all three keys are updated (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID)

### "Failed to send message" Error
- Check your EmailJS service is connected and active
- Verify your email credentials are correct
- Check EmailJS dashboard for error logs
- Make sure you haven't exceeded the 200 emails/month limit

### Emails Not Arriving
- Check spam/junk folder in `info@versanova.de`
- Verify the email template is saved correctly
- Check EmailJS dashboard → Logs to see if email was sent
- Ensure Gmail App Password is correct (if using Gmail)

### Template Variables Not Working
- Make sure variable names match exactly: `{{from_name}}` not `{{name}}`
- Variables are case-sensitive
- Check for typos in the template

## Security Notes

- ✅ Your EmailJS Public Key is **safe to expose** in client-side code
- ✅ EmailJS automatically prevents spam with rate limiting
- ✅ Consider enabling reCAPTCHA in EmailJS dashboard for extra protection
- ⚠️ Never commit Gmail App Passwords to public repositories (they're only stored in EmailJS)

## Cost & Limitations

**Free Plan:**
- 200 emails per month
- 2 email services
- 2 email templates
- Perfect for small business contact forms

**If you need more:**
- Personal Plan: $7/month → 1,000 emails/month
- Professional Plan: Custom pricing

## Alternative: Using Your Own SMTP

If you prefer not to use EmailJS, you can:
1. Set up a backend server (Node.js, PHP, etc.)
2. Use server-side email libraries (Nodemailer, PHPMailer)
3. Configure your own SMTP settings

But EmailJS is recommended for simplicity and no backend requirements.

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com
- Check EmailJS Status: [https://status.emailjs.com/](https://status.emailjs.com/)

## Summary Checklist

- [ ] Created EmailJS account
- [ ] Connected email service (Gmail/Outlook)
- [ ] Created email template
- [ ] Copied Public Key, Service ID, and Template ID
- [ ] Updated `main.js` with actual keys
- [ ] Tested contact form
- [ ] Verified email received at info@versanova.de

---

**Estimated Setup Time:** 10-15 minutes

Once configured, the contact form will automatically send all submissions to `info@versanova.de` with no further maintenance required!
