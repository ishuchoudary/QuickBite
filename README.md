# QuickBite - Food Delivery App

QuickBite is a full-stack food delivery app built using the **MERN stack** (MongoDB, Express, React, Node.js). The app allows users to order food from their favorite restaurants, track deliveries, and securely process payments.

## 🚀 Features
- User authentication (Sign up / Login)
- Browse restaurants and menus
- Add items to cart
- Checkout and make payments (via Stripe)
- Track your order status
- Admin panel to manage restaurants, orders, and users

---

## 📦 Tech Stack
- **Frontend**: React, Redux, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js, JWT for Authentication
- **Database**: MongoDB
- **Payment Gateway**: Stripe API

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
Clone the repo to your local machine:
```bash
git clone https://github.com/yourusername/QuickBite.git
cd QuickBite


## 🔐 Environment Variables Setup

To run this project locally, you need to set up environment variables.
ret_here
STRIPE_SECRET_KEY=your_stripe_key_here

Create a `.env` file in the `backend/` directory with the following content:

```env
JWT_SECRET=your_jwt_sec
