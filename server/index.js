import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import connectDB from './src/config/db.js'
import apiRoutes from './src/routes/apiRoutes.js'



const PORT = process.env.PORT || 8000

connectDB()
const app = express()

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Running Healthy')
})

app.use('/api/url', apiRoutes)
app.use('/:shortCode', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})