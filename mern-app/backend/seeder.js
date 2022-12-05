import mongoose from "mongoose"
import dotenv from 'dotenv'
import users from './data/users.js'
import movies from './data/movies.js'
import User from './models/userModel'
import Movie from './models/movieModel'
import Order from './models/orderModel'

dotenv.config()

connectDB()

const importData = async () =>
{
    try
    {
        await Order.deleteMany()
        await Movie.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleMovies = movies.map(movie => 
            {
                return {...movie, user: adminUser}
            })

            await Movie.insertMany(sampleMovies)
            console.log('Data Has Been Imported')
            process.exit()
    }
    catch(error)
    {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () =>
{
    try
    {
        await Order.deleteMany()
        await Movie.deleteMany()
        await User.deleteMany()

        console.log("Data Is DESTORYED")
        process.exit()
    }
    catch(error)
    {
        console.error(`${error}`)
        process.exit(1)
    }   
}
if (process.argv[2] === '-d')
{
    destroyData()
}
else
{
    importData
}