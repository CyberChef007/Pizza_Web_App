const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/config')
require('colors')
const morgan = require('morgan')


//Config dotenv
dotenv.config()

//Connection MongoDB
connectDB()

//Rest Object
const app = express()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Route
app.use('/api/pizzas', require('./routes/pizzaRoute'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/orders', require('./routes/orderRoute'))
app.get('/',(req,res) => {
    res.send('<h1>Hello from Node Server</h1>')
})

const PORT = process.env.PORT || 8080 
app.listen(PORT, () => {
    console.log(`Server Running On ${process.env.NODE_ENV} mode on port no ${PORT}`.bgMagenta.white);
})