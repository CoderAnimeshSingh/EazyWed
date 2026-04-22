# EazyWed: Where Elegance Meets Joy 🎉

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.12-green.svg)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-blue.svg)](https://expressjs.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple.svg)](https://getbootstrap.com/)

A comprehensive wedding planning platform built with the MERN stack that simplifies wedding planning with vendor booking, budget management, digital invitations, and AI-powered recommendations.

## ✨ Features

### 🏪 Vendor Management
- **Advanced Search & Filtering**: Find vendors by category, location, price, and ratings
- **Vendor Comparison**: Side-by-side comparison of services and pricing
- **Secure Booking**: Direct booking with integrated payment options
- **In-App Communication**: Seamless coordination with vendors

### 🤖 AI-Powered Recommendations
- **Personalized Suggestions**: Tailored vendor recommendations based on preferences
- **Smart Matching**: Algorithm-driven matching for wedding style and budget
- **Dynamic Updates**: Recommendations adapt to changing preferences

### 💰 Budget Tracking
- **Interactive Budget Planner**: Categorized expense tracking
- **Real-Time Updates**: Automatic budget updates with bookings
- **Cost Estimation**: Detailed cost breakdowns and insights
- **Overspend Alerts**: Proactive budget monitoring

### 💌 Digital Invitations
- **Template Library**: Extensive collection of customizable templates
- **Drag-and-Drop Editor**: Intuitive design customization
- **Multi-Channel Delivery**: Email and WhatsApp delivery with RSVP tracking
- **Live Preview**: Real-time design preview and sharing

### 👥 User Management
- **Dual User Types**: Separate dashboards for couples and vendors
- **Profile Customization**: Personalized profiles with photos and preferences
- **Verification System**: Trusted vendor verification
- **Secure Authentication**: JWT-based auth with SMS OTP

### ⭐ Review System
- **Comprehensive Reviews**: Detailed vendor feedback and ratings
- **Admin Moderation**: Quality-controlled review system
- **Response System**: Direct vendor responses to reviews

### 💬 AI Chatbot
- **24/7 Support**: Instant assistance for all queries
- **Personalized Guidance**: Context-aware wedding planning advice
- **FAQ Integration**: Quick resolution of common questions

## 🛠️ Technology Stack

- **Frontend**: React 19, Bootstrap 5, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT + SMS OTP (Twilio)
- **Image Hosting**: Cloudinary
- **Maps**: Leaflet
- **State Management**: React Context

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Cloudinary account
- Twilio account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eazywed.git
   cd eazywed
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../eazywed
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp backend/.env.example backend/.env
   cp eazywed/.env.example eazywed/.env

   # Fill in your credentials in both .env files
   ```

4. **Start the application**
   ```bash
   # Backend (Terminal 1)
   cd backend
   npm run dev

   # Frontend (Terminal 2)
   cd eazywed
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📱 Responsive Design

Fully responsive across all devices:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🔧 API Endpoints

### Public Routes
- `GET /api/public/trending` - Trending searches
- `GET /api/public/recommendations` - AI recommendations
- `GET /api/public/services/:category` - Service listings
- `POST /api/public/service/:id/availability` - Check availability

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/verify-otp` - OTP verification

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for wedding couples and vendors worldwide
- Special thanks to the MERN stack community
- Icons by FontAwesome
- Maps powered by Leaflet

---

**Made with ❤️ for happy couples everywhere**
Vendor Inquiry Support: Facilitate communication by drafting messages or queries to vendors.

Technology Stack

MongoDB: NoSQL database for storing application data.
Express.js: Web framework for building the backend API.
React.js: JavaScript library for building the user interface.
Node.js: JavaScript runtime for the backend server.
