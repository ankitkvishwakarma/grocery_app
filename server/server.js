import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from "./routes/authRoutes.js";
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB Connected');
  app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));
}).catch(err => console.log(err));
