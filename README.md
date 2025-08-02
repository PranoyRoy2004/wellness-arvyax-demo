```markdown
# 🌿 Arvyax Wellness – Full-Stack Demo (One-Day Sprint)

A minimal MERN application that lets users register, log in, create, auto-save and publish wellness sessions (yoga, meditation, etc.).


## ⚙️ Tech Stack
- **Frontend**: React (Create-React-App)  
- **Backend**: Node.js + Express  
- **Database**: MongoDB Atlas  
- **Auth**: JWT (jsonwebtoken + bcryptjs)  


## 🚀 Quick Start (Local)

### 1. Prerequisites
- Node.js ≥ 18  
- MongoDB Atlas URI (free cloud cluster)

### 2. Clone the repo
```bash
git clone <your-repo-url> wellness-arvyax
cd wellness-arvyax
```

### 3. Backend
```bash
cd backend
npm install
# copy .env.example → .env and fill your own values
cp .env.example .env
npm run dev        # http://localhost:5000
```

### 4. Frontend (new terminal)
```bash
cd frontend
npm install
npm start          # http://localhost:3000


## 🔐 Environment Variables  
Create `backend/.env` from the provided `.env.example`:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/wellness?retryWrites=true&w=majority
JWT_SECRET=<your_jwt_secret>


## 📁 Project Structure

wellness-arvyax/
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── .env.example
├── frontend/
│   └── src/
└── README.md

## 🔌 API Endpoints

| Method | Endpoint               | Auth | Purpose                     |
|--------|------------------------|------|-----------------------------|
| POST   | /api/auth/register     | ❌   | User registration           |
| POST   | /api/auth/login        | ❌   | Login + JWT                 |
| GET    | /api/sessions          | ❌   | Public published sessions   |
| GET    | /api/sessions/my       | ✅   | Own sessions (draft + pub)  |
| POST   | /api/sessions/save-draft | ✅ | Upsert draft                |
| POST   | /api/sessions/publish  | ✅   | Mark as published           |

## 🧪 Testing the Flow

1. Open http://localhost:3000  
2. Register → Login  
3. Dashboard → **Create Session**  
4. Type in editor – after 5 s of inactivity you’ll see “Auto-saved” toast.  
5. **Publish** → returns to Dashboard where it appears in public feed.

## 🛠️ Useful Scripts

| Command           | Where        | Action                        |
|-------------------|--------------|-------------------------------|
| `npm run dev`     | backend/     | Start backend with nodemon    |
| `npm start`       | frontend/    | Start CRA dev server          |
| `npm run build`   | frontend/    | Build static for deployment   |

## 🌐 Deployment (Optional)

- **Frontend**: push to GitHub → deploy via Vercel  
- **Backend**: push to GitHub → deploy via Render

## ✅ Security Notes
- `.env` is listed in `.gitignore`; never commit real credentials.  
- Only the template `.env.example` is in the repo.
