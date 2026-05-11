# راهنمای Deploy وبسایت روی Netlify با دامنه versanova.de

## مرحله 1: ساخت اکانت Netlify

1. برو به [https://app.netlify.com/signup](https://app.netlify.com/signup)
2. کلیک روی **"Sign up with GitHub"**
3. به Netlify اجازه بده که به GitHub دسترسی داشته باشه
4. اکانتت ساخته میشه و وارد Dashboard میشی

---

## مرحله 2: Import کردن Repository از GitHub

1. در Dashboard، کلیک کن روی **"Add new site"** (دکمه سبز بالای صفحه)
2. انتخاب کن: **"Import an existing project"**
3. انتخاب کن: **"Deploy with GitHub"**
4. اگه اولین باره، Netlify میخواد access بگیره - روی **"Authorize Netlify"** کلیک کن
5. لیست repositoryها نشون داده میشه - پیدا کن **"versanova/versanova"**
   - اگه نمیبینیش، روی **"Configure Netlify on GitHub"** کلیک کن و دسترسی بده
6. روی repository کلیک کن

---

## مرحله 3: تنظیمات Build (خیلی ساده!)

صفحه تنظیمات deploy باز میشه. چون website تو فقط HTML/CSS/JS هست (بدون build process)، همه چیز رو **خالی** بذار:

```
Site name: versanova (یا هر اسمی که دوست داری - بعداً عوض میشه)
Branch to deploy: main
Build command: (خالی بذار)
Publish directory: (خالی بذار یا بنویس: /)
```

کلیک کن روی: **"Deploy versanova"**

⏳ صبر کن 1-2 دقیقه... Netlify داره website رو deploy می‌کنه

✅ وقتی deploy تموم شد، یه URL موقت میگیری مثل: `https://random-name-123456.netlify.app`

---

## مرحله 4: تست Website

1. روی لینک موقت کلیک کن (مثلاً `https://random-name-123456.netlify.app`)
2. چک کن website درست کار می‌کنه:
   - ✅ Hero section با slideshow
   - ✅ زبان پیش‌فرض آلمانی هست
   - ✅ Language switcher کار می‌کنه
   - ✅ Cookie banner ظاهر میشه
   - ✅ Contact form (هنوز EmailJS setup نشده پس کار نمی‌کنه)
   - ✅ Legal pages (Terms, Privacy, Impressum) باز میشن

---

## مرحله 5: اتصال دامنه versanova.de

### 5.1: در Netlify

1. در Dashboard، روی site خودت کلیک کن
2. برو به **"Site settings"** (تنظیمات)
3. از منوی سمت چپ، انتخاب کن: **"Domain management"**
4. در بخش **"Custom domains"**، کلیک کن روی **"Add custom domain"**
5. تایپ کن: `versanova.de`
6. کلیک کن: **"Verify"**
7. Netlify می‌پرسه آیا این domain مال توئه - کلیک کن: **"Yes, add domain"**

حالا Netlify یه پیغام نشون میده که باید DNS رو تنظیم کنی.

### 5.2: تنظیمات DNS

Netlify دو گزینه پیشنهاد میده:

#### گزینه A: استفاده از Netlify DNS (ساده‌تر - توصیه می‌کنم)

1. در صفحه Domain management، کلیک کن روی **"Options"** → **"Set up Netlify DNS"**
2. Netlify چند nameserver بهت میده، مثل:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
3. برو به سایتی که ازش domain خریدی (مثلاً Namecheap, GoDaddy, Strato, etc.)
4. وارد پنل مدیریت domain شو
5. پیدا کن بخش **"Nameservers"** یا **"DNS Management"**
6. Nameserverهای فعلی رو **حذف کن**
7. Nameserverهای Netlify رو **اضافه کن**
8. **Save** کن

⏰ **صبر کن 1-48 ساعت** (معمولاً 2-6 ساعت طول می‌کشه)

#### گزینه B: استفاده از DNS فعلی (پیشرفته‌تر)

اگه میخوای nameserverها رو عوض نکنی:

1. در پنل DNS دامنه‌ات، اضافه کن:

**A Record:**
```
Type: A
Name: @ (or leave blank)
Value: 75.2.60.5
TTL: Automatic or 3600
```

**CNAME Record برای www:**
```
Type: CNAME
Name: www
Value: random-name-123456.netlify.app (سایت موقتی خودت)
TTL: Automatic or 3600
```

2. اگه میخوای subdomain هم داشته باشی (مثلاً `www.versanova.de` هم کار کنه):
   - در Netlify، روی **"Add domain alias"** کلیک کن
   - اضافه کن: `www.versanova.de`

---

## مرحله 6: فعال‌سازی HTTPS (SSL)

خبر خوب: Netlify **خودکار** SSL برات فعال می‌کنه! 🎉

1. بعد از اینکه DNS تنظیم شد (1-48 ساعت)
2. Netlify خودکار SSL certificate از Let's Encrypt میگیره
3. Website تو روی `https://versanova.de` در دسترس می‌شه

برای چک کردن:
- برو **Site settings** → **Domain management** → **HTTPS**
- باید ببینی: **"SSL/TLS certificate: Active"** ✅

---

## مرحله 7: تنظیمات اضافی (اختیاری ولی توصیه می‌کنم)

### 7.1: Redirect www به non-www (یا برعکس)

1. در **Domain management**، روی domain اصلی کلیک کن
2. انتخاب کن: **"Options"** → **"Set as primary domain"**
3. حالا همه traffic به domain اصلی redirect میشه

### 7.2: فعال‌سازی Auto-deploy از GitHub

✅ این قبلاً فعال شده! 

هر بار که توی GitHub روی branch `main` چیزی push کنی، Netlify **خودکار** website رو دوباره deploy می‌کنه.

برای چک کردن:
- **Site settings** → **Build & deploy** → **Continuous deployment**
- باید ببینی: **"GitHub repo: versanova/versanova"**

### 7.3: تنظیمات Redirects و Headers (برای بهینه‌سازی)

یه فایل `netlify.toml` می‌تونیم اضافه کنیم برای تنظیمات پیشرفته.

---

## مرحله 8: چک کردن EmailJS

بعد از deploy، باید EmailJS رو setup کنی (اگه هنوز نکردی):

1. برو [https://www.emailjs.com/](https://www.emailjs.com/)
2. طبق راهنمای `EMAILJS_SETUP.md` پیش برو
3. بعد از گرفتن کدها، توی `main.js` جایگزینشون کن:
   ```javascript
   const EMAILJS_PUBLIC_KEY = 'your_actual_key';
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   ```
4. Commit و push کن به GitHub
5. Netlify خودکار deploy می‌کنه

---

## مرحله 9: چک نهایی

بعد از اینکه DNS propagate شد و SSL فعال شد، چک کن:

### ✅ Checklist:
- [ ] `https://versanova.de` باز میشه
- [ ] `https://www.versanova.de` به `versanova.de` redirect میشه (یا برعکس)
- [ ] HTTPS (قفل سبز) کنار URL نشون داده میشه
- [ ] زبان پیش‌فرض آلمانی هست
- [ ] Language switcher کار می‌کنه (DE ⟷ EN)
- [ ] Cookie banner ظاهر میشه
- [ ] Hero slideshow کار می‌کنه
- [ ] Projects section تصاویر رو درست نشون میده
- [ ] Legal pages باز میشن:
  - [ ] `https://versanova.de/terms.html`
  - [ ] `https://versanova.de/privacy.html`
  - [ ] `https://versanova.de/impressum.html`
- [ ] Contact form کار می‌کنه (بعد از setup EmailJS)
- [ ] Back to Top button ظاهر میشه وقتی scroll می‌کنی
- [ ] Animations (AOS) کار می‌کنن
- [ ] Footer links درست کار می‌کنن

---

## مشکلات رایج و راه حل

### مشکل 1: DNS هنوز propagate نشده
**علامت:** `versanova.de` باز نمیشه یا error 404 میده

**راه حل:**
- صبر کن 2-6 ساعت (حداکثر 48 ساعت)
- چک کن DNS درست تنظیم شده: [https://dns-lookup.com/versanova.de](https://dns-lookup.com/versanova.de)
- یا: [https://www.whatsmydns.net/#A/versanova.de](https://www.whatsmydns.net/#A/versanova.de)

### مشکل 2: SSL هنوز فعال نشده
**علامت:** "Your connection is not private" error

**راه حل:**
- DNS باید اول propagate بشه
- بعد Netlify خودکار SSL رو فعال می‌کنه (1-10 دقیقه بعد از DNS)
- اگه بعد از 24 ساعت هنوز نشده: **Site settings** → **HTTPS** → **Renew certificate**

### مشکل 3: Assets (تصاویر) لود نمیشن
**علامت:** تصاویر broken میشن

**راه حل:**
- چک کن پوشه `assets/` توی GitHub commit شده باشه
- git status → git add assets/ → git commit → git push

### مشکل 4: "Page not found" برای legal pages
**علامت:** terms.html, privacy.html, impressum.html 404 میدن

**راه حل:**
- چک کن این فایل‌ها commit شدن: `git status`
- اگه نه: `git add terms.html privacy.html impressum.html` → commit → push

---

## هزینه‌ها

**Netlify Free Plan:**
- ✅ 100 GB bandwidth/month (برای شروع کافیه)
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ SSL certificate رایگان
- ✅ CDN جهانی
- ✅ Auto-deploy from GitHub

اگه بعداً traffic بیشتر شد:
- **Pro Plan:** $19/month → 1 TB bandwidth

برای یه startup site، Free Plan کاملاً کافیه! 🚀

---

## خلاصه مراحل

1. ✅ Sign up در Netlify با GitHub
2. ✅ Import repository `versanova/versanova`
3. ✅ Deploy site (خالی بذار همه تنظیمات)
4. ✅ تست روی URL موقت
5. ✅ Add custom domain: `versanova.de`
6. ✅ تنظیم nameservers یا DNS records
7. ⏰ صبر برای DNS propagation (2-48 ساعت)
8. ✅ SSL خودکار فعال میشه
9. ✅ EmailJS setup کن
10. ✅ چک نهایی همه چیز

---

## لینک‌های مفید

- Netlify Dashboard: [https://app.netlify.com/](https://app.netlify.com/)
- Netlify Docs: [https://docs.netlify.com/](https://docs.netlify.com/)
- DNS Checker: [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
- SSL Checker: [https://www.sslshopper.com/ssl-checker.html](https://www.sslshopper.com/ssl-checker.html)
- GitHub Repo: [https://github.com/versanova/versanova](https://github.com/versanova/versanova)

---

## بعد از Deploy

Website تو زنده و روی اینترنته! 🎉

**آماده برای:**
- ✅ نشان دادن به سرمایه‌گذاران (Partners & Investors section)
- ✅ مارکتینگ و تبلیغات
- ✅ SEO (بعداً می‌تونیم بهینه‌سازی کنیم)
- ✅ دریافت پیام‌های contact (بعد از EmailJS setup)

**Next Steps:**
1. Setup EmailJS برای فعال کردن contact form
2. اضافه کردن Google Analytics برای tracking بازدیدها
3. بهینه‌سازی SEO (meta tags, sitemap, etc.)
4. اتصال social media accounts (لینک‌های واقعی به جای #)

---

موفق باشی! 🚀🇩🇪

اگه سوالی داشتی یا جایی گیر کردی، بهم بگو!
