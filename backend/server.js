import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './Routes/contact.js';

dotenv.config();
const app = express();

app.use(express.json());

// ✅ Fix: exact URL without trailing slash
const allowedOrigins = [
  'https://arun-sportfolio.netlify.app',
  'http://localhost:3000'
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio backend running 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
