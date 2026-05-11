# 📚 Booksy Boutique (BB)

A modern, elegant book library application built with React, TypeScript, and Ionic. Connect with fellow book lovers, manage your personal library, and discover new reads in a sophisticated interface with Live Updates enabled.

## ✨ Features

- **Personal Library Management**: Add, organize, and manage your book collection
- **Social Features**: Connect with friends and share book recommendations
- **Modern UI**: Elegant glassmorphism design with sophisticated gradients
- **Multi-language Support**: Internationalization with i18next
- **Cross-platform**: Mobile-first design with Capacitor for native app deployment
- **Book Cover Upload**: Upload and manage book cover images with Cloudinary
- **Real-time Updates**: Modern state management with React hooks
- **Rating System**: Rate bookstores and see average ratings
- **Shopping Cart**: Add books to cart and manage purchases
- **Favorites**: Save your favorite books for quick access

## 🏗️ Architecture

```
BB/
├── packages/frontend/     # React + TypeScript + Ionic frontend
├── backend/              # Node.js + Express + MongoDB backend
├── android/             # Android Capacitor configuration
├── ios/                 # iOS Capacitor configuration
└── scripts/             # Utility scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/pooya1984/BB.git
cd BB
```

2. **Install dependencies**

```bash
npm install
cd packages/frontend && npm install
cd ../../backend && npm install
```

3. **Environment Setup**

Create `.env` file in the backend directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. **Start Development**

```bash
npm run dev
```

This starts both frontend (http://localhost:5173) and backend (http://localhost:4000) concurrently.

## 📦 Dependencies

### Frontend

- **React 19.1.1**: Modern React with latest features
- **TypeScript**: Type-safe development
- **Ionic React 8.7.3**: Cross-platform UI components
- **Vite 7.1.3**: Fast build tool and dev server
- **React Router**: Client-side routing
- **i18next**: Internationalization framework
- **Styled Components**: CSS-in-JS styling

### Backend

- **Express 4.18.2**: Web application framework
- **MongoDB/Mongoose 7.5.0**: Database and ODM
- **Cloudinary 1.41.3**: Image upload and management
- **Multer 2.0.2**: File upload middleware
- **JWT**: Authentication tokens
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

### Mobile

- **Capacitor 7.0.0**: Native mobile app deployment
- **Live Updates**: Over-the-air updates

## 🎨 Design System

### Color Palette

- **Primary**: RGB(99, 102, 241) - Sophisticated indigo
- **Gradients**: Elegant multi-stop gradients for modern appeal
- **Glassmorphism**: Subtle transparency with backdrop blur effects
- **Typography**: Serif fonts for elegance, sans-serif for UI elements

### Styling Architecture

- **Centralized CSS Variables**: Theme system in `theme/variables.css`
- **TypeScript Styles**: React.CSSProperties for type safety
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Component-based**: Modular styling with reusable style objects

## 🌍 Internationalization

Supports multiple languages with i18next:
- English (default)
- Additional languages can be added in `src/languages.ts`

## 📱 Mobile Development

### Build for Android
```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

### Build for iOS
```bash
npm run build
npx cap add ios
npx cap sync ios
npx cap open ios
```

## 🔧 Development Scripts

```bash
npm run dev          # Start both frontend and backend
npm run dev:frontend # Start only frontend
npm run dev:backend  # Start only backend
npm run build        # Build frontend for production
npm run preview      # Preview production build
```

## 📁 Key Components

- **Profile**: User profile and library management with modern FAB interface
- **MyLibrary**: Book collection display with filtering and search
- **Authentication**: JWT-based login/signup system
- **Book Management**: Add, edit, delete books with cover upload
- **Social Features**: Friend connections and book sharing

## 🔐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/booksy-boutique
JWT_SECRET=your-super-secret-jwt-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key  
CLOUDINARY_API_SECRET=your-api-secret
```

## 🚀 Deployment

### Frontend
- **Vercel/Netlify**: Connect GitHub repo for automatic deployments
- **Build**: `npm run build` creates optimized static files

### Backend
- **Heroku/Railway**: Deploy with MongoDB Atlas
- **Environment**: Set all required environment variables

### Mobile
- **Android**: Build APK/AAB with Android Studio
- **iOS**: Build with Xcode and deploy to App Store

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)  
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pooya** - [GitHub](https://github.com/pooya1984)

---

📚 Happy Reading with Booksy Boutique! 💙
