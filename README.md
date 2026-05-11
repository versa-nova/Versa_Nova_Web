# Versa Nova - Social-First Storytelling Platform

![Versa Nova](https://img.shields.io/badge/Status-MVP%20Ready-success)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 About Versa Nova

Versa Nova is a media and entertainment startup building **social-first storytelling platforms** where books, games, and communities grow together. We create immersive experiences that blend interactive narratives with community engagement.

**Location:** Berlin, Germany  
**Founded:** 2024  
**Stage:** Early-stage startup seeking partners and investors

---

## 🚀 Current Projects

### 1. Booksy Boutique
**Status:** MVP Ready (75% Complete)  
A revolutionary social reading platform that transforms how readers discover, share, and engage with stories.

**Key Features:**
- 📚 Social reading experience with community engagement
- 💬 Real-time reader interactions and discussions
- 🎨 Personalized book recommendations
- 📊 Reading progress tracking and achievements
- 👥 Connect with fellow readers and authors

### 2. Project Unite-7
**Status:** Demo in Preparation (60% Complete)  
An innovative 2.5D mobile game combining storytelling with social gameplay mechanics.

**Key Features:**
- 🎮 Engaging gameplay with narrative depth
- 🤝 Multiplayer social features
- 🏆 Achievement and progression systems
- 🎨 Stunning 2.5D graphics
- 🌍 Community-driven content

---

## 🛠️ Technology Stack

### Frontend Framework
- **Bootstrap 5.3.2** - Responsive UI framework
- **Bootstrap Icons 1.11.1** - Icon library
- **AOS (Animate On Scroll) 2.3.1** - Scroll animations

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - Interactive functionality

### Design System
- **Primary Color:** `#E1A730` (Gold) - Represents innovation and premium quality
- **Secondary Color:** `#262626` (Dark Grey) - Modern and professional
- **Typography:** Inter font family with system fallbacks
- **Responsive Design:** Mobile-first approach with breakpoints at 991px and 767px

---

## 📁 Project Structure

```
VersaNovaWeb/
├── main.html              # Main HTML file with all sections
├── main.css               # Complete styling (1200+ lines)
├── main.js                # Interactive functionality (326 lines)
├── assets/
│   ├── BooksyBoutique.png    # Booksy Boutique project image
│   └── ProjectUnite-7.png    # Project Unite-7 game image
└── README.md              # This file
```

---

## 🎨 Key Features

### Hero Section
- **Dynamic Background Slideshow** - 4 high-quality images rotating every 3 seconds
- **Smooth Fade Transitions** - Professional CSS animations
- **Responsive Layout** - Adapts to all screen sizes

### Interactive Elements
- ✨ **Smooth Scroll Navigation** - Seamless section transitions
- 🎯 **Animated Progress Bars** - Visual project completion indicators
- 💫 **Hover Effects** - Interactive cards and buttons
- 📱 **Mobile Menu** - Touch-optimized navigation

### Animations
- **Pulse Effect** - Attention-grabbing badges
- **Shimmer Effect** - Premium button styling
- **Rotate Effect** - Playful icon animations
- **Bounce Effect** - Engaging interactions
- **Shake Effect** - Notification highlights
- **Scroll Animations** - AOS library integration

### Sections
1. **Hero** - Dynamic background with compelling value proposition
2. **About** - Startup story with project previews
3. **Projects** - Detailed showcase of Booksy Boutique and Project Unite-7
4. **Partners & Investors** - Investment opportunities and partnership details
5. **Contact** - Berlin office location and communication channels
6. **Footer** - Social links and company information

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/versanova/versanova.git
   cd versanova
   ```

2. **Open in browser:**
   ```bash
   # Windows
   start main.html
   
   # macOS
   open main.html
   
   # Linux
   xdg-open main.html
   ```

### Using a Local Server (Optional)

For best development experience, use a local server:

**Python:**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Node.js (http-server):**
```bash
npx http-server -p 8000
# Visit http://localhost:8000
```

**VS Code Live Server:**
- Install "Live Server" extension
- Right-click on `main.html` → "Open with Live Server"

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Opera | ✅ Latest |

**Mobile Browsers:** Fully responsive and tested on iOS Safari and Chrome for Android.

---

## 🎯 Responsive Breakpoints

```css
/* Desktop: Default styles */
@media (max-width: 991px) {
    /* Tablet: Adjusted layouts */
}

@media (max-width: 767px) {
    /* Mobile: Optimized for small screens */
}
```

---

## 🔧 Customization

### Changing Colors

Edit CSS variables in `main.css`:

```css
:root {
    --primary-color: #E1A730;     /* Gold */
    --secondary-color: #262626;   /* Dark Grey */
    --accent-color: #FDB813;      /* Bright Gold */
    --text-light: #ffffff;
    --text-dark: #1a1a1a;
}
```

### Adjusting Slideshow Speed

Edit in `main.js`:

```javascript
function initHeroSlideshow() {
    const interval = 3000; // Change to desired milliseconds
    // ...
}
```

### Adding New Projects

Add project cards in the Projects section of `main.html`:

```html
<div class="col-lg-4 col-md-6 mb-4">
    <div class="project-card service-card h-100">
        <!-- Your project content -->
    </div>
</div>
```

---

## 📊 Performance

- **Initial Load:** < 2 seconds (on average connection)
- **Images:** Optimized PNG format, lazy loading from Unsplash CDN
- **CSS:** Single file, minified for production
- **JavaScript:** Pure vanilla JS, no heavy frameworks
- **Animations:** Hardware-accelerated CSS transforms

---

## 🤝 Seeking Partners & Investors

We are actively seeking:

### 💼 Strategic Partners
Vision-aligned partners to help scale our platforms and expand market reach.

### 💰 Angel Investors
Early-stage investors who believe in the future of social storytelling platforms.

### 🏦 Financial Support
Investment to accelerate development and bring our projects to market.

**Contact us:** info@versanova.de

---

## 📞 Contact Information

**Versa Nova Media & Entertainment**

📍 **Address:**  
Kolonnenstr. 8  
10827 Berlin  
Germany

📧 **Email:** info@versanova.de

📱 **Phone:** +49 (0) 30 XXX-XXXX *(Coming soon)*

🌐 **Website:** [versanova.de](https://versanova.de) *(Coming soon)*

---

## 📝 TODO / Roadmap

### Immediate
- [ ] Add real phone number to contact section
- [ ] Complete Project Unite-7 detailed description
- [ ] Add social media profile links
- [ ] Deploy to production server

### Short-term
- [ ] Enable GitHub Pages for live demo
- [ ] Add contact form backend integration
- [ ] Implement newsletter subscription
- [ ] Create blog section for updates

### Long-term
- [ ] Multi-language support (English, German)
- [ ] Dark/Light theme toggle
- [ ] Add team member profiles
- [ ] Create investor pitch deck page
- [ ] Add project demo videos

---

## 🤖 Development

### File Overview

**main.html (519 lines)**
- Semantic HTML5 structure
- Bootstrap grid system
- All content sections
- Form validation

**main.css (1200+ lines)**
- Custom CSS variables
- Responsive breakpoints
- Animation keyframes
- Component styling
- Utility classes

**main.js (326 lines)**
- Hero slideshow logic
- Smooth scroll navigation
- Form handling
- Notification system
- Animation triggers

---

## 📜 License

This project is proprietary software owned by **Versa Nova Media & Entertainment**.

All rights reserved. Unauthorized copying, distribution, or use of this software is strictly prohibited without explicit written permission from Versa Nova.

For licensing inquiries: info@versanova.de

---

## 🙏 Acknowledgments

- **Bootstrap Team** - For the amazing framework
- **AOS Library** - For smooth scroll animations
- **Unsplash** - For high-quality stock images
- **Bootstrap Icons** - For the comprehensive icon set
- **Google Fonts** - For the Inter font family

---

## 📈 Version History

### v1.0.0 (March 2026)
- ✅ Initial website launch
- ✅ Hero section with dynamic slideshow
- ✅ About section with startup story
- ✅ Projects showcase (Booksy Boutique, Project Unite-7)
- ✅ Partners & Investors section
- ✅ Contact information with Berlin address
- ✅ Fully responsive design
- ✅ Interactive animations and effects

---

## 🔗 Links

- **GitHub Repository:** [versanova/versanova](https://github.com/versanova/versanova)
- **Live Demo:** *(Coming soon)*
- **Documentation:** This README

---

<div align="center">

**Made with ❤️ in Berlin**

Building the future of social storytelling

[Contact Us](mailto:info@versanova.de) • [GitHub](https://github.com/versanova)

</div>
