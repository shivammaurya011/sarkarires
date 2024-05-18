// app.js
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectToDatabase from './configs/db.js';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js'

dotenv.config();

const port = process.env.PORT || 3031;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes);

app.get('/hi',(req, res)=>{
    res.send("Hello")
})

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send('OOPS! 404 page not found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to database and start server
connectToDatabase.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}).catch(err => {
  console.error('Error connecting to database:', err);
});
