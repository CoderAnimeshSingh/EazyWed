<<<<<<< HEAD
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
=======
# 💍 EazyWed - Wedding Planning Platform

A comprehensive **MERN stack** wedding planning platform that simplifies the entire wedding planning journey. From vendor discovery to budget tracking, digital invitations, and AI-powered recommendations.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node](https://img.shields.io/badge/Node.js-16%2B-green)
![React](https://img.shields.io/badge/React-18%2B-blue)

---

## ✨ Features

### 🎯 Core Functionality
- **Vendor Marketplace** - Browse and book wedding vendors (photographers, caterers, decorators, etc.)
- **Budget Management** - Track expenses and manage wedding budget
- **Digital Invitations** - Create and send beautiful wedding invitations
- **Booking System** - Real-time booking management with status tracking
- **AI Recommendations** - Smart vendor suggestions based on preferences
- **Reviews & Ratings** - Community feedback on vendors

### 🔐 Security & Authentication
- **JWT Authentication** - Secure token-based authentication
- **SMS OTP Verification** - Two-factor authentication via SMS
- **Role-Based Access Control** - Admin, Vendor, and User roles
- **Password Reset** - Secure password recovery flow

### 📱 User Experience
- **Responsive Design** - Bootstrap-based responsive UI
- **Real-time Updates** - Live booking and status updates
- **Admin Dashboard** - Comprehensive admin panel
- **Vendor Dashboard** - Dedicated vendor management portal
- **WhatsApp Integration** - Direct messaging with vendors

### 🎨 Wedding Cards
- **Card Templates** - Pre-designed wedding card templates
- **Custom Editor** - Drag-and-drop card customization
- **Cloud Storage** - Cloudinary integration for image management

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (jsonwebtoken)
- **OTP**: Twilio SMS
- **Cloud Storage**: Cloudinary
- **Real-time**: WebSocket support

### Frontend
- **Framework**: React 18+
- **Bundler**: Vite
- **Styling**: Bootstrap 5 + Custom CSS
- **State Management**: Context API
- **HTTP Client**: Axios

### Tools & Services
- **Database**: MongoDB Atlas
- **SMS Gateway**: Twilio
- **Image Storage**: Cloudinary
- **Hosting**: (Your choice - Vercel, Heroku, AWS, etc.)

---

## 📋 Prerequisites

Before you begin, make sure you have installed:
- **Node.js** v16 or higher
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas account)
- **Git**

### Required API Keys
- Twilio Account (for SMS/WhatsApp)
- Cloudinary Account (for image hosting)
- MongoDB Connection String

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/CoderAnimeshSingh/EazyWed.git
cd EazyWed
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in `backend/` folder:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE=your_twilio_phone_number
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
NODE_ENV=development
```

Start backend server:
```bash
npm start
```
Backend runs on: `http://localhost:5000`

### 3. Frontend Setup
```bash
cd eazywed
npm install
```

Start development server:
```bash
npm run dev
```
Frontend runs on: `http://localhost:5173`

---

## 📁 Project Structure

```
EazyWed/
├── backend/
│   ├── config/          # Database & environment config
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Authentication & normalization
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── utils/           # Utilities (Cloudinary, Twilio, etc.)
│   ├── uploads/         # Local file uploads
│   └── server.js        # Express server entry
│
├── eazywed/             # React Frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # Context API (Auth, Estimates)
│   │   ├── services/    # API calls
│   │   ├── styles/      # CSS files
│   │   ├── utils/       # Helper functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── routes.jsx   # Route definitions
│   └── vite.config.js
│
└── Documentation files
    ├── README.md
    ├── START_HERE.md
    └── QUICK_START_ROADMAP.md
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/request-otp` - Request OTP
- `POST /api/auth/verify-otp` - Verify OTP

### Vendors
- `GET /api/vendors` - Get all vendors
- `GET /api/vendors/:id` - Get vendor details
- `POST /api/vendors/register` - Register as vendor
- `PUT /api/vendors/:id` - Update vendor profile
- `GET /api/vendors/:id/services` - Get vendor services

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (vendor)
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `PUT /api/bookings/:id` - Update booking status
- `GET /api/bookings/:id` - Get booking details

### Cards
- `GET /api/cards` - Get card templates
- `POST /api/cards` - Create custom card
- `PUT /api/cards/:id` - Update card
- `DELETE /api/cards/:id` - Delete card

---

## 🎮 Usage

### User Registration
1. Visit the app and click "Sign Up"
2. Enter email and create password
3. Verify OTP sent to your phone
4. Complete profile setup

### Browse Vendors
1. Navigate to "Vendors" or "Services"
2. Filter by category and budget
3. View vendor details and reviews
4. Book services

### Create Wedding Card
1. Go to "Cards" section
2. Choose a template
3. Use card editor to customize
4. Download or share

### Admin Panel
1. Login with admin credentials
2. Manage vendors, users, and bookings
3. View analytics and reports

---

## 🐛 Troubleshooting

### Issue: MongoDB connection error
- Check your MongoDB URI in `.env`
- Ensure your IP is whitelisted (MongoDB Atlas)
- Verify network connectivity

### Issue: SMS/OTP not working
- Verify Twilio credentials
- Check phone number format (+country code)
- Ensure account has credits

### Issue: Images not uploading
- Check Cloudinary API credentials
- Verify file size limits
- Check CORS settings

---

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT | `your_secret_key_123` |
| `TWILIO_ACCOUNT_SID` | Twilio account ID | `ACxxxxxxxxxxxxxxxx` |
| `TWILIO_AUTH_TOKEN` | Twilio auth token | `xxxxxxxxxxxxxxxx` |
| `CLOUDINARY_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `PORT` | Backend server port | `5000` |

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Animesh Singh** - Full Stack Developer
- GitHub: [@CoderAnimeshSingh](https://github.com/CoderAnimeshSingh)
- Portfolio: [Your Portfolio](link)

---

## 🙏 Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking for your own use
- 💬 Reporting issues
- 📢 Sharing with others

---

## 📞 Contact & Support

For questions, issues, or suggestions:
- Open an GitHub Issue
- Contact via email
- Connect on LinkedIn

---

**Happy Wedding Planning! 💍✨**
>>>>>>> e29eb3018f3c90237d6a06766797b76cd89c42c1
