import express from 'express'
//import movies from './data/movies.js'
import connectDB from './config/db.js'
import movieRoutes from './routes/movieRoutes.js'
import { notfound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()
import dotenv from 'dotenv'
const port = 5000 || process.env.port

dotenv.config()

connectDB()

app.use('/api/movies', movieRoutes)
app.use(notfound)
app.use(errorHandler)

app.listen(port, () =>
{
    console.log(`Server Running On Port ${port}`)
})