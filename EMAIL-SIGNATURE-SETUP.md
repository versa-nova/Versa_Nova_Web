# 📧 راهنمای نصب Email Signature برای IONOS

## 🎨 سه نسخه Signature ساخته شد:

1. **نسخه کامل (Full Version)** - برای ایمیل‌های رسمی و مهم
   - شامل لوگو با header طلایی، اطلاعات کامل، tagline، legal footer
   - تم تیره (#333333) با gradient طلایی (#E1A730)
   
2. **نسخه متوسط (Compact Version)** - برای استفاده روزمره
   - شامل لوگو و اطلاعات اصلی در یک box تیره
   - Tagline در پایین
   
3. **نسخه مینیمال (Minimal Version)** - برای ریپلای‌های سریع
   - فقط نام، شرکت، و اطلاعات تماس
   - Border چپ طلایی

---

## 📝 نصب در IONOS Webmail:

### مرحله 1: باز کردن Signature HTML
1. فایل `email-signature.html` رو توی مرورگر باز کن
2. نسخه مورد نظر رو انتخاب کن (Full/Compact/Minimal)
3. کل HTML اون نسخه رو انتخاب و کپی کن (از `<table>` تا `</table>`)

### مرحله 2: ورود به IONOS Webmail
1. برو به: **https://mail.ionos.de**
2. با `info@versanova.de` لاگین کن

### مرحله 3: تنظیم Signature
1. روی **Settings** (⚙️) کلیک کن
2. برو به **Identities** یا **Signature**
3. **New Signature** رو انتخاب کن
4. حالت **HTML** رو فعال کن
5. HTML کپی شده رو Paste کن
6. **Save** کن

### مرحله 4: فعال‌سازی
1. برو به **Composing** یا **Compose Settings**
2. تیک بزن روی **Automatically add signature to new messages**
3. تیک بزن روی **Add signature to replies and forwards** (اختیاری)
4. **Save** کن

---

## 📧 نصب در Microsoft Outlook (Desktop):

1. باز کن: **File** → **Options** → **Mail** → **Signatures**
2. **New** کلیک کن، یه اسم بده (مثلاً "Versa Nova Full")
3. از فایل `email-signature.html` HTML رو کپی کن
4. توی ویرایشگر **Paste** کن
5. **OK** کن
6. توی **Choose default signature** این signature رو انتخاب کن

---

## 🌐 نصب در Gmail (Web):

1. **Settings** (⚙️) → **See all settings**
2. اسکرول کن به قسمت **Signature**
3. **Create new** کلیک کن
4. HTML رو کپی و Paste کن
5. **Save Changes**

---

## 🎯 تنظیمات توصیه شده برای آدرس‌های مختلف:

| Email Address | Signature Version | Use Case |
|--------------|------------------|----------|
| **info@versanova.de** | Full Version | استفاده عمومی، اولین تماس |
| **support@versanova.de** | Compact Version | پشتیبانی مشتری، ریپلای سریع |
| **contact@versanova.de** | Full Version | تماس‌های رسمی |

---

## 🖼️ درباره لوگو:

Signature از لوگوی navbar استفاده می‌کنه که روی سایت هست:
```
https://versanova.de/assets/VN-logo-navbar.png
```

✅ لوگو از سرور سایت load میشه، نیازی به آپلود جداگانه نیست!

---

## 🎨 سفارشی‌سازی:

### تغییر نام و عنوان:
در فایل HTML این خط رو پیدا کن و ویرایش کن:
```html
<strong>Pooya Ali Akbari Nodehi</strong>
<span>Geschäftsführer | CEO</span>
```

### تغییر شماره تماس:
```html
<td>+49 (0) 30 12348760</td>
```

### تغییر آدرس:
```html
<td>Kolonnenstr. 8, 10827 Berlin</td>
```

---

## ✅ چک‌لیست بعد از نصب:

- [ ] Signature توی IONOS Webmail نصب شده
- [ ] لوگو درست نمایش داده میشه
- [ ] لینک‌های email و website کلیک می‌کنن
- [ ] توی موبایل هم خوب نشون داده میشه
- [ ] توی Gmail/Outlook هم تست شده
- [ ] Legal footer (در نسخه Full) به‌روز و صحیح هست

---

## 🆘 مشکلات رایج:

### لوگو نشان داده نمیشه:
- مطمئن شو `VN-logo-navbar.png` روی سایت آپلود شده
- لینک کامل رو چک کن: `https://versanova.de/assets/VN-logo-navbar.png`
- در مرورگر این لینک رو باز کن ببین لوگو لود میشه

### رنگ‌ها درست نیستن:
- بعضی email clients CSS external رو ignore می‌کنن
- همه استایل‌ها inline هستن، باید کار کنه
- تست کن توی چند email client مختلف

### Signature خیلی بزرگه:
- از نسخه Compact یا Minimal استفاده کن
- Legal footer رو حذف کن (اختیاری)

### Background تیره نشون داده نمیشه:
- بعضی email clients dark mode دارن
- Signature طوری طراحی شده که در هر دو حالت خوب نشون داده بشه

---

## 💡 نکات مهم:

1. **حجم کم**: Signature زیر 10KB هست برای سرعت بهتر ✅
2. **Responsive**: روی موبایل هم خوب نشون داده میشه ✅
3. **Professional**: تم dark مطابق با سایت Versa Nova ✅
4. **Updated**: همیشه اطلاعات تماس رو به‌روز نگه دار
5. **Testing**: حتماً یه ایمیل تستی به خودت بفرست و چک کن

---

## 🎨 رنگ‌های استفاده شده (مطابق سایت):

| Element | Color Code | Usage |
|---------|-----------|--------|
| Background Dark | `#333333` | پس‌زمینه اصلی boxes |
| Gold Primary | `#E1A730` | رنگ اصلی، لینک‌ها، برجسته‌ها |
| Gold Gradient | `#E1A730` → `#C89428` | Header gradient |
| Text Light | `#e2e8f0` | متن اصلی روی تیره |
| Text Muted | `#94a3b8` | متن کمرنگ، legal text |
| Border | `#404040` | border boxes و خطوط جدا کننده |

---

## 📞 پشتیبانی:

اگه مشکلی داشتی یا می‌خوای signature رو تغییر بدی، بهم بگو!

**تم طراحی**: دقیقاً مطابق با email template EmailJS که برای فرم تماس سایت ساخته شده ✨
