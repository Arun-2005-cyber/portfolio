import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './Routes/contact.js';

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(express.json());

// ✅ Allow frontend to call backend (CORS)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*', // or your React site URL on Render
    methods: ['GET', 'POST'],
  })
);

// ✅ API Routes
app.use('/api/contact', contactRoutes);

// ✅ Default route
app.get('/', (req, res) => {
  res.send('Portfolio Backend is Running 🚀');
});

// ✅ Set PORT
const PORT = process.env.PORT || 5000;

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
