# 🍽️ Zomato / Swiggy Restaurant Listing Web App (MERN)

A modern and responsive **Restaurant Listing Web Application** built using **MERN Stack**.  
This project replicates the core functionality of Zomato/Swiggy restaurant browsing with **search**, **filters**, and **dynamic cards UI**.

---

## 🚀 Features

### 🔥 Frontend (React + Tailwind CSS + Axios)
- Restaurant listing page with premium UI
- Search restaurants by name (live search)
- Filter by:
  - ⭐ Rating
  - 🍕 Category (Veg, Non-Veg, Pizza, Biryani, etc.)
- Attractive restaurant cards including:
  - Image
  - Name
  - Category
  - Rating
  - Price for 2
- Fully responsive UI

### 🛠 Backend (Node.js + Express + MongoDB)
- REST API
- `GET /api/restaurants` → Fetch all restaurants
- `GET /api/restaurants?search=` → Search restaurant by name
- `GET /api/restaurants?category=` → Filter by category
- `GET /api/restaurants?rating=` → Filter by rating
- `POST /api/restaurants` → Add restaurant (for testing using Postman)
- MongoDB Atlas database connection

---

## 💻 Tech Stack

| Technology | Used For |
|-----------|-----------|
| React | Frontend UI |
| Tailwind CSS | Styling |
| Axios | API calls |
| Node.js | Backend server |
| Express.js | API routing |
| MongoDB Atlas | Database |
| Mongoose | ODM |

---


## 📁 Project Structure

zomato-clone/
│
├── Backend
│   ├── config/db.js
│   ├── controllers/restaurantController.js
│   ├── models/restaurantModel.js
│   ├── routes/restaurantRoutes.js
│   └── server.js
│
└── Frontend
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx







### 🔹 Clone Repo
```bash
git clone https://github.com/cvamkt/Zomato_Clone
```


### 🔹 backend setup
```bash
cd Backend
npm init -y
npm install express mongoose cors dotenv nodemon


Add scripts inside **package.json**

"start": "node server.js",
"dev": "nodemon server.js"


Run server

node server.js
```


## 🗄️ Database Setup (MongoDB Atlas)

```bash
# 1. Go to MongoDB Atlas → Create Cluster
# 2. Create Database User (username & password)
# 3. Add IP Access: 0.0.0.0/0 (for access from anywhere)
# 4. Get Connection String
# Example:
mongodb+srv://<username>:<password>@cluster0.mongodb.net/restaurants

# 5. Create .env file inside Backend
MONGO_URI="your-mongodb-connection-url"
PORT=5000
```




### 🔹 Frontend Setup
```bash
npm create vite@latest
npm install
npm run dev
```




## 📸 Screenshot
```bash
![App Screenshot](./assets/Screenshot 2025-11-21 174830)
```


🎯 **Future Enhancements**
- Pagination
- Restaurant details page
- User authentication & reviews

🧑‍💻 **Author**
**Shivam Kumar Thakur**
MERN Stack Developer | Full-Stack Projects & UI Enthusiast
