import express from 'express';
import userRoutes from './routes/userRoutes';
import cors from 'cors';
import './config/database'; // Ensure this connects to your MongoDB

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);

// Optionally, add a default route for health checks
app.get('/', (req, res) => {
    res.send('API is running');
});

export default app;
