const notfound = app.use((req,res,next) =>
{
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})
const errorHandler = app.use((err, req, res, next) =>
{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json
    ({
        message: err.message,
        stack: process.env.NODE_EN === 'production' ? null : err.stack,

        next()
    })
})
















export {notfound, errorHandler}