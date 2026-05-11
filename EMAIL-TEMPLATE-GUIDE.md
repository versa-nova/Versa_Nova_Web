# 📧 راهنمای استفاده از Email Template کامل

## 🎨 ساختار Template:

این template یه **ایمیل کامل و آماده** هست که شامل:

```
┌─────────────────────────────────────────┐
│  🔶 HEADER (طلایی با gradient)         │
│  Versa Nova Logo + نام شرکت            │
├─────────────────────────────────────────┤
│                                         │
│  📝 کادر محتوای ایمیل                  │
│  (اینجا متن ایمیلت رو می‌نویسی)        │
│                                         │
├─────────────────────────────────────────┤
│  ────────────────────────────           │
│                                         │
│  👤 SIGNATURE                           │
│  نام، عنوان، اطلاعات تماس              │
│  Tagline شرکت                          │
├─────────────────────────────────────────┤
│  ⚖️ FOOTER (Legal Info)                │
│  اطلاعات قانونی شرکت                   │
└─────────────────────────────────────────┘
```

---

## 📝 نحوه استفاده:

### روش 1: برای ایمیل‌های مهم و رسمی (Outlook/Gmail)

1. فایل `email-template-full.html` رو باز کن
2. کل HTML رو کپی کن
3. توی Outlook یا Gmail یه ایمیل جدید باز کن
4. HTML رو Paste کن
5. قسمت **محتوای ایمیل** رو پاک کن و متن خودت رو بنویس:

```html
<!-- این قسمت رو پیدا کن: -->
<p style="margin: 0 0 15px 0;">
    Lorem ipsum dolor sit amet...
</p>

<!-- و با متن خودت جایگزین کن: -->
<p style="margin: 0 0 15px 0;">
    متن ایمیل خودت اینجا...
</p>
```

6. ایمیل رو بفرست!

---

### روش 2: ذخیره به عنوان Template در Outlook

1. **File** → **Save As**
2. **Save as type**: Outlook Template (*.oft)
3. یه اسم بده: "Versa Nova Email Template"
4. Save کن

**استفاده:**
- هر وقت خواستی ایمیل بفرستی
- **File** → **New** → **Choose Form**
- Template رو انتخاب کن
- فقط محتوا رو بنویس و بفرست!

---

### روش 3: Draft Template در Gmail

1. Gmail باز کن
2. **Compose** کلیک کن
3. HTML template رو paste کن
4. محتوای نمونه رو پاک کن (فقط خود کادر بمونه)
5. **More options** (⋮) → **Save draft**
6. این draft رو نگه دار

**استفاده:**
- هر بار برو به **Drafts**
- این template رو باز کن
- محتوا رو بنویس
- بفرست!

---

## ✏️ سفارشی‌سازی محتوا:

### مثال 1: ایمیل رسمی آلمانی

```html
<div style="color: #e2e8f0; font-size: 15px; line-height: 1.8;">
    
    <p style="margin: 0 0 15px 0;">Sehr geehrte Damen und Herren,</p>
    
    <p style="margin: 0 0 15px 0;">
        vielen Dank für Ihr Interesse an Versa Nova Media & Entertainment.
        Gerne möchte ich Ihnen unsere aktuellen Projekte vorstellen...
    </p>
    
    <p style="margin: 0;">Mit freundlichen Grüßen</p>
    
</div>
```

### مثال 2: ایمیل انگلیسی کوتاه

```html
<div style="color: #e2e8f0; font-size: 15px; line-height: 1.8;">
    
    <p style="margin: 0 0 15px 0;">Dear Team,</p>
    
    <p style="margin: 0 0 15px 0;">
        I hope this email finds you well. I wanted to reach out regarding...
    </p>
    
    <p style="margin: 0;">Best regards</p>
    
</div>
```

### مثال 3: ایمیل با لیست و bullet points

```html
<div style="color: #e2e8f0; font-size: 15px; line-height: 1.8;">
    
    <p style="margin: 0 0 15px 0;">Hallo zusammen,</p>
    
    <p style="margin: 0 0 15px 0;">
        Ich möchte Sie über folgende Updates informieren:
    </p>
    
    <ul style="margin: 0 0 15px 0; padding-left: 25px;">
        <li style="margin-bottom: 8px;">Booksy Boutique: MVP Phase abgeschlossen ✅</li>
        <li style="margin-bottom: 8px;">Project Unite-7: Demo in Vorbereitung</li>
        <li style="margin-bottom: 8px;">Website Launch erfolgreich 🚀</li>
    </ul>
    
    <p style="margin: 0;">Beste Grüße</p>
    
</div>
```

---

## 🎨 تنظیمات پیشرفته:

