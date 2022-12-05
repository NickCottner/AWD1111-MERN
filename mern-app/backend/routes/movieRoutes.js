import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Movie from '../models/movieModel.js'


app.get("/", asyncHandler(async(req, res) =>
{
    const movies = await Movie.find({})
    res.json(movies)
}))
app.get("/:id", asyncHandler(async(req, res) =>
{
    const movie = await Movie.findById(req.params.id)
    
    if (movie)
    {
        res.json(movie)
    }
    else
    {
        res.status(404)
        throw new Error('Movie Not Found')
    }
}))

export default router