### تغییر رنگ متن ایمیل:

```html
<!-- متن معمولی (روشن) -->
<p style="color: #e2e8f0;">متن اصلی</p>

<!-- متن برجسته (طلایی) -->
<p style="color: #E1A730; font-weight: 600;">متن مهم</p>

<!-- متن کمرنگ -->
<p style="color: #94a3b8;">یادداشت جانبی</p>
```

### اضافه کردن لینک:

```html
<a href="https://versanova.de/booksy-boutique.html" 
   style="color: #E1A730; text-decoration: none; font-weight: 500; border-bottom: 1px solid #E1A730;">
   مشاهده پروژه Booksy Boutique
</a>
```

### اضافه کردن جدول ساده:

```html
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <tr>
        <td style="padding: 10px; border: 1px solid #404040; color: #E1A730; font-weight: 600;">
            پروژه
        </td>
        <td style="padding: 10px; border: 1px solid #404040; color: #e2e8f0;">
            Booksy Boutique
        </td>
    </tr>
    <tr>
        <td style="padding: 10px; border: 1px solid #404040; color: #E1A730; font-weight: 600;">
            وضعیت
        </td>
        <td style="padding: 10px; border: 1px solid #404040; color: #e2e8f0;">
            75% - MVP Ready
        </td>
    </tr>
</table>
```

---

## 💡 نکات مهم:

### ✅ استفاده صحیح:

1. **همیشه** فقط قسمت محتوا رو تغییر بده
2. **هرگز** ساختار اصلی (header, footer, signature) رو تغییر نده
3. از همین استایل‌های inline استفاده کن تا در همه email clients کار کنه
4. قبل از فرستادن، یه نسخه تستی به خودت بفرست

### ❌ اشتباهات رایج:

1. ❌ پاک کردن تگ‌های `<div>` و `<table>`
2. ❌ استفاده از CSS external (کار نمی‌کنه)
3. ❌ عکس‌های بزرگ توی محتوا (حجم رو بالا می‌بره)
4. ❌ فونت‌های غیراستاندارد

---

## 📱 Mobile Responsive:

Template طوری طراحی شده که روی موبایل هم خوب نشون داده میشه:
- عرض maximum 700px
- Font sizes مناسب برای موبایل
- Padding و spacing responsive

---

## 🔄 موارد استفاده:

| نوع ایمیل | استفاده از Template |
|-----------|---------------------|
| **اولین تماس با مشتری/سرمایه‌گذار** | ✅ پیشنهاد می‌شه |
| **پیشنهادهای رسمی** | ✅ پیشنهاد می‌شه |
| **بروزرسانی پروژه‌ها** | ✅ مناسبه |
| **ریپلای سریع** | ❌ از signature ساده استفاده کن |
| **ایمیل‌های داخلی تیم** | ⚠️ اختیاری |

---

## 📧 مثال‌های آماده:

### ایمیل معرفی به سرمایه‌گذار:

```html
<div style="color: #e2e8f0; font-size: 15px; line-height: 1.8;">
    
    <p style="margin: 0 0 15px 0;">Sehr geehrte/r [Name],</p>
    
    <p style="margin: 0 0 15px 0;">
        vielen Dank für Ihr Interesse an Versa Nova Media & Entertainment. 
        Als innovatives Startup entwickeln wir immersive Plattformen, die 
        Gaming und Storytelling miteinander verbinden.
    </p>
    
    <p style="margin: 0 0 15px 0;">
        Aktuell arbeiten wir an zwei Hauptprojekten:
    </p>
    
    <ul style="margin: 0 0 15px 0; padding-left: 25px;">
        <li style="margin-bottom: 8px;">
            <strong style="color: #E1A730;">Booksy Boutique</strong>: 
            Eine community-basierte Buchplattform (75% - MVP Ready)
        </li>
        <li style="margin-bottom: 8px;">
            <strong style="color: #E1A730;">Project Unite-7</strong>: 
            Ein 2.5D Action Platformer (60% - Demo in Vorbereitung)
        </li>
    </ul>
    
    <p style="margin: 0 0 15px 0;">
        Gerne würde ich Ihnen in einem persönlichen Gespräch mehr Details 
        präsentieren. Wären Sie verfügbar für ein Meeting?
    </p>
    
    <p style="margin: 0;">Mit freundlichen Grüßen</p>
    
</div>
```

---

## 🆘 پشتیبانی:

اگه سوالی داشتی یا می‌خوای template رو سفارشی کنی، بهم بگو!

**نکته**: این template فقط برای ایمیل‌های مهم و رسمی استفاده کن. 
برای ریپلای‌های معمولی از signature‌های ساده (email-signature.html) استفاده کن.